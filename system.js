
let question = [];
let Outcontainer = document.getElementById("output-container");

function num(key){
    const num = key;
    const div = document.createElement("div");
    div.textContent = num;
    Outcontainer.appendChild(div);
}
function operator(key){
    if (key === 'clear') {
        Outcontainer.innerHTML=" ";
    } else if(key === 'plus') {
        Outcontainer.appendChild('+');
    } else if(key === 'minus') {
        Outcontainer.appendChild('-');
    }
}
function show() {
    question.push({
            Fnumber: num,
            Operator: operator,
            Lnumber: lkey
        });
}
