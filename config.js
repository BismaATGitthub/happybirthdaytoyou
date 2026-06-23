/**
 * ✨ EDIT THIS FILE to customize the birthday greeting! ✨
 *
 * This is the ONLY file you need to modify.
 * No need to touch HTML, CSS, or any other JavaScript files.
 *
 * AVAILABLE SECTION TYPES:
 *   "greeting"      → Opening greeting with recipient's name
 *   "announcement"  → Birthday announcement text
 *   "chatbox"       → Chat message with typing animation
 *   "ideas"         → Sequential text reveals, one by one
 *   "quote"         → Styled quote card with optional author
 *   "countdown"     → Animated 3-2-1 countdown
 *   "stars"         → Twinkling stars background
 *   "fireworks"     → Colorful firework sparks burst
 *   "balloons"      → Floating balloon animation
 *   "profile"       → Profile photo with birthday wish
 *   "confetti"      → Confetti burst animation
 *   "closing"       → Closing message with replay button
 *
 * HOW TO USE:
 *   REMOVE a section  → Delete its object from the sections array
 *   DUPLICATE          → Copy-paste any section object
 *   REORDER            → Move the section object up/down in the array
 *   EDIT TEXT          → Change the string values
 */

const CONFIG = {
  // ── Recipient Info ────────────────────────────────────────────
  name: "Brian Tony",
  photo: "./img/brr.png",       // Place your photo in the img/ folder
  music: "./music/hbd.mp3",      // Place your music in the music/ folder

  // ── Theme Colors ──────────────────────────────────────────────
  // A toggle button lets the viewer switch between dark & light mode.
  colors: {
    primary: "#f1c232",           // Main accent color (rose pink)
    accent: "#60a5fa",            // Secondary accent color (sky blue)
    dark: {
      background: "#0f172a",      // Slate 900
      text: "#f1f5f9",            // Slate 100
    },
    light: {
      background: "#fafaf9",      // Stone 50
      text: "#1e293b",            // Slate 800
    },
  },

  // ── Default Color Mode ────────────────────────────────────────
  // Options: "dark" or "light"
  defaultMode: "dark",

  // ── Sections ──────────────────────────────────────────────────
  // Add, remove, duplicate, or reorder as you wish!
  sections: [
    {
      type: "greeting",
      title: "Hi",
      subtitle: "Its really grateful for me to know you as the kindest person as I know",
      subsubtitle: "Amazing Brian Tony",
    },
    {
      type: "countdown",
      from: 5,                    // Countdown from this number
      goText: "🎉",              // Text shown after countdown ends
    },
    {
      type: "announcement",
      text: "It's your birthday!! 24th of June, right?",
    },
    {
      type: "chatbox",
      message:
        "Happy birthday to youu Brian!! Wishing you a wonderful year ahead filled with joy, love, and endless happiness!",
      buttonText: "Send",
    },
    {
      type: "ideas",
      lines: [
        "That's what I was going to do.",
        "But then I stopped.",
        "I realised, I wanted to do something <strong>special</strong>.",
        "Because,",
        "You are Special and You do the Same to me Yesterday <span>:)</span>",
      ],
      bigLetters: "SO",
    },
    {
      type: "quote",
      text: "The more you praise and celebrate your life, the more there is in life to celebrate.",
      author: "Oprah Winfrey",
    },
    {
      type: "stars",
      count: 40,
    },
    {
      type: "balloons",
      count: 32,
    },
    {
      type: "profile",
      wishTitle: "Happy Birthday!",
      wishText: "May the luck and happiness always be with you! ;)",
    },
    {
      type: "fireworks",
      count: 32,
    },
    {
      type: "confetti",
      count: 9,
    },
    {
      type: "closing",
      text: "Last wishes in Bahasa, Semoga Brian sehat selalu, dimudahkan segala rezeki dan cita-citanya, dilancarkan karir dan tubelnya, diberi lingkungan yang suportif dan menyayangi dirimu, dan segala doa baik lainnya, Amiin. Dikata kaya batu Sedimen yang jadi tempat terbentuk dan tersimpannya si hidrokarbon, semoga setiap usaha yang dikumpulkan jadi fondasi yang baik dan harapan di masa depan. Nice to know you man, happy birthday, you are not older, you are wiser",
      replayText: "Or click, if you want to watch it again.",
    },
  ],
};
