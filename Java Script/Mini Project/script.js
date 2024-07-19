let comparr = [];
let userarr = [];
let color = ["red", "green", "yellow", "purple"]
let clickNumber = 0
let checked = false

let h2 = document.querySelector("h2");
let start = false;
let level = 0;

document.addEventListener("keypress", keypress)

function keypress()
{
    userarr = []
    checked = false
    if(start === false){
        
        clickNumber = 0
        level = 0
        comparr = []
        start = true;
        levelup()
        // h2.innerText = "Level " + level
        // compFlesh()
    }
}

function levelup()
{
    userarr = []
    level++;
    h2.innerText = "Level " + level
    clickNumber = 0
    compFlesh() 
}

function compFlesh()
{
    let index = Math.floor(Math.random() * 4);
    let SelectedColor = color[index];
    let box = document.getElementById(SelectedColor);
    console.log(index + " " + SelectedColor)
    box.classList.add("white");   
    comparr.push(SelectedColor)
    setTimeout(() => {
        box.classList.remove("white");   
    }, 500);
    
    // comparr.push(SelectedColor)
}

let selectedBox = document.querySelectorAll(".box");

for(i of selectedBox){
    i.addEventListener("click", btnPress)
}

function userFlesh(btn)
{
    btn.classList.add("fleshgreen");

    setTimeout(() => {
        btn.classList.remove("fleshgreen")
    }, 500);

}

function btnPress()
{
    let btn = this
    let attribute = btn.getAttribute("id")
    userarr.push(attribute)
    clickNumber++
    userFlesh(btn)
    console.log("click"+clickNumber)

    if(userarr.length == comparr.length)
    {
        check();
        if(checked == true)
        {
            setTimeout(levelup, 1000)
        }else{
            h2.innerText = "Game Over Try again!!\n Press any key to continue!!"
            start = false 
            document.addEventListener("keypress", keypress)
            level = 0
        }
    }
}

function check()
{
    if(userarr.length == comparr.length)
    {
        for(let i=0; i<userarr.length; i++)
        {
            if(userarr[i] == comparr[i])
            {
                checked = true;
            }else{
                checked = false
            }
        }
    }else{
        checked = false
    }
}