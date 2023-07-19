import generateJoke from "./generateJoke";
import './styles/main.scss';
import spinner from "./assets/spinner.svg";

document.getElementById("overlay").src = spinner

document.getElementById("jokeBtn").addEventListener("click", generateJoke)

generateJoke()
