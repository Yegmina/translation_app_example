import {getElement, getValueById} from './basic.js';

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


