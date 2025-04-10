const displayGrid = document.querySelector(".display");
const displayItem = document.querySelector(".item");

let valueResolution;
let input = 4;
function resolution() {
    input = check_conditions(input);
    if(input != null)
    {
    displayGrid.textContent = "";
    valueResolution = input;
    let dimension = 800 / valueResolution;
    let resolutionPercentage = dimension / 800 * 100;
    displayItem.style.flex = `0 0 ${resolutionPercentage}%`;
    displayItem.style.height = `${resolutionPercentage}%`;
    displayItem.style.backgroundColor = "white";
    for(let i = 0; i < valueResolution * valueResolution; i++)
    {
        const clone = displayItem.cloneNode(true);
        displayGrid.appendChild(clone);
    }
    }
}

function check_conditions(input)
{
    do
    {
        if(isNaN(input) || input < 0 || input > 128)
        {
            input = prompt("Not right format, try again, your input should be a number from 1 to 128 and not a string or character");
            if(input == null)
            {
                return null;
            }
            else
            {
                input = +input;
            }
        }
        else
        {
            input = prompt("Your resolution you want? For example: 16 means 16x16, 32 means 32x32,... The maximum is 128");
            if(input == null)
                {
                    return null;
                }
            else input = +input;
        }
    }
    while(isNaN(input) || input < 0 || input > 128);
    return input;
}


displayGrid.addEventListener("mouseover", (e) => {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${red},${green},${blue})`;
})

function erase_all(){
    displayGrid.removeAttribute("style");
    for(let i = 0; i < input*input; i++)
    {
        if(displayGrid.hasChildNodes())
        {
            displayGrid.children[i].style.backgroundColor = "white";
        }
    }
}


