import React, { useState, useRef, useEffect } from 'react';

type Message = {
  id: number;
  text: string;
  sender: 'bot' | 'user';
  options?: string[];
  isContact?: boolean;
};

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isWaitingForNumber, setIsWaitingForNumber] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+971');
  const [phoneError, setPhoneError] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const COUNTRY_DATA: Record<string, { label: string, placeholder: string, minLength: number, maxLength: number }> = {
    '+971': { label: 'UAE (+971)', placeholder: '50 123 4567', minLength: 9, maxLength: 9 },
    '+966': { label: 'KSA (+966)', placeholder: '50 123 4567', minLength: 9, maxLength: 9 },
    '+44': { label: 'UK (+44)', placeholder: '7911 123456', minLength: 10, maxLength: 10 },
    '+1': { label: 'US (+1)', placeholder: '555 123 4567', minLength: 10, maxLength: 10 },
    '+91': { label: 'IND (+91)', placeholder: '98765 43210', minLength: 10, maxLength: 10 },
  };

  const initialOptions = [
    'Academic Writing',
    'Thesis & Dissertations',
    'Specialized Assignments',
    'Proofreading & Editing',
    'Contact an Agent',
    'Drop your number'
  ];

  const SERVICE_CATEGORIES: Record<string, string[]> = {
    'Academic Writing': ['Essay Writing', 'Research Paper', 'Coursework Help', 'Case Study Writing'],
    'Thesis & Dissertations': ['Dissertation Help', 'Thesis Writing', 'Capstone Project'],
    'Specialized Assignments': ['CIPD Assignment', 'MBA Assignment'],
    'Proofreading & Editing': ['Proofreading & Editing']
  };

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: Date.now(),
          text: 'Hello! I am your Azone Digital Assistant 🤖. How can we elevate your projects today?',
          sender: 'bot',
          options: initialOptions
        }
      ]);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleOptionClick = (option: string) => {
    const userMsg: Message = { id: Date.now(), text: option, sender: 'user' };
    setMessages((prev) => [...prev, userMsg]);

    setTimeout(() => {
      let botResponse: Message;

      if (SERVICE_CATEGORIES[option]) {
        botResponse = {
          id: Date.now(),
          text: `Here are our ${option} services. What do you need help with?`,
          sender: 'bot',
          options: [...SERVICE_CATEGORIES[option], 'Start Over']
        };
      } else if (option === 'Contact an Agent') {
        botResponse = {
          id: Date.now(),
          text: 'You can reach out to our senior consultants immediately via WhatsApp or Email:',
          sender: 'bot',
          isContact: true,
          options: ['Start Over']
        };
      } else if (option === 'Drop your number') {
        setIsWaitingForNumber(true);
        botResponse = {
          id: Date.now(),
          text: 'Please provide your contact number. One of our experts will call you shortly to discuss your requirements.',
          sender: 'bot'
        };
      } else if (option === 'Start Over') {
        setIsWaitingForNumber(false);
        botResponse = {
          id: Date.now(),
          text: 'What else can we assist you with?',
          sender: 'bot',
          options: initialOptions
        };
      } else {
        botResponse = {
          id: Date.now(),
          text: `You selected ${option}. We engineer world-class solutions in this domain. Would you like to consult with an expert?`,
          sender: 'bot',
          options: ['Contact an Agent', 'Drop your number', 'Start Over']
        };
      }
      setMessages((prev) => [...prev, botResponse]);
    }, 500);
  };

  const handleNumberSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber.trim()) return;

    const strippedNumber = phoneNumber.replace(/\D/g, '');
    const validationRules = COUNTRY_DATA[countryCode];
    
    if (strippedNumber.length < validationRules.minLength || strippedNumber.length > validationRules.maxLength) {
      setPhoneError(`Please enter a valid ${validationRules.minLength}-digit number for this country.`);
      return;
    }

    const fullNumber = `${countryCode} ${phoneNumber}`;
    const userMsg: Message = { id: Date.now(), text: fullNumber, sender: 'user' };
    setMessages((prev) => [...prev, userMsg]);
    setIsWaitingForNumber(false);
    
    const submittedNumber = fullNumber;
    setPhoneNumber('');
    setPhoneError('');

    const formBody = new FormData();
    formBody.append('name', 'Chatbot User');
    formBody.append('email', 'no-email-provided@chatbot.local');
    formBody.append('subject', 'Call Request from Chatbot');
    formBody.append('message', `The user requested a callback. Phone number: ${submittedNumber}`);

    try {
      await fetch('https://script.google.com/macros/s/AKfycbzdyIYLgoyi4MPXrqXS6C7zEWebqg9gR4hJj2ORH3BpDOt0cpEpaghNjBZuQWAo06nN/exec', {
        method: 'POST',
        body: formBody,
        mode: 'no-cors'
      });
      setTimeout(() => {
        setMessages((prev) => [...prev, {
          id: Date.now(),
          text: 'Thank you. Your request has been securely transmitted. Our team will contact you soon.',
          sender: 'bot',
          options: ['Start Over']
        }]);
      }, 500);
    } catch (error) {
       setTimeout(() => {
        setMessages((prev) => [...prev, {
          id: Date.now(),
          text: 'There was a network issue. Please try again or use WhatsApp.',
          sender: 'bot',
          options: ['Contact an Agent', 'Start Over']
        }]);
      }, 500);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center">

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 ${
            isOpen ? 'bg-surface border border-surface-dim text-on-surface' : 'bg-primary hover:bg-secondary text-on-primary'
          }`}
          aria-label="Toggle Chatbot"
        >
          <span className={`material-symbols-outlined text-3xl transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}>
            {isOpen ? 'close' : 'forum'}
          </span>
        </button>
      </div>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-28 right-6 w-[90vw] max-w-[400px] h-[600px] max-h-[80vh] bg-surface-container border border-surface-dim rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] flex flex-col overflow-hidden z-50 transition-all duration-300 origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-primary p-lg flex items-center justify-between shadow-md relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
          <div className="flex items-center gap-md relative z-10">
            <div className="relative">
              <div className="w-10 h-10 bg-surface rounded-full flex items-center justify-center shadow-lg">
                <span className="material-symbols-outlined text-primary">support_agent</span>
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-primary rounded-full"></span>
            </div>
            <div>
              <h3 className="font-headline-sm text-on-primary m-0 tracking-wide text-lg">Azone Assistant</h3>
              <p className="text-on-primary/80 text-xs font-medium uppercase tracking-widest mt-1">Usually replies instantly</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-on-primary/70 hover:text-on-primary transition-colors relative z-10">
            <span className="material-symbols-outlined text-2xl">expand_more</span>
          </button>
        </div>

        {/* Message Area */}
        <div className="flex-1 p-lg overflow-y-auto bg-surface flex flex-col gap-md hide-scrollbar">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex flex-col max-w-[85%] animate-fade-in ${
                msg.sender === 'user' ? 'self-end items-end' : 'self-start items-start'
              }`}
            >
              <div
                className={`px-lg py-md text-sm md:text-base leading-relaxed shadow-sm ${
                  msg.sender === 'user'
                    ? 'bg-accent text-on-primary rounded-2xl rounded-br-sm'
                    : 'bg-surface-container text-on-surface rounded-2xl rounded-bl-sm border border-outline-variant'
                }`}
              >
                {msg.text}
              </div>
              
              {msg.isContact && (
                <div className="flex flex-col gap-sm mt-sm w-full animate-fade-in">
                  <a
                    href="https://wa.me/971556230065"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] text-white p-sm rounded-xl text-center font-medium shadow-md flex items-center justify-center gap-xs hover:bg-[#20bd5a] transition-all transform hover:-translate-y-0.5"
                  >
                    <span className="material-symbols-outlined text-lg">chat</span>
                    WhatsApp Us
                  </a>
                  <a
                    href="mailto:projects.azone@gmail.com"
                    className="bg-secondary text-on-secondary p-sm rounded-xl text-center font-medium shadow-md flex items-center justify-center gap-xs hover:bg-primary transition-all transform hover:-translate-y-0.5"
                  >
                    <span className="material-symbols-outlined text-lg">mail</span>
                    Email Us
                  </a>
                </div>
              )}

              {msg.options && (
                <div className="flex flex-wrap gap-xs mt-sm animate-fade-in">
                  {msg.options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleOptionClick(opt)}
                      className="bg-surface border border-accent/20 text-accent px-md py-sm rounded-xl text-xs sm:text-sm font-semibold hover:bg-accent hover:text-on-primary hover:border-accent transition-all shadow-sm transform hover:-translate-y-0.5 text-left"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        
        {/* Input Area */}
        {isWaitingForNumber && (
          <div className="bg-surface border-t border-surface-dim p-lg shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)] animate-fade-in">
            <form onSubmit={handleNumberSubmit} className="flex flex-col gap-md">
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest text-center">Secure Callback Request</p>
              
              <div className="flex flex-col gap-xs relative">
                <div className="flex items-stretch border-2 border-outline-variant rounded-xl overflow-hidden focus-within:border-accent focus-within:ring-4 focus-within:ring-accent/10 transition-all bg-surface-container">
                  <select 
                    value={countryCode} 
                    onChange={(e) => {
                      setCountryCode(e.target.value);
                      setPhoneError('');
                    }}
                    className="bg-transparent border-none py-sm pl-md pr-sm font-semibold text-on-surface outline-none cursor-pointer border-r border-outline-variant"
                  >
                    {Object.entries(COUNTRY_DATA).map(([code, data]) => (
                      <option key={code} value={code}>{data.label}</option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    placeholder={COUNTRY_DATA[countryCode].placeholder}
                    value={phoneNumber}
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                      setPhoneError('');
                    }}
                    className="flex-1 bg-transparent border-none p-md text-on-surface placeholder-on-surface-variant outline-none font-semibold w-full"
                    required
                  />
                </div>
                {phoneError && <span className="text-error text-xs font-bold px-xs pt-1">{phoneError}</span>}
              </div>

              <button type="submit" className="mt-2 bg-accent hover:bg-primary text-on-primary px-xl py-md rounded-xl font-bold tracking-wide shadow-lg shadow-accent/30 hover:shadow-accent/50 transition-all transform hover:-translate-y-0.5 w-full flex items-center justify-center gap-2">
                Request Call
                <span className="material-symbols-outlined text-sm">call_made</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default Chatbot;
