let heart = document.querySelectorAll(".heart");
let btn = document.querySelectorAll(".btn")


btn.forEach((hbtn) =>{
hbtn.addEventListener("click",() =>{
    hbtn.classList.add("like")
    console.log( heart);
    heart.forEach((hrt) =>{
        hrt.classList.remove("no-heart");
      
    })
      hbtn.addEventListener("click",() =>{
            hbtn.classList.remove("like")
            heart.forEach((hrt) =>{
                hrt.classList.add("no-heart");
              
            })
        })

    setTimeout(function (){

        heart.forEach((hrt) =>{
            hrt.classList.add("no-heart");
        })

    },1000)
    })

    })
   

