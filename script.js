const displayGrid = document.querySelector(".display");
let displayItemNode = document.querySelectorAll(".item");
let chooseOption = document.querySelector(".options");
let valueResolution;
let input = 16;
let chooseMode = 1;
function resolutionGridCreate(callback) {
    input = check_conditions(input);
    if(input != null)
    {
    deleteSquare();
    valueResolution = input;
    let dimension = 800 / valueResolution;
    let resolutionPercentage = dimension / 800 * 100;
    for(let i = 0; i < valueResolution**2; i++)
    {
        let red, green, blue;
        const displayItem = document.createElement("div");
        displayItem.style.flex = `0 0 ${resolutionPercentage}%`;
        displayItem.style.height = `${resolutionPercentage}%`;
        displayItem.classList.add("item");
        displayGrid.appendChild(displayItem);
        if(chooseMode == 1)
        {
            normal_color()
        }
        else if(chooseMode == 2)
        {
            shade_color();
        }
    }
    }
}

function deleteSquare()
{
    let child = displayGrid.lastElementChild;
    while(child){
        displayGrid.removeChild(child);
        child = displayGrid.lastElementChild;
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

displayItemNode.forEach((e) => {
    let red, green, blue;
    e.addEventListener("mouseover", (e) => {
            red = Math.floor(Math.random() * 256);
            green = Math.floor(Math.random() * 256);
            blue = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${red},${green},${blue})`;
})
})

function shade_color()
{ 
    let red, green, blue;
    const displayItem = document.querySelectorAll(".item");
        displayItem.forEach((e) => {
            let count = 0;
            let alpha = 0;
            e.addEventListener("mouseover", (event) => {
                if(alpha < 1){
                    count += 0.1;
                    alpha = count.toFixed(1);
                    red = Math.floor(Math.random() * 256);
                    green = Math.floor(Math.random() * 256);
                    blue = Math.floor(Math.random() * 256);
                    }
                    else {red = 0; green = 0; blue  = 0};
                    event.target.style.backgroundColor = `rgba(${red},${green},${blue},${alpha})`;
            })
        })
    chooseMode = 2;
}

function normal_color()
{
    const displayItemAdd = document.querySelectorAll(".item");
    displayItemAdd.forEach((e) => {
        let red, green, blue;
        e.addEventListener("mouseover", (event) => {
                red = Math.floor(Math.random() * 256);
                green = Math.floor(Math.random() * 256);
                blue = Math.floor(Math.random() * 256);
            event.target.style.backgroundColor = `rgb(${red},${green},${blue})`;
    })
    })
    chooseMode = 1;
}

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