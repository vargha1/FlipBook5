import '/style.css'

let hint = true
$('#magazine').turn({ gradients: true, acceleration: true, when: { turning: () => { hint = false } } });

const regex = /\?(\d+)$/; // Captures the number after the question mark
const match = window.location.href.match(regex);
$('#magazine').turn("page", match ? match[1] : 1)

setInterval(() => {
  if (hint == true) {
    $('#magazine').turn("peel", "tr");
  }
}, 1000)

setInterval(() => {
  if (hint == true) {
    $('#magazine').turn("peel", false);
  }
}, 2000)

setInterval(() => {
  document.getElementById("arrow").classList.toggle("invisible")
}, 1000)