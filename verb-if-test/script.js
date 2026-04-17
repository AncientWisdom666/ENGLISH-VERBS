// =====================
// BASE DE DATOS
// =====================

let banco = [
    {
        type: "build",
        question: "Forma una oración en Zero Conditional con estas palabras:",
        words: ["you", "eat", "too much", "you get fat"],
        answer: "If you eat too much, you get fat."
    },
    {
        type: "build",
        question: "Forma una oración en Zero Conditional con estas palabras:",
        words: ["you", "drink water", "you feel better"],
        answer: "If you drink water, you feel better."
    },
    {
        type: "build",
        question: "Forma una oración en Zero Conditional con estas palabras:",
        words: ["you", "sleep", "well", "you feel happy"],
        answer: "If you sleep well, you feel happy."
    },
    {
        type: "build",
        question: "Forma una oración en Zero Conditional con estas palabras:",
        words: ["you", "study hard", "you learn a lot"],
        answer: "If you study hard, you learn a lot."
    },
    {
        type: "build",
        question: "Forma una oración en Zero Conditional con estas palabras:",
        words: ["you", "exercise", "you stay healthy"],
        answer: "If you exercise, you stay healthy."
    },
    {
        type: "build",
        question: "Forma una oración en Zero Conditional con estas palabras:",
        words: ["you", "don't sleep", "enough", "you feel tired"],
        answer: "If you don't sleep enough, you feel tired."
    },
    {
        type: "build",
        question: "Forma una oración en Zero Conditional con estas palabras:",
        words: ["you", "smile", "people feel happy"],
        answer: "If you smile, people feel happy."
    },
    {
        type: "build",
        question: "Forma una oración en Zero Conditional con estas palabras:",
        words: ["you", "help others", "they help you"],
        answer: "If you help others, they help you."
    },
    {
        type: "build",
        question: "Forma una oración en Zero Conditional con estas palabras:",
        words: ["you", "speak English", "you improve"],
        answer: "If you speak English, you improve."
    },
    {
        type: "build",
        question: "Forma una oración en Zero Conditional con estas palabras:",
        words: ["you", "read books", "you learn new words"],
        answer: "If you read books, you learn new words."
    },
    {
        type: "build",
        question: "Forma una oración en Zero Conditional con estas palabras:",
        words: ["you", "are nice", "people like you"],
        answer: "If you are nice, people like you."
    },
    {
        type: "build",
        question: "Forma una oración en Zero Conditional con estas palabras:",
        words: ["you", "don't eat", "you get hungry"],
        answer: "If you don't eat, you get hungry."
    },
    {
        type: "build",
        question: "Forma una oración en Zero Conditional con estas palabras:",
        words: ["you", "watch TV", "you learn English"],
        answer: "If you watch TV in English, you learn English."
    },
    {
        type: "build",
        question: "Forma una oración en Zero Conditional con estas palabras:",
        words: ["you", "listen to music", "you feel happy"],
        answer: "If you listen to music, you feel happy."
    },
    {
        type: "build",
        question: "Forma una oración en Zero Conditional con estas palabras:",
        words: ["you", "go to bed late", "you wake up tired"],
        answer: "If you go to bed late, you wake up tired."
    },
    {
        type: "build",
        question: "Forma una oración en Zero Conditional con estas palabras:",
        words: ["you", "practice every day", "you get better"],
        answer: "If you practice every day, you get better."
    },
    {
        type: "build",
        question: "Forma una oración en Zero Conditional con estas palabras:",
        words: ["you", "are kind", "friends like you"],
        answer: "If you are kind, friends like you."
    },
    {
        type: "build",
        question: "Forma una oración en Zero Conditional con estas palabras:",
        words: ["you", "don't study", "you forget things"],
        answer: "If you don't study, you forget things."
    },
    {
        type: "build",
        question: "Forma una oración en Zero Conditional con estas palabras:",
        words: ["you", "eat fruit", "you stay healthy"],
        answer: "If you eat fruit, you stay healthy."
    },
    {
        type: "build",
        question: "Forma una oración en Zero Conditional con estas palabras:",
        words: ["you", "work hard", "you succeed"],
        answer: "If you work hard, you succeed."
    }
];

// =====================
// VARIABLES
// =====================

let test = [];
let respuestasUsuario = {};

// =====================
// GENERAR TEST
// =====================

function generarTest(){

test = shuffle([...banco]).slice(0,10).map((q,i)=>({
    ...q,
    id: "q" + i
}));

respuestasUsuario = {};

render();
}

// =====================
// RENDER
// =====================

