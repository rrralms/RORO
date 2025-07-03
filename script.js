function openEnvelope() {
  document.getElementById("envelope").querySelector(".flap").style.transform = "rotateX(180deg)";
  document.getElementById("letter").classList.add("show");
}

function closeEnvelope() {
  document.getElementById("envelope").querySelector(".flap").style.transform = "rotateX(0deg)";
  document.getElementById("letter").classList.remove("show");
}


document.addEventListener("DOMContentLoaded", function() {
  const flap = document.querySelector("#envelope .flap");
  let isOpen = false;

  flap.style.cursor = "pointer";
  flap.addEventListener("click", function() {
    if (!isOpen) {
      openEnvelope();
      isOpen = true;
    } else {
      closeEnvelope();
      isOpen = false;
    }
  });
});
