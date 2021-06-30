var mobile = {
    code: 1000,
    brand_name: "samsung",
    price: 30000,
    processor: "snapdragon"
}
//here mobile is a object

//1.print brandname?
//method1 
console.log(mobile["brand_name"]);
//method2
console.log(mobile.brand_name);

//2.check offer exist if not add offer 20%

if (!("offer" in mobile)) {
    mobile.offer = "20 %"
}
console.log(mobile)

//3.reduce price by 2000
mobile.price-=2000;
console.log(mobile);