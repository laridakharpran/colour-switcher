const button = document.querySelector("button");
const body =document.querySelector("body");
body.style.backgroundColor = "green";

const colors = ["red", "yellow","wooden", "pink","blue","chocolate","white"
    ]
    
    button.addEventListener("click",function(){
        const colorIndex = Math.floor(Math.random()*colors.length)
        body.style.backgroundColor = colors[colorIndex];
        
    })
