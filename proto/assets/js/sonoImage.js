/* Change / hide img */
function toggleImage(identifier, button) {
  hideImages();
  let image = document.getElementById(identifier);
  image.style.display = "block";

  let titleTarget = document.querySelector(".element-flexible p");
  titleTarget.textContent = button.firstElementChild.textContent;
}

function hideImages() {
  let imagesBox = document.querySelectorAll(".hiddenSpeaker");
  imagesBox.forEach((el) => {
    el.style.display = "none";
  });
}


