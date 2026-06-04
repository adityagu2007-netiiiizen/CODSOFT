let display =
document.getElementById("display");

let historyList =
document.getElementById(
"historyList"
);

function appendValue(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function deleteLast(){
    display.value =
    display.value.slice(0,-1);
}

function calculate(){

    try{

        let expression =
        display.value;

        let result =
        eval(expression);

        display.value =
        result;

        addToHistory(
            expression,
            result
        );

    }

    catch{
        display.value =
        "Error";
    }
}

function addToHistory(
expression,
result
){

    let item =
    document.createElement(
    "div"
    );

    item.classList.add(
    "history-item"
    );

    item.innerHTML = `
    <p>${expression}</p>
    <h3>${result}</h3>
    `;

    historyList.prepend(
        item
    );
}

function clearHistory(){
    historyList.innerHTML =
    "";
}

function toggleHistory(){

document
.getElementById(
"historyPanel"
)
.classList.toggle(
"show-history"
);

}

function toggleTheme(){
document.body.classList
.toggle("light-mode");
}

/* Keyboard Support */

document.addEventListener(
"keydown",
function(e){

if(!isNaN(e.key) ||
"+-*/.%".includes(e.key)){
    appendValue(e.key);
}

if(e.key==="Enter"){
    calculate();
}

if(e.key==="Backspace"){
    deleteLast();
}

if(e.key==="Escape"){
    clearDisplay();
}

});
