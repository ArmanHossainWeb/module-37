const producut = [
    {name: "redmi",brand:"xiaomi",price:3000,color:"black"},
    {name: "A50",brand:"samsung",price:4000,color:"gray"},
    {name: "iphone",brand:"apple",price:10000,color:"gold"},
    {name: "A5",brand:"oppo",price:7000,color:"black"}
];

const result = producut.map(produc=> produc.brand)
console.log(result);