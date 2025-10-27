"use client";

import { useEffect } from "react";
import "@n8n/chat/style.css";
import { createChat } from "@n8n/chat";

const ChatWidget = () => {
  useEffect(() => {
    createChat({
      webhookUrl:
        "https://kinzasaeed.app.n8n.cloud/webhook/5e3bb544-ef2f-410b-81a3-ac85aa3ea421/chat",
      i18n: {
        en: {
            title: "Hi there! 👋",
            subtitle: "I’m Ecom — your shopping assistant.",
            footer: "",
            getStarted: "Start Chat",
            inputPlaceholder: "Ask me about our food items...",
            closeButtonTooltip: ""
        },
      },
      initialMessages: [
        "Hey there! 👋 I'm *Ecom*, your personal assistant.",
        "How can I help you with your order today?",
      ],
      mode: "window",
      showWelcomeScreen: false,
    });
  }, []);

  return (
    <>
      <div id="n8n-chat"></div>
      <style jsx global>{`
        
              :root {
  /* Main colors */
  --chat--color--primary: #ff7a00; /* bright orange */
  --chat--color--primary-shade-50: #e56e00;
  --chat--color--primary--shade-100: #cc6200;
  --chat--color--secondary: #ff7a00;

  /* Backgrounds and text */
  --chat--color-white: #ffffff;
  --chat--color-light: #ffffff; /* white background */
  --chat--color-light-shade-50: #f7f7f7;
  --chat--color-light-shade-100: #efefef;
  --chat--color-medium: #cccccc;
  --chat--color-dark: #000000; /* text black */
  --chat--color-disabled: #999999;
  --chat--color-typing: #ff7a00;

  /* Layout */
  --chat--window--width: 400px;
  --chat--window--height: 600px;
  --chat--border-radius: 12px;

  /* Header */
  --chat--header--background: #ffffff; /* white header */
  --chat--header--color: #ff7a00; /* orange title text */

  /* Message bubbles */
  --chat--message--bot--background: #ffffff;
  --chat--message--bot--color: #000000; /* black bot text */
  --chat--message--user--background: #ff7a00; /* orange user bubble */
  --chat--message--user--color: #ffffff; /* white user text */

  /* Chat toggle (floating button) */
  --chat--toggle--background: #ff7a00;
  --chat--toggle--hover--background: #e56e00;
  --chat--toggle--active--background: #cc6200;
  --chat--toggle--color: #ffffff;
}
      `}</style>
    </>
  );
};

export default ChatWidget;