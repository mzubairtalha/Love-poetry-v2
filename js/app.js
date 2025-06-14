const quotes = [
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

// The fixed 2nd quote message
const submissionQuote = {
  quote: "To submit your poetry in our app,\nplease mail us your poetry at:\n\nkaiosappsuggestions@gmail.com\n\nWe would love to add it!",
  author: "Love Poetry Team"
};

let count = 0;
let quoteIndex = 0;
let randomQuotes = [];

function resetQuotes() {
  randomQuotes = [...quotes];
  // Remove one slot for the fixed 2nd quote
  if (randomQuotes.length > 0) {
    const randomPos = Math.floor(Math.random() * randomQuotes.length);
    randomQuotes.splice(randomPos, 1); // remove one to avoid duplication
  }
}

function changeQuote() {
  count++;

  // Always reset quote list if needed
  if (randomQuotes.length === 0) {
    resetQuotes();
  }

  let currentQuote;

  if (count === 2) {
    // Show the special submission message on the 2nd time
    currentQuote = submissionQuote;
  } else {
    // Show random quote from the remaining list
    const randomIndex = Math.floor(Math.random() * randomQuotes.length);
    currentQuote = randomQuotes.splice(randomIndex, 1)[0];
  }

  document.getElementById("quote").innerText = `"${currentQuote.quote}"`;
  document.getElementById("author").innerText = currentQuote.author ? `- ${currentQuote.author}` : "";

  // Show ad every 5th quote
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
  changeQuote(); // Show first quote on load

  // Optional ad on load
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
