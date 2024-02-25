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
    case "registerform":
      modalContent.innerHTML = `
      <div class="modal" id="modalDiv">
      <div class="modal--registerform ">
      <button class="modal--close" onclick="closeModal()">&times;</button>
      <div>
                  <h1 class="h2--main form__h1">
                    Anmäl ditt intresse till seminariet Första Stegen
                  </h1>
                  <form
                    id="registerInterest"
                    action="/submit-form"
                    method="post"
                    class="form--register"
                  >
                    <label for="contactPerson" id="contactPersonLabel">
                      Kontaktperson:
                    </label>
                    <input
                      type="text"
                      id="contactPerson"
                      name="contactPerson"
                      placeholder="Ditt namn"
                      required
                    />
                    <!-- Om tom visa nedan:-->
                    <span id="contactPersonError" class="error--txt"></span>

                    <fieldset>
                      <legend id="contactMethodLabel">
                        Välj kontaktmetod:
                      </legend>
                      <!-- Om ej vald, visa nedan: -->
                      <span id="contactMethodError" class="error--txt"></span>
                      <span class="radiospan">
                        <input
                          type="radio"
                          id="phoneContact"
                          name="contactMethod"
                          value="phoneContact"
                          required
                        />
                        <label for="phoneContact">Telefon</label>
                      </span>
                      <span class="radiospan">
                        <input
                          type="radio"
                          id="emailContact"
                          name="contactMethod"
                          value="emailContact"
                          required
                        />
                        <label for="emailContact">Email</label>
                      </span>
                    </fieldset>

                    <label id="contactDetailLabel" for="contactDetail"
                      >Telefon/Email:</label
                    >
                    <input
                      type="text"
                      id="contactDetail"
                      name="contactDetail"
                      placeholder="Telefonnummer/Email"
                      required
                    />
                    <!-- Om fel på kontaktuppgifter visa nedan:  -->
                    <span id="contactDetailError" class="error--txt"></span>

                    <span class="formcontainer--labelandinfo">
                      <label
                        class="organisationInputLabel"
                        for="organisationInput"
                        >Organisationsnummer:</label
                      >
                      <p class="info">(valfritt)</p>
                    </span>
                    <label
                      class="notmobile organisationInputLabel"
                      for="organisationInput"
                      >Organisationsnummer:</label
                    >
                    <span class="row--notmobile">
                      <input
                        type="text"
                        id="organisationInput"
                        name="orgNr"
                        placeholder="10 siffror"
                      />
                      <p class="detail info--optional">(valfritt)</p>
                    </span>
                    <!-- Om fel på organisationsnummer visa nedan: -->
                    <span id="organisationError" class="error--txt"></span>

                    <span class="formcontainer__labelandinfo">
                      <label for="companyName">Företagsnamn:</label>
                      <p class="info">(valfritt)</p>
                    </span>
                    <label for="companyName" class="notmobile"
                      >Företagsnamn:</label
                    >
                    <span class="row--notmobile">
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        placeholder="Företagsnamn AB"
                      />
                      <p class="detail info--optional">(valfritt)</p>
                    </span>
                    <!-- Om  fel på flera ställen, visa errormeddelande nedan: -->
                    <span id="errorMsgMultiple" class="error--txt-several">
                    </span>

                    <span class="container__btn">
                      <button class="btn--primary btn--form" type="submit">
                        Skicka
                      </button>
                      <button
                        id="redirectSeminar"
                        class="btn--secondary btn--form"
                        type="button"
                      >
                        Läs mer
                      </button>
                    </span>
                  </form>

                  <div class="form__span-details">
                    <p class="detail">Intresseanmälan är inte bindande.</p>
                    <p class="detail">
                      Vi samlar in telefonnummer och e-postadresser från
                      formulär för att effektivt kommunicera med våra kudner och
                      följer strikt GDPR för att säkerställa deras integritet
                      och dataskydd.
                    </p>
                  </div>
                </div>
      
      `;
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
