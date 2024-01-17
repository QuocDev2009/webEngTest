
let color = {
    A: "hsla(0, 77%, 55%, 1)",
    B: "hsla(229, 43%, 49%, 0.966)",
    C: "hsla(41, 86%, 47%, 1)",
    D: "hsla(93, 89%, 35%, 1)",
};

function random(chose = 15, sum = 30) {
    let set = new Set();
    while (set.size < chose) {
        let randomNum = Math.floor(Math.random() * sum);
        set.add(randomNum);
    }
    return Array.from(set);
}

let chosenQuestion = random();
let isSubmit = false;
import { questionsLibrary } from './englishLibrary.js';
let userChoose = [];
let countQuestion = 14;
let elements = document.getElementsByClassName("content");
let myItems = document.getElementsByClassName("item");
let questionLabel = document.querySelector(".question__label");
let userAnswers = [];
let index = 0;

let div = document.querySelector(".question__content");
if (div) {
    div.innerHTML = questionsLibrary[chosenQuestion[index]].question.trim();
}

// reset màu cho lần chọn màu và mỗi trang:)
let updateChoose = (i) => {
    for (let j = 0; j < elements.length; j++) {
        elements[j].innerHTML = questionsLibrary[chosenQuestion[i]].list[j];
    }
}
updateChoose(0);
let resetColor = () => {
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundPosition = "right";
        elements[i].style.color = "black";
    }
};

// đổi màu cho cái chọn và chuyển trang
let changeColor = (name) => {
    resetColor();
    if (name) {
        let box = document.querySelector(`[title=${name}]`);
        resetColor();
        box.style.backgroundPosition = "left";
        box.style.color = "aliceblue";
    }
};

// load cái trang
let noneExplain = () => {
    let exp = document.getElementsByClassName("explain");
    for (let i = 0; i < 3; i++) {
        if (!(exp[i].classList.contains("none")))
            exp[i].classList.add("none");
    }
}
noneExplain();
let btnNextPage = document.getElementById("next");
let btnBackPage = document.getElementById("back");
let explainDiv = document.getElementsByClassName("explain");
let explainContent = document.getElementsByClassName("explainContent");
let updateExplain = (i) => {

    for (let j = 0; j < 3; j++) {
        explainContent[j].innerHTML = questionsLibrary[chosenQuestion[i]].explain;
    }
    noneExplain();
    if (isSubmit) {
        if (userAnswers[i]) {
            if (userAnswers[i] === questionsLibrary[chosenQuestion[i]].correct) {
                explainDiv[0].classList.remove("none");
            } else {
                explainDiv[1].classList.remove("none");
            }
        } else {
            explainDiv[2].classList.remove("none");
        }
    }
}
updateExplain(0);
let updateQuestion = (i) => {
    questionLabel.innerHTML = `Question ${i + 1}:`;
    div.innerHTML = `${questionsLibrary[chosenQuestion[i]].question}`;
    resetColor();
    if (userChoose[i]) {
        changeColor(userChoose[i]);
    }
    if (i === 14) {
        btnNextPage.classList.add("disenable");
    } else {
        btnNextPage.classList.remove("disenable");
    }
    if (i === 0) {
        btnBackPage.classList.add("disenable");
    } else {
        btnBackPage.classList.remove("disenable");
    }
};

// tạo sự kiện cập nhật đáp án
for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", (e) => {
        if (isSubmit) return;
        let value = e.target.title;
        userAnswers[index] = e.target.textContent;
        myItems[index].textContent = `${index + 1}. ${value}`;
        userChoose[index] = value;
        changeColor(value);
    });
}
// hàm câu tiếp theo
let hello = document.getElementsByTagName("body");
let page = hello[0];
page.addEventListener("keydown", e => {
    switch (e.key.toLocaleLowerCase()) {
        case "arrowright":
            if (index === countQuestion) return;
            updateQuestion(++index);
            updateChoose(index);
            updateExplain(index);
            break;

        case "arrowleft":
            if (index === 0) return;
            updateQuestion(--index);
            updateChoose(index);
            updateExplain(index);
            break;
        case "a":
            if (isSubmit) return;
            let valueA = "A";
            const keyA = document.querySelector("[title = 'A']");
            userAnswers[index] = keyA.textContent;
            myItems[index].textContent = `${index + 1}. ${valueA}`;
            userChoose[index] = valueA;
            changeColor(valueA)
            break;
        case "b":
            if (isSubmit) return;
            let valueB = "B";
            const keyB = document.querySelector("[title = 'B']");
            userAnswers[index] = keyB.textContent;
            myItems[index].textContent = `${index + 1}. ${valueB}`;
            userChoose[index] = valueB;
            changeColor(valueB);
            break;
        case "c":
            if (isSubmit) return;
            let valueC = "C";
            const keyC = document.querySelector("[title = 'C']");
            userAnswers[index] = keyC.textContent;
            myItems[index].textContent = `${index + 1}. ${valueC}`;
            userChoose[index] = valueC;
            changeColor(valueC);
            break;
        case "d":
            if (isSubmit) return;
            let valueD = "D";
            const keyD = document.querySelector("[title = 'D']");
            userAnswers[index] = keyD.textContent;
            myItems[index].textContent = `${index + 1}. ${valueD}`;
            userChoose[index] = valueD;
            changeColor(valueD);
            break;
    };
})

