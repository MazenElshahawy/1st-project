/*****************Variables*********************/
const button = document.querySelector("button")
const container = document.querySelector("#container")
const input = document.querySelector("input")
const close = document.querySelector(".icon-close")
const form = document.querySelector("form")

/*****************Function of adding task *********************/



button.addEventListener("click", (eo) => {
    eo.preventDefault();

    container.innerHTML += `    <div class="task">

    <span class="icon-star icon"> </span>

    ${input.value}
    <div >
    <span class="icon-close icon"></span>
    <span class="icon-frown-o icon"></span>

    </div>

</div>`

    input.value = ""
})

    /*****************Function of removing task *********************/

    container.addEventListener("click", (eo) => {
    if (eo.target.className == "icon-close icon") {
        eo.target.parentElement.parentElement.remove();
    }

    /*****************Function of finishing task *********************/

    else if (eo.target.className == "icon-frown-o icon") {
        eo.target.classList.toggle('dn');
        eo.target.parentElement.innerHTML += `<span class="icon-laughing-face icon"></span>`
        
        // eo.target.parentElement.parentElement.getElementByClassName("text").classList.toggle("finish");
    }

    /*****************Function of undo task *********************/

    else if (eo.target.className == "icon-laughing-face icon") {
        eo.target.classList.toggle('dn');

        eo.target.parentElement.innerHTML += `<span class="icon-frown-o icon"></span>`

    }

    /*****************Function of sorting tasks *********************/

    else if (eo.target.className == "icon-star icon") {
        eo.target.classList.add("toggle")
        container.prepend(eo.target.parentElement)
    }
    else if (eo.target.className == "icon-star icon toggle") {
        eo.target.classList.remove("toggle")
        container.append(eo.target.parentElement)
    }
    
    

})




