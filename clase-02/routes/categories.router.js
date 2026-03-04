import { Router } from "express";

const router = Router();

const categories = [
  { id: 1, name: "Electro" },
  { id: 2, name: "mecanic" },
];


router.get("/", (req, res) => {
  res.json(categories);
});

router.get("/:id", (req, res) => {
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

router.post("/", (req, res) => {
   

    
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


export default router;