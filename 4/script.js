let start = document.getElementsByClassName("start")[0]
let taskmenu = document.getElementsByClassName("taskmenu")[0]
 
start.addEventListener("click", ()=>
{
    console.log("clicked");
    if(taskmenu.style.bottom == "45px"){
        taskmenu.style.bottom = "-655px"
    }
    else{
        taskmenu.style.bottom = "45px"
    }
})

let file = document.getElementsByClassName("file")[0]
let filemenu = document.getElementsByClassName("filemenu")[0]
 
file.addEventListener("click", ()=>
{
    console.log("clicked");
    if(filemenu.style.bottom == "45px"){
        filemenu.style.bottom = "-700px"
    }
    else{
        filemenu.style.bottom = "45px"
    }
})

let chrom = document.getElementsByClassName("chrom")[0]
let chrommenu = document.getElementsByClassName("chrommenu")[0]
 
chrom.addEventListener("click", ()=>
{
    console.log("clicked");
    if(chrommenu.style.bottom == "45px"){
        chrommenu.style.bottom = "-1396px"
    }
    else{
        chrommenu.style.bottom = "45px"
    }
})

let recyclebin = document.getElementsByClassName("recyclebin")[0]
let recyclebinmenu = document.getElementsByClassName("recyclebinmenu")[0]
 
recyclebin.addEventListener("click", ()=>
{
    console.log("clicked");
    if(recyclebinmenu.style.bottom == "45px"){
        recyclebinmenu.style.bottom = "-2092px"
    }
    else{
        recyclebinmenu.style.bottom = "45px"
    }
})