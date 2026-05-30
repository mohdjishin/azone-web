# Azone Projects Communication & API Setup

This document contains all the configuration details, endpoints, and contact information used by the Azone Projects platform for its communication features (Chatbot and Contact Form).

## 1. Contact Form Setup
The contact form does not use a traditional backend server or an email API like SendGrid. It processes form submissions by posting data to a **Google Apps Script** endpoint, which then uses your Google Workspace/Gmail to send the email.

*   **Google Apps Script POST URL (Endpoint / "API Key"):**
    `https://script.google.com/macros/s/AKfycbyn7vDIzc4UFkw_Q8WiIt86aFL4dxt2CKfosW0EKPdRUYyW-eMKa0kNvtJ_onVx87jAXQ/exec`
    *(Note: The `AKfycbx...` string acts as the Deployment ID that authorizes the script execution).*
*   **Target Email Address:** `mohdjishin666@gmail.com`
*   **WhatsApp Fallback Number:** `971556230065`
*   **Data Fields Expected by Script:**
    *   `name`
    *   `email`
    *   `subject`
    *   `message`

## 2. Chatbot Setup
The chatbot is entirely frontend-driven. It **does not** use an AI service API (e.g., OpenAI, Claude). All interactions are based on a hardcoded, rule-based flow defined in the React component.

*   **Target Email Address:** `mohdjishin666@gmail.com`
*   **WhatsApp Agent Number:** `971556230065`
*   **Predefined Services Flow:**
    *   Web & Software
    *   Assignment Help
    *   Graphic & Design
    *   Digital Marketing
    *   Online Trainings
*   **Logic:** When a user interacts with the bot and requests an agent, they are provided with direct buttons to launch a WhatsApp chat or open their email client targeting the addresses listed above.

## Summary of External Credentials
If you are migrating or updating the project, these are the three core pieces of contact configuration to update:

1.  **Apps Script ID:** `AKfycbyn7vDIzc4UFkw_Q8WiIt86aFL4dxt2CKfosW0EKPdRUYyW-eMKa0kNvtJ_onVx87jAXQ`
2.  **Primary Email:** `mohdjishin666@gmail.com`
3.  **Primary WhatsApp:** `+971 55 623 0065`
