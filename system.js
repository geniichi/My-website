
let question = [];
let Outcontainer = document.getElementById("output-container");

function num(key){
    const num = key;
    const div = document.createElement("div");
    div.textContent = num;
    Outcontainer.appendChild(div);
    solve(key);
}

function operator(key){
    if (key === 'clear') {
        Outcontainer.innerHTML=" ";
    } else if(key === 'plus') {
        let div = document.createElement("div");
        div.textContent = "+";
        Outcontainer.appendChild(div);
        solve('+');
    } else if(key === 'minus') {
        let div = document.createElement("div");
        div.textContent = "-";
        Outcontainer.appendChild(div);
    } else if(key === 'multiply') {
        let div = document.createElement("div");
        div.textContent = "*";
        Outcontainer.appendChild(div);
    } else if(key === 'divide') {
        let div = document.createElement("div");
        div.textContent = "/";
        Outcontainer.appendChild(div);
    } else if(key === 'solve') {
        let div = document.createElement("div");
        div.textContent = "=";
        Outcontainer.innerText = eval(Outcontainer.innerText);
    } else if (key === 'delete') {
        let element = Outcontainer.lastChild;
        element.remove();
    }
}
