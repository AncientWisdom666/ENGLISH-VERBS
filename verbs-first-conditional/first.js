// =====================
// BASE DE DATOS
// =====================

let banco = [

    // =========================
    // BUILD (ordenar palabras)
    // =========================
    {
        type: "build",
        question: "Forma una oración en First Conditional:",
        words: ["if", "you", "study", "you", "will pass"],
        answer: "If you study, you will pass."
    },
    {
        type: "build",
        question: "Forma una oración en First Conditional:",
        words: ["if", "it", "rains", "we", "will stay home"],
        answer: "If it rains, we will stay home."
    },
    {
        type: "build",
        question: "Forma una oración en First Conditional:",
        words: ["if", "you", "don't hurry", "you", "will miss the bus"],
        answer: "If you don't hurry, you will miss the bus."
    },

    // =========================
    // COMPLETE (llenar espacios)
    // =========================
    {
        type: "complete",
        question: "Complete the sentence:",
        sentence: "We ______ (not/play) tennis tomorrow if it ______ (rain).",
        answer: "We will not play tennis tomorrow if it rains."
    },
    {
        type: "complete",
        question: "Complete the sentence:",
        sentence: "She ______ (let) the children play if they ______ (not/make) too much noise.",
        answer: "She will let the children play if they don't make too much noise."
    },
    {
        type: "complete",
        question: "Complete the sentence:",
        sentence: "If we ______ (not/hurry), we ______ (miss) our plane.",
        answer: "If we don't hurry, we will miss our plane."
    },
    {
        type: "complete",
        question: "Complete the sentence:",
        sentence: "The bee ______ (not/sting) you if you ______ (not/move).",
        answer: "The bee will not sting you if you don't move."
    },
    {
        type: "complete",
        question: "Complete the sentence:",
        sentence: "If you ______ (not/speak) louder, no one ______ (hear) you.",
        answer: "If you don't speak louder, no one will hear you."
    },
    {
        type: "complete",
        question: "Complete the sentence:",
        sentence: "We ______ (be) late if we ______ (not/take) the car.",
        answer: "We will be late if we don't take the car."
    },
    {
        type: "complete",
        question: "Complete the sentence:",
        sentence: "If it ______ (not/be) hot tomorrow, we ______ (not/go) to the beach.",
        answer: "If it isn't hot tomorrow, we will not go to the beach."
    },
    {
        type: "complete",
        question: "Complete the sentence:",
        sentence: "If you ______ (not/take) your umbrella, you ______ (get) wet.",
        answer: "If you don't take your umbrella, you will get wet."
    },
    {
        type: "complete",
        question: "Complete the sentence:",
        sentence: "You ______ (not/pass) your test if you ______ (not/study) harder.",
        answer: "You will not pass your test if you don't study harder."
    },
    {
        type: "complete",
        question: "Complete the sentence:",
        sentence: "If he ______ (not/find) a job soon, she ______ (not/marry) him.",
        answer: "If he doesn't find a job soon, she will not marry him."
    },

    // =========================
    // WRITE (escribir completa)
    // =========================
    {
        type: "write",
        question: "Escribe la oración correcta en First Conditional:",
        prompt: "(you / not study / you / fail the exam)",
        answer: "If you don't study, you will fail the exam."
    },
    {
        type: "write",
        question: "Escribe la oración correcta en First Conditional:",
        prompt: "(it / rain / we / not go out)",
        answer: "If it rains, we will not go out."
    },
    {
        type: "write",
        question: "Escribe la oración correcta en First Conditional:",
        prompt: "(she / not eat / she / feel weak)",
        answer: "If she doesn't eat, she will feel weak."
    },
    {
        type: "write",
        question: "Escribe la oración correcta en First Conditional:",
        prompt: "(we / not leave now / we / be late)",
        answer: "If we don't leave now, we will be late."
    },
    {
        type: "write",
        question: "Escribe la oración correcta en First Conditional:",
        prompt: "(he / not work / he / lose his job)",
        answer: "If he doesn't work, he will lose his job."
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

if(q.type==="complete"){
html += `
<p><b>${q.sentence}</b></p>
<input class="form-control"
data-index="${i}"
value="${respuestasUsuario[i] || ""}">
`;
}

if(q.type==="write"){
html += `
<p>${q.prompt}</p>
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

if(q.type==="build" || q.type==="transform" || q.type==="complete" || q.type==="write"){

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