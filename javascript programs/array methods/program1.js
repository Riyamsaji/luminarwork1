var products = [
    { code: 1000, name: "garlic", mrp: 120, aval_qty: 10 },
    { code: 1001, name: "chilly", mrp: 80, aval_qty: 5 },
    { code: 1002, name: "tomatto", mrp: 35, aval_qty: 20 },
    { code: 1003, name: "onion", mrp: 40, aval_qty: 37 },
    { code: 1004, name: "potatto", mrp: 45, aval_qty: 40 },
    { code: 1005, name: "banana", mrp: 55, aval_qty: 60 },
    { code: 1006, name: "brinjal", mrp: 43, aval_qty: 2 },
    { code: 1007, name: "beetroot", mrp: 38, aval_qty: 5 },
    { code: 1008, name: "carrot", mrp: 60, aval_qty: 0 },
    { code: 1009, name: "bittergod", mrp: 50, aval_qty: 5 },

]

//searching for chilly
var search_chilly = products.find(item => item.name == "chilly")
console.log(search_chilly);
//sort the names of products
var srted_names = products.map(item => item.name).sort();
console.log(srted_names);

//costly product based on reduce method
var costly_product = products.reduce((item1, item2) => item1.mrp > item2.mrp ? item1 : item2)
console.log(costly_product);

// print lowcost product
var low_cost_product = products.reduce((item1, item2) => item1.mrp > item2.mrp ? item2 : item1);
console.log(low_cost_product);
//print all product name in this shop
var product_name = products.map(item => item.name)
console.log(product_name);

//or
products.map(item => item.name).forEach(item => console.log(item.name))



//productname in uppercse
var uppercase = products.map(item => item.name.toUpperCase())
console.log(uppercase);


//or
var uppercase = product_name.map(name => name.toUpperCase())
console.log(uppercase);


//print all products whose price less than 50
var lessthan_50 = products.filter(item => item.mrp < 50)
console.log(lessthan_50);


//print all products available in range of 30 to 50
var productswithin_range = products.filter(item => item.mrp >= 30 & item.mrp <= 50)
console.log(productswithin_range);

//print out of stock products
var outof_stock = products.filter(item => item.aval_qty == 0)
console.log(outof_stock);

//sort method 
//sorting based on available quantity in descending order
var srted_qty = products.sort((item1, item2) => item1.aval_qty - item2.aval_qty)
console.log(srted_qty);
//find method
//searching for potatto
var srch = products.find(item => item.name == "potatto")
console.log(srch);

//some method
//is any product available under 30rs
var is_available = products.some(item => item.mrp <= 30)
console.log(is_available);

//sort the aval_qty in descending order and print the aval_qty>0

products.sort((item1, item2) => item2.aval_qty - item1.aval_qty).forEach(item => {
    if (item. aval_qty > 0){
    console.log(item);
}
})




//var arr=[4,3,2,7,8,9]
//<5==.>num-1
var arr = [4, 3, 2, 7, 8, 9]
var op = arr.map(num => num > 5 ? num + 1 : num - 1)
console.log(op);


