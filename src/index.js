let problems = document.querySelectorAll(".problem-available");
let list = document.querySelector(".problems_link");

// alert(String(problems[0].querySelector("a").innerHTML.trim()))

let names = [];
let links = [];
let classes = [];
// let folders = [];

let folder = document.createElement("ul");
folder.className = "balls";
list.appendChild(folder);

for (let i = 0; i < problems.length-1; i++) {
    let Problem_Name = problems[i].querySelector("a").innerHTML
    let link = problems[i].querySelector("a").href
    let Class_Name = problems[i].className

    names.push(Problem_Name)
    links.push(link)
    classes.push(Class_Name)
}

AddProblems(names, links, classes, folder)

let original = list.querySelector("ul");
original.remove();




function AddProblems(names, links, classnames, folder) {
    for (let i = 0; i < names.length; i++) {
        let problem = document.createElement("li");
        problem.className = classnames[i];
        folder.appendChild(problem);

        let a = document.createElement("a");
        a.href = links[i];
        a.innerHTML = names[i];
        problem.appendChild(a);
    }
}



AddAllFolders(problems, list)








function AddAllFolders(problems, list) {
    let folders = [];
    for (let i = 0; i < problems.length-1; i++) {
        try {
            let topic = String(problems[i].querySelector("a").innerHTML.split("-")[1].trim())
            if (!folders.includes(topic)) {
                folders.push(topic)
            }
        } catch {
            continue
        }
    }
    for (let i = 0; i < folders.length; i++) {
        let a = document.createElement("a");
        a.className = folders[i];
        list.appendChild(a);
    }
}
