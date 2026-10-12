
import { useState } from "react";

const loveCards = [
  {
    emoji: "💗",
    title: "Why I Love You",
    quote: "In a world full of people, my heart still chooses you. Every single time.",
    color: "#ffe4ec",
  },
  {
    emoji: "🥹",
    title: "My Honest Apology",
    quote: "I'm sorry for the tears I caused. You deserve a love that makes you feel safe, heard, and cherished.",
    color: "#fce7f3",
  },
  {
    emoji: "🌷",
    title: "My Favourite Person",
    quote: "You aren't just someone I love. You're the person I want to share my little moments and biggest dreams with.",
    color: "#fce9df",
  },
  {
    emoji: "🫶",
    title: "A Little Promise",
    quote: "I can't promise I'll never make mistakes, but I can promise to listen, learn, and keep trying to love you better.",
    color: "#f4e5ff",
  },
  {
    emoji: "💌",
    title: "If I Could Hug You",
    quote: "I'd hold you close, kiss your forehead, and remind you that you are loved more than you know.",
    color: "#e5f5ee",
  },
  {
    emoji: "🌙",
    title: "You Are My Person",
    quote: "Even on difficult days, you're still the girl who makes my heart feel at home.",
    color: "#e7edff",
  },
];

const css = `
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500;600;700&family=Quicksand:wght@400;500;600;700&display=swap');

* { box-sizing: border-box; }

html {
  scroll-behavior: smooth;
  scroll-padding-top: 24px;
}

body {
  margin: 0;
  font-family: 'Quicksand', sans-serif;
  color: #533b46;
}

button, a { -webkit-tap-highlight-color: transparent; }
button { font-family: inherit; }

.love-page {
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  background: linear-gradient(180deg, #fff7f2, #fff0f5 45%, #fff9f1);
}

.hero, .apology-section, .cards-section,
.surprise-section, .hug-section, .letter-section {
  width: min(100% - 36px, 760px);
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
}

.hero { padding: 100px 0 95px; }

.tiny-label, .eyebrow {
  color: #bd748b;
  letter-spacing: 2.5px;
  font-size: 11px;
  font-weight: 700;
}

.hero h1 {
  font: 700 clamp(48px, 9vw, 82px) 'Dancing Script', cursive;
  color: #543744;
  margin: 20px 0;
}

.hero h1 span { color: #e78da3; }

.hero-text, .section-subtitle {
  max-width: 510px;
  margin: 0 auto 28px;
  line-height: 1.9;
  color: #866977;
  font-size: 15px;
}

.explore-button {
  display: inline-block;
  text-decoration: none;
  background: #e88fa5;
  color: white;
  border-radius: 40px;
  padding: 14px 24px;
  font-size: 13px;
  font-weight: 700;
  transition: .25s;
}

.explore-button:hover, .action-button:hover,
.round-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 24px #cc78942b;
}

.apology-section {
  padding: 50px 45px;
  border: 1px solid #f4dce3;
  border-radius: 30px;
  background: #ffffffb8;
  box-shadow: 0 18px 55px #c77e9412;
}

.section-icon { font-size: 40px; margin-bottom: 14px; }

h2 {
  font: 600 clamp(32px, 6vw, 46px) 'Dancing Script', cursive;
  color: #7b455b;
  margin: 12px 0 20px;
}

.apology-section > p:not(.eyebrow):not(.handwritten) {
  line-height: 2;
  font-size: 14px;
  color: #795f6b;
}

.handwritten {
  font: 600 29px 'Dancing Script', cursive;
  color: #c66d89;
  line-height: 1.6;
}

.cards-section { padding: 105px 0 70px; }
.cards-section h2 { margin-bottom: 10px; }

.quote-card {
  width: min(100%, 410px);
  min-height: 340px;
  margin: 38px auto 24px;
  padding: 28px 32px;
  border-radius: 28px;
  background: var(--card-color);
  border: 1px solid #ffffffc9;
  box-shadow: 0 18px 45px #9b62751a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: cardIn .35s ease both;
}

.card-number {
  font-size: 10px;
  letter-spacing: 2px;
  color: #99727f;
  font-weight: 700;
}

.card-emoji { font-size: 48px; margin: 24px 0 8px; }

.quote-card h3 {
  font: 600 30px 'Dancing Script', cursive;
  color: #714459;
  margin: 8px 0 14px;
}

.quote-text {
  max-width: 310px;
  font-size: 15px;
  line-height: 1.9;
  color: #735562;
}

.card-heart { font-size: 25px; color: #cf8198; margin-top: 8px; }

.card-controls {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
}

.round-button, .action-button {
  border: 1px solid #edc5d1;
  border-radius: 40px;
  padding: 13px 19px;
  background: #fffafc;
  color: #a65d78;
  font-weight: 700;
  font-size: 12px;
  cursor: pointer;
  transition: .25s ease;
}

.round-button.primary, .action-button {
  color: white;
  border-color: #e58aa3;
  background: #e58aa3;
}

.card-dots {
  display: flex;
  justify-content: center;
  gap: 9px;
  margin-top: 22px;
}

.dot {
  width: 9px;
  height: 9px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: #e8c8d3;
  cursor: pointer;
  transition: .2s;
}

.dot.active { background: #c86d89; transform: scale(1.35); }

.surprise-section, .hug-section, .letter-section {
  padding: 42px 25px;
  margin-top: 20px;
}

.surprise-box {
  padding: 35px 25px;
  border-radius: 30px;
  background: #fffafc;
  border: 1px solid #f5dce5;
}

.big-emoji, .envelope { font-size: 42px; }

.surprise-box > p, .hug-section > p,
.letter-section > p {
  font-size: 14px;
  line-height: 1.9;
  color: #896c79;
  max-width: 470px;
  margin: 0 auto 23px;
}

.reveal-message, .letter-reveal {
  margin: 28px auto 0;
  max-width: 530px;
  padding: 27px;
  background: #fff0f4;
  border: 1px solid #f6d6e0;
  border-radius: 22px;
  animation: cardIn .5s ease both;
}

.reveal-message > span { font-size: 35px; }

.reveal-message h3 {
  font: 600 28px 'Dancing Script', cursive;
  color: #a95474;
}

.reveal-message p, .letter-reveal p {
  font-size: 14px;
  line-height: 2;
  color: #765a67;
}

.hug-section { padding: 55px 25px 60px; }

.hug-emoji {
  font-size: 65px;
  transition: transform .3s;
}

.hugging { animation: hug .6s ease infinite alternate; }

.hug-message {
  margin-top: 20px !important;
  color: #c15f80 !important;
  font-weight: 700;
  animation: cardIn .4s ease;
}

.letter-section {
  padding-top: 48px;
  padding-bottom: 65px;
  border-top: 1px dashed #eac4d0;
}

.envelope { margin-bottom: 10px; }

.letter-reveal {
  text-align: left;
  background: #fffdf8;
  box-shadow: 0 12px 35px #a96d7b10;
}

.letter-reveal .handwritten { text-align: right; }

.love-footer {
  text-align: center;
  padding: 35px 20px 45px;
  background: #fbe4eb;
  color: #ad6b83;
  font-size: 13px;
}

.love-footer p { font-size: 11px; margin-top: 10px; }

.floating-hearts span {
  position: absolute;
  top: calc(12% + var(--i) * 11%);
  left: calc(4% + (var(--i) % 3) * 3%);
  color: #e8a0b2;
  font-size: 23px;
  opacity: .55;
  pointer-events: none;
  animation: floatHeart calc(4s + var(--i) * .4s) ease-in-out infinite alternate;
}

.floating-hearts span:nth-child(even) {
  left: auto;
  right: 5%;
}

@keyframes cardIn {
  from { opacity: 0; transform: translateY(12px) scale(.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

@keyframes floatHeart {
  from { transform: translateY(0) rotate(-10deg); }
  to { transform: translateY(-20px) rotate(12deg); }
}

@keyframes hug {
  from { transform: scale(1) rotate(-5deg); }
  to { transform: scale(1.15) rotate(5deg); }
}

@media (max-width: 600px) {
  .hero { padding: 70px 0 65px; }
  .apology-section { padding: 35px 22px; }
  .quote-card { min-height: 320px; padding: 24px 22px; }
  .cards-section { padding-top: 75px; }
  .surprise-section, .hug-section, .letter-section {
    padding-left: 8px;
    padding-right: 8px;
  }
  .round-button { padding: 12px 15px; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: .01ms !important;
  }
}
`;

