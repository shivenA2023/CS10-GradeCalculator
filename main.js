//Program Title

//Button Click Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  console.log("hi");
  //INPUT
  let one = +document.getElementById("one-in").value;
  let two = +document.getElementById("two-in").value;
  let three = +document.getElementById("three-in").value;
  let four = +document.getElementById("four-in").value;
  let five = +document.getElementById("five-in").value;

  //PROCESS
  let mark = (one + two + three + four + five) / 5;

  //OUTPUT
  document.getElementById("output").innerHTML = Math.round(mark);
}
