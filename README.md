# Lookup01
Usando lookup con dos colecciones.
### El contenido se reparte en:
- La carpeta **src** con todo el código, las *colecciones* y las *consultas*:
  - ventas.js > base de datos con los clientes,ventas y proveedores de la empresa.
  - consultas.js > consultas por método aggregate usando lookup
- En estos se usan los siguientes operadores:
  ```
  $match
  $group
  $project
  $sort
  $addToSet
  $lookup
  $month/year
  ...
  ```
