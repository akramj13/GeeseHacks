interface Window {
  voiceflow?: {
    chat: {
      load: (config: { verify: { projectID: string }; url: string; versionID: string }) => void;
    };
  };
}

const loadVoiceFlowChatbot = (): void => {
    const scriptType: string = 'script';
    const scriptElement: HTMLScriptElement = document.createElement('script');
    const firstScript: HTMLScriptElement | null = document.getElementsByTagName(scriptType)[0] as HTMLScriptElement;
  
    scriptElement.onload = () => {
      if (window.voiceflow && window.voiceflow.chat) {
        window.voiceflow.chat.load({
          verify: { projectID: '6795c24c52bfdd46f6393f9c' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production'
        });
      } else {
        console.error('VoiceFlow chat module failed to load.');
      }
    };
  
    scriptElement.src = 'https://cdn.voiceflow.com/widget-next/bundle.mjs';
    scriptElement.type = 'text/javascript';
  
    if (firstScript?.parentNode) {
      firstScript.parentNode.insertBefore(scriptElement, firstScript);
    } else {
      document.head.appendChild(scriptElement);
    }
  };
  
  // Call the function to load the chatbot
  loadVoiceFlowChatbot();
  