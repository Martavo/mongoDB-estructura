optica> show dbs
Restaurantes  640.00 KiB
admin          40.00 KiB
config         96.00 KiB
local          72.00 KiB
mystore        48.00 KiB
webstore       40.00 KiB
optica> use optica
already on db optica
optica> db.createCollection("proveedor")
{ ok: 1 }
optica>  db.proveedor.insertOne({
...    "nombre": 'TuVes',
...    "dirección": 'Topete, 6 08221 Terrassa España',
...    "teléfono": 688123637,
...    "fax": 9936588489,
...    "NIF": '56345879K'
...  })
{
  acknowledged: true,
  insertedId: ObjectId('6593fe2b9c0a5ea4390fcbfe')
}
optica>  db.proveedor.insertOne({
...    "nombre": 'Veo-Bien',
...    "dirección": 'Salmeron, 16 08221 Terrassa España',
...    "teléfono": 688198737,
...    "fax": 9936588123,
...    "NIF": '56345899M'
...  })
{
  acknowledged: true,
  insertedId: ObjectId('6593fe509c0a5ea4390fcbff')
}
optica> show collections
proveedor
optica> db.proveedor.find()
[
  {
    _id: ObjectId('6593fe2b9c0a5ea4390fcbfe'),
    nombre: 'TuVes',
    'dirección': 'Topete, 6 08221 Terrassa España',
    'teléfono': 688123637,
    fax: 9936588489,
    NIF: '56345879K'
  },
  {
    _id: ObjectId('6593fe509c0a5ea4390fcbff'),
    nombre: 'Veo-Bien',
    'dirección': 'Salmeron, 16 08221 Terrassa España',
    'teléfono': 688198737,
    fax: 9936588123,
    NIF: '56345899M'
  }
]
optica> db.createCollection("gafas")
{ ok: 1 }
optica> db.proveedor.findOne({ "nombre": 'Veo-Bien' });
{
  _id: ObjectId('6593fe509c0a5ea4390fcbff'),
  nombre: 'Veo-Bien',
  'dirección': 'Salmeron, 16 08221 Terrassa España',
  'teléfono': 688198737,
  fax: 9936588123,
  NIF: '56345899M'
}
optica> db.gafas.insertOne({
...   "marca": "Ray-ban",
...   "montura": "Pasta",
...   "proveedor": {
...     nombre: proveedor.nombre,
...     dirección: proveedor.dirección,
...     teléfono: proveedor.teléfono,
...     fax: proveedor.fax,
...     NIF: proveedor.NIF
...   },
...   precio: 300
... });
ReferenceError: proveedor is not defined
optica> var proveedor = db.proveedor.findOne({ "nombre": 'Veo-Bien' });

optica> db.gafas.insertOne({
...   "marca": "Ray-ban",
...   "montura": "Pasta",
...   "proveedor": {
...     nombre: proveedor.nombre,
...     dirección: proveedor.dirección,
...     teléfono: proveedor.teléfono,
...     fax: proveedor.fax,
...     NIF: proveedor.NIF
...   },
...   precio: 300
... });
{
  acknowledged: true,
  insertedId: ObjectId('6593ffb59c0a5ea4390fcc00')
}
optica> db.gafas.find()
[
  {
    _id: ObjectId('6593ffb59c0a5ea4390fcc00'),
    marca: 'Ray-ban',
    montura: 'Pasta',
    proveedor: {
      nombre: 'Veo-Bien',
      'dirección': 'Salmeron, 16 08221 Terrassa España',
      'teléfono': 688198737,
      fax: 9936588123,
      NIF: '56345899M'
    },
    precio: 300
  }
]
optica> var tuvesProveedor = db.proveedor.findOne({ "nombre": 'TuVes' });

