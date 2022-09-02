window.addEventListener("load", function () {
    let form = document.querySelector("#new-task-form")
    let input = document.querySelector("#new-task-inp")
    let list_el = document.querySelector("#tasks")

    form.addEventListener("submit", function (event) {
        event.preventDefault(); //On empeche le boutton submit de refresh la page 
        
        //on verifie que l'utilisateur a bien remplie le titre de son todo point
        let task = input.value;
        
        if (!task) {
            alert("Please fill out the task")
        } else {
            //on cree nos todo points
            //on cree la div container 
            let task_el = document.createElement("div"); 
            task_el.classList.add("task");

            //on cree la div qui contient le contenu ecrit par lutilisateur 
            let task_content_el = document.createElement("div");
            task_content_el.classList.add("content");
            task_content_el.innerText = task; //on ajoute le text ecrit par lutilisateur a la div.content

            //on ajoute la div.content a la div container div.task
            task_el.appendChild(task_content_el)
            
            //on ajoute le tt a notre list
            list_el.appendChild(task_el)
            
            //on cree la div.action
            let btnPart_el = document.createElement("div")
            btnPart_el.classList.add("actions")
            task_el.appendChild(btnPart_el)
            
            //on cree le btn check
            let check_btn = document.createElement("button")
            check_btn.classList.add("check")
            check_btn.innerText = "CHECKED"
            btnPart_el.appendChild(check_btn)
            check_btn.addEventListener("click", function (e) {
                
                if (task_content_el.style.textDecoration == "line-through") {
                    task_content_el.style.textDecoration = "none"
                    
                } else {
                    task_content_el.style.textDecoration = "line-through"
                }
            })

            let delete_btn = document.createElement("button")
            delete_btn.classList.add("delete")
            delete_btn.innerText = "DELETE"
            btnPart_el.appendChild(delete_btn)
            delete_btn.addEventListener("click", function () {
                delete_btn.parentNode.parentNode.remove("task_el")
            })

        }
        
    })
})




