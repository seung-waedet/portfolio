---
title: Document RAG Service
summary: RAG API that answers questions about uploaded PDF, DOCX and TXT files
tagline: A retrieval-augmented generation API for asking questions about your own documents.
year: 2025
tech: [NestJS, TypeScript, ChromaDB, LangChain, OpenRouter, Docker]
githubUrl: https://github.com/seung-waedet/document-rag-service
order: 3
---

- Retrieval-augmented generation API that ingests PDF, DOCX, and TXT files, chunks and embeds them into ChromaDB, and answers natural-language questions with an LLM.
- Chunks with LangChain's RecursiveCharacterTextSplitter and calls Llama 3 through OpenRouter, so the model provider can change; ChromaDB runs in Docker Compose.
