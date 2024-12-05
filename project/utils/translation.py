from transformers import pipeline

# The translation pipeline
translator = pipeline("translation", model="Helsinki-NLP/opus-mt-en-fi")

def translate_text(text):
    """
    Info: Translates English text to Finnish using model="Helsinki-NLP/opus-mt-en-fi".
    Link to documentation: https://huggingface.co/docs/transformers/main_classes/pipelines

    Additional info:
        Parameters:
            text (str or list): The input text(s) to be translated. Can be a single string or a list of strings.

        Returns:
            str or list: Translated text. A string if a single input is provided, or a list of strings for multiple inputs.

        Raises:
            ValueError: If the input is not a string or a list of strings.
    """
    try:
        if not isinstance(text, (str, list)):
            raise ValueError("Input must be a string or a list of strings.")

        translations = translator(text)


        if isinstance(translations, list):
            return [t['translation_text'] for t in translations]
        return translations[0]['translation_text']
    except ValueError as ve:
        return f"ValueError during translation {text} from En to Fi: {ve}"
    except Exception as e:
        return f"Error during translation {text} from En to Fi {e}"
