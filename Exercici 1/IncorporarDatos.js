
Current Mongosh Log ID:	658ff4e03f7d5af234990617
Connecting to:		mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.1
(node:23585) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
Using MongoDB:		7.0.2
Using Mongosh:		2.1.1

For mongosh info see: https://docs.mongodb.com/mongodb-shell/


test> use Optica
switched to db Optica
Optica> show dbs
Restaurantes  640.00 KiB
admin          40.00 KiB
config         60.00 KiB
local          72.00 KiB
mystore        48.00 KiB
webstore       40.00 KiB
Optica> db.createCollection("Cliente")
{ ok: 1 }

Optica> db.Cliente.insertOne([
...     {
...         "id": 1,
...         "nombre": "Juan Pérez",
...         "dirección": "Calle Mayor, 123 08224 Terrassa España",
...         "email": "juan.perez@gmail.com",
...         "teléfono": "666123456",
...         "id_compra": 1,
...         "fecha_registro": "2023-12-30",
...         "recomendado_por": null 
...     }])
{
  acknowledged: true,
  insertedId: ObjectId('658ff66a3f7d5af234990618')
}
Optica> db.Cliente.insertOne([
...     {
...         "id": 2,
...         "nombre": "María García",
...         "dirección": "Avenida del Río, 456 08221 Terrassa España",
...         "email": "maria.garcia@gmail.com",
...         "teléfono": "999456789",
...         "id_compra": 2,
...         "fecha_registro": "2023-12-20",
...         "recomendado_por": "Juan Pérez"
...     }])
{
  acknowledged: true,
  insertedId: ObjectId('658ff6983f7d5af234990619')
}
Optica> db.createCollection(“compras")
Uncaught:
SyntaxError: Unexpected character '“'. (1:20)

> 1 | db.createCollection(“compras")
    |                     ^
  2 |

Optica> db.createCollection("compras")
{ ok: 1 }
Optica> db.compras.insertOne([
...     {
...         "id": 1,
...         "marca": "Ray-Ban",
...         "graduación_izq": "-1.00/-0.50",
...         "graduación_drch": "-0.75/-0.25",
...         "montura": "Metálica",
...         "color_crital_izq": "Marrón",
...         "color_cristal_drch": "Gris",
...         "precio": 150
...     }])
{
  acknowledged: true,
  insertedId: ObjectId('658ff73f3f7d5af23499061a')
}
Optica> db.compras.insertOne([
...     {
...         "id": 2,
...         "marca": "Oakley",
...         "graduación_izq": "-2.00/-1.50",
...         "graduación_drch": "-1.75/-1.25",
...         "montura": "De pasta",
...         "color_crital_izq": "Azul",
...         "color_cristal_drch": "Verde",
...         "precio": 200
...     }
... ])
{
  acknowledged: true,
  insertedId: ObjectId('658ff7553f7d5af23499061b')
}

Optica> db.Cliente.find()
[
  {
    '0': {
      id: 1,
      nombre: 'Juan Pérez',
      'dirección': 'Calle Mayor, 123 08224 Terrassa España',
      email: 'juan.perez@gmail.com',
      'teléfono': '666123456',
      id_compra: 1,
      fecha_registro: '2023-12-30',
      recomendado_por: null
    },
    _id: ObjectId('658ff66a3f7d5af234990618')
  },
  {
    '0': {
      id: 2,
      nombre: 'María García',
      'dirección': 'Avenida del Río, 456 08221 Terrassa España',
      email: 'maria.garcia@gmail.com',
      'teléfono': '999456789',
      id_compra: 2,
      fecha_registro: '2023-12-20',
      recomendado_por: 'Juan Pérez'
    },
    _id: ObjectId('658ff6983f7d5af234990619')
  }
]

Optica> db.compras.find()
[
  {
    '0': {
      id: 1,
      marca: 'Ray-Ban',
      'graduación_izq': '-1.00/-0.50',
      'graduación_drch': '-0.75/-0.25',
      montura: 'Metálica',
      color_crital_izq: 'Marrón',
      color_cristal_drch: 'Gris',
      precio: 150
    },
    _id: ObjectId('658ff73f3f7d5af23499061a')
  },
  {
    '0': {
      id: 2,
      marca: 'Oakley',
      'graduación_izq': '-2.00/-1.50',
      'graduación_drch': '-1.75/-1.25',
      montura: 'De pasta',
      color_crital_izq: 'Azul',
      color_cristal_drch: 'Verde',
      precio: 200
    },
    _id: ObjectId('658ff7553f7d5af23499061b')
  }
]
Optica> db.compras.find({
...   "cliente.id": 1
... })

