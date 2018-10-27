let questions = ["" /*pierwsze ma być puste */ ,
    "Którego dnia rozpoczęło się powstanie?",
    "Ile trwało Powstanie warszawskie? ",
    "W ramach której akcji wybuchło powstanie?",
    "W powstaniu brało udział:   ",
    "Pod czyim dowództwem poprowadzone zostało Powstanie?",
    "Gdzie podpisano akt kapitulacji powstania?",
    "Która godzina jest godziną W?",
    "Jakie straty poniosły Wojska Polskie w wyniku śmierci żołnierzy?",
    "Które państwo nie udzieliło aktywnej pomocy w powstaniu? ",
    "Jak nazwany został zdobyczny czołg PzKpfw V Panther",
    "co to za kitku? <img src='https://i.imgur.com/1TBBvKj.jpg'>",
    "jakiego sławnego twojego starego przedstawia ten kitku ? <img src='https://i.imgur.com/AD3MbBi.jpg'>",
   
]; // po przecinku dodajesz pytania
let answers = [
    [ /* to ma być puste */ ],
    ["1 sierpnia", "2 sierpnia", "1 lipca", "2 lipca"],
    ["60 dni", "32 dni", "58 dni", "63 dni"],
    ["Tornado", "Sztorm", "Burza", "Powódź"],
    ["40 tys. żołnierzy", "50 tys. żołnierzy", "12 tys. żołnierzy", "64 tys żołnierzy"],
    ["Tadeusz Bór-Komorowski, Antoni Chruściel, Tadeusz Pełczyński, Leopold Okulicki", "Tadeusz Kutrzeba, Władysław Bortnowski, Franciszek Wład", "Józef Unrug, Kazimierz Fabrycy, Franciszek Kleeberg, Stefan Rowecki", "Juliusz Rómmel, Tadeusz Pełczyński, Aleksander Kamiński"],
    ["Ożarów ", "Żoliborz ", "Mokotów ", "Psie Pole"],
    ["12:00", "14:30", "10:00", "17:00"],
    ["10 tys.", "16 tys.", "20 tys.", "23 tys."],
    ["ZSRR", "Wielka Brytania", "USA", "III Rzesza"],
    ["Magda", "Kubuś", "Armia Krajowa", "Pudel"],
    ["dfs", "sfd", "sdf", "fdsfds"],
    ["dfsdfs", "sffdsfdsd", "sdsffdsdf", "fdsfddsffdss"]

];
let correctAnswer = ["" /*pierwsza pusta, litery z DUŻEJ */ , "A", "D", "C", "B", "A", "A", "D", "B", "A", "D",/* testowe odpowiedzi */ "A", "A"];

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
        
        document.getElementById("nextQuestion").addEventListener("click", () => {
            
            window.location.assign("koniec.html");
        })

    }
}
for (let x = 0; x <= 3; x++) {
    document.getElementsByClassName("answer")[x].addEventListener("click", checkingQuestion);
}

document.getElementById("nextQuestion").addEventListener("click", () => {
    clearClasses();

    document.getElementById("counter").textContent++;

    checkingEnd();
    changeQuestion();

    for (let x = 0; x <= 3; x++) {
        document.getElementsByClassName("answer")[x].addEventListener("click", checkingQuestion);
    }
});
let l = 0;
setInterval(()=>{
    
    if(l == 24){l=0}
    document.getElementsByClassName("background")[0].style.background = `url(img/image${l}.jpg)`;
    l++;
},19000)