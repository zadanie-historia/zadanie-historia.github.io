let questions = ["" /*pierwsze ma być puste */ ,
    /*1*/"Którego dnia rozpoczęło się powstanie?", 
    /*2*/"Ile trwało Powstanie warszawskie? ",
    /*3*/"Poniższe zdjęcie przedstawia gmach Prudentialu. Co spowodowało eksplozję?<img src='https://www.wykop.pl/cdn/c3201142/comment_ZdngWQRlS7oG9r2RcYRR0iGQKPckwLM0.jpg'>", 
    /*4*/"Improwizowany samochód pancerny, konstrukcji polskiej, zbudowany w 13 dni, na Powiślu i użyty w czasie powstania warszawskiego nosił nazwę:<img src='https://s8.dziennik.pl/pliki/5247000/5247957-272291-643-475.jpg'>",
    /*5*/"Pod czyim dowództwem poprowadzone zostało Powstanie?",
    /*6*/"Gdzie podpisano akt kapitulacji powstania?",
    /*7*/"Co przedstawia poniższe zdjęcie? <img src='https://upload.wikimedia.org/wikipedia/commons/9/95/Bundesarchiv_Bild_183-97906%2C_Warschauer_Aufstand%2C_Stra%C3%9Fenkampf.jpg'>",
    /*8*/"Jakie straty poniosły Wojska Polskie w wyniku śmierci żołnierzy?",
    /*9*/"Zgodnie z rozkazem wydanym przez płk. 'Montera' Powstanie Warszawskie wybuchło 1 sierpnia o godz. 17, ale starcia z Niemcami rozpoczęły się wcześniej. W której dzielnicy doszło do pierwszej wymiany ognia?",
    /*10*/"Jak nazwany został zdobyczny czołg PzKpfw V Panther?",
    /*11*/"Kto wydał rozkaz rozpoczęcia powstania?",
    /*12*/"Jak nazywało się radio nadające na terenie warszawy w trakcie powstania?",
    /*13*/"Kto w trakcie powstania dowodził oddziałami karnymi SS stworzonymi do walki z powstańcami?",
    /*14*/"Co było przyczyną masakry na Kilińskiego?",
    /*15*/"Kiedy odbyła się największa bitwa powstania?",
    /*16*/"Ile osób zginęło w wyniku rzezi Woli?", 
    /*17*/"Dnia 1 sierpnia 1944 odbyłą się narada w wyniku której A. Hitler wydał rozkaz dotyczący Warszawy, oczekiwał on:",
    /*18*/"W ramach jakiej akcji wybuchło powstanie?",
    /*19*/"Jak nazywała się zupa robiona z rozgotowanego ziarna?",
    /*20*/"Czym była Brygada Szturmowa SS RONA?", 
    /*21*/"Która godzina jest godziną W?" ,
    /*22*/"W czasie powstania Polakom udało się przejąć jedno z niemieckich dział pancernych (zdjęcie poniżej), jak zostało ono nazwane?<img src='http://www.muzeumwp.pl/dictionary/powstancze-dzialo-samobiezne-chwat,266,duzy.jpg'> ",
    /*23*/"Czym był Ukraiński Legion Samoobrony i po czyjej stronie stanął w trakcie powstania?",
    /*24*/"Jak nazywały się zdalnie sterowane niemieckie miny samobieżne?<img src='http://www.achtungpanzer.com/votw/gol1.jpg'>",
    /*25*/"Jak nazwany został ciężki moździerz niemiecki typu Karl-Gerät ostrzeliwujący Warszawę w trakcie powstania?<img src='https://farm4.staticflickr.com/3873/15203346729_b48f6e6744_o.jpg'>",
    /*26*/"W czasie powstania Warszawa była nękana przez lotnictwo niemieckie głównie przy użyciu Sztukasów, były to:<img src='http://www.aresgames.eu/wp/wp-content/uploads/2017/04/610x250_Ju-87B-StG-77-610x250.gif'>",
    /*27*/"Jak nazywały się pistolety maszynowe tworzone w Warszawie na potrzeby powstania?",
    /*28*/"Biało-czerwone opaski zakładane przez powstańców na ramię miały odciśnięty pieczęcią wizerunek orła, a po bokach litery:",
    /*29*/"W powstaniu brało udział:",
    /*30*/"Które państwo nie udzieliło aktywnej pomocy w powstaniu?"
]; // po przecinku dodajesz pytania
let answers = [
    [ /* to ma być puste */ ],
    /*1*/ ["1 sierpnia", "2 sierpnia", "1 lipca", "2 lipca"],
    /*2*/ ["60 dni", "32 dni", "58 dni", "63 dni"],
    /*3*/ ["Trafienie bombą lotniczą", "Trafienie z działa pancernego", "Trafienie pociskiem ciężkiego moździerza", "Wybuch poprzednio podłożonej bomby"],
    /*4*/ ["Michaś", "Julcia", "Jacek", "Kubuś"],
    /*5*/ ["Tadeusz Bór-Komorowski, Antoni Chruściel, Tadeusz Pełczyński, Leopold Okulicki", "Tadeusz Kutrzeba, Władysław Bortnowski, Franciszek Wład", "Józef Unrug, Kazimierz Fabrycy, Franciszek Kleeberg, Stefan Rowecki", "Juliusz Rómmel, Tadeusz Pełczyński, Aleksander Kamiński"],
    /*6*/ ["Ożarów ", "Żoliborz ", "Mokotów ", "Psie Pole"],
    /*7*/ ["Oddziały SS", "Powstańców", "Rosyjskich żołnierzy wspierających powstanie", "Brytyjskich spadochroniarzy zrzuconych na terenie Warszawy"],
    /*8*/ ["10 tys.", "16 tys.", "20 tys.", "23 tys."],
    /*9*/ ["Mokotów", "Żoliborz", "Śródmieście", "Praga"],
    /*10*/ ["Magda", "Kubuś", "Armia Krajowa", "Pudel"],
 	/*11*/ ["Tadeusz Komorowski", "Tadeusz Pełczyński", "Władysław Bortnowski", "Antoni Chruściel"],
	/*12*/ ["Warszawa", "Radio Powstańcze", "Błyskawica", "Wolność"],
    /*13*/ ["Oskar Dirlewanger", "Reiner Stahel", "Paul Otto Geibel", "Adolf Hitler"],
    /*14*/ ["Nalot niemiecki", "Rozstrzelanie dużej grupy cywilów", "Ostrzał artyleryjski", "Eksplozja zdobycznej jednostki niemieckiej"],
    /*15*/ ["2 października 1944", "12 sierpnia 1944", "29 września 1944", "1 września 1944"],
    /*16*/ ["10 - 20 tys.", "30 - 60 tys.", "40 - 50 tys.", "50 - 80 tys."],
    /*17*/ ["Całkowitego zniszczenia Warszawy", "Odwrotu wojsk niemieckich z Warszawy", "Stłumienie powstania w sposób jak najmniej destrukcyjny dla miasta i jego zabytków", "Uratowania jak największej ilości cywili"],
    /*18*/ ["Tornado", "Sztorm", "Burza", "Powódź"],
    /*19*/ ["Pluj-zupka", "Ściera", "Wodnica", "Biedna"],
    /*20*/ ["Zwykłe oddziały szturmowe SS", "Oddziały SS specjalizujące się w działaniach za liniami wroga", "Oddziały SS złożone z rosjan i białorusinów", "Brygada wchodząca w skład niemieckiej 9. Armii"],
    /*21*/ ["12:00", "14:30", "10:00", "17:00"],
    /*22*/ ["Maluch", "Chwat", "Pudel", "Magda"],
    /*23*/ ["Ukraińskie oddziały kolaboracyjne walczące dla Niemców", "Ukraińskie oddziały kolaboracyjne walczące dla ZSRR", "Ukraińskie oddziały pod dowodzeniem AK", "Ukraińskie oddziały pod dowództwem Brytyjskim"],
    /*24*/ ["Titan", "Goliath", "David", "Riese"],
    /*25*/ ["Thor", "Odin", "Adam", "Ziu"],
    /*26*/ ["Samoloty myśliwskie Bf 109", "Samoloty bombowe Ju 88", "Samoloty myśliwskie Fw 190", "Samoloty szturmowe Ju 87"],
    /*27*/ ["Błyskawica", "Piorun", "Diabeł", "Grot"],
    /*28*/ ["PW", "AK", "WP", "JP"],
    /*29*/ ["40 tys. żołnierzy", "50 tys. żołnierzy", "12 tys. żołnierzy", "64 tys żołnierzy"],
    /*30*/ ["ZSRR", "Wielka Brytania", "USA", "III Rzesza"]

];
let correctAnswer = ["" /*pierwsza pusta, litery z DUŻEJ */ ,
    /*1*/ "A",
    /*2*/ "D",
    /*3*/ "C",
    /*4*/ "D",
    /*5*/ "A",
    /*6*/ "A",
    /*7*/ "A",
    /*8*/ "B",
    /*9*/ "B",
    /*10*/ "D", 
    /*11*/ "A",
    /*12*/ "C",
    /*13*/ "A",
    /*14*/ "D",
    /*15*/ "C",
    /*16*/ "B",
    /*17*/ "A",
    /*18*/ "C",
    /*19*/ "A",
    /*20*/ "C",
    /*21*/ "D",
    /*22*/ "B",
    /*23*/ "A",
    /*24*/ "B",
    /*25*/ "D",
    /*26*/ "D",
    /*27*/ "A",
    /*28*/ "C",
    /*29*/ "B",
    /*30*/ "A"
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
setInterval(() => {

    if (l == 24) {
        l = 0
    }
    document.getElementsByClassName("background")[0].style.background = `url(img/image${l}.jpg)`;
    l++;
}, 19000)