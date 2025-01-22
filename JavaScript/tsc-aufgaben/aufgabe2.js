// Verwendung
var product1 = {
    id: "Nr.1",
    name: "Pommes",
    price: 5
};
var product2 = {
    id: "Nr.2",
    name: "Pommes mit Mayo",
    price: 7,
    category: "Snacks", // Dynamische Eigenschaft - zusätzlich - typ string
    stock: 20 // Dynamische Eigenschaft - zusätzlich - typ number
};
//Funktion für Discount erstellen
function calculateDiscountPrice(price, discount) {
    return price - (price * discount) / 100;
}
//Array erstellen
var products = [product1, product2];
//Funktion für Produkte im Array
function listProducts(products) {
    products.forEach(function (product) {
        console.log("Produkt:", products);
    });
}
// function getProductInfo(input:string): Product | number | undefined {
//   const product = products.find(
//     p => p.id === input || p.name === input
//   ); 
//   if (!product) {
//     return undefined; // Produkt nicht gefunden
//   }
//   if(product.id === input) {
//     return product;
//   }
//   if(product.name === input) {
//     return product.price;
//   }
//   return undefined; //falls nichts zutrifft
// }
console.log('Produkte ohne Rabatt:');
console.log(product1);
console.log(product2);
console.log("Produkte mit Rabatt:");
console.log("Pommes mit 10% Rabatt: ".concat(calculateDiscountPrice(product1.price, 10), "\u20AC"));
console.log("Pommes mit Mayo mit 15% Rabatt: ".concat(calculateDiscountPrice(product2.price, 15), "\u20AC"));
console.log("\nProdukte im Bestand:");
listProducts(products);
// console.log("\nProduktinformationen:");
// console.log("Suche nach ID 'Nr.1':", getProductInfo("Nr.1"));
// console.log("Suche nach Name 'Pommes mit Mayo':", getProductInfo("Pommes mit Mayo"));
// console.log("Suche nach unbekanntem Produkt:", getProductInfo("Burger"));
