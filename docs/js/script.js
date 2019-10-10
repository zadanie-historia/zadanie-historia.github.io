let questions = ["" /*pierwsze ma być puste */ ,
    /*1*/"W którym roku po raz pierwszy udało się rozszyfrować pierwsze zakodowane Enigmą szyfrogramy?", 
    /*2*/"Jak nazywał się autor Enigmy?",
    /*3*/"W którym roku została zaprezentowana Enigma?", 
    /*4*/"Jak nazywało się jedno z pierwszych narzędzi pomagających w rozszyfrowywaniu szyfrogramów Enigmy?",
    /*5*/"Kto Stworzył cyklometr?",
    /*6*/"Ile powstało wersji Enigmy?",
    /*7*/"Jaki był kryptonim Enigmy w Wielkiej Brytanii?",
    /*8*/"Ile czasu (pod koniec wojny) zajmowało zdekryptowanie niemieckiego meldunku nadanego po zaszyfrowaniu go za pomocą Enigmy?",
    /*9*/"W których latach informacja o rozszyfrowaniu Enigmy została odtajniona?",
    /*10*/"Ile kombinacji szyfrów mogło powstać za pomocą Enigmy?",
    /*11*/"Kogo nazywamy ojcem informatyki?"
]; // po przecinku dodajesz pytania
let answers = [
    [ /*to ma być puste */ ],
    /*1*/ ["1941","1939","1932","1914"],
    /*2*/ ["Artur Scherbius","Ernest Richard","Boris Hagelin","Adolf Hitler"],
    /*3*/ ["1928","1923","1917","1918"],
    /*4*/ ["Płachta Zygalskiego","Bomba Turinga","Cyklometr","Karty charakterystyk"],
    /*5*/ ["Alan Turing","Henryk Zygalski","Marian Rejewski","Jerzy Różycki"],
    /*6*/ ["2","4","9","13"],
    /*7*/ ["Ultra","Secret","Crypto","Mystery"],
    /*8*/ [" 2 - 4 godziny","1 - 2 dni","3 - 4 dni","15 minut"],
    /*9*/ ["Lata 50","Lata 60","Lata 70","Lata 80"],
    /*10*/ ["15 x 10^10","18 x 10^15","12 x 10^20","15 x 10^18"],
    /*11*/ ["Alana Turinga","Gajusz Juliusz Cezar","Henryka Zygalskiego","Mariana Rejewskiego"]

];

let correctAnswer = ["" /*pierwsza pusta, litery z DUŻEJ */ ,
    /*1*/ "C",
    /*2*/ "A",
    /*3*/ "B",
    /*4*/ "A",
    /*5*/ "C",
    /*6*/ "D",
    /*7*/ "A",
    /*8*/ "B",
    /*9*/ "C",
    /*10*/ "D",
    /*11*/ "A"
];


//definicja zmiennych 
let questionCounter = document.getElementById("counter");
const odpaEl = document.getElementById("ansA");
const odpbEl = document.getElementById("ansB");
const odpcEl = document.getElementById("ansC");
const odpdEl = document.getElementById("ansD");
const currentQuestionEl = document.getElementById("question");
let pointsEarned = document.getElementById("points-earned");
document.getElementById("maxQuestions").textContent = questions.length;
document.getElementById("maxQuestions").textContent -= 1;
let changeQuestion = () => {
    currentQuestionEl.innerHTML = questions[questionCounter.textContent];
    odpaEl.textContent = answers[+questionCounter.textContent][0];
    odpbEl.textContent = answers[+questionCounter.textContent][1];
    odpcEl.textContent = answers[+questionCounter.textContent][2];
    odpdEl.textContent = answers[+questionCounter.textContent][3];
}
changeQuestion();
let checkingQuestion = function () {
    if (this.id.substr(3, 3) == correctAnswer[+questionCounter.textContent]) {
        +pointsEarned.textContent++;
        this.classList.add("correct");
    } else {
        this.classList.add("wrong");
        document.getElementById(`ans${correctAnswer[+questionCounter.textContent]}`).classList.add("correct");
    }
    for (let i = 0; i <= 3; i++) {
        document.getElementsByClassName("answer")[i].removeEventListener("click", checkingQuestion);
    }
}
let clearClasses = () => {
    for (let i = 0; i <= 3; i++) {
        document.getElementsByClassName("answer")[i].classList.remove("correct", "wrong");
    }
}
let checkingEnd = () => {
    let currentQuestion = +questionCounter.textContent;
    let maxQuestions = questions.length;
    maxQuestions--;

    if (maxQuestions == currentQuestion) {
        window.localStorage.setItem("points", +pointsEarned.textContent);

        document.getElementById("nextQuestion").removeEventListener("click", changeQuestion)
        document.getElementById("nextQuestion").textContent = "Przejdź do podsumowania";
        document.getElementById("nextQuestion").removeEventListener("click", mainFunction );
        

        document.getElementById("nextQuestion").addEventListener("click", () => {

            window.location.assign("koniec.html");
        })

    }
}
for (let x = 0; x <= 3; x++) {
    document.getElementsByClassName("answer")[x].addEventListener("click", checkingQuestion);
}
let mainFunction = () =>{
    clearClasses();

    document.getElementById("counter").textContent++;

    checkingEnd();
    changeQuestion();

    for (let x = 0; x <= 3; x++) {
        document.getElementsByClassName("answer")[x].addEventListener("click", checkingQuestion);
    }
}
document.getElementById("nextQuestion").addEventListener("click", mainFunction);
let l = 0;
setInterval(() => {

    if (l == 7) {
        l = 0
    }
    let img = document.createElement("img");
    img.src = `./img/quiz/image${l}.jpg`;
    img.addEventListener("load",()=>{
        document.getElementsByClassName("background")[0].removeChild(document.querySelector(".background img"))
        document.getElementsByClassName("background")[0].classList.add("background-opacity");
        document.getElementsByClassName("background")[0].addEventListener("animationend", ()=>{
            document.getElementsByClassName("background")[0].classList.remove("background-opacity")
        })
        document.getElementsByClassName("background")[0].appendChild(img)
    })
    l++;
}, 10000)