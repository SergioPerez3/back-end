# Api Tienda

## Base URL

http://localhost:3000

## Endpoints

## GET / ping

Verifica que la API esta funcionando.

#### Response 200

```json
{
    "message" : "pong"
}
```

### GET / products

Devuelve la lista de productos.

### Response 200

```json 
[
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Mouse", price: 20 },
]
```

### GET / products/:id

Devuelve un producto por id.

### Response 200

```json 
[
    { id: 1, name: "Electro"},
    { id:2, name: "mecanic"},
]
```

#### Response 404

```json
{ message: "Producto no encontrado" }
```



### POST /products

Crea un nuevo producto.

#### Body (Json)

```json
{ name: "Laptop", price: 1200 }

```

#### Response 201
```json
{
    "id": 1772569492198,
    "name": "reloj",
    "price": 1100
  }
```

#### Response 422

```json
{error: }
```