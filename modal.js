const openModal = (type) => {
  const modalRoot = document.getElementById("modal-root");
  const modalContent = document.createElement("div");
  document.getElementById("overlay-root").style.display = "block";
  modalRoot.style.display = "block";

  switch (type) {
    case "registerInterestConfirmation":
      modalContent.innerHTML = `
      <div class="modal" id="modalDiv">
        <div class="modal--registerconfirmationcontent">
          <button class="modal--close" onclick="closeModal()">&times;</button>
          <div>
            <h2 class="h2--main">Tack!</h2>
            <p class="modal--paragraph paragraph">Vi har mottagit din anmälan till det kommande seminariet. Vi ser fram emot att träffa dig och dela med oss av insikter. Om du har några frågor eller behöver ytterligare information, tveka inte att kontakta oss på <a href="mailto:info@nyforetaget.se" class="paragraph--link">info@nyforetaget.se</a>
              <br/> <br/>
              Håll utkik efter kommande e-postmeddelanden eller SMS med detaljer om seminariet och hur du kan förbereda dig.
            </p>
            <button class="btn--primary" onclick="closeRedirect('seminarie')">Se mer</button>
          </div>
        </div>
      </div>`;
      break;
    default:
      modalContent.innerHTML = `<div class="modal" id="modalDiv">
      <div class="modal--error">
        <button class="modal--close" onclick=closeModal()>&times;</button>
          <h2 class="h2--main">
            Något har gått fel!</h2>
          <button class="btn--primary" onclick=closeModal()>Stäng</button>
          </div>
          </div>`;
  }

  modalRoot.appendChild(modalContent);
};

const closeModal = () => {
  const modalRoot = document.getElementById("modal-root");
  modalRoot.innerHTML = ``;
  document.getElementById("overlay-root").style.display = "none";
  modalRoot.style.display = "none";
};

const closRedirect = (type) => {
  closeModal();
  switch (type) {
    case "seminarie":
      window.location.href = "/seminarie-1";
      break;
    default:
      window.location.href = "/";
  }
};

window.onclick = (e) => {
  const modal = document.getElementById("modalDiv");
  if (e.target == modal) {
    modal.style.display = "none";
  }
};
