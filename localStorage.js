const handleAddToStorage=()=>{
    const name = document.getElementById("name").value;
    const roll = document.getElementById("roll").value;

    const data = {name,roll}
    localStorage.setItem("information",JSON.stringify(data))

}
const objectData = localStorage.getItem("information")
console.log(JSON.parse(objectData));



const handelClear=()=>{
    localStorage.clear()
}