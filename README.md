
# Translation App Example

A multilingual web application that translates text from English to Finnish and allows users to switch between multiple languages for the user interface.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [File Structure](#file-structure)
- [Usage](#usage)
- [Future Enhancements](#future-enhancements)
- [License](#license)

---

## Features

1. **Text Translation**  
   - Translate text from English to Finnish using a pre-trained language model (`Helsinki-NLP/opus-mt-en-fi`).
   
2. **Language Switcher**  
   - Dynamically switch the web page's interface language between English and Finnish.

3. **Predefined Translations**  
   - Utilize predefined JSON translation files for better performance and consistency.

4. **Responsive UI**  
   - User-friendly interface with real-time feedback for translation.

5. **Dynamic Resource Serving**  
   - Efficient serving of static resources like videos, stylesheets, and scripts.

---

## Technologies Used

- **Backend**: Flask (Python)
- **Frontend**: HTML, CSS, JavaScript
- **Translation Model**: Hugging Face Transformers (`Helsinki-NLP/opus-mt-en-fi`)
- **JSON Localization**: Custom localization logic for predefined translations.

---

## Setup Instructions

### Prerequisites

- Python (3.8 or later recommended)
- pip (Python package manager)
- A virtual environment (optional, but recommended)

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Yegmina/translation_app_example.git
   cd translation-app-example
   ```

2. **Set up a virtual environment**
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the application**
   ```bash
   python app.py
   ```

5. **Access the application**  
   Open a browser and navigate to [http://127.0.0.1:5000](http://127.0.0.1:5000).

   P.S. You can switch the host, port, or enable network-wide access in `app.py` by modifying:  
   ```
   app.run(host="127.0.0.1", port=5000, debug=True)
   ```  
   - **To allow network-wide access:** Change `host` to `0.0.0.0`.  
     Example:  
     ```
     app.run(host="0.0.0.0", port=5000, debug=True)
     ```  
     After this, you can access the app using the device's IP address (e.g., `http://192.168.x.x:5000`).  

   - **To use a custom port:** Change `port` to your desired number.  
     Example:  
     ```
     app.run(host="127.0.0.1", port=8080, debug=True)
     ```  

   - **To deploy on a custom domain:** Ensure the domain resolves to your server's IP. Update DNS settings and run the app on port `80` (default for HTTP):  
     ```
     app.run(host="0.0.0.0", port=80, debug=True)
     ```  
---

## File Structure

```
.
├── .gitignore            # ignore some cashe files
├── README.md             # Project documentation
├── app.py                # Main application file (Flask backend server)
├── requirements.txt      # Project dependencies, which recomended to install
├── locales/              # Translation files (predefined)
│   ├── en.json           # English translations
│   └── fi.json           # Finnish translations
├── static/               # Static files
│   ├── fonts/            # For future developing
│   ├── images/           # Also for future
│   ├── scripts/          # Scripts for frondend (js)
│   │   ├── anim.js       # Script for animations and video loading etc
│   │   ├── basic.js      # Part of my js template, functions that I used in other scripts
│   │   ├── language_switcher.js      # Switch language of webpage
│   │   └── main.js       # Main js file, send translation request to backend and other main logics
│   ├── styles/           # CSS files (and other styles in future)
│   │   └── main.css      # main (and only 1 for now) css stylesheet
│   └── videos/           # Video files
│       └── background.mp4      # background video
├── templates/            # HTML templates
│   └── index.html        # The main index.html, loaded in basic link by flask backend
└── utils/                # Utility scripts (python)
    └── translation.py    # Translation logic functions
  
```

---

## Usage

1. **Translate Text**
   - Enter text in the input box and click the "Translate" button to get the translation.

2. **Switch Language**
   - Use the dropdown in the header to switch between English and Finnish for the web page's interface.

3. **Error Handling**
   - The app provides error messages for missing input or server issues.

---

## Future Enhancements

1. Add support for more languages (and different language models).
2. Add an admin panel to manage predefined translations user-friendly (without needs to change json files).
3. Extend the app to support text-to-speech functionality and much more features.

---

## License

This project is open-source and available under the [MIT License](LICENSE).

---

## Author

- **Tereshchenko Yehor**
  - [LinkedIn](https://www.linkedin.com/in/yehor-tere/)
  - [GitHub](https://github.com/Yegmina)

## Donate

If you found this project useful and would like to support its development, feel free to donate using the following cryptocurrency addresses:

### Bitcoin (BTC)
`1NvrQuGSVrBHp56LFFzyNJEU6jw6jUvqYx`

### Ethereum (ETH, ERC20)
`0x621853fabf6e841fb6ae87ec0670ba07aea57c07`

### TONchain (TON)
`UQDzsJFJchCm7GUsgwixPeldVr5S8tIHpfqzeJtQJL3KqmsR`

### Solana (SOL)
`CqSwxc7cYw8k7Hsi7P1HXPyZ8zN5PtUxFF9y1vtoXj21`

Thank you for your support! 🚀

```

