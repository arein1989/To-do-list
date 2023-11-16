const button = document.querySelector("button");
const input = document.querySelector("input");
const form = document.querySelector("form");
const container = document.getElementById("container");





container.addEventListener("click", (eo) => {

    switch (eo.target.className) {
        case "icon-bin icons":
            eo.target.parentElement.parentElement.remove();
        break;

        case "icon-angry2 icons":
            eo.target.classList.add("dn");
            const heart = `<span class="icon-heart">    </span>`;
          
          
          
            eo.target.parentElement.parentElement.getElementsByClassName("opgave-tekst")[0].classList.add("finish");
          
            eo.target.parentElement.innerHTML += heart;
              
        break;

        case "icon-heart":
            eo.target.parentElement.parentElement.getElementsByClassName("opgave-tekst")[0].classList.remove("finish");

        eo.target.classList.add("dn");

        const addAngry = `
        <span class="icon-angry2 icons">   </span>
        `;
        eo.target.parentElement.innerHTML += addAngry;
    
            
        break;

        case "icon-star icons":
            eo.target.classList.add("orange");

        container.prepend(eo.target.parentElement);
            
        break;

        case "icon-star icons orange":
            eo.target.classList.remove("orange");
            
        break;
    
        default:
            break;
    }

   
})








form.addEventListener("submit", (eo) => {
    eo.preventDefault()
    const opgave =   `

    <div class="opgave">

    <span class="icon-star icons">    </span>
    <p class="opgave-tekst"> ${input.value} </p>

    <div>
        <span class="icon-bin icons">      </span>
        
        <span class="icon-angry2 icons">   </span>

    </div>
</div>



`

    container.innerHTML += opgave;
    input.value = " "
});


