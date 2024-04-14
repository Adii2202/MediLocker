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

def is_silence(data, max_amplitude_threshold=3000):
    """Check if audio data contains silence."""
    max_amplitude = np.max(np.abs(data))
    return max_amplitude <= max_amplitude_threshold

def transcribe_audio(model, file_path):
    segments, info = model.transcribe(file_path, beam_size=7)
    transcription = ' '.join(segment.text for segment in segments)
    return transcription

@app.route('/transcribe', methods=['POST'])
def transcribe():
    # Initialize Whisper model
    model_size = DEFAULT_MODEL_SIZE + ".en"
    model = WhisperModel(model_size, device="cuda", compute_type="float16", num_workers=10)
    
    # Get prompt from request JSON
    prompt = request.json['prompt']
    
    # Process customer input and get response from AI assistant
    output = ai_assistant.interact_with_llm(prompt)
    
    if output:
        output = output.lstrip()
        vs.play_text_to_speech(output)
        return jsonify({"response": output})
    else:
        return jsonify({"response": "No response from AI assistant"})

if __name__ == "__main__":
    app.run(debug=True)
