import os
import wave
import pyaudio
import numpy as np
from scipy.io import wavfile
from faster_whisper import WhisperModel
from flask import Flask, request, jsonify
import voice_service as vs
from rag.AIVoiceAssistant import AIVoiceAssistant

DEFAULT_MODEL_SIZE = "medium"

app = Flask(__name__)
ai_assistant = AIVoiceAssistant()

@app.route('/rag', methods=['POST'])
def transcribe():
    prompt = request.json['prompt']
    
    output = ai_assistant.interact_with_llm(prompt)
    
    if output:
        output = output.lstrip()
        vs.play_text_to_speech(output)
        return jsonify({"response": output})
    else:
        return jsonify({"response": "No response from AI assistant"})

if __name__ == "__main__":
    app.run(debug=True)
