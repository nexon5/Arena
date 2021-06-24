const head = document.getElementById("head")



/*let func = node => {
    node.textContent = "_THE ARENA_";
    node.style.color = "red";
    node.style.background = "black";
    node.style.textAlign = "center";
    node.style.fontSize = "10em";
}*/

setTimeout (() => {
    func(head)
}, 3000 )

const blink = document.getElementById("blink")
console.log(blink)

setInterval(function(){

            blink.style.opacity = 1 - (blink.style.opacity || 1);
        },1500);
    