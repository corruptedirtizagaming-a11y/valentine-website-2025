const CONFIG = {
    valentineName: "Nabila",

    pageTitle: "Do You Still Remember Me? ",

    floatingEmojis: {
        hearts: ['❤️', '💖', '💓'],  // Removed broken heart
        bears: ['🧸', '🐻']
    },

    questions: {
        first: {
            text: "Do you still remember me?",
            yesBtn: "Yes",
            noBtn: "No",
            secretAnswer: "I never stopped remembering you..." // Hidden romantic line
        },
        second: {
            text: "Did you ever think of us?",
            startText: "This much ❤️",
            nextBtn: "Next❤️"
        },
        third: {
            text: "Will you promise a never-ending friendship with me?🥹",
            yesBtn: "Yes!",         // Correct button
            noBtn: "No",             // Fake button
            secretAnswer: "I knew we’d always stay close… 💖", // Shows if Yes clicked
            fakeAnswer: "I guess some bonds are complicated… 💖" // Shows if No clicked
        }
    },

    loveMessages: {
        extreme: "You loved me that much?? 🥰",
        high: "To infinity… or at least for some moments 💖",
        normal: "I still think of you sometimes… ❤️"
    },

    celebration: {
        title: "I guess some memories never fade… 💭💖",
        message: "No matter the distance or silence, you’ll always matter.",
        emojis: "💖"
    },

    colors: {
        backgroundStart: "#ffe6e6",
        backgroundEnd: "#ffd9d9",
        buttonBackground: "#ff6b6b",
        buttonHover: "#ff8787",
        textColor: "#c23616"
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
