const person = {
    name : "hero alom",
    age: 40,
    friends: ["bd","cc","rahim"],
    family:{
        fatherName : "sahid ullah",
        motherName: "jorina"
    }
}



const keys = Object.keys(person);
// console.log(keys);



const values = Object.values(person)
// console.log(values);

const JsonData = JSON.stringify(person);
const planeData = JSON.parse(JsonData);
// console.log(planeData);




fetch("https://jsonplaceholder.typicode.com/albums")
.then(res => res.json())
// .then(data => console.log(data))





const producuts = [
    {name: "redmi",brand:"xiaomi",price:3000,color:"black"},
    {name: "A50",brand:"samsung",price:4000,color:"gray"},
    {name: "iphone",brand:"apple",price:10000,color:"gold"},
    {name: "A5",brand:"oppo",price:7000,color:"black"}
];

const newData = {
    name: "walton",
    brand:"walton",
    price: 3000,
    color: "gray"
}

// const newArray = [...producut,newData];
// console.log(newArray);


const remainingProducts = producuts.filter(p=>p.brand !== "xiaomi")
console.log(remainingProducts);

const newArray2 = [...remainingProducts,newData];
console.log(newArray2);