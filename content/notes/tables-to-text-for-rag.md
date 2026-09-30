---
title: "Why I convert regulatory tables to text before embedding"
date: 2026-09-30
summary: "Approval authorities, financial limits and procedures often live in tables. Here's how I made them retrievable in a compliance RAG assistant."
tags: [RAG, Document AI, Retrieval]
draft: true
---

> **Draft — not published.** This starter note only uses facts from the portfolio. Rewrite it in your own words, add concrete examples, then set `draft: false` in the frontmatter to publish it.

## The problem

In a compliance RAG assistant I built, many of the answers users needed — **approval authorities, financial limits and procedures** — were stored inside complex regulatory tables rather than in running text.

<!-- TODO: Describe a (non-confidential) example of a question that failed before this change. -->

## The approach

Before indexing, I converted complex tables into **structured text**, then ran the result through the same pipeline as the rest of the document:

1. PDF, text and table extraction
2. Table → structured text conversion
3. Chunking and embeddings
4. Vector indexing with metadata

At query time, **hybrid retrieval** (keyword + vector search) with metadata filtering and reranking finds the right passages.

<!-- TODO: Show a simplified before/after of one table row and its text form. -->

## How I checked it worked

I evaluated the assistant with **retrieval relevance, context quality and answer faithfulness**, which made it possible to see whether a bad answer came from chunking, retrieval, prompting or generation.

<!-- TODO: Add what you learned, and any numbers you're able to share. -->
