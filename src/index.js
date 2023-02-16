let problems = document.querySelectorAll(".problem-available");
let AllProblems = document.querySelector(".problems_link");

var names = [];
var links = [];
var classes = [];

var folder = document.createElement("ul");
folder.className = "balls";
AllProblems.appendChild(folder);


for (let i = 0; i < problems.length-1; i++) {
    names.push(problems[i].querySelector("a").innerHTML)
    links.push(problems[i].querySelector("a").href)
    classes.push(problems[i].className)
}

AddProblem(names, links, classes, folder)
AddProblem(names, links, classes, folder)

for (let i = 0; i < problems.length-1; i++) {
        problems[i].remove();
}

function AddProblem(names, links, classnames, folder) {
    for (let i = 0; i < problems.length-1; i++) {
        let problem = document.createElement("li");
        problem.className = classnames[i];
        folder.appendChild(problem);

        let a = document.createElement("a");
        a.href = links[i];
        a.innerHTML = names[i];
        problem.appendChild(a);
    }
}
