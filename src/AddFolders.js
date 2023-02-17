main()

function main() {
    // get all problems
    let problems = document.querySelectorAll(".problem-available");
    // get problem list
    let list = document.querySelector(".problems_link");

    // Unnamed folder
    let Unnamed = document.createElement("a");
    Unnamed.className = "Unnamed problems";
    Unnamed.innerHTML = "Unnamed";
    Unnamed.name = "hide";
    Unnamed.onclick = function() { HideAndShowFolders(Unnamed) };
    list.appendChild(Unnamed);


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
    let folders = AddAllFolders(problems, list);

    // adds problems to each folder
    for (let i = 0; i < folders.length; i++) {
        let topic = folders[i].className
        for (let j = 0; j < names.length; j++) {
            try {
                if (names[j].split("-")[1].trim() == topic) {
                    AddProblem(names[j], links[j], classes[j], folders[i])
                }
            } catch {
                AddProblem(names[j], links[j], classes[j], Unnamed)
                names.splice(j,1)
                links.splice(j,1)
                classes.splice(j,1)
                j--
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
    // hides the unnamed folder on startup
    let UnnamedProblems = Unnamed.querySelectorAll("li");
    for (let i = 0; i < UnnamedProblems.length; i++) {
        UnnamedProblems[i].style.display = "none";
    }
}

// adds problems to the folder
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

// adds one problem to the folder
function AddProblem(name, link, classname, folder) {
    let problem = document.createElement("li");
    problem.className = classname;
    folder.appendChild(problem);

    let a = document.createElement("a");
    a.href = link;
    a.innerHTML = name;
    problem.appendChild(a);
}

// adds all folders to the problem list
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

// opens and closes the folders
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