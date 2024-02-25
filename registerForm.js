document.getElementById("registerInterest").addEventListener("submit", (e) => {
  e.preventDefault();

  //validation
  let formValid = true;
  let typeOfError = [];
  let errorMethod = false;
  let errorDetail = false;
  let errorOrg = false;
  let errorContact = false;

  const contactPersonInput = document.getElementById("contactPerson");
  const contactPersonLabel = document.getElementById("contactPersonLabel");
  const contactPersonError = document.getElementById("contactPersonError");
  const contactPersonValue = contactPersonInput.value.trim();

  const contactMethodLabel = document.getElementById("contactMethodLabel");
  const contactMethodInputs = document.querySelectorAll(
    'input[name="contactMethod"]'
  );
  const contactMethodValue = document.querySelector(
    'input[name="contactMethod"]:checked'
  );
  const contactMethodError = document.getElementById("contactMethodError");

  const contactDetailInput = document.getElementById("contactDetail");
  const contactDetailValue = contactDetailInput.value.trim();
  const contactDetailLabel = document.getElementById("contactDetailLabel");
  const contactDetailError = document.getElementById("contactDetailError");

  const organisationNumberInput = document.getElementById("organisationInput");
  const organisationNumberValue = organisationNumberInput.value.trim();
  const organisationInputLabel = document.querySelectorAll(
    ".organisationInputLabel"
  );
  const organisationError = document.getElementById("organisationError");

  let errorMultiple = false;
  const errorMultipleSpan = document.getElementById("errorMsgMultiple");

  if (contactPersonValue === "") {
    formValid = false;
    errorContact = true;
    typeOfError.push("empty");
    contactPersonError.innerHTML = "Ange namnet på kontaktpersonen";
  }
  if (!contactMethodValue) {
    formValid = false;
    errorMethod = true;
    typeOfError.push("empty");
    contactMethodError.innerHTML = "Ange en kontaktmetod.";
  }
  if (organisationNumberValue !== "") {
    if (!/^\d{10}$/.test(organisationNumberValue)) {
      formValid = false;
      errorOrg = true;
      typeOfError.push("wrongAmount");
      organisationError.innerHTML = "Organisationsnumret måste ha 10 siffror.";
    } else if (!/^\d+$/.test(organisationNumberValue)) {
      formValid = false;
      errorOrg = true;
      typeOfError.push("wrongFormat");
      organisationError.innerHTML =
        "Organisationsnumret får endast innehålla siffror.";
    }
  }
  if (contactDetailValue === "") {
    formValid = false;
    errorDetail = true;
    typeOfError.push("empty");
    contactDetailError.innerHTML = "Ange telefonnummer eller mailadress.";
  } else {
    if (contactMethodValue.value === "phoneContact") {
      if (
        !/^\d+$/.test(contactDetailValue) ||
        contactDetailValue.length !== 10
      ) {
        formValid = false;
        errorDetail = true;
        typeOfError.push("wrongAmount");
        contactDetailError.innerHTML = "Telefonnumret måste ha 10 siffror.";
      }
      if (!/^\d+$/.test(contactDetailValue)) {
        typeOfError.push("wrongFormat");
        formValid = false;
        errorDetail = true;
        contactDetailError.innerHTML =
          "Telefonnumret får endast innehålla siffror.";
      }
    } else if (contactMethodValue.value === "emailContact") {
      if (!contactDetailValue.includes("@")) {
        formValid = false;
        errorDetail = true;
        typeOfError.push("wrongFormat");
        contactDetailError.innerHTML = "Emailadressen måste innehålla '@'.";
      }
    }
  }

  const resetAll = () => {
    contactPersonInput.classList.remove("error--input");
    contactPersonLabel.classList.remove("error--txt");
    contactPersonError.style.display = "none";
    contactMethodLabel.classList.remove("error--txt");
    contactMethodInputs.forEach((input) => {
      input.classList.remove("error--input");
    });
    contactMethodError.style.display = "none";
    contactDetailLabel.classList.remove("error--txt");
    contactDetailInput.classList.remove("error--input");
    contactDetailError.style.display = "none";
    organisationNumberInput.classList.remove("error--input");
    organisationInputLabel.forEach((input) => {
      input.classList.remove("error--txt");
    });
    organisationError.style.display = "none";
    typeOfError.length = 0;
    errorMethod = false;
    errorDetail = false;
    errorOrg = false;
    errorContact = false;
    errorMultiple = false;
  };

  if (!formValid) {
    if (errorContact) {
      contactPersonInput.classList.add("error--input");
      contactPersonLabel.classList.add("error--txt");
      contactPersonError.style.display = "block";
    }
    if (errorMethod) {
      contactMethodLabel.classList.add("error--txt");
      contactMethodInputs.forEach((input) => {
        input.classList.add("error--input");
      });
      contactMethodError.style.display = "block";
    }
    if (errorDetail) {
      contactDetailLabel.classList.add("error--txt");
      contactDetailInput.classList.add("error--input");
      contactDetailError.style.display = "block";
    }
    if (errorOrg) {
      organisationNumberInput.classList.add("error--input");
      organisationInputLabel.forEach((input) => {
        input.classList.add("error--txt");
      });
      organisationError.style.display = "block";
    }
    if (typeOfError.length > 1) {
      errorMultiple = true;
      errorMultipleSpan.style.display = "block";
      if (typeOfError.every((error) => error === "empty")) {
        errorMultipleSpan.innerHTML =
          "Kontrollera att alla obligatoriska fält är ifyllda och att informationen är korrekt.";
      } else if (typeOfError.every((error) => error === "wrongAmount")) {
        errorMultipleSpan.innerHTML =
          "Flera fält innehåller felaktigt antal siffror. Kontrollera och korrigera dem innan du skickar formuläret.";
      } else if (typeOfError.every((error) => error === "wrongFormat")) {
        errorMultipleSpan.innerHTML =
          "Flera fält innehåller felaktiga värden.  Kontrollera och korrigera dem innan du skickar formuläret.";
      } else {
        errorMultipleSpan.innerHTML =
          "Ett eller flera fält innehåller felaktiga värden eller har felaktigt antal tecken. Kontrollera och korrigera dem innan du skickar formuläret.";
      }
    } else {
      errorMultipleSpan.innerHTML = "";
      errorMultipleSpan.style.display = "none";
    }
  } else {
    resetAll();
    openModal("registerInterestConfirmation");
  }
});
