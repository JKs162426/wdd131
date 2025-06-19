//Responsive Navigation Menu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('nav');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

// Display current year and last modified date
const today = new Date;
const year = document.querySelector("#currentyear");
year.innerHTML = today.getFullYear();

const lastModified = document.querySelector("#lastModified");
lastModified.textContent = document.lastModified;


const languages = [
    { name: "English", flag: "🇺🇸", info: "English is a global language spoken in many countries.", difficulty: "Medium", spoken:"USA, UK, Australia, Canada, New Zealand, Ireland, South Africa", speakers:"400.000.000" },
    { name: "Spanish", flag: "🇪🇸", info: "Spanish is the second most spoken language in the world.", difficulty: "Medium", spoken:"Spain, Latin America", speakers:"460.000.000" },
    { name: "Italian", flag: "🇮🇹", info: "Italian is known for its musicality and is the language of opera.", difficulty: "Medium", spoken:"Italy, Switzerland", speakers:"85.000.000" },
    { name: "German", flag: "🇩🇪", info: "German is the most widely spoken language in the European Union.", difficulty: "Medium", spoken:"Germany, Austria, Switzerland", speakers:"90.000.000" },
    { name: "Portuguese", flag: "🇧🇷", info: "Portuguese is the official language of Brazil and Portugal.", difficulty: "Medium", spoken:"Brazil, Portugal, Angola", speakers:"260.000.000" },
    { name: "French", flag: "🇫🇷", info: "French is known as the language of love and diplomacy.", difficulty: "Medium", spoken:"France, Canada, Belgium", speakers:"300.000.000" },
    { name: "Japanese", flag: "🇯🇵", info: "Japanese is spoken by over 125 million people worldwide.", difficulty: "Hard", spoken:"Japan", speakers:"125.000.000" },
    { name: "Chinese", flag: "🇨🇳", info: "Chinese is the most spoken language in the world.", difficulty: "Hard", spoken:"China, Taiwan, Singapore", speakers:"1.200.000.000" },
    { name: "Russian", flag: "🇷🇺", info: "Russian is the largest native language in Europe.", difficulty: "Hard", spoken:"Russia, Belarus, Kazakhstan", speakers:"154.000.000" },
    { name: "Korean", flag: "🇰🇷", info: "Korean is known for its unique writing system, Hangul.", difficulty: "Medium", spoken:"South Korea, North Korea", speakers:"80.000.000" },
    { name: "Hindi", flag: "🇮🇳", info: "Hindi is one of the official languages of India.", difficulty: "Medium", spoken:"India", speakers:"600.000.000" },
    { name: "Arabic", flag: "🇸🇦", info: "Arabic is the language of the Quran and is spoken in many countries.", difficulty: "Hard", spoken:"Middle East, North Africa", speakers:"310.000.000" },
    { name: "Turkish", flag: "🇹🇷", info: "Turkish is the official language of Turkey and is known for its vowel harmony.", difficulty: "Medium", spoken:"Turkey, Cyprus", speakers:"80.000.000" },
    { name: "Dutch", flag: "🇳🇱", info: "Dutch is spoken in the Netherlands and Belgium.", difficulty: "Medium", spoken:"Netherlands, Belgium", speakers:"23.000.000" },
    { name: "Swedish", flag: "🇸🇪", info: "Swedish is a North Germanic language spoken in Sweden.", difficulty: "Medium", spoken:"Sweden", speakers:"10.000.000" },
    { name: "Norwegian", flag: "🇳🇴", info: "Norwegian is a North Germanic language spoken in Norway.", difficulty: "Medium", spoken:"Norway", speakers:"5.000.000" }
];

const languageList = document.querySelector("#language-list");
const languageInfo = document.querySelector("#language-info");

languages.forEach(lang => {
    const li = document.createElement("li");

    const link = document.createElement("a");
    link.href = "#";
    link.textContent = `${lang.name} ${lang.flag}`;
    link.addEventListener("click", (e) => {
        e.preventDefault();
        showLanguageInfo(lang);
    });

    li.appendChild(link);
    languageList.appendChild(li);
});

function showLanguageInfo(lang) {
    languageInfo.innerHTML = `
        <h3>${lang.name} ${lang.flag}</h3>
        <p>${lang.info}</p>
        <p><strong>Difficulty:</strong> ${lang.difficulty}</p>
        <p><strong>Spoken In:</strong> ${lang.spoken}</p>
        <p><strong>Speakers:</strong> ${lang.speakers}</p>
        <a href="resources.html">Resources</a>
    `;
    languageInfo.style.padding = "10px";
}

window.addEventListener('pagehide', () => {
  if (websocket && websocket.readyState === WebSocket.OPEN) {
    websocket.close();
  }
});