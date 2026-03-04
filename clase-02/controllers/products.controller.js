const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Mouse", price: 20 },
];

export const getProducts = (req, res) => {
  res.json(products);
};

export const getProductById = (req, res) => {
  const id = parseInt(req.params.id);
  // console.log(typeof req.params.id, typeof id, isNaN(id));

  if (isNaN(id)) {
    return res.status(400).json({ error: "invalid id" });
  }

  const product = products.find((p) => p.id == id);

  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  res.json(product);
};

export const createProduct = (req, res) => {
  // console.log(req.body);
  if (
    req.body.stock == undefined ||
    isNaN(req.body.stock) ||
    req.body.stock < 0
  ) {
    return res.status(422).json({ error: "Invalid stock" });
  }
  // console.log(Date.now())
  const newProduct = {
    id: Date.now(),
    name: req.body.name,
    price: req.body.price,
    stock: req.body.stock,
  };
  products.push(newProduct);

  res.status(201).json(newProduct);
};
