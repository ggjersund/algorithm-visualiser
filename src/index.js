import 'bootstrap';
import './static/css/spreadsheet.scss';
import { PROBLEMS_AND_ALGORITHMS } from './menu';


function listProblems(selectProblem) {
  for (var i = 0; i < PROBLEMS_AND_ALGORITHMS.length; i++) {
    var option = document.createElement("option");
    option.text = PROBLEMS_AND_ALGORITHMS[i].type;
    option.value = i;
    selectProblem.appendChild(option);
  }
}

function listAlgorithms(algorithms, selectAlgorithm) {
  for (var i = 0; i < algorithms.length; i++) {
    var option = document.createElement("option");
    option.text = algorithms[i].name;
    option.value = i;
    selectAlgorithm.appendChild(option);
  }
}

function onProblemSelect(selectProblem, selectAlgorithm) {

  if (selectProblem.selectedIndex !== -1 && selectProblem.options[selectProblem.selectedIndex].value !== '') {
    let algorithms = PROBLEMS_AND_ALGORITHMS[selectProblem.options[selectProblem.selectedIndex].value].algorithms;
    listAlgorithms(algorithms, selectAlgorithm);
    selectAlgorithm.parentElement.classList.remove("d-none");
  }
}

// Initialize menu
let selectProblem = document.getElementById("selectProblem");
let selectAlgorithm = document.getElementById("selectAlgorithm");
let sizeSelect = document.getElementById("selectSize");

selectProblem.addEventListener("change", () => onProblemSelect(selectProblem, selectAlgorithm));

listProblems(selectProblem);


console.log(selectAlgorithm);
console.log(sizeSelect);

// Initialize main
let main = document.getElementsByTagName("main")[0];
const content = document.createElement('div');
content.innerHTML = "Content";
main.appendChild(content);
