


document.getElementById("searchBtn").addEventListener("click",()=>{
let value = document.getElementById("searchBox").value;

if(value.trim()===""){
alert("Please enter something to search");
}
else{
alert("Searching for: " + value);
}
});