optica> db.gafas.insertOne({
...   "marca": "Gucci",
...   "montura": "De pasta",
...   "proveedor": {
...     nombre: tuvesProveedor.nombre,
...     dirección: tuvesProveedor.dirección,
...     teléfono: tuvesProveedor.teléfono,
...     fax: tuvesProveedor.fax,
...     NIF: tuvesProveedor.NIF
...   },
...   precio: 400
... });
{
  acknowledged: true,
  insertedId: ObjectId('6594004f9c0a5ea4390fcc01')
}
optica> db.gafas.find()
[
  {
    _id: ObjectId('6593ffb59c0a5ea4390fcc00'),
    marca: 'Ray-ban',
    montura: 'Pasta',
    proveedor: {
      nombre: 'Veo-Bien',
      'dirección': 'Salmeron, 16 08221 Terrassa España',
      'teléfono': 688198737,
      fax: 9936588123,
      NIF: '56345899M'
    },
    precio: 300
  },
  {
    _id: ObjectId('6594004f9c0a5ea4390fcc01'),
    marca: 'Gucci',
    montura: 'De pasta',
    proveedor: {
      nombre: 'TuVes',
      'dirección': 'Topete, 6 08221 Terrassa España',
      'teléfono': 688123637,
      fax: 9936588489,
      NIF: '56345879K'
    },
    precio: 400
  }
]
optica> show collections
gafas
proveedor
optica> db.createCollection("cliente")
{ ok: 1 }
optica> db.createCollection("compradas_por")
{ ok: 1 }
optica> db.createCollection("datos_personales")
{ ok: 1 }
optica> db.createCollection("compra")
{ ok: 1 }
optica> show collections
cliente
compra
compradas_por
datos_personales
gafas
proveedor
optica> db.cliente.insertOne({
...   "nombre": "Juan Pérez",
...   "recomendado_por": null
... });
{
  acknowledged: true,
  insertedId: ObjectId('6594169b9c0a5ea4390fcc02')
}
optica> var clienteId = db.cliente.findOne({ "nombre": "Juan Pérez" })._id;

optica> 

optica> db.datos_personales.insertOne({
...   "cliente_id": clienteId,
...   "direccion": 'Bilbao, 83 08224 Terrassa España',
...   "email": 'paco@gmail.com',
...   "telefono": '688735644',
...   "fecha_registro": '2023-12-30'
... });
{
  acknowledged: true,
  insertedId: ObjectId('659416a89c0a5ea4390fcc03')
}
optica> db.compra.insertOne({
...   "cliente_id": clienteId,
...   "marca": 'Ray-ban',
...   'graduacion_izq': '-2.00/-1.50',
...   'graduacion_drch': '-1.75/-1.25',
...   "montura": 'Pasta',
...   "color_crital_izq": 'Azul',
...   "color_cristal_drch": 'Verde',
...   "precio": 300
... });
{
  acknowledged: true,
  insertedId: ObjectId('659416ad9c0a5ea4390fcc04')
}
optica> db.datos_personales.find({ "cliente_id": clienteId });
[
  {
    _id: ObjectId('659416a89c0a5ea4390fcc03'),
    cliente_id: ObjectId('6594169b9c0a5ea4390fcc02'),
    direccion: 'Bilbao, 83 08224 Terrassa España',
    email: 'paco@gmail.com',
    telefono: '688735644',
    fecha_registro: '2023-12-30'
  }
]
optica> db.compra.find({ "cliente_id": clienteId });
[
  {
    _id: ObjectId('659416ad9c0a5ea4390fcc04'),
    cliente_id: ObjectId('6594169b9c0a5ea4390fcc02'),
    marca: 'Ray-ban',
    graduacion_izq: '-2.00/-1.50',
    graduacion_drch: '-1.75/-1.25',
    montura: 'Pasta',
    color_crital_izq: 'Azul',
    color_cristal_drch: 'Verde',
    precio: 300
  }
]
optica> db.cliente.insertOne({
...   "nombre": "Maria Orta",
...   "recomendado_por": "Juan Pérez"
... });
{
  acknowledged: true,
  insertedId: ObjectId('659417739c0a5ea4390fcc05')
}

