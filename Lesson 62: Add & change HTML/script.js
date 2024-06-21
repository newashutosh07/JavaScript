// // ---------------- EXAMPLE 1 <h1> -------------------

// // STEP 1 CREATE THE ELEMENT
const newH1 = document.createElement("h1");

// // STEP 2 ADD ATTRIBUTES/PROPERTIES
newH1.textContent = "Ashutosh";

// document.body.append(newH1);
// document.body.prepend(newH1);

// newH1.id = "myH1";

newH1.style.color = "tomato";
newH1.style.textAlign = "center";

// // document.getElementById("box2").append(newH1);
document.getElementById("box2").prepend(newH1);

// const box2 = document.getElementById("box2");

// // document.body.insertBefore(newH1, box3);

// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[3]);

// REMOVE HTML ELEMENT

document.getElementById("box2").removeChild(newH1);
