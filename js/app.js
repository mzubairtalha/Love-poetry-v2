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
  },
  {
  quote: "Even a thousand lifetimes wouldn’t be enough to love you. 💞",
  author: "Ayesha Noor"
},
{
  quote: "Your smile is the sunrise that brightens my soul. 🌅",
  author: "Rehan Malik"
},
{
  quote: "In your eyes, I found my home. 🏠❤️",
  author: "Sadia Tariq"
},
{
  quote: "Our hearts speak a language only love understands.",
  author: "Bilal Shah"
},
{
  quote: "You make the stars jealous with how you shine. ✨",
  author: "Nashit Rizvi"
},
{
  quote: "Loving you is like breathing — I just can’t stop. 🌬️",
  author: "Amna Farooq"
},
{
  quote: "You're the reason behind every smile I wear. 😊",
  author: "Faraz Khan"
},
{
  quote: "I’d choose you in a hundred lifetimes. Always you. 💍",
  author: "Mahnoor Ijaz"
},
{
  quote: "My heart beats poetry when you're near. 🎶❤️",
  author: "Usman Zafar"
},
{
  quote: "You are my today and all of my tomorrows. 💑",
  author: "Fiza Saeed"
},
{
  quote: "Love isn’t about finding perfection, it’s about seeing perfectly in someone.",
  author: "Ali Rehman"
},
{
  quote: "You entered my heart without permission, and now I don’t want you to leave. 🔐",
  author: "Iqra Javed"
},
{
  quote: "Our souls met long before we ever did. 🌌",
  author: "Zayan Ali"
},
{
  quote: "You’re the dream I never want to wake up from. 💤❤️",
  author: "Hina Yousaf"
},
{
  quote: "I don’t need the whole world to love me, just you. 💓",
  author: "Rayyan Khan"
},
{
  quote: "With you, love feels effortless. 🌈",
  author: "Sahar Naveed"
},
{
  quote: "I found heaven the day I found you. ☁️💖",
  author: "Taha Rahim"
},
{
  quote: "You are the peace my chaos searched for. 🕊️",
  author: "Areeba Shah"
},
{
  quote: "You’re the melody my heart never knew it needed. 🎼",
  author: "Danish Rauf"
},
{
  quote: "Forever is a promise I’m keeping for you. 🔒",
  author: "Komal Fatima"
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
