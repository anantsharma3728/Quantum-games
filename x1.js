function getGames() {
    const allGames = fetch("http://localhost:8080/getQuantumGames");
    console.log("AllGames", allGames);
    
}


const element = document.getElementById("getgames")
console.log("element", element)
    element.onclick = getGames()