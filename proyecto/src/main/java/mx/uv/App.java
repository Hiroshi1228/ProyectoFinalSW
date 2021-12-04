package mx.uv;

import static spark.Spark.*;
import mx.uv.BD.Usuario;
import mx.uv.BD.Operaciones;
import com.google.gson.*;
import java.util.UUID;

public class App 
{
    private static Gson gson = new Gson();
    public static void main( String[] args ) {

        port(getHerokuAssignedPort());

        options("/*", (request, response) -> {

            String accessControlRequestHeaders = request.headers("Access-Control-Request-Headers");
            if (accessControlRequestHeaders != null) {
                response.header("Access-Control-Allow-Headers", accessControlRequestHeaders);
            }

            String accessControlRequestMethod = request.headers("Access-Control-Request-Method");
            if (accessControlRequestMethod != null) {
                response.header("Access-Control-Allow-Methods", accessControlRequestMethod);
            }

            return "OK";
        });
        before((req, res) -> res.header("Access-Control-Allow-Origin", "*"));

        post("/usuario", (req, res) -> {
            String payload = req.body();
            String id = UUID.randomUUID().toString();
            Usuario u = gson.fromJson(payload, Usuario.class);
            u.setID(id);

            Operaciones dao = new Operaciones();
            JsonObject objetoJson = new JsonObject();
            objetoJson.addProperty("status", dao.crearUsuario(u));
            objetoJson.addProperty("id", id);
            return objetoJson;
        });

        post("/usuarioB", (req, res) -> {
            String payload = req.body();
            Usuario u = gson.fromJson(payload, Usuario.class);
            String email = u.getEmail();
            String password = u.getPassword();

            Operaciones dao = new Operaciones();
            JsonObject objetoJson = new JsonObject();
            dao.buscarUsuario(email, password);
            return objetoJson;
        });


    }

    static int getHerokuAssignedPort() {
        ProcessBuilder processBuilder = new ProcessBuilder();
        if (processBuilder.environment().get("PORT") != null) {
            return Integer.parseInt(processBuilder.environment().get("PORT"));
        }
        return 4567; //return default port if heroku-port isn't set (i.e. on localhost)
    }
}
