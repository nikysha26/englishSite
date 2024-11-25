const questions = [
    { question: "What is the color of the sky?", options: ["blue", "green", "red"], answer: "blue" },
    { question: "What do you call a baby cat?", options: ["kitten", "puppy", "cub"], answer: "kitten" },
    { question: "What is the opposite of hot?", options: ["cold", "warm", "cool"], answer: "cold" }
];

let currentQuestionIndex = 0;

const words = [
    { word: "apple", image: "images/apple.png" },
    { word: "banana", image: "images/banana.jpeg" },
    { word: "orange", image: "images/orange.png" }
];


function displayQuestion() {
    const quizContainer = document.getElementById('quiz-container');
    const question = questions[currentQuestionIndex];
    quizContainer.innerHTML = `<p>${question.question}</p>`;
    question.options.forEach(option => {
        quizContainer.innerHTML += `<button onclick="checkAnswer('${option}')">${option}</button>`;
    });
}


function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
        alert("Correct!");
    } else {
        alert("Try again!");
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        alert("Quiz completed!");
        currentQuestionIndex = 0; // Reset for next time
    }
}


function startGame() {
    const gameContainer = document.getElementById('game-container');
    gameContainer.innerHTML = "";
    
    words.forEach(wordObj => {
        gameContainer.innerHTML += `<div class="word-pair">
                                        <img src="${wordObj.image}" alt="${wordObj.word}" width="100">
                                        <input type="text" placeholder="Type the word here">
                                    </div>`;
    });
    gameContainer.innerHTML += `<button onclick="checkGame()">Check Answers</button>`;
}



function startSort() {
    const sortContainer = document.getElementById('sort-container');
    sortContainer.innerHTML = "";
    const items = [
        { name: "Cat", image: "images/cat.png" },
        { name: "Dog", image: "images/dog.png" },
        { name: "Bird", image: "images/bird.jpeg" },
        { name: "Fish", image: "images/fish.jpeg" }
    ];
    
    
    
    function loadImages() {
        const imagesContainer = document.getElementById("images");
        items.forEach(item => {
            const img = document.createElement("img");
            img.src = item.image;
            img.alt = item.name;
            img.onclick = () => selectImage(item.name);
            imagesContainer.appendChild(img);
        });
    }
    
    function loadOptions() {
        const optionsContainer = document.getElementById("options");
        items.forEach(item => {
            const button = document.createElement("button");
            button.innerText = item.name;
            button.onclick = () => checkAnswer(item.name);
            optionsContainer.appendChild(button);
        });
    }
    
    let selectedImageName = '';
    
    function selectImage(name) {
        selectedImageName = name;
        document.getElementById("result").innerText = `сейчас ты выбрал: ${name}. Теперь давай выберем название`;
    }
    
    
    
    loadImages();
    loadOptions();
   
}
    



function checkGame() {
    const pairs = document.querySelectorAll('.word-pair');
    pairs.forEach(pair => {
        const input = pair.querySelector('input');
        const word = input.value.toLowerCase();
        const imgAlt = pair.querySelector('img').alt;

        if (word === imgAlt) {
            alert(`Correct for ${imgAlt}!`);
        } else {
            alert(`Incorrect for ${imgAlt}. Try again!`);
        }
    });
}

function playAudio(word) {
    const audio = new Audio(`audio/${word}.mp3`); // Убедитесь, что у вас есть соответствующие аудиофайлы
    audio.play();
}

function checkAnswer(selectedOption) {
    const resultContainer = document.getElementById("result");
    if (selectedImageName === selectedOption) {
        resultContainer.innerText = "Правильно! Ты большой молодец!";
    } else {
        resultContainer.innerText = `Неправильно. Ты выбрал ${selectedImageName}, а правильный ответ - ${selectedOption}. не расстраивайся, попробуй ещё раз!!`;
    }
    selectedImageName = ''; // сбросить выбор
}

// Initialize the quiz
displayQuestion();

