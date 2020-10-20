var button = document.getElementById("enter");
var input  = document.getElementById("userinput");
var ul     = document.getElementById("myul");
var button_del = document.getElementsByClassName("delete");
debugger;

function inputLength() {
  return input.value.length;
}

function createListElement() {
       var li = document.createElement("li");
       li.appendChild(document.createTextNode(input.value));
       
       var delButton = document.createElement("button");
       delButton.className = "delete";
       delButton.appendChild(document.createTextNode("Delete"));


       li.appendChild(delButton);
       ul.appendChild(li);
       input.value = "";
}

function addListAfterClick(event) {
   if (inputLength() > 0) {
       createListElement();
   }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
       createListElement();
    }
}

function deleteList(event) {
  console.log("Delete Button is clicked");
}

function toggleLi(event) {
      var eventClass = event.target.classList.value;
      //console.log(eventClass);
      if (eventClass !== "delete") {
          console.log("List is clicked");
          var selectedli = event.target;
          selectedli.classList.toggle("done");
      } else {
          console.log("Delete Button is clicked");
          event.target.parentElement.classList.toggle("invidible_li");
      }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener ("keypress", addListAfterKeypress);
ul.addEventListener("click", toggleLi);
button_del.addEventListener("click", deleteList);
