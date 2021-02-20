db.clientsales.drop()
db.clientsales.insertMany([
    {
    idClient: "001",
    client:
        {
        name:"Pedro",
        city:"Murcia", 
        company: true, 
        contact: 665932102
        },
    sale: 
        {
        units: 3,
        date: new Date("2019-12-27"),
        price: 155
        }
    },
    {idClient: "002", client: {name:"Carlos",city:"Valencia", company: false, contact: 673192019}, sale: {units: 15, date: new Date("2019-12-23"), price: 750}},
    {idClient: "003", client: {name:"Guillermo",city:"Badajoz", company: false, contact: 674839102}, sale: {units: 2, date: new Date("2020-09-12"), price: 220}},
    {idClient: "004", client: {name:"Ana",city:"Sevilla", company: false, contact: 612039422}, sale: {units: 3, date: new Date("2020-06-17"), price: 340}},
    {idClient: "005", client: {name:"Fran",city:"Tarragona", company: true, contact: 632912484}, sale: {units: 4, date: new Date("2020-01-08"), price: 360}},
    {idClient: "006", client: {name:"David",city:"Murcia", company: false, contact: 601928019}, sale: {units: 1, date: new Date("2019-05-11"), price: 115}},
    {idClient: "007", client: {name:"Victor",city:"Madrid", company: false, contact: 654545423}, sale: {units: 2, date: new Date("2020-10-02"), price: 140}},
    {idClient: "008", client: {name:"Manuel",city:"Sevilla", company: false, contact: 689320134}, sale: {units: 1, date: new Date("2019-09-26"), price: 85}},
    {idClient: "009", client: {name:"Ignacio",city:"Madrid", company: false, contact: 671021975}, sale: {units: 3, date: new Date("2020-09-11"), price: 230}},
    {idClient: "010", client: {name:"Alejandro",city:"Cádiz", company: true, contact: 607182937}, sale: {units: 30, date: new Date("2019-12-21"), price: 1060}},
 ])

 db.mobiles.drop()
 db.mobiles.insertMany([
    {
    _id: "001",
    idSupplier: ["MAT","DIS"],
    brand: "Redmi",
    model: "Note 8",
    unit_price: 75
       
    },
    {_id: "002", idSupplier: ["STB","PPC"], brand: "Samsung",model: "Galaxy S20 FE", unit_price: 219},
    {_id: "003", idSupplier: ["DIS","PPC"], brand: "Redmi",model: "Note 9 Pro", unit_price: 82},
    {_id: "004", idSupplier: ["DIS","PPC"], brand: "Oneplus",model: "Nord", unit_price: 146},
    {_id: "005", idSupplier: ["MAT","DIS"], brand: "Oppo",model: "Reno 4 Z 5G", unit_price: 120},
    {_id: "006", idSupplier: ["STB","PPC"], brand: "Realme",model: "C3", unit_price: 90},
    {_id: "007", idSupplier: ["DIS","PPC"], brand: "Realme",model: "7i", unit_price: 59},
    {_id: "008", idSupplier: ["STB","MAT"], brand: "Alcatel",model: "1", unit_price: 28},
    {_id: "009", idSupplier: ["MAT","DIS"], brand: "Realme",model: "7 Pro", unit_price: 56},
    {_id: "010", idSupplier: ["MAT","STB"], brand: "Apple",model: "iPhone 11", unit_price: 328},
 ])

db.supplier.drop()
db.supplier.insertMany([
    {_id:"DIS", name:"DISAR", country:"Germany", postal_code:"10178"},
    {_id:"MAT", name:"MATIK", country:"France", postal_code:"54238" },
    {_id:"STB", name:"STB Smartphones", country:"Portugal", postal_code:"10597"},
    {_id:"PPC", name:"Punto PC", country:"Spain", postal_code:"11152"}
])