optica> var mariaId = db.cliente.findOne({ "nombre": "Maria Orta" })._id;

optica> db.datos_personales.insertOne({
...   "cliente_id": mariaId,
...   "direccion": 'Plaça Vella, 5 08221 Terrassa España',
...   "email": 'maria@gmail.com',
...   "telefono": '688735111',
...   "fecha_registro": '2023-11-04'
... });
{
  acknowledged: true,
  insertedId: ObjectId('659417d39c0a5ea4390fcc06')
}
optica> db.compra.insertOne({
...   "cliente_id": mariaId,
...   "marca": 'Gucci',
...   'graduacion_izq': '-1.00/-0.50',
...   'graduacion_drch': '-1.55/-1.25',
...   "montura": 'Pasta',
...   "color_crital_izq": 'Negro',
...   "color_cristal_drch": 'Negro',
...   "precio": 400
... });
{
  acknowledged: true,
  insertedId: ObjectId('659417d89c0a5ea4390fcc07')
}
optica> show collections
cliente
compra
compradas_por
datos_personales
gafas
proveedor

optica> db.cliente.find()
[
  {
    _id: ObjectId('6594169b9c0a5ea4390fcc02'),
    nombre: 'Juan Pérez',
    recomendado_por: null
  },
  {
    _id: ObjectId('659417739c0a5ea4390fcc05'),
    nombre: 'Maria Orta',
    recomendado_por: 'Juan Pérez'
  }
]

optica> db.datos_personales.find()
[
  {
    _id: ObjectId('659416a89c0a5ea4390fcc03'),
    cliente_id: ObjectId('6594169b9c0a5ea4390fcc02'),
    direccion: 'Bilbao, 83 08224 Terrassa España',
    email: 'paco@gmail.com',
    telefono: '688735644',
    fecha_registro: '2023-12-30'
  },
  {
    _id: ObjectId('659417d39c0a5ea4390fcc06'),
    cliente_id: ObjectId('659417739c0a5ea4390fcc05'),
    direccion: 'Plaça Vella, 5 08221 Terrassa España',
    email: 'maria@gmail.com',
    telefono: '688735111',
    fecha_registro: '2023-11-04'
  }
]
optica> db.datos_personales.find({ "cliente_id": clienteId });
[
  {
    _id: ObjectId('659416a89c0a5ea4390fcc03'),
    cliente_id: ObjectId('6594169b9c0a5ea4390fcc02'),
    direccion: 'Bilbao, 83 08224 Terrassa España',
    email: 'paco@gmail.com',
    telefono: '688735644',
    fecha_registro: '2023-12-30'
  }
]
optica> db.compra.find({ "cliente_id": clienteId });
[
  {
    _id: ObjectId('659416ad9c0a5ea4390fcc04'),
    cliente_id: ObjectId('6594169b9c0a5ea4390fcc02'),
    marca: 'Ray-ban',
    graduacion_izq: '-2.00/-1.50',
    graduacion_drch: '-1.75/-1.25',
    montura: 'Pasta',
    color_crital_izq: 'Azul',
    color_cristal_drch: 'Verde',
    precio: 300
  }
]

optica>  db.gafas.find()
[
  {
    _id: ObjectId('6593ffb59c0a5ea4390fcc00'),
    marca: 'Ray-ban',
    montura: 'Pasta',
    proveedor: {
      nombre: 'Veo-Bien',
      'dirección': 'Salmeron, 16 08221 Terrassa España',
      'teléfono': 688198737,
      fax: 9936588123,
      NIF: '56345899M'
    },
    precio: 300
  },
  {
    _id: ObjectId('6594004f9c0a5ea4390fcc01'),
    marca: 'Gucci',
    montura: 'De pasta',
    proveedor: {
      nombre: 'TuVes',
      'dirección': 'Topete, 6 08221 Terrassa España',
      'teléfono': 688123637,
      fax: 9936588489,
      NIF: '56345879K'
    },
    precio: 400
  }
]
