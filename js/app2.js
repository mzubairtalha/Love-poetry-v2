
  const quotes = [
    {
      quote:
        "When you fall for someone's personality, everything about them becomes beautiful.",
    },
  {
    quote:
      "In the starlit sky of your eyes, I find my guiding light 🌟",
  },
  {
    quote:
      "Your laughter is the sweetest melody that plays in the chambers of my heart 🎵",
  },
  {
    quote:
      "With each step we take together, our love story unfolds like petals of a rose 🌹",
  },
  {
    quote:
      "Your love is the compass that guides me through life's uncertain waters 🧭",
  },
  {
    quote:
      "In your embrace, I find the sanctuary where my soul belongs 🏡",
  },
  {
    quote:
      "Like the moon, your love shines bright in the darkest of nights 🌙",
  },
  {
    quote:
      "With every heartbeat, I am reminded of the rhythm of our love ❤️",
  },
  {
    quote:
      "Your smile is the sunshine that brightens even the gloomiest of days ☀️",
  },
  {
    quote:
      "In the garden of our love, every kiss is a blossoming flower 💋🌸",
  },
  {
    quote:
      "With you by my side, every moment feels like a dream come true ✨",
  },
  {
    quote:
      "Your love is the canvas on which I paint the masterpiece of our story 🎨",
  },
  {
    quote:
      "In the silence between our words, our hearts speak the language of love ❤️🗣️",
  },
  {
    quote:
      "Like two stars in the sky, our souls are forever intertwined ✨💫",
  },
  {
    quote:
      "In the tapestry of our love, every thread tells the story of our journey together 🧵",
  },
  {
    quote:
      "Your love is the sweet symphony that plays in the symphony of my soul 🎶",
  },
  {
    quote:
      "With you, every day feels like Valentine's Day 💘",
  },
  {
    quote:
      "Your love is the anchor that keeps me grounded in the stormy seas of life ⚓",
  },
  {
    quote:
      "Like a shooting star, your love streaks across the sky of my heart, leaving a trail of magic ✨💖",
  },
  {
    quote:
      "In your arms, I find the strength to weather any storm that comes our way 💪🌧️",
  },
  {
    quote:
      "Your love is the melody that lingers in the air, even after the music fades 🎶❤️",
  },
  {
    quote:
      "With you, every moment feels like a fairytale come true 🏰✨",
  },
  {
    quote:
      "Your love is the fire that keeps me warm on the coldest of nights 🔥❤️",
  },
  {
    quote:
      "In the vast expanse of the universe, our love is the brightest star 🌠💖",
  },
  {
    quote:
      "With each heartbeat, I am reminded of the miracle of our love ❤️🌟",
  },
  {
    quote:
      "Your love is the treasure I've been searching for my whole life 💎💖",
  },
  {
    quote:
      "In your eyes, I see a reflection of the love that fills my soul 👀❤️",
  },
  {
    quote:
      "With you, every day is an adventure waiting to unfold 🌄🌟",
  },
  {
    quote:
      "Your love is the sweetest song that plays on the soundtrack of my life 🎵❤️",
  },
  {
    quote:
      "In your embrace, I find the peace that I've been searching for my whole life 🤗❤️",
  },
  {
    quote:
      "With you, I've found my happily ever after 💑🏰",
  },
  {
    quote:
      "Your love is the light that guides me through the darkness of the night 🌟🌙",
  },
  {
    quote:
      "In your smile, I find the sunshine that brightens even the cloudiest of days 😊☀️",
  },
  {
    quote:
      "With you, every moment feels like a dream that I never want to wake up from 💭💖",
  },
  {
    quote:
      "Your love is the magic that brings color to my black and white world 🎨❤️",
  },
  {
    quote:
      "In the dance of our love, every step brings us closer together 💃🕺",
  },
  {
    quote:
      "With you, every day is a new beginning filled with endless possibilities 🌅✨",
  },
  {
    quote:
      "Your love is the greatest gift I've ever received 🎁❤️",
  },
  {
    quote:
      "In your eyes, I see the reflection of a love that's deeper than the ocean 🌊❤️",
  },
  {
    quote:
      "With you, I've found the missing piece of the puzzle that is my heart ❤️🧩",
  },
  {
    quote:
      "Your love is the compass that points me in the direction of my dreams 🧭💖",
  },
  {
    quote:
      "In your arms, I find the home that I've been searching for my whole life 🏡❤️",
  },
    {
      quote:
        "People may not always tell you how they feel about you, but they will always show you.",
    },
    {
      quote:
        "If my Valentine you won't be, I'll hang myself on your Christmas tree.",
    },
    {
      quote:
        "I love you Ender. More than ever. No matter what you decide.",
    },
    {
      quote:
        "None of us could be happy for long, doing nothing.",
    },
    {
      quote:
        "I would have to break the ice with a warm smile that would melt her heart.",
    },
    {
      quote:
        "Love elevates the beauty of life.",
    },
    {
      quote:
        "Oh my love, you are my life boat in the ocean of my life.",
    },
    {
      quote:
        "I love the sweet sound of my name when you say it with love.",
    },
    {
      quote:
        "For ye will know not love, if ye knoweth not your God.",
    },
    {
      quote:
        "Kiss me with love like a butterfly kisses flowers to find and taste the nectar of life.",
    },
    {
      quote:
        "My kiss is my promise written in my heart with color of your love.",
    },
    {
      quote:
        "I promise you that I will steal your heart and keep it in the prison of my love forever.",
    },
    {
      quote:
        "In this life I choose you.",
    },
    {
      quote:
        "Real love stories never have endings.",
    },
  ];

let count = 0;


  function changeQuote(){
    count++;
    let random = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = "\"" + quotes[random].quote + "\"";
    // document.getElementById("author").innerText =  "-" + quotes[random].author;
    if(count % 5 == 0){
      getKaiAd({
        publisher: 'da08737d-861e-4ebe-bbbb-8fb90d004d39',
        app: 'Love_Poetry',
        slot: 'Love_Poetry_slot',
        onerror: err => console.error('Custom catch:', err),
        onready: ad => {
            // Ad is ready to be displayed
            // calling 'display' will display the ad
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
  
  
  document.addEventListener("keydown", handleKeyDown);
  document.addEventListener("DOMContentLoaded", () => {
    // getKaiAd( config )
    getKaiAd({
        publisher: 'da08737d-861e-4ebe-bbbb-8fb90d004d39',
        app: 'Love_Poetry',
        slot: 'Love_Poetry_slot',
        onerror: err => console.error('Custom catch:', err),
        onready: ad => {
            // Ad is ready to be displayed
            // calling 'display' will display the ad
            ad.call('display')
            ad.on('display', () => document.getElementById("softKeysContainer").style.display = "none")
            ad.on('close', () => {
                document.getElementById("softKeysContainer").style.display = "block";
            })
        }
    })
});

function changeQuote() {
  const quoteEl = document.getElementById("quote");
  

  // Remove existing animations
  quoteEl.classList.remove("fade-out");
  
  quoteEl.style.animation = "none";
  

  // Trigger fade out
  void quoteEl.offsetWidth; // force reflow
  quoteEl.classList.add("fade-out");
  

  setTimeout(() => {
    // Replace with new quote
    const newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteEl.innerText = `"${newQuote.quote}"`;
    

    // Re-trigger fadeIn animation
    quoteEl.classList.remove("fade-out");
  
    quoteEl.style.animation = "fadeInQuote 0.8s ease forwards";
    
  }, 300);
}
