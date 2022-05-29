var enterBtn = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

enterBtn.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterClickKeyPress);

function inputValidate() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li"); //tag li misaze o har itemi k ezafe mikonim mire too li
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";


    function crossOut() {
        li.classList.toggle("done"); // "done" too .css taarif shode o baraye sabz kardan o nakardn has k toggle komak mikone
    }
    li.addEventListener("click", crossOut);

    var deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("X"));
    li.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", function () {
        li.classList.add("delete"); // delete ro tooye css moshakhas kardim k chikar kone
    });
}


function addListAfterClick() {
    if (inputValidate() > 0) {
        createListElement();
    }
}

function addListAfterClickKeyPress(event) {
    if (inputValidate() > 0 && event.which === 13) { // adade 13 neshangare clide Enter rooye keyboard has
        createListElement();
    }
}

