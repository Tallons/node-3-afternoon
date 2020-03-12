
require("dotenv").config();
const express = require("express"),
    massive = require("massive"),
    {SERVER_PORT, CONNECTION_STRING} = process.env,
    ctrl = require("products_controller")
    app = express();

app.use(express.json());

massive({
  connectionString: CONNECTION_STRING,
  ssl: {rejectUnauthorized: false}
}).then(db => {
  app.set("db",db)
  console.log("DB connected");
})
.catch(err => console.log(err));


app.get("/api/products", ctrl.getAll);
app.get("/api/products/:id", ctrl.getOne);
app.post("/api/products", ctrl.create);
app.put("/api/products/:id", ctrl.update);
app.delete("/api/products/:id",ctrl.delete);


app.listen(SERVER_PORT, ()=> console.log("Server running on " + SERVER_PORT));