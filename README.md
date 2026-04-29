# 🛒 Recipe-to-Reality: Swiggy MCP AI Agent

**Transforming YouTube recipes into instant Swiggy Instamart carts using AI.**

---

## 🚀 Overview
**Recipe-to-Reality** is an AI-native extension designed for the **Swiggy Builders Club 2026**. It eliminates the friction between watching a cooking tutorial and actually buying the ingredients. 

Using Gemini 1.5 Pro to parse video transcripts, it autonomously maps ingredients to available SKUs via the **Swiggy MCP (Model Context Protocol) APIs**, building a complete Instamart cart in a single click.

### 📸 Demonstration (Working Prototype)
## 🎬 End-to-End Prototype Demonstration (Content-to-Cart Flow)

We have built a fully functional end-to-end prototype for context-aware content parsing.

### 📸 Step 1: Context-Aware Injection
Here is the extension active on a YouTube Shorts video, having successfully injected the 'Cook This' button into the YouTube UI:

![Recipe-to-Reality extension injecting button](proof_youtube.png)

---

### 📸 Step 2: Agent Parsing (Trigger & Confirm)
Here is the immediate next step after clicking the button. The extension triggers the AI agent, which captures the specific video URL and displays a popup confirming it is initiating the ingredient extraction and MCP mapping phase.

![Recipe-to-Reality agent triggering and capturing video context](proof_agent_parsing.png)

## ✨ Key Features
*   **Context-Aware Injection:** Automatically detects recipe videos and shorts on YouTube to show the "Cook This" button.
*   **AI Ingredient Extraction:** Leverages Gemini to turn natural language video descriptions into structured shopping lists.
*   **Autonomous Cart Building:** Uses the Swiggy Instamart MCP server to search and add items to a user's session.
*   **One-Click Fulfillment:** Secure handoff to the Swiggy checkout page for final payment.

## 🛠️ Tech Stack
*   **Frontend:** Chrome Extension (Manifest V3)
*   **Backend:** Python (FastAPI) 
*   **AI Model:** Gemini 1.5 Pro (via AWS Bedrock)
*   **Protocol:** Model Context Protocol (MCP)

## 📂 Project Structure
*   `manifest.json`: Extension configuration.
*   `content.js`: Logic for YouTube button injection and URL capturing.
*   `styles.css`: Signature Swiggy-themed UI styling.

---
*Created for the Swiggy Builders Club Application.*
