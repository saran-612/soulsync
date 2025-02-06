const songs = [
    "Aga Naga", "Amizhdhe-Nee", "Aval", "Badass", "Chikitu-Vibe", "Darshana", "Dheema",
    "ennadi-maayavi-nee", "erimalayin-magale", "Inkem-Inkem-Inkem", "kadhaippoma", "Kadhal-Aasai",
    "Kadhale-Kadhale", "Kanave-Kanave", "kanave-unai", "k-for-kabaradakkam", "Kurunchiragu", "Manasilaayo",
    "Mudhal-Nee-Mudivum-Nee", "Nee-Kavithaigala", "Nenjin-Ezhuth", "Oru-Manam", "Pathikichu",
    "Samajavaragamana", "Sawadeeka", "Vaane-Vaane", "Vazhlithunaiye", "Venmathiye", "Yean-Ennai-Pirindhaai"
];

const searchInput = document.getElementById("search");
const songList = document.getElementById("songList");

function displaySongs(filteredSongs) {
    songList.innerHTML = "";
    filteredSongs.forEach(song => {
        const li = document.createElement("li");
        li.textContent = song;
        songList.appendChild(li);
    });
}

searchInput.addEventListener("input", function() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredSongs = songs.filter(song => song.toLowerCase().includes(searchTerm));
    displaySongs(filteredSongs);
});

displaySongs(songs);
