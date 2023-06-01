window.onload = function () {
    let form = document.querySelector("form");
    form.onsubmit = function (event) {
        event.preventDefault();
        let fox = document.getElementById("fox");
        let manatee = document.getElementById("manatee");
        let sloth = document.getElementById("sloth");
        let dropdownContent = document.getElementById("animalType").value;
        if (dropdownContent === "fox") {
            fox.removeAttribute("class", "hidden");
            manatee.setAttribute("class", "hidden");
            sloth.setAttribute("class", "hidden");
        } else if (dropdownContent === "manatee") {
            manatee.removeAttribute("class", "hidden");
            fox.setAttribute("class", "hidden");
            sloth.setAttribute("class", "hidden");
        } else  {
            sloth.removeAttribute("class", "hidden");
            fox.setAttribute("class", "hidden");
            manatee.setAttribute("class", "hidden");
        }
    }
}


//I messed with the code a little - made it to where it'll select manatee instead of sloth