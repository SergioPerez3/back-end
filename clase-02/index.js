// import * as http from "node:http";

// const server = http.createServer((request, response) => {
//   if (request.url == "/ping") {
//     response.statusCode = 200;
//     response.setHeader("Content-Type", "application/json");
//     response.end(JSON.stringify({ message: "pong" }));
//     return;
//   }

//   response.statusCode = 404;
//   response.setHeader("Content-Type", "application/json");
//   response.end(JSON.stringify({ error: "Not Found" }));
// });

// server.listen(3000, () => console.log("http://localhost:3000"));

// ------------ con express

import express from "express";

import pingRouter from "./routes/ping.router.js";
import productsRouter from "./routes/products.router.js"




const app = express();

app.use(express.json());

app.use(pingRouter);
app.use("/products", productsRouter);
// app.use(categoriesRouter);



const categories = [
  { id: 1, name: "Electro" },
  { id: 2, name: "mecanic" },
];







app.get("/categories", (req, res) => {
  res.json(categories);
});

app.get("/categories/:id", (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ error: "Invalid category" });
  }

  const category = categories.find((cat) => cat.id == id);
  if (!category) {
    return res.status(404).json({ error: "category not found" });
  }
  res.json(category);
});

app.post("/categories", (req, res) => {
   

    
    if (!req.body.name){
        return res.status(422).json({ error: "name is required" });
    }
// ---------
    // if (req.body.name == undefined){
    //     return res.status(422).json({ error: "name is required" });
    // }
    // if (req.body.name == ""){
    //     return res.status(422).json({ error: "name is required" });
    // }
// --------
    //   if (req.body.name == undefined || req.body.name == ""){
    //     return res.status(422).json({ error: "name is required" });
    // }

    const newCategory = {
        id:Date.now(),
        name: req.body.name,
        price: req.body.price,
    };
    categories.push(newCategory);

    res.status(201).json(newCategory);
});






app.listen(3000, () => console.log("http//localhost:3000"));
