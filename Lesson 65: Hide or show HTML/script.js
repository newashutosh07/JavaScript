const image = document.getElementById("myImg");
const myBtn = document.getElementById("btn");

myBtn.addEventListener("click", (e) => {
  if ((image.style.visibility = "hidden")) {
    image.style.visibility = "visible";
    myBtn.textContent = "Hide";
  } else {
    image.style.visibility = "hidden";
    myBtn.textContent = "Show";
  }
});
