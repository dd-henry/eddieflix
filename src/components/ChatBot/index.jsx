import React from 'react';
import styles from './style.module.css';
import './chatbot.css';

import ChatBotImg from '../../imgs/chatbot.png';

export const ChatBot = () => {
    return (
        <>
            <a
                className={styles["chat-bot-button"]}
                style={{
                    backgroundImage: `url(${ChatBotImg})`,
                }}
                href='https://dd-henry.github.io/testebot/'
                target="_blank"
                rel="noopener noreferrer"
            ></a>
        </>
    );
};
