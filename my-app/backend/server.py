from flask import Flask, request, send_file, jsonify
import subprocess
import os

app = Flask(__name__)

# Path to the Python script and output PDF
SCRIPT_PATH = "summary.py"   # Your Python script
OUTPUT_PDF = "./output.pdf"

@app.route('/summarize', methods=['POST'])
def summarize():
    try:
        # Run the summarization script
        subprocess.run(['python', SCRIPT_PATH], check=True)

        # Check if the PDF was generated
        if os.path.exists(OUTPUT_PDF):
            return send_file(OUTPUT_PDF, as_attachment=True)
        else:
            return jsonify({"error": "PDF not generated"}), 500
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
