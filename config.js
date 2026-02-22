const CONFIG = {
    valentineName: "Nabila",  // Ex ka naam

    pageTitle: "Do You Still Remember Me? 💭",

    floatingEmojis: {
        hearts: ['❤️', '💖', '💔', '💓'],  // Thoda bittersweet vibe
        bears: ['🧸', '🐻']
    },

    questions: {
        first: {
            text: "Do you still remember me?",   // Main question
            yesBtn: "Yes",
            noBtn: "No",
            secretAnswer: "I never stopped remembering you..." // Hidden romantic line
        },
        second: {
            text: "Did you ever think of us?",   // Emotional second step
            startText: "This much ❤️",
            nextBtn: "Next 💭"
        },
        third: {
            text: "Was I ever easy to forget?",  // Subtle ex-question
            yesBtn: "Yes...",
            noBtn: "No",
            secretAnswer: "You were never easy for me to forget." // Hidden again
        }
    },

    loveMessages: {
        extreme: "You loved me that much?? 🥺💔",  // Mood swings reflected
        high: "To infinity… or at least for some moments 💭💖",
        normal: "I still think of you sometimes… ❤️"
    },

    celebration: {
        title: "I guess some memories never fade… 💭💖",
        message: "No matter the distance or silence, you’ll always matter.",
        emojis: "💔💖💭🧸❤️"
    },

    colors: {
        backgroundStart: "#ffe6e6",  // Soft pinkish-pastel for bittersweet mood
        backgroundEnd: "#ffd9d9",
        buttonBackground: "#ff6b6b",
        buttonHover: "#ff8787",
        textColor: "#c23616"  // Slightly darker red/orange
    },

    animations: {
        floatDuration: "18s",
        floatDistance: "50px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.5
    },

    music: {
        enabled: true,
        autoplay: true,
        musicUrl: "https://res.cloudinary.com/dx75l8hyl/video/upload/v1770412278/Shayar_1_alehy1.mp3", 
        startText: "🎵 Play Music",
        stopText: "🔇 Stop Music",
        volume: 0.5
    }
};

window.VALENTINE_CONFIG = CONFIG