btnNextPage.addEventListener("click", (e) => {
    if (index !== countQuestion) {
        updateQuestion(++index);
        updateChoose(index);
        updateExplain(index);
    }
});

btnBackPage.addEventListener("click", (e) => {
    if (index !== 0) {
        updateQuestion(--index);
        updateChoose(index);
        updateExplain(index);
    }
});

// tiếp là tạo event cho bảng control
let myControlItems = document.getElementsByClassName("items");
for (let i = 0; i < myControlItems.length; i++) {
    myControlItems[i].addEventListener("click", (e) => {
        index = i;
        updateQuestion(index);
        updateChoose(index);
        updateExplain(index);
    });
};
let check = () => {
    for (let i in questionsLibrary) {
        const correct = questionsLibrary[i].correct;
        let ok = false;
        for (var j in questionsLibrary[i].list) {
            ok = ok || (questionsLibrary[i].list[j] === correct);
        };
        console.log(ok);
    }
};
const btnSubmit = document.querySelector(".submit");
function appear() {
    let result = document.querySelector(".result");
    result.style.display = "block";
    let test = document.querySelector(".test");
    test.classList.add("hide");
    let btnReview = document.querySelector(".general");
    btnReview.style.display = "none"; 
}
function disappear(){
    let result = document.querySelector(".result");
    result.style.display = "none";
    let test = document.querySelector(".test");
    test.classList.remove("hide");
    let btnReview = document.querySelector(".general");
    btnReview.style.display = "flex";
}
btnSubmit.addEventListener("click", e => {
    if (isSubmit) return 0;
    noneExplain();
    if (userAnswers[i]) {
        if (userAnswers[i] === questionsLibrary[chosenQuestion[i]].correct) {
            explainDiv[0].classList.remove("none");
        } else {
            explainDiv[1].classList.remove("none");
        }
    } else {
        explainDiv[2].classList.remove("none");
    }
    let trueChoose = 0;
    let falseChoose = 0;
    let notChoose = 0;
    if (!isSubmit) {
        let items = document.getElementsByClassName("items");
        let icons = document.getElementsByClassName("addIcon");
        for (let i = 0; i < 15; i++) {
            if (userAnswers[i]) {
                if (userAnswers[i] === questionsLibrary[chosenQuestion[i]].correct) {
                    icons[i].innerHTML = `<i class="fa-solid fa-circle-check green"></i>`;
                    items[i].style.backgroundColor = "rgb(29, 173, 61)";
                    trueChoose++;
                } else {
                    icons[i].innerHTML = `<i class="fa-solid fa-circle-xmark red"></i>`;
                    items[i].style.backgroundColor = "rgba(255, 60, 60, 0.77)";
                    falseChoose++;
                }
            } else {
                icons[i].innerHTML = `<i class="fa-solid fa-triangle-exclamation yellow"></i>`;
                items[i].style.backgroundColor = " rgba(255, 229, 134, 1)";
                notChoose++;
            }
        }
        let trueAnswer = document.querySelector(".trueAnswer");
        trueAnswer.textContent += trueChoose;
        let falseAnswer = document.querySelector(".falseAnswer");
        falseAnswer.textContent += falseChoose;
        let noneAnswer = document.querySelector(".noneAnswer");
        noneAnswer.textContent += notChoose;
        let scoreRes = document.querySelector(".scoreRes");
        let score = (trueChoose*2/3).toFixed(1);
        scoreRes.textContent = `bạn làm được ${score} điểm`;
        let res = {
            stt: localStorage.length+1,
            t: trueChoose,
            f: falseChoose,
            n: notChoose,
            d: score
        }
        console.log(res);
        let resJSON = JSON.stringify(res);
        localStorage.setItem(`${localStorage.length+1}`, resJSON);
    }
    isSubmit = true;
    appear();
});

let exitBtn = document.querySelector(".exitBtn");
exitBtn.addEventListener("click", e => {
    disappear();
});
let general = document.querySelector(".general");
general.addEventListener("click", e => {
    appear();
})
let resetBtn = document.querySelector(".resetBtn");
resetBtn.addEventListener("click", e => {
    disappear();
    index = 0;
    chosenQuestion = random();
    userAnswers = [];
    updateQuestion(0);
    updateChoose(0);
    updateExplain(0);
    resetColor();
    isSubmit = false;
    let btnReview = document.querySelector(".general");
    btnReview.style.display = "none"; 
})
/**let clearLocalStorage = () => {
    for(let i = 0; i < localStorage.length; i++){
        localStorage.removeItem(`${i+1}`);
    }
}
clearLocalStorage();*/ 