var CoolButton = document.createElement("button"); 
CoolButton.innerText="button";
let problems = document.querySelectorAll(".problem-available");

var names = [];
var links = []
for (let i = 0; i < problems.length; i++) {
    names.push(String(problems[i].querySelector("a").innerHTML))
    links.push(String(problems[i].querySelector("a").href))
}

problems[0].appendChild(CoolButton);
// problems[1].appendChild(CoolButton);

CoolButton.addEventListener("click", clicked);

function clicked() {
    alert(names[0]+links[0])
}
