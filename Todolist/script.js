const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');



function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00D7";
        li.appendChild(span);
        }
        inputBox.value = '';
        saveData();
    }

    listContainer.addEventListener('click', function(e){
        if(e.target.tagName === 'LI'){
            e.target.classList.toggle('checked');
            saveData();
        }
        else if(e.target.tagName === 'SPAN'){
            e.target.parentElement.remove();
            saveData();
        }
    }, false);

    function saveData() {
        localStorage.setItem("data", listContainer.innerHTML);
        updateProgressBar();
    }
    
    function updateProgressBar() {
        const totalTasks = listContainer.childElementCount;
        const completedTasks = listContainer.querySelectorAll(".checked").length;
        const progressBar = document.querySelector(".progress");
    
        if (totalTasks > 0) {
            const progressPercentage = (completedTasks / totalTasks) * 100;
            progressBar.style.width = progressPercentage + "%";
        } else {
            progressBar.style.width = "0%";
        }
    }
    

    function showTask() {
        listContainer.innerHTML = localStorage.getItem("data");
        updateProgressBar();
    }
    
    showTask();


    /*

    1- const inputBox et const listContainer: Ces deux lignes récupèrent les éléments HTML de la page à 
    l'aide de leur identifiant (id) et les stockent dans des constantes pour un accès ultérieur.

    2- function addTask(): Cette fonction est appelée lorsque l'utilisateur appuie sur le bouton "Add". Elle vérifie si 
    la valeur de inputBox n'est pas vide. Si elle est vide, elle affiche une alerte pour indiquer à l'utilisateur qu'il 
    doit écrire quelque chose.

    3- Dans la fonction addTask(), si la valeur de inputBox n'est pas vide, un nouvel élément de liste (li) est créé et la valeur de 
    inputBox est assignée comme contenu de cet élément. Ensuite, un élément "span" est créé avec un caractère "X" (en Unicode) pour 
    permettre à l'utilisateur de supprimer la tâche. L'élément "span" est ajouté à l'élément de la liste, puis l'élément de la liste est 
    ajouté à listContainer. La valeur de inputBox est ensuite réinitialisée à une chaîne vide, et la fonction saveData() est appelée pour 
    sauvegarder les tâches.

    4- listContainer.addEventListener(...): Cette ligne ajoute un écouteur d'événements "click" à l'élément listContainer. Lorsqu'un élément
     enfant de listContainer est cliqué, la fonction de rappel passée en paramètre est exécutée.

    5- Dans la fonction de rappel de l'événement "click", si l'élément cliqué est un élément "LI" (une tâche), il bascule la classe "checked" 
    pour cet élément (ajout ou suppression) et appelle la fonction saveData() pour sauvegarder les tâches. Si l'élément cliqué est un élément "SPAN" 
    (le bouton de suppression), il supprime l'élément parent (la tâche) et appelle également la fonction saveData() pour sauvegarder les tâches.

    6- function saveData(): Cette fonction sauvegarde le contenu HTML de listContainer dans le stockage local du navigateur. Ensuite, elle appelle la 
    fonction updateProgressBar() pour mettre à jour la barre de progression en fonction des tâches effectuées.

    7- function updateProgressBar(): Cette fonction calcule le pourcentage de tâches accomplies et met à jour la largeur de l'élément .progress pour refléter 
    ce pourcentage. Si aucune tâche n'est présente, la largeur est réinitialisée à 0%.        

    8- function showTask(): Cette fonction récupère les données sauvegardées du stockage local et les charge dans listContainer. Ensuite, elle appelle la fonction 
    updateProgressBar() pour mettre à jour la barre de progression.

    9- showTask(): Cette ligne appelle la fonction showTask() au chargement du fichier JavaScript, ce qui permet d'afficher les tâches précédemment sauvegardées 
    et de mettre à jour la barre de progression. 

    */