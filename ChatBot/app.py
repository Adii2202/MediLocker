from langchain.schema import HumanMessage, AIMessage
from langchain_community.chat_models.huggingface import ChatHuggingFace
from langchain.prompts import PromptTemplate
from flask import Flask, jsonify, request
from langchain_community.llms import HuggingFaceHub
from flask_cors import CORS
import os

from dotenv import load_dotenv, get_key
load_dotenv()

app = Flask(__name__)

CORS(app)

api_token = "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"

os.environ["HUGGINGFACEHUB_API_TOKEN"] = api_token

llm = HuggingFaceHub(
    repo_id="mistralai/Mixtral-8x7B-Instruct-v0.1",
    task="text-generation",
    model_kwargs={
        "max_new_tokens": 512,
        "top_k": 30,
        "temperature": 0.3,
        "repetition_penalty": 1.03,
    },
)

@app.route('/',methods=["GET"])
def home():
    return jsonify({"message": "Welcome to MediLocker ChatBot"})

def chatwithbot(txt:str):
    chat_model = ChatHuggingFace(llm=llm)
    user_template= PromptTemplate(template="{user_input}", input_variables=["user_input"])
    messages = [
    HumanMessage(content="..."),
    AIMessage(content="You're a helpful Medical assistant, user asks their query and you have to respond accurately and strictly in same language. Give short responses that are to the point"),
    HumanMessage(content=user_template.format(user_input=txt)),
    ]
    res = chat_model(messages).content
    return res


@app.route('/chat',methods=["POST"])
def chat():
    try:
        txt = request.form['text']
        print(f"txt: {txt}")
        res = chatwithbot(txt)
        res = str(res)
        last_inst_index = res.rfind("[/INST]")
        res = res[last_inst_index + len("[/INST]"):].strip()
        # print(res)
        return jsonify(res)
    except Exception as e:
        return jsonify({"error": str(e)})


if __name__ == '__main__':
    
    app.run(debug=True)