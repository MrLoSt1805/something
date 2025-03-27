from flask import Flask, request, jsonify, send_from_directory
import subprocess
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS

# Paths
SCRIPT_PATH = "summary.py"
OUTPUT_DIR = os.path.abspath(os.path.dirname(__file__))  # Backend folder
OUTPUT_PDF = os.path.join(OUTPUT_DIR, "output.pdf")

@app.route('/summarize', methods=['POST'])
def summarize():
    try:
        # Run the summarization script
        subprocess.run(['python', SCRIPT_PATH], check=True)

        # Check if the PDF was generated
        if os.path.exists(OUTPUT_PDF):
            return jsonify({"message": "PDF generated successfully."})
        else:
            return jsonify({"error": "PDF not generated"}), 500

    except Exception as e:
        return jsonify({"error": str(e)}), 500

# ✅ Serve the generated PDF
@app.route('/pdf', methods=['GET'])
def get_pdf():
    return send_from_directory(OUTPUT_DIR, "output.pdf")

if __name__ == '__main__':
    app.run(debug=True)
