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
        } else if (dropdownContent !== "manatee") {
            manatee.removeAttribute("class", "hidden");
        } else  {
            sloth.removeAttribute("class", "hidden");
        }
    }
}


//I messed with the code a little - made it to where it'll select manatee instead of sloth