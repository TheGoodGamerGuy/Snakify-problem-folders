// get all problems
let problems = document.querySelectorAll(".problem-available");
// get problem list
let list = document.querySelector(".problems_link");

// declare lists
let names = [];
let links = [];
let classes = [];

// append all problems to each list
for (let i = 0; i < problems.length-1; i++) {
    let Problem_Name = problems[i].querySelector("a").innerHTML
    let link = problems[i].querySelector("a").href
    let Class_Name = problems[i].className

    names.push(Problem_Name)
    links.push(link)
    classes.push(Class_Name)
}

// delete all problems
let original = list.querySelector("ul");
original.remove();

// add all folders
let folders = AddAllFolders(problems, list)

// adds problems to each folder
for (let i = 0; i < folders.length; i++) {
    let topic = folders[i].className
    for (let j = 0; j < names.length; j++) {
        if (names[j].split("-")[1].trim() == topic) {
            AddProblem(names[j], links[j], classes[j], folders[i])
        }
    }
}

// hides all problems in folders on startup
for (let i = 0; i < folders.length; i++) {
    let problems = folders[i].querySelectorAll("li");
    for (let i = 0; i < problems.length; i++) {
        problems[i].style.display = "none";
    }
}





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

function AddProblem(name, link, classname, folder) {
    let problem = document.createElement("li");
    problem.className = classname;
    folder.appendChild(problem);

    let a = document.createElement("a");
    a.href = link;
    a.innerHTML = name;
    problem.appendChild(a);
}

function AddAllFolders(problems, list) {
    let folders = [];
    let AllFolders = [];
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
        a.innerHTML = folders[i];
        a.name = "hide";
        a.onclick = function() { HideAndShowFolders(a) };
        list.appendChild(a);
        AllFolders.push(a);
    }
    return AllFolders;
}

function HideAndShowFolders(folder) {
    let problems = folder.querySelectorAll("li");
    if (folder.name == "show") {
        folder.name = "hide";
        for (let i = 0; i < problems.length; i++) {
            problems[i].style.display = "none";
        }
    } else {
        folder.name = "show";
        for (let i = 0; i < problems.length; i++) {
            problems[i].style.display = "block";
        }
    }
}