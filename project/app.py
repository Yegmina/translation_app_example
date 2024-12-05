from flask import Flask, render_template, jsonify

# Create the Flask app instance
app = Flask(__name__)

@app.route("/")
def index():
    """launch file the on main page"""
    try:
        return render_template("index.html")
    except Exception as e:
        # Log the error for debugging
        app.logger.error(f"Error rendering index.html: {e}")
        # Return a user-friendly error message
        return jsonify({"error": "Unable to load the page. Probably index.html is missing"}), 500

@app.errorhandler(404)
def page_not_found(e):
    """404 error handler."""
    return jsonify({"error": "Page not found"}), 404

@app.errorhandler(500)
def internal_server_error(e):
    """500 error handler."""
    return jsonify({"error": "Internal server error. "}), 500

if __name__ == "__main__":
    # Launch flask in localhost, in debug mode.
    app.run(host="127.0.0.1", port=5000, debug=True)
    # Can be launched in host="0.0.0.0" in order to check by using other devices in the same network