const quizData = [
    {
        question: "what is the output of 4/2*4**2+4+1 ",
        a: "37",
        b: "37.0",
        c: "38",
        d: "35",
        correct: "b",
    },
    {
        question: "what is the output of 10*2**2-3--1",
        a: "37.0",
        b: "37",
        c: "38",
        d: "38.0",
        correct: "d",
    },
    {
        question: "which of the following is not a data structure?",
        a: "int",
        b: "List",
        c: "tupple",
        d: "set",
        correct: "a",
    },
    {
        question: "what is the output of\n x=Advanced level ICT \n s1=x.split()\n print(s1)",
        a: "['advanced','level','ict']",
        b: "['advanced','level']",
        c: "Error",
        d: "No output",
        correct: "a",
    },
	    {
        question: "what is the output of\n x=HELLO \n s1=x.lower()\n print(s1)",
        a: "[hello]",
        b: "'hello'",
        c: "hello",
        d: "Hello",
        correct: "c",
    },
		    {
        question: "s='I am dhanushki'\n q=len(s)\n print(q)",
        a: "12",
        b: "14",
        c: "3",
        d: "Error",
        correct: "b",
    },
	   {
        question: "a=[50,60,70,75,80]\n print(a[0::3])",
        a: "[50,75]",
        b: "50,75",
        c: "[50,60,70,75,80]",
        d: "[50,60,70,75]",
        correct: "a",
    },
];
const quiz= document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;
loadQuiz();
function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}
function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++;
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz();
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})