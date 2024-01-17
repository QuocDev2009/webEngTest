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
        var n;
        switch (e.target.title){
            case 'home': n = document.querySelector('.home'); break;
            case 'update': n = document.querySelector('.update'); break;
            case 'contact': n = document.querySelector('.contact'); break;
            case 'profile': n = document.querySelector('.profile'); break;
        }
        if (n) {
            n.classList.add("active");
        }
    })
}
