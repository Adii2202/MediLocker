# ![MedblockLogo](https://github.com/Adii2202/MediLocker/assets/131331573/01ca3ca8-3fa9-4339-9273-e21380988f0a) MediLocker

## Description
MediLocker is a cutting-edge platform designed to securely store medical records on the blockchain. By harnessing the power of blockchain technology, MediLocker ensures the integrity, confidentiality, and accessibility of medical data, providing both patients and healthcare providers with a reliable and tamper-proof solution for managing health information. The platform facilitates communication between patients and healthcare professionals, allowing for real-time query resolution and doubt clarification.

## Tech Stack
- **Blockchain**: Utilizes the Ethereum blockchain and Pinnata for secure and immutable storage of medical records.
- **Encryption**: Implements advanced encryption techniques to safeguard sensitive medical data.
- **Smart Contracts**: Utilizes Solidity smart contracts to enforce secure interactions and access controls on the blockchain platform.
- **React Js**: Frontend development framework.
- **Mistral 8x7B LLM**: Language model used for natural language processing tasks.
- **RAG with QDrant Vector DB**: Integrates RAG model and QDrant Vector DB for real-time query resolution.

## Installation Steps

### Frontend
1. Rename all `.env.sample` files to `.env` and fill in the required data.
2. Install dependencies: `npm install`
3. Start the development server: `npm start`

### Backend - OTP Verification
1. Navigate to the server directory: `cd server`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

### Flask Server
1. Set up a conda environment with Python 3.10.
2. Navigate to the chatbot directory: `cd chatbot`
3. Install dependencies: `pip install -r requirements.txt`
4. Run the Flask app: `python app.py`

## Libraries and Dependencies
### Frontend
- `useContext`
- `Material UI`
- `web3`
- `react-qr-reader`
- `qrcode-decoder`
- `pinnata`

### Backend
- `twilio`
- `cors`

### Flask
- `Langchain_community`
- `langchain`
- `Huggingface - Mistral 8x7B`
- `flask_cors`

## Overview Video
[Insert Link to Overview Video]

## Features
- **Secure Storage**: Store medical records securely on the blockchain to ensure data integrity and immutability.
- **Privacy Protection**: Safeguard sensitive medical data with encryption and access controls.
- **Accessibility**: Access medical records anytime, anywhere, with permissioned access for both patients and authorized healthcare professionals.
- **Real-Time Query Resolution**: Integrated chatbot and RAG model provide real-time resolution for queries and doubts.
- **Tamper-Proof**: Utilizes blockchain technology to create an immutable audit trail, reducing the risk of data tampering or unauthorized changes.

## Block Diagram
![MediLocker Block Diagram](https://github.com/Adii2202/MediLocker/assets/131331573/ecfdc5c8-f8a2-48ed-a4e1-3c5970cfaef5)
