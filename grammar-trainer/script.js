// =====================
// BASE DE DATOS
// =====================

let banco = [
{
type:"build",
question:"Ordena la oración y conviértela en Past Simple",
words:["yesterday","go","I","to school"],
answer:"I went to school yesterday"
},
{
type:"build",
question:"Ordena la oración y conviértela en Past Simple",
words:["last night","eat","she","pizza"],
answer:"She ate pizza last night"
},
{
type:"build",
question:"Ordena la oración y conviértela en Past Simple",
words:["last week","see","we","a movie"],
answer:"We saw a movie last week"
},
{
type:"build",
question:"Ordena la oración y conviértela en Past Simple",
words:["yesterday","play","they","football"],
answer:"They played football yesterday"
},
{
type:"build",
question:"Ordena la oración y conviértela en Past Simple",
words:["last year","travel","I","to Spain"],
answer:"I traveled to Spain last year"
},
{
type:"build",
question:"Ordena la oración y conviértela en Past Simple",
words:["yesterday","buy","he","a car"],
answer:"He bought a car yesterday"
},
{
type:"build",
question:"Ordena la oración y conviértela en Past Simple",
words:["last night","write","she","a letter"],
answer:"She wrote a letter last night"
},
{
type:"build",
question:"Ordena la oración y conviértela en Past Simple",
words:["yesterday","drink","we","coffee"],
answer:"We drank coffee yesterday"
},
{
type:"build",
question:"Ordena la oración y conviértela en Past Simple",
words:["last weekend","visit","they","their grandparents"],
answer:"They visited their grandparents last weekend"
},
{
type:"build",
question:"Ordena la oración y conviértela en Past Simple",
words:["yesterday","run","I","in the park"],
answer:"I ran in the park yesterday"
},

/* ================= TRANSFORM ================= */

{
type:"transform",
question:"Convierte a Present Perfect",
sentence:"She ate pizza",
answer:"She has eaten pizza"
},
{
type:"transform",
question:"Convierte a Present Perfect",
sentence:"They went home",
answer:"They have gone home"
},
{
type:"transform",
question:"Convierte a Present Perfect",
sentence:"I saw that movie",
answer:"I have seen that movie"
},
{
type:"transform",
question:"Convierte a Past Perfect",
sentence:"He eats breakfast",
answer:"He had eaten breakfast"
},
{
type:"transform",
question:"Convierte a Past Perfect",
sentence:"They go to school",
answer:"They had gone to school"
},
{
type:"transform",
question:"Convierte a Future",
sentence:"She studies English",
answer:"She will study English"
},
{
type:"transform",
question:"Convierte a Future",
sentence:"We play soccer",
answer:"We will play soccer"
},
{
type:"transform",
question:"Convierte a Present Perfect",
sentence:"I finished my homework",
answer:"I have finished my homework"
},
{
type:"transform",
question:"Convierte a Past Perfect",
sentence:"She writes a letter",
answer:"She had written a letter"
},
{
type:"transform",
question:"Convierte a Future",
sentence:"They eat pizza",
answer:"They will eat pizza"
},
{
type:"transform",
question:"Convierte a voz pasiva",
sentence:"She writes a letter",
answer:"A letter is written by her"
},
{
type:"transform",
question:"Convierte a voz pasiva",
sentence:"They build a house",
answer:"A house is built by them"
},
{
type:"transform",
question:"Convierte a voz pasiva",
sentence:"He eats pizza",
answer:"Pizza is eaten by him"
},
{
type:"transform",
question:"Convierte a voz pasiva",
sentence:"She is writing a letter",
answer:"A letter is being written by her"
},
{
type:"transform",
question:"Convierte a voz pasiva",
sentence:"They are playing football",
answer:"Football is being played by them"
},
{
type:"transform",
question:"Convierte a voz pasiva",
sentence:"He is fixing the car",
answer:"The car is being fixed by him"
},
{
type:"transform",
question:"Convierte a voz pasiva",
sentence:"She wrote a letter",
answer:"A letter was written by her"
},
{
type:"transform",
question:"Convierte a voz pasiva",
sentence:"They built a house",
answer:"A house was built by them"
},
{
type:"transform",
question:"Convierte a voz pasiva",
sentence:"He ate pizza",
answer:"Pizza was eaten by him"
},
{
type:"transform",
question:"Convierte a voz pasiva",
sentence:"She was writing a letter",
answer:"A letter was being written by her"
},
{
type:"transform",
question:"Convierte a voz pasiva",
sentence:"They were playing football",
answer:"Football was being played by them"
},
{
type:"transform",
question:"Convierte a voz pasiva",
sentence:"He was fixing the car",
answer:"The car was being fixed by him"
},
{
type:"transform",
question:"Convierte a voz pasiva",
sentence:"She has written a letter",
answer:"A letter has been written by her"
},
{
type:"transform",
question:"Convierte a voz pasiva",
sentence:"They have built a house",
answer:"A house has been built by them"
},
{
type:"transform",
question:"Convierte a voz pasiva",
sentence:"He has eaten pizza",
answer:"Pizza has been eaten by him"
},
{
type:"transform",
question:"Convierte a voz pasiva",
sentence:"She had written a letter",
answer:"A letter had been written by her"
},
{
type:"transform",
question:"Convierte a voz pasiva",
sentence:"They had built a house",
answer:"A house had been built by them"
},
{
type:"transform",
question:"Convierte a voz pasiva",
sentence:"He had eaten pizza",
answer:"Pizza had been eaten by him"
},
{
type:"transform",
question:"Convierte a voz pasiva",
sentence:"She will write a letter",
answer:"A letter will be written by her"
},
{
type:"transform",
question:"Convierte a voz pasiva",
sentence:"They will build a house",
answer:"A house will be built by them"
},
{
type:"transform",
question:"Convierte a voz pasiva",
sentence:"He will eat pizza",
answer:"Pizza will be eaten by him"
},
{
type:"transform",
question:"Convierte a voz pasiva",
sentence:"She is going to write a letter",
answer:"A letter is going to be written by her"
},
{
type:"transform",
question:"Convierte a voz pasiva",
sentence:"They are going to build a house",
answer:"A house is going to be built by them"
},
{
type:"transform",
question:"Convierte a voz pasiva",
sentence:"He is going to eat pizza",
answer:"Pizza is going to be eaten by him"
},
{
type:"transform",
question:"Convierte a voz pasiva",
sentence:"She can write a letter",
answer:"A letter can be written by her"
},
{
type:"transform",
question:"Convierte a voz pasiva",
sentence:"They must build a house",
answer:"A house must be built by them"
},
{
type:"transform",
question:"Convierte a voz pasiva",
sentence:"He should eat pizza",
answer:"Pizza should be eaten by him"
},
{
type:"transform",
question:"Convierte a voz pasiva",
sentence:"She may write a letter",
answer:"A letter may be written by her"
},
{
type:"transform",
question:"Convierte a voz pasiva",
sentence:"They might build a house",
answer:"A house might be built by them"
},
{
type:"transform",
question:"Convierte a voz pasiva",
sentence:"He could eat pizza",
answer:"Pizza could be eaten by him"
},
/* ================= IDENTIFY ================= */

{
type:"identify",
question:"Selecciona el tiempo verbal",
sentence:"I ate pizza yesterday",
options:["Present Simple","Past Simple","Present Perfect"],
correct:1
},
{
type:"identify",
question:"Selecciona el tiempo verbal",
sentence:"She has finished her work",
options:["Past Simple","Present Perfect","Future"],
correct:1
},
{
type:"identify",
question:"Selecciona el tiempo verbal",
sentence:"They will travel tomorrow",
options:["Future","Past Simple","Present Perfect"],
correct:0
},
{
type:"identify",
question:"Selecciona el tiempo verbal",
sentence:"He studies English",
options:["Present Simple","Past Simple","Future"],
correct:0
},
{
type:"identify",
question:"Selecciona el tiempo verbal",
sentence:"We had eaten dinner",
options:["Past Perfect","Present Perfect","Future"],
correct:0
},
{
type:"identify",
question:"Selecciona el tiempo verbal",
sentence:"She is reading a book",
options:["Present Continuous","Past Simple","Future"],
correct:0
},
{
type:"identify",
question:"Selecciona el tiempo verbal",
sentence:"I will call you",
options:["Future","Present Perfect","Past Simple"],
correct:0
},
{
type:"identify",
question:"Selecciona el tiempo verbal",
sentence:"They played football",
options:["Past Simple","Present Simple","Future"],
correct:0
},
{
type:"identify",
question:"Selecciona el tiempo verbal",
sentence:"He has gone home",
options:["Present Perfect","Past Perfect","Future"],
correct:0
},
{
type:"identify",
question:"Selecciona el tiempo verbal",
sentence:"We are studying",
options:["Present Continuous","Past Simple","Future"],
correct:0
},

/* ================= VOICE ================= */

{
type:"voice",
question:"Selecciona voz y tiempo",
sentence:"The cake was eaten by her",
options:[
"Active - Past Simple",
"Passive - Past Simple",
"Passive - Present Perfect"
],
correct:1
},
{
type:"voice",
question:"Selecciona voz y tiempo",
sentence:"She wrote a letter",
options:[
"Active - Past Simple",
"Passive - Past Simple",
"Active - Present Perfect"
],
correct:0
},
{
type:"voice",
question:"Selecciona voz y tiempo",
sentence:"The homework has been done",
options:[
"Passive - Present Perfect",
"Active - Past Simple",
"Passive - Past Simple"
],
correct:0
},
{
type:"voice",
question:"Selecciona voz y tiempo",
sentence:"They are building a house",
options:[
"Active - Present Continuous",
"Passive - Present Continuous",
"Active - Past Simple"
],
correct:0
},
{
type:"voice",
question:"Selecciona voz y tiempo",
sentence:"The car was repaired by him",
options:[
"Passive - Past Simple",
"Active - Past Simple",
"Passive - Present Perfect"
],
correct:0
},

/* ================= BUILD NORMAL ================= */

{
type:"build",
question:"Ordena la oración",
words:["she","is","reading","a book"],
answer:"She is reading a book"
},
{
type:"build",
question:"Ordena la oración",
words:["they","are","playing","football"],
answer:"They are playing football"
},
{
type:"build",
question:"Ordena la oración",
words:["I","have","finished","my homework"],
answer:"I have finished my homework"
},
{
type:"build",
question:"Ordena la oración",
words:["he","will","call","you"],
answer:"He will call you"
},
{
type:"build",
question:"Ordena la oración",
words:["we","are","watching","a movie"],
answer:"We are watching a movie"
},
{
type:"build",
question:"Ordena la oración",
words:["she","has","written","a letter"],
answer:"She has written a letter"
},
{
type:"build",
question:"Ordena la oración",
words:["they","will","travel","tomorrow"],
answer:"They will travel tomorrow"
},
{
type:"build",
question:"Ordena la oración",
words:["I","am","learning","English"],
answer:"I am learning English"
},
{
type:"build",
question:"Ordena la oración",
words:["he","has","gone","home"],
answer:"He has gone home"
},
{
type:"build",
question:"Ordena la oración",
words:["we","will","eat","pizza"],
answer:"We will eat pizza"
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
let user = input.value.trim().toLowerCase();
let correct = q.answer.toLowerCase();

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

// =====================
// INIT
// =====================

generarTest();