// Dropdown tag element, where user can select language
const languageSelect=getElement("id", "languageSelect")
// The default lang is en
loadLanguage("en"); // it is not required to call at the start because tags already have text content in html
// But for future work, I think, it is better to call (to have ability to modify text in json without rewriting html)



// Add event listener for language selection changes
languageSelect.addEventListener("change", async (event) => {
    const selectedLanguage = event.target.value;
    // So at any time after full parsing of HTML (insured by defer), when value of language changed, reload text content
    await loadLanguage(selectedLanguage);
});

/**
 * Load and apply the selected language to the webpage.
 * @param {string} language - The language code (in example we have "en", "fi", but can easily added more).
 */
async function loadLanguage(language) {
  /* I used async instead of .then because it have better readability, performance and generally recommended nowadays */
    try {
        console.log(`Fetching ${language}.json language data`);
  /*
  P.S. I know that using json I kind of hardcoding, but it is better to have predefined translation where possible, in my opinion
  Why so? Because predefined can be corrected by person after receiving from translator;
  It also reduces the load on the translator's API, because you don't have to translate the entire page through the API every time.
  I can implement auto-creation of that json files in the future, if needed, but for now it is enough.
   */
        const response = await fetch(`/locales/${language}.json`);

        if (!response.ok) {
            throw new Error(`Error loading language file: ${response.statusText}`); // You can ignore possible warning here
        }
        const translations = await response.json();
        console.log("Success in fetching lang data")

        console.log(`Applying ${language} language`);
        applyTranslations(translations);
    } catch (error) {
        console.error("Error loading language file:", error);
    }
}

/**
 * Apply translations to elements with `data-i18n` and `data-i18n-placeholder` attributes.
 * @param {Object} translations - The translations object.
 */
function applyTranslations(translations) {
    // Update ALL elements with `data-i18n` automaticly

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.getAttribute("data-i18n");
        if (translations[key]) {
            element.textContent = translations[key];
        }
    });

    // Update elements with `data-i18n-placeholder`
    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
        const key = element.getAttribute("data-i18n-placeholder");
        if (translations[key]) {
            element.setAttribute("placeholder", translations[key]);
        }
    });
}


/* basic functions from my js template */
function getElement(selector, value) {
  let elements;

  // Handle selectors uniformly with querySelector/querySelectorAll
  switch (selector) {
    case 'name':
      elements = document.querySelectorAll(`[name="${value}"]`);
      break;
    case 'id':
      elements = document.querySelectorAll(`#${value}`);
      break;
    case 'tag':
      elements = document.querySelectorAll(value);
      break;
    case 'class':
      elements = document.querySelectorAll(`.${value}`);
      break;
    default:
      console.log(`Unknown selector type: ${selector}`);
      return null;
  }

  if (elements.length === 0) {
    console.log(`No element found with ${selector}: ${value}`);
    return null;
  } else if (elements.length > 1 && selector !== 'id') {
    console.log(`Unexpected duplicates with the same ${selector}: ${value}`);
    return elements;
  } else if (elements.length > 1 && selector === 'id') {
    console.error(`Multiple elements with the same id found: ${value}. Please fix the HTML. It is strongly recommended to have unique id to avoid errors`);
    return elements[0];
  }

  return elements[0];
}
