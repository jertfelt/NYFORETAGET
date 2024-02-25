const openPhoneMenu = () => {
  const menuButton = document.querySelector(".btn--phone");
  const menuIcon = document.querySelector(".burger-icon");
  const navMenu = document.querySelector(".nav--slide-in");
  const showMenuPhone = document.getElementById("showMenuPhone");

  const isOpen = menuButton.classList.contains("open");

  if (isOpen) {
    menuButton.classList.remove("open");
    menuIcon.classList.remove("open");
    navMenu.classList.remove("open");
    showMenuPhone.style.display = "none"; // Hide the navigation
  } else {
    menuButton.classList.add("open");
    menuIcon.classList.add("open");
    navMenu.classList.add("open");
    showMenuPhone.style.display = "block"; // Show the navigation
  }
};

const openIpadMenu = () => {
  const menuButton = document.querySelector(".btn--ipad");
  const menuIcon = document.querySelector(".burger-icon");
  const navMenu = document.querySelector(".nav--slide-in-ipad");
  const showIpadMenu = document.getElementById("showIpadMenu");

  const isOpen = menuButton.classList.contains("open");

  if (isOpen) {
    menuButton.classList.remove("open");
    menuIcon.classList.remove("open");
    navMenu.classList.remove("open");
    showIpadMenu.style.display = "none"; // Hide the navigation
  } else {
    menuButton.classList.add("open");
    menuIcon.classList.add("open");
    navMenu.classList.add("open");
    showIpadMenu.style.display = "block"; // Show the navigation
  }
};

const toggleDropDown = () => {
  const dropDownMenu = document.getElementById("dropdownMenuServices");
  const btn = document.getElementById("toggleServices");

  const isOpen = dropDownMenu.classList.contains("open");

  if (isOpen) {
    dropDownMenu.classList.remove("open");
  } else {
    dropDownMenu.classList.add("open");
  }

  const rect = btn.getBoundingClientRect();
  dropDownMenu.style.top = rect.bottom = "px";
  dropDownMenu.style.left = rect.left = "px";
};