export default function App() {
  const [index, setIndex] = useState(0);
  const [letterOpen, setLetterOpen] = useState(false);
  const [hug, setHug] = useState(false);
  const [surprise, setSurprise] = useState(false);

  const nextCard = () =>
    setIndex((current) => (current + 1) % loveCards.length);

  const previousCard = () =>
    setIndex((current) => (current - 1 + loveCards.length) % loveCards.length);

  const card = loveCards[index];

  return (
    <>
      <style>{css}</style>

      <main className="love-page">
        <div className="floating-hearts" aria-hidden="true">
          {["♡", "♥", "💕", "♡", "💗", "♥", "♡"].map((heart, i) => (
            <span key={i} style={{ "--i": i }}>{heart}</span>
          ))}
        </div>

        <header className="hero">
          <div className="tiny-label">A LITTLE SOMETHING FOR YOU ♡</div>
         <h1>Maz Baal , Maz Pilu <span>♡</span></h1>
<p className="hero-text">
  Vaibhavi bala , this little corner of the internet is made
  just for you, with all the love in my heart. ❤️
</p>
          <p className="hero-text">
            I made a little corner of the internet just for you.
            Because you deserve to know how loved you are.
          </p>
          <a className="explore-button" href="#love-cards">
            A little surprise for you ↓
          </a>
        </header>

        <section className="apology-section">
          <div className="section-icon">🥺</div>
          <p className="eyebrow">FROM THE BOTTOM OF MY HEART</p>
          <h2>I'm Really Sorry, Baby</h2>
          <p>
            I know I hurt you, and I'm genuinely sorry. Knowing that
            someone I love so deeply is hurting because of me breaks
            my heart. I wish I could take that hurt away.
          </p>
          <p>
            I know words alone can't fix everything. Your feelings
            matter to me, and I want to listen, understand, and do
            better. You deserve to feel loved, respected, and safe
            with me.
          </p>
          <p className="handwritten">
            I love you more than these words could ever explain. ♡
          </p>
        </section>

        <section className="cards-section" id="love-cards">
          <p className="eyebrow">A DECK FULL OF LOVE</p>
          <h2>Little Reminders For You 💌</h2>
          <p className="section-subtitle">
            Every card holds something I wish I could tell you in person.
          </p>

          <div
            className="quote-card"
            key={index}
            style={{ "--card-color": card.color }}
          >
            <div className="card-number">
              CARD {String(index + 1).padStart(2, "0")} / {String(loveCards.length).padStart(2, "0")}
            </div>
            <div className="card-emoji">{card.emoji}</div>
            <h3>{card.title}</h3>
            <p className="quote-text">“{card.quote}”</p>
            <div className="card-heart">♡</div>
          </div>

          <div className="card-controls">
            <button className="round-button" onClick={previousCard}>← Previous</button>
            <button className="round-button primary" onClick={nextCard}>Next card ♡ →</button>
          </div>

          <div className="card-dots">
            {loveCards.map((item, i) => (
              <button
                key={item.title}
                aria-label={`Show card ${i + 1}`}
                aria-pressed={index === i}
                className={`dot ${index === i ? "active" : ""}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </section>

        <section className="surprise-section">
          <div className="surprise-box">
            <span className="big-emoji">🎀</span>
            <h2>Okay, One More Thing...</h2>
            <p>There's something I want you to remember, especially when you're upset with me.</p>
            <button className="action-button" onClick={() => setSurprise(!surprise)}>
              {surprise ? "Close my little secret ♡" : "Tap for a surprise ✨"}
            </button>
            {surprise && (
              <div className="reveal-message">
                <span>💖</span>
                <h3>You are so, so special to me.</h3>
                <p>
                  You don't have to pretend you're okay just to make me feel
                  better. I want to understand how you feel. Take your time,
                  my love. I'm sorry I hurt you, and I want my actions to show
                  you how much you mean to me.
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="hug-section">
          <div className={`hug-emoji ${hug ? "hugging" : ""}`}>
            {hug ? "🫂" : "🤗"}
          </div>
          <h2>{hug ? "Biggest Hug For You!" : "Sending You a Virtual Hug"}</h2>
          <p>Imagine me holding you close and giving you the gentlest forehead kiss. ♡</p>
          <button className="action-button" onClick={() => setHug(!hug)}>
            {hug ? "One more hug? 🥹" : "I need a hug 🫂"}
          </button>
          {hug && <p className="hug-message">Squeeeeeze! You mean the world to me, baby. ❤️</p>}
        </section>

        <section className="letter-section">
          <div className="envelope">💌</div>
          <h2>A Letter Just For You</h2>
          <p>There's more I want to say, straight from my heart.</p>
          <button className="action-button" onClick={() => setLetterOpen(!letterOpen)}>
            {letterOpen ? "Fold the letter 💗" : "Open your letter 💌"}
          </button>
          {letterOpen && (
            <div className="letter-reveal">
              <p>My favourite girl,</p>
              <p>
                If I could go back and change the moment I hurt you, I would.
                But I know I can't change the past, so I want to do better in the present.
              </p>
              <p>
                I love your smile, your little ways, the way you make ordinary
                moments special, and all the things that make you uniquely you.
              </p>
              <p>
                I'm sorry for the hurt I caused. I don't expect you to forget
                it immediately. I just hope, with time and genuine effort,
                I can make you feel the love and care you deserve.
              </p>
              <p className="handwritten">Always your person, ♡</p>
            </div>
          )}
        </section>

        <footer className="love-footer">
          <div>Made with love, just for you ♡</div>
          <p>One heart. One girl. A whole lot of love. 💗</p>
        </footer>
      </main>
    </>
  );
}
