import axios from "axios";

function generateJoke() {
  console.log("JOKE");
  axios.get(
    "https://icanhazdadjoke.com/", 
    {headers: {Accept: "application/json"}}
  ).then(res => {
    document.getElementById("joke").innerHTML = res.data.joke
  })
}

console.log("NICE")

export default generateJoke