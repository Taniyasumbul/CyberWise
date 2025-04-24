
import React from 'react';
import { useChatbot } from '@/hooks/useChatbot';
import ChatContainer from './chat/ChatContainer';

const ChatbotWidget = () => {
  const {
    messages,
    input,
    isLoading,
    isListening,
    isMuted,
    selectedImage,
    handleImageUpload,
    handleImageRemove,
    handleSubmit,
    handleReset,
    toggleVoice,
    toggleMute,
    setInput,
  } = useChatbot();

  return (
    <section id="chatbot" className=" bg-[url('cs1.jpg')] bg-cover bg-center ">
      <div className='bg-background/60'>
      <div className="cyber-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold pt-16">Ask CyberWise</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Have questions about cybersecurity? Our AI assistant is here to help with practical advice and security best practices.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <ChatContainer
            messages={messages}
            input={input}
            isLoading={isLoading}
            isListening={isListening}
            isMuted={isMuted}
            selectedImage={selectedImage}
            onInputChange={(e) => setInput(e.target.value)}
            onSubmit={handleSubmit}
            onReset={handleReset}
            onImageUpload={handleImageUpload}
            onImageRemove={handleImageRemove}
            onToggleVoice={toggleVoice}
            onToggleMute={toggleMute}
          />
          
          <div className="mt-4 text-sm text-center text-muted-foreground pb-16">
            <p>This is a simplified demo. Try asking about passwords, phishing, two-factor authentication, malware, VPNs, updates, Wi-Fi security, or data backups.</p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default ChatbotWidget;
