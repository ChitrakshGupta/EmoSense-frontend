# EmoSense – Complete Technical Documentation

## 1. Introduction

**EmoSense** is a cloud-native sentiment analysis platform designed for accurate, low-latency emotion classification of textual data. The system leverages an open-source transformer-based NLP model and follows a **microservices-based, containerized architecture**. Each core component—model inference, backend orchestration, and authentication—is deployed as an independent container on **Microsoft Azure Container Instances**.

---

## 2. Objectives

- Perform real-time binary sentiment analysis (Positive / Negative)
- Ensure modular, scalable, and maintainable system design
- Enforce secure access via third-party authentication
- Optimize inference performance using a lightweight transformer model
- Enable cloud-native deployment with minimal operational overhead

---

## 3. Technology Stack

### 3.1 Core Technologies
- **Programming Language:** Python
- **NLP Framework:** Hugging Face Transformers
- **Model Serving:** REST APIs
- **Containerization:** Docker
- **Cloud Platform:** Microsoft Azure Container Instances

### 3.2 Supporting Components
- HTTP-based inter-service communication
- Token-based authentication (third-party identity provider)
- Environment variable–based configuration and secrets management

---

## 4. Sentiment Analysis Model

### 4.1 Model Configuration

```python
model_name = "distilbert-base-uncased-finetuned-sst-2-english"
classifier = pipeline("sentiment-analysis", model=model_name)
