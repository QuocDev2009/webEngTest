let btn = document.getElementsByClassName("btn");
let myPage = document.getElementsByClassName("n");
console.log(myPage);
for (let i = 0; i < btn.length; i++){
    btn[i].addEventListener("click", e =>{ 
        for(let j = 0; j < btn.length; j++){
            btn[j].classList.remove("active");
        }
    for(let j = 0; j < myPage.length; j++){
        myPage[j].classList.remove("active");
    }
        e.target.classList.add("active");
        let n = document.querySelector(`.${e.target.title}`);
        if (n) {
            n.classList.add("active");
        }
    })
}
