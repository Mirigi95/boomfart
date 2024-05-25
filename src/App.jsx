import React, { useState, useEffect } from 'react';
import { supalaif_backend } from 'declarations/supalaif_backend';

function App() {
  const [greeting, setGreeting] = useState('');
  const [currentText, setCurrentText] = useState('');
  const [tokenBalance, setTokenBalance] = useState(0); // State for token balance

  useEffect(() => {
    const texts = ["Fart", "Show", "Earn"];
    let index = 0;
    const intervalId = setInterval(() => {
      if (index < texts.length) {
        setCurrentText(texts[index]);
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    supalaif_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
  }

  const handleConnect = () => {
    // Placeholder for connecting to ICP
    console.log("Connecting to ICP...");
    // Actual connection logic goes here
  };

  const handleTelegram = () => {
    // Placeholder for Telegram login
    console.log("Logging in to Telegram...");
    // Actual login logic goes here
  };

  const handleTwitter = () => {
    // Placeholder for Twitter login
    console.log("Logging in to Twitter...");
    // Actual login logic goes here
  };

  const fetchTokenBalance = async () => {
    // Fetch token balance from blockchain
    // This is a placeholder and should be replaced with actual logic
    const balance = await supalaif_backend.fetchTokenBalance();
    setTokenBalance(balance);
  };

  return (
    <main>
      <img src="/farst.png" alt="DFINITY logo" />
      <br />
      <header className="hero">
        <h1>Welcome to FartCoin</h1>
        <p>Give freedom to fart and share the fun, no one should be stigmatized for farting. It's healthy, and we reward you for just sharing your experience and situations around your farting.</p>
      </header>
      <br />
      <button onClick={handleConnect}>Connect with ICP</button>
      <button onClick={handleTelegram}>Connect with Telegram</button>
      <button onClick={handleTwitter}>Connect with Twitter</button>
      <div id="animatedText">{currentText}</div>
      <section id="greeting">{greeting}</section>
      <p>Your Token Balance: {tokenBalance}</p>
      <button onClick={fetchTokenBalance}>Fetch Token Balance</button>
      <section id="callToAction">
        <h2>Join the FartCoin Community!</h2>
        <p>Sign up now and start earning rewards for sharing your farting experiences. It's fun, it's healthy, and it's rewarding!</p>
        <button onClick={handleConnect}>Get Started</button>
      </section>
    </main>
  );
}

export default App;
