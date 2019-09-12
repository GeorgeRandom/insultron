const insultes = ["salut connard", "va bien te faire foutre", "mange ta merde", "trou du cul", "chier.", "ta gueule.", "foutaises que tout cela!"]
var x = 0



function alertfunction(){
    if (x>6) x=0
    alert(insultes[x]);
    x++
}







var btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", alertfunction)
btn2.addEventListener("click", function(e){
    if (x>6) x=0
    e.target.textContent = insultes[x]
    x++
    }
)


