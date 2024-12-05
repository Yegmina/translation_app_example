//import {getElement, getValueById} from './basic';

let notificationText=getElement("id", "notification")
let translateButton=getElement("id", "translateButton")
translateButton.addEventListener("click", async () => {
    const textInput = getValueById("textInput").trim(); // if needed, .lowercase (probably not)
    const outputSection = getElement("id","outputSection");
    const translatedText = getElement("id", "translatedText");
    const loadingMessage = getElement("id", "loadingMessage");

    // Show loading message (to notify user that request sent and now he/she needs just wait)
    loadingMessage.style.display = "block";
    outputSection.style.display = "none";

    if (!textInput) {
        //alert("Please enter some text to translate.");
        notificationText.textContent="Please, enter some text to translate!"
        loadingMessage.style.display = "none";
        return;
    }

    try {
        const response = await fetch("/translate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text: textInput }),
        });

        if (!response.ok) {
            throw new Error("Failed to fetch translation."); // Warning can be ignored
        }

        const data = await response.json();
        if (data.error) {
            throw new Error(data.error); // Warning can be ignored
        }

        // Update the UI with the translated text
        translatedText.textContent = data.translatedText;
        outputSection.style.display = "block";
    } catch (error) {
        console.error("Translation error:", error);
        alert("An error occurred while translating the text.");
    } finally {
        loadingMessage.style.display = "none";
    }
});


 /* basic functions from my js template */

 /*get value or element functions*/
function getValueByName(local_name) {
  const element = getElement('name', local_name);
  return element ? element.value : null;
}

function getValueById(local_id) {
  const element = getElement('id', local_id);
  return element ? element.value : null;
}

function getValueByTagName(local_tag) {
  const element = getElement('tag', local_tag);
  return element ? element.value : null;
}

function getValueByClassName(local_class) {
  const element = getElement('class', local_class);
  return element ? element.value : null;
}


function getElement(selector, value) {
  let elements;

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
