const quizdata = [
  {
    question: "What does the acronym HTML stand for?",
    options: [
      "Hyperlinks and Text Markup Language",
      "Hyper Text Markup Language",
      "Hyper Transfer Markup Language",
      "Hyper Text Manipulation Language",
    ],
    correct: 1, 
  },
  {
    question: "How do you select an element with id 'example' in CSS?",
    options: [
      "#example",
      ".example",
      "element.example",
      "@example",
    ],
    correct: 0,
  },
  {
    question: "Which of the following is not a JavaScript data type?",
    options: [
      "String",
      "Boolean",
      "Float",
      "Object",
    ],
    correct: 2,
  },
  {
    question: "What does the <canvas> element in HTML5 provide?",
    options: [
      "A container for metadata",
      "A container for graphical content",
      "A container for navigation links",
      "A container for audio and video content",
    ],
    correct: 1,
  },
  {
    question: "What property is used to change the text color of an element in CSS?",
    options: [
      "text-color",
      "color",
      "font-color",
      "text-style",
    ],
    correct: 1,
  },
  {
    question: "What is the purpose of the console.log() function in JavaScript?",
    options: [
      "To display a message in a pop-up window",
      "To print the output to the console",
      "To execute a block of code repeatedly",
      "To prompt the user for input",
    ],
    correct: 1,
  },
  {
    question: "Which HTML tag is used to define an unordered list?",
    options: [
      "<ul>",
      "<ol>",
      "<li>",
      "<list>",
    ],
    correct: 0,
  },
  {
    question: "How do you include external CSS in an HTML document?",
    options: [
      "<style>",
      "<link>",
      "<css>",
      "<script>",
    ],
    correct: 1,
  },
  {
    question: "What is the result of typeof [] in JavaScript?",
    options: [
      "\"array\"",
      "\"object\"",
      "\"array-like\"",
      "\"undefined\"",
    ],
    correct: 1,
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    options: [
      "<a>",
      "<link>",
      "<href>",
      "<hyperlink>",
    ],
    correct: 0,
  },
];



// const answerEle = document.querySelectorAll(".answer");

// const [questionEle, option_1, option_2, option_3, option_4]= document.querySelectorAll("#question, #option_1, #option_2, #option_3, #option_4");

// const submitbutton = document.querySelector("#sub");

// const curQuiz=0;
// const score =0;

// const loadQuiz = ()=>{
//   const {question,options} = quizdata[curQuiz];

//   questionEle.innerHTML = question;

//   options.forEach((curOption,index)=>window[`option_${index+1}`].innerHTML=curOption);
// };

// loadQuiz();

const quiz= document.querySelector(".quiz-section");

const answerEle = document.querySelectorAll(".answer");

const questionEle = document.getElementById("question");
const option_1 = document.getElementById("option_1");
const option_2 = document.getElementById("option_2");
const option_3 = document.getElementById("option_3");
const option_4 = document.getElementById("option_4");

const submitButton = document.querySelector("#sub");

const skipButton = document.querySelector('#next');

let curQuiz = 0;
let score = 0;

const loadQuiz = () => {
  const { question, options } = quizdata[curQuiz];

  questionEle.textContent = `Q${curQuiz+1} : ${question}`;

  option_1.textContent = options[0];
  option_2.textContent = options[1];
  option_3.textContent = options[2];
  option_4.textContent = options[3];
};

loadQuiz();

const desSelect =()=>{
    answerEle.forEach((curOption)=> curOption.checked = false);
};



const getSelectedOption = ()=> {
  let ansIndex=-1;
  answerEle.forEach((curOption,index)=> {
    if(curOption.checked){
      ansIndex=index;
    }
  });
  return ansIndex;
};

skipButton.addEventListener('click',()=>{
  curQuiz++;
  if(curQuiz< quizdata.length)
  {
    desSelect();
    loadQuiz();
  }
  else
  {
    alert("Click Submit");
    curQuiz--;
  }
});

submitButton.addEventListener('click',()=>{
  const selectindex= getSelectedOption();

  if(selectindex === quizdata[curQuiz].correct){
    score++;
  }
  if(selectindex== -1) {
    alert("Select an Option");
    curQuiz--;
  }  
  curQuiz++;
  if(curQuiz< quizdata.length )
  {
    desSelect();
    loadQuiz();
  }
  else
  {
   
    let resultMessage = '';
    if (score === quizdata.length) {
        resultMessage = "🎉 Congratulations! You got a perfect score! 🎉";
    } else if (score >= quizdata.length / 2) {
        resultMessage = "👍 Well done! You passed the quiz! 👍";
    } else {
        resultMessage = "😕 Better luck next time! 😕";
    }

    quiz.innerHTML = `
    <div class= "result">
        <h2> Your Score : ${score}/${quizdata.length}</h2>
        <p>${resultMessage}</p>
        <button class="reload" onClick="location.reload()"> Play Again </button>
    </div>`;
  }

});


