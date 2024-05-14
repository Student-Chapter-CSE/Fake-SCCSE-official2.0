
import {useEffect,useRef} from 'react'; 

declare global {
    interface Window {
        botpressWebChat: any;
    }
}

const index = () => {
    const ref = useRef<HTMLScriptElement>(null);
    useEffect(() => {
        const initBotpress = () => {
            window.botpressWebChat.init({
                "composerPlaceholder": "Ask CoCo .....",
                "botConversationDescription": "This is an AI assistant of SC CSE ",
                "botId": "123e7254-efa5-4c45-ae8e-c99ced5feb8f",
                "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
                "messagingUrl": "https://messaging.botpress.cloud",
                "clientId": "123e7254-efa5-4c45-ae8e-c99ced5feb8f",
                "webhookId": "a583c330-12d7-4058-bc61-b7588d0fee93",
                "lazySocket": true,
                "themeName": "prism",
                "botName": "CoCo",
                "avatarUrl": "https://static.vecteezy.com/system/resources/thumbnails/021/640/011/small/3d-chatbot-icon-isolated-on-white-background-3d-artificial-intelligence-business-and-technology-concept-cartoon-minimal-style-3d-online-support-icon-render-illustration-vector.jpg",
                "stylesheet": "https://webchat-styler-css.botpress.app/prod/code/2a1bdfe5-2c28-4d85-9cfa-95648ecd38ca/v93679/style.css",
                "frontendVersion": "v1",
                "theme": "prism",
                "themeColor": "#2563eb"
            });
        };

        if (ref.current) {
            ref.current.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
            ref.current.onload = initBotpress;
        }
    }, [ref]);

    return (
        <script ref={ref}></script>
    );
};

export default index