const quotes = [
  {
    quote: "To submit your poetry in our app,\nplease mail us your poetry at:\n\nkaiosappsuggestions@gmail.com\n\nWe would love to add it!",
    author: "Love Poetry Team"
  },
  {
    quote: "You are my sunshine, moonlight, and all of my stars. 🌞🌙✨ With you, my life is complete.",
    author: "Abdullah Shahid"
  },
  {
    quote: "Love is beautiful with someone beautiful as you are. 💖",
    author: "Steve Seuri"
  },
  {
    quote: "If the sky is the limit, our love has no limit. 💫 You are the one I will always hold on to.",
    author: "KeenRulzze"
  },
  {
    quote: "In the garden of our love, every bloom whispers your name. 🌹",
    author: "Laila Majnu"
  },
  {
    quote: "As the ocean cradles the moon, so does my heart cradle your love. 🌊🌕❤️",
    author: "Rumi Khan"
  },
  {
    quote: "I loved you yesterday, love you still, always have, always will. 💘",
    author: "Unknown"
  },
  {
    quote: "You are the poem I never knew how to write, and this life is the story I always wanted to tell. 📖💑",
    author: "Tyler Knott Gregson"
  },
  {
    quote: "Falling for you was like breathing. I didn’t even realize it happened. 😍",
    author: "Sana Khan"
  },
  {
    quote: "You're not my number one. You're my only one. 💍",
    author: "Zoya Ahmed"
  },
  {
    quote: "I find pieces of you in every song I listen to. 🎵❤️",
    author: "Armaan Ali"
  }
];

let count = 0;
let firstShown = false; // flag to show special message only once
let quotesWithAuthor = [];

function changeQuote() {
  count++;

  // Show special message first
  if (!firstShown) {
    document.getElementById("quote").innerText = `"${quotes[0].quote}"`;
    document.getElementById("author").innerText = `- ${quotes[0].author}`;
    firstShown = true;
    return;
  }

  // Setup quotes list once (excluding the first message)
  if (quotesWithAuthor.length === 0) {
    quotesWithAuthor = quotes.slice(1); // skip index 0
  }

  if (quotesWithAuthor.length > 0) {
    const randomIndex = Math.floor(Math.random() * quotesWithAuthor.length);
    const randomQuote = quotesWithAuthor.splice(randomIndex, 1)[0];

    document.getElementById("quote").innerText = `"${randomQuote.quote}"`;
    document.getElementById("author").innerText = randomQuote.author ? `- ${randomQuote.author}` : "";
  }

  // Show ad every 5 quotes
  if (count % 5 === 0) {
    getKaiAd({
      publisher: 'da08737d-861e-4ebe-bbbb-8fb90d004d39',
      app: 'Love_Poetry',
      slot: 'Love_Poetry_slot',
      onerror: err => console.error('Ad error:', err),
      onready: ad => {
        ad.call('display');
        ad.on('display', () => {
          document.getElementById("softKeysContainer").style.display = "none";
        });
        ad.on('close', () => {
          document.getElementById("softKeysContainer").style.display = "block";
        });
      }
    });
  }
}

function handleKeyDown(event) {
  event.preventDefault();

  switch (event.key) {
    case 'Enter':
    case 'SoftRight':
      changeQuote();
      break;

    case 'SoftLeft':
    case 'Escape':
      window.location.href = 'index.html';
      break;

    case '5':
      const quoteText = document.querySelector('#quote').textContent;
      const msgActivity = new MozActivity({
        name: 'new',
        data: {
          type: 'websms/sms',
          body: quoteText
        },
        target: 'message'
      });
      break;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  changeQuote();

  // Initial ad display
  getKaiAd({
    publisher: 'da08737d-861e-4ebe-bbbb-8fb90d004d39',
    app: 'Love_Poetry',
    slot: 'Love_Poetry_slot',
    onerror: err => console.error('Ad error:', err),
    onready: ad => {
      ad.call('display');
      ad.on('display', () => {
        document.getElementById("softKeysContainer").style.display = "none";
      });
      ad.on('close', () => {
        document.getElementById("softKeysContainer").style.display = "block";
      });
    }
  });
});

document.addEventListener("keydown", handleKeyDown);
