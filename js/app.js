const quotes = [
  {
    quote: "You are my sunshine, moonlight, and all of my stars. With you, my life is complete.",
    author: "Abdullah Shahid"
  },
  {
    quote: "Love is beautiful with someone beautiful as you are.",
    author: "Steve Seuri"
  },
  {
    quote: "If the sky is the limit, our love has no limit and it can't wait a minute. You are the one I will always hold on to.",
    author: "KeenRulzze"
  },
  {
    quote: "In the garden of our love, every bloom whispers your name, a testament to the beauty that you've brought to my frame.",
    author: "Laila Majnu"
  },
  {
    quote: "As the ocean cradles the moon's reflection, so does my heart cradle your affection, a boundless love that flows without end, you are my lover, my soulmate, my friend.",
    author: "Rumi Khan"
  }
];

let count = 0;
let quotesWithAuthor = [];
let quotesWithoutAuthor = [];

function changeQuote() {
  count++;
  if (quotesWithAuthor.length === 0) {
    quotesWithAuthor = quotes.filter(quote => quote.author);
  }
  if (quotesWithAuthor.length > 0) {
    const randomIndex = Math.floor(Math.random() * quotesWithAuthor.length);
    const randomQuote = quotesWithAuthor.splice(randomIndex, 1)[0];
    document.getElementById("quote").innerText = `"${randomQuote.quote}"`;
    document.getElementById("author").innerText = randomQuote.author ? `-${randomQuote.author}` : "";
  } else {
    if (quotesWithoutAuthor.length === 0) {
      quotesWithoutAuthor = quotes.filter(quote => !quote.author);
    }
    const randomIndex = Math.floor(Math.random() * quotesWithoutAuthor.length);
    const randomQuote = quotesWithoutAuthor.splice(randomIndex, 1)[0];
    document.getElementById("quote").innerText = `"${randomQuote.quote}"`;
    document.getElementById("author").innerText = "";
  }

  if (count % 5 == 0) {
    getKaiAd({
      publisher: 'da08737d-861e-4ebe-bbbb-8fb90d004d39',
      app: 'Love_Poetry',
      slot: 'Love_Poetry_slot',
      onerror: err => console.error('Custom catch:', err),
      onready: ad => {
        ad.call('display')
        ad.on('display', () => document.getElementById("softKeysContainer").style.display = "none")
        ad.on('close', () => {
          document.getElementById("softKeysContainer").style.display = "block";
        })
      }
    })
  }
}

function handleKeyDown(event) {
  event.preventDefault(); // Always prevent default behavior first

  switch (event.key) {
    case 'Enter':
    case 'SoftRight':
      changeQuote();
      break;

    case 'SoftLeft':
      window.location.href = 'index.html';
      break;

    case '5':
      const quoteText = document.querySelector('#quote').textContent;
      const shareText = quoteText;

      const msgActivity = new MozActivity({
        name: 'new',
        data: {
          type: 'websms/sms',
          body: shareText
        },
        target: 'message'
      });
      break;
  }
}

// Attach listener
window.addEventListener("keydown", handleKeyDown);
document.addEventListener("DOMContentLoaded", () => {
  changeQuote(); // Call this to display a quote when the page loads
  getKaiAd({
    publisher: 'da08737d-861e-4ebe-bbbb-8fb90d004d39',
    app: 'Love_Poetry',
    slot: 'Love_Poetry_slot',
    onerror: err => console.error('Custom catch:', err),
    onready: ad => {
      ad.call('display')
      ad.on('display', () => document.getElementById("softKeysContainer").style.display = "none")
      ad.on('close', () => {
        document.getElementById("softKeysContainer").style.display = "block";
      })
    }
  })
});

document.addEventListener("keydown", handleKeyDown);
