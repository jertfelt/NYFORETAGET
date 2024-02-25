const homepageSection = document.getElementById("homepage");
const aboutUsSection = document.getElementById("omoss");
const servicesSection = document.getElementById("tjanster");
const seminarsSection = document.getElementById("tjanster/seminarier");
const faqSection = document.getElementById("tjanster/frageladan");
const meetingsSection = document.getElementById("tjanster/traffar");
const contactSection = document.getElementById("contact");
const forstaStegenSection = document.getElementById(
  "tjanster/seminarier/seminarie-forsta-steget"
);

//nodelist
const sections = document.querySelectorAll(".section");

//*---------querystring

const changeActivePage = (sectionName) => {
  // Skapar URL
  const urlWithSearchParams = createURL(sectionName);
  // Uppdaterar sidan
  location.href = urlWithSearchParams;
};

// Skapar URL med angivna parametrar. Funkar även om man bara ger en eller två parametrar
const createURL = (sectionName) => {
  const url = new URL(window.location.href);
  const search_params = url.searchParams;

  // Lägger till section parameter
  search_params.set("section", sectionName);

  // Ger en sträng med komplett URL
  return url.toString();
};

const setActivePage = () => {
  let url = new URL(window.location.href);

  let search_params = url.searchParams;
  // console.log(search_params); ///blir tom vid start  (första gången)

  const currentSection = search_params.get("section");

  if (currentSection) {
    sections.forEach((section) => {
      console.log(section);
      console.log(currentSection, section.id);
      if (section.id === currentSection) {
        if (section.id !== "homepage") {
          homepageSection.classList.add("hidden");
        }
        section.classList.remove("hidden");
      }
    });
  }
};

setActivePage();