function render(){

let app = document.getElementById("app");
app.innerHTML = "";

test.forEach((q,i)=>{

let col = document.createElement("div");
col.className = "col-md-6";

let html = `
<div class="card p-3 h-100">
<h6>${i+1}. ${q.question}</h6>
`;

// BUILD
if(q.type==="build"){
html += `
<p>${shuffle([...q.words]).join(" / ")}</p>
<input class="form-control"
data-index="${i}"
value="${respuestasUsuario[i] || ""}">
`;
}

// TRANSFORM
if(q.type==="transform"){
html += `
<p><b>${q.sentence}</b></p>
<input class="form-control"
data-index="${i}"
value="${respuestasUsuario[i] || ""}">
`;
}

// OPCIONES
if(q.type==="identify" || q.type==="voice"){

html += `<p><b>${q.sentence}</b></p>`;

q.options.forEach((opt,j)=>{

let checked = respuestasUsuario[i] == j ? "checked" : "";

html += `
<div class="form-check opcion">
    <input 
        class="form-check-input"
        type="radio"
        name="${q.id}"
        id="${q.id}-${j}"
        value="${j}"
        ${checked}
        onchange="guardarRespuesta(${i}, ${j})"
    >

    <label class="form-check-label w-100" for="${q.id}-${j}">
        ${opt}
    </label>
</div>
`;

});
}

html += `<div id="ans-${i}" class="mt-2"></div>`;
html += `</div>`;

col.innerHTML = html;
app.appendChild(col);

});

document.getElementById("alertBox").innerHTML = "";
}

// =====================
// GUARDAR RESPUESTA
// =====================

function guardarRespuesta(i, valor){

respuestasUsuario[i] = valor;

// pintar selección azul
document.querySelectorAll(`input[name='q${i}']`).forEach(r=>{
    r.parentElement.classList.remove("seleccionado");
});

let selected = document.querySelector(`input[name='q${i}'][value='${valor}']`);
if(selected){
    selected.parentElement.classList.add("seleccionado");
}

}

// =====================
// CORREGIR
// =====================

function corregir(){

let correctas = 0;

test.forEach((q,i)=>{

let card = document.querySelectorAll(".card")[i];
let answerBox = document.getElementById(`ans-${i}`);
answerBox.innerHTML = "";

// limpiar colores previos
card.classList.remove("card-correct","card-wrong","card-empty");

// =====================
// INPUTS
// =====================

if(q.type==="build" || q.type==="transform"){

let input = document.querySelector(`input[data-index='${i}']`);
let user = normalizar(input.value);
let correct = normalizar(q.answer);

input.disabled = true;

if(user === correct){

card.classList.add("card-correct");
answerBox.innerHTML = `✔ Correcto`;
correctas++;

}else if(user === ""){

card.classList.add("card-empty");
answerBox.innerHTML = `⚠ No respondida<br>`;

}else{

card.classList.add("card-wrong");
answerBox.innerHTML = `❌ Incorrecto<br>✔ Correcto: ${q.answer}`;
}

}

// =====================
// RADIO
// =====================

if(q.type==="identify" || q.type==="voice"){

let selected = respuestasUsuario[i];

document.querySelectorAll(`input[name='${q.id}']`).forEach(r => {
r.disabled = true;
});

// no respondió
if(selected === undefined){

card.classList.add("card-empty");
answerBox.innerHTML = `⚠ No respondida<br>`;
return;

}

// pintar opciones
document.querySelectorAll(`input[name='${q.id}']`).forEach(r => {

let val = parseInt(r.value);

// correcta
if(val === q.correct){
r.parentElement.classList.add("bg-success","text-white","rounded","p-1");
}

// incorrecta elegida
if(val === selected && val !== q.correct){
r.parentElement.classList.add("bg-danger","text-white","rounded","p-1");
}

});

// resultado
if(parseInt(selected) === q.correct){

card.classList.add("card-correct");
answerBox.innerHTML = `✔ Correcto`;
correctas++;

}else{

card.classList.add("card-wrong");
answerBox.innerHTML = `❌ Incorrecto<br>✔ Correcto: ${q.options[q.correct]}`;
}

}

});

// RESULTADO FINAL
document.getElementById("alertBox").innerHTML = `
<div class="alert alert-primary text-center">
Resultado final: <b>${correctas} / ${test.length}</b>
</div>
`;

}

// =====================
// UTIL
// =====================

function shuffle(arr){
return arr.sort(()=>Math.random()-0.5);
}


function normalizar(texto){
return texto
    .toLowerCase()
    .trim()
    .replace(/\./g,"")        
    .replace(/\s+/g, " ");    
}


// =====================
// INIT
// =====================

generarTest();