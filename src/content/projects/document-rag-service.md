---
title: Document RAG Service
summary: RAG API — chunk, embed, query PDFs/DOCX/TXT with an LLM
tagline: A Retrieval-Augmented Generation API for querying your own documents.
year: 2025
category: backend
tech: [NestJS, TypeScript, ChromaDB, LangChain, OpenAI / OpenRouter, Docker]
githubUrl: https://github.com/seung-waedet/document-rag-service
featured: true
order: 1
---

- Built a RAG API that processes uploaded PDF, DOCX, and TXT files, chunks and embeds them into ChromaDB, and answers natural-language questions using an LLM.
- Leveraged LangChain's RecursiveCharacterTextSplitter for intelligent document chunking and OpenRouter for flexible LLM provider access (Meta Llama 3).
- Fully documented via Swagger; containerised with Docker Compose for local vector database management.
