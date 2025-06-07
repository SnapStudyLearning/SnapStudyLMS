
function allowDrop(ev) { ev.preventDefault(); }
function drag(ev) { ev.dataTransfer.setData("text", ev.target.id); }
function drop(ev) {
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  if (data === ev.target.dataset.word) {
    ev.target.innerHTML = data;
    document.getElementById("result").innerText = "Correct!";
  } else {
    document.getElementById("result").innerText = "Try again!";
  }
}
