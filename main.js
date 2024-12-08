import '/style.css'

let hint = true
$('#magazine').turn({ gradients: true, acceleration: true, when: { turning: () => { hint = false } } });

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