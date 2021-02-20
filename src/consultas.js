//RELACION VENTAS CON PRODUCTOS 1:N.

// Muestra de mayor a menor las marcas más vendidas y el mes en el que se producieron.
db.clientsales.aggregate([
    {
        $lookup:
            {
                from: "mobiles",
                localField: "idClient",
                foreignField: "_id",
                as: "brand"
            }
        },
        {
        $group:
        {
            _id:
            {
                month: { $month: "$sale.date" },
                year: { $year: "$sale.date" },
                brand: "$brand.brand"
            },
            sales:
            {
                $addToSet: "$sale.units"
            }
        }
        },
        {
            $project:
            {
                brand: "$brand.brand",
                sales: 1
            }
        },
    { $sort: { sales: -1 } }
])

/*
{ "_id" : { "month" : 12, "year" : 2019, "brand" : [ "Apple" ] }, "sales" : [ 30 ] }
{ "_id" : { "month" : 12, "year" : 2019, "brand" : [ "Samsung" ] }, "sales" : [ 15 ] }
{ "_id" : { "month" : 1, "year" : 2020, "brand" : [ "Oppo" ] }, "sales" : [ 4 ] }
{ "_id" : { "month" : 9, "year" : 2020, "brand" : [ "Realme" ] }, "sales" : [ 3 ] }
{ "_id" : { "month" : 6, "year" : 2020, "brand" : [ "Oneplus" ] }, "sales" : [ 3 ] }
{ "_id" : { "month" : 12, "year" : 2019, "brand" : [ "Redmi" ] }, "sales" : [ 3 ] }
{ "_id" : { "month" : 9, "year" : 2020, "brand" : [ "Redmi" ] }, "sales" : [ 2 ] }
{ "_id" : { "month" : 10, "year" : 2020, "brand" : [ "Realme" ] }, "sales" : [ 2 ] }
{ "_id" : { "month" : 9, "year" : 2019, "brand" : [ "Alcatel" ] }, "sales" : [ 1 ] }
{ "_id" : { "month" : 5, "year" : 2019, "brand" : [ "Realme" ] }, "sales" : [ 1 ] }
*/


// Beneficios totales de cada compañía.
db.clientsales.aggregate([
    {
        $lookup:
        {
            from: "mobiles",
            localField: "idClient",
            foreignField: "_id",
            as: "brand"
        }
    },
    {
        $group: {
            _id: "$brand.brand",
            total:
            {
                $sum:
                {
                    $multiply:
                        ["$sale.price", "$sale.units"]
                }
            }
        }
    },
    {
        $project:
        {
            _id: 0,
            brand: "$_id",
            total: 1
        }
    }
])

/*
{ "_id" : "Oneplus", "total" : 1020 }
{ "_id" : "Oppo", "total" : 1440 }
{ "_id" : "Redmi", "total" : 905 }
{ "_id" : "Alcatel", "total" : 85 }
{ "_id" : "Apple", "total" : 31800 }
{ "_id" : "Realme", "total" : 1085 }
{ "_id" : "Samsung", "total" : 11250 }
*/

// RELACION PROVEEDORES Y PRODUCTOS N:M 

// Marcas que proveen, DIS ("DISAR") y PPC ("Punto PC").

db.mobiles.aggregate([
    {
        $lookup:
        {
            from: "supplier",
            localField: "idSupplier",
            foreignField: "_id",
            as: "supplier"
        }
    },
    {
        $match: {
            "idSupplier": ["DIS", "PPC"]
        }
    },
    {
        $project:
        {
            _id: 0,
            brand: 1,
            supplier: "$idSupplier"
        }
    },
])

/*
{ "brand" : "Redmi", "supplier" : [ "DIS", "PPC" ] }
{ "brand" : "Oneplus", "supplier" : [ "DIS", "PPC" ] }
{ "brand" : "Realme", "supplier" : [ "DIS", "PPC" ] }
*/