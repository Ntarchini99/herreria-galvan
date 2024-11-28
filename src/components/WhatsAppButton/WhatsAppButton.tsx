import React from "react";

const WhatsAppButton: React.FC = () => {
    return (
        <a
            href="https://wa.me/5491158391820"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-12 right-12 z-50 w-16 h-16 shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
        >
            <img
                src="/src/assets/img/wsp.png"
                alt="WhatsApp"
                className="w-15 h-15"
            />
        </a>
    );
};

export default WhatsAppButton;
