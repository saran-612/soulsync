const playlist = [
    { title: "Samajavaragamana", artist: "", src: "assets/song/Samajavaragamana.mp3", cover: "assets/image/music profile/Samajavaragamana.png" },
    { title: "Vazhlithunaiye", artist: "", src: "assets/song/Vazhlithunaiye.mp3", cover: "assets/image/music profile/Vazhlithunaiye.png" },
    { title: "Pathikichu", artist: "", src: "assets/song/Pathikichu.mp3", cover: "assets/image/music profile/Pathikichu.png" },
    { title: "Oru Manam", artist: "", src: "assets/song/Oru Manam.mp3", cover: "assets/image/music profile/Oru Manam.png" },
    { title: "Venmathiye", artist: "", src: "assets/song/Venmathiye.mp3", cover: "assets/image/music profile/Venmathiye.png" },
    { title: "Aga Naga", artist: "", src: "assets/song/Aga Naga.mp3", cover: "assets/image/music profile/Aga Naga.png" },
    { title: "Amizhdhe Nee", artist: "", src: "assets/song/Amizhdhe Nee.mp3", cover: "assets/image/music profile/Amizhdhe Nee.png" },
    { title: "K For Kabaradakkam", artist: "", src: "assets/song/K For Kabaradakkam.mp3", cover: "assets/image/music profile/K For Kabaradakkam.png" },
    { title: "Ennadi Maayavi Nee", artist: "", src: "assets/song/Ennadi Maayavi Nee.mp3", cover: "assets/image/music profile/Ennadi Maayavi Nee.png" },
    { title: "Kadhaippoma", artist: "", src: "assets/song/Kadhaippoma.mp3", cover: "assets/image/music profile/Kadhaippoma.png" },
    { title: "Kurunchiragu", artist: "", src: "assets/song/Kurunchiragu.mp3", cover: "assets/image/music profile/Kurunchiragu.png" },
    { title: "Erimalayin Magale", artist: "", src: "assets/song/Erimalayin Magale.mp3", cover: "assets/image/music profile/Erimalayin Magale.png" },
    { title: "Mudhal Nee Mudivum Nee", artist: "", src: "assets/song/Mudhal Nee Mudivum Nee.mp3", cover: "assets/image/music profile/Mudhal Nee Mudivum Nee.png" },
    { title: "Vaane Vaane", artist: "", src: "assets/song/Vaane Vaane.mp3", cover: "assets/image/music profile/Vaane Vaane.png" },
    { title: "Kanave Kanave", artist: "", src: "assets/song/Kanave Kanave.mp3", cover: "assets/image/music profile/Kanave Kanave.png" },
    { title: "Yean Ennai Pirindhaai", artist: "", src: "assets/song/Yean Ennai Pirindhaai.mp3", cover: "assets/image/music profile/Yean Ennai Pirindhaai.png" },
    { title: "Inkem Inkem Inkem", artist: "", src: "assets/song/Inkem Inkem Inkem.mp3", cover: "assets/image/music profile/Inkem Inkem Inkem.png" },
    { title: "Badass", artist: "", src: "assets/song/Badass.mp3", cover: "assets/image/music profile/Badass.png" },
    { title: "Aval", artist: "", src: "assets/song/Aval.mp3", cover: "assets/image/music profile/Aval.png" },
    { title: "Dheema", artist: "", src: "assets/song/Dheema.mp3", cover: "assets/image/music profile/Dheema.png" },
    { title: "Chikitu Vibe", artist: "", src: "assets/song/Chikitu Vibe.mp3", cover: "assets/image/music profile/Chikitu Vibe.png" },
    { title: "Darshana", artist: "", src: "assets/song/Darshana.mp3", cover: "assets/image/music profile/Darshana.png" },
    { title: "Kadhal Aasai", artist: "", src: "assets/song/Kadhal Aasai.mp3", cover: "assets/image/music profile/Kadhal Aasai.png" },
    { title: "Sawadeeka", artist: "", src: "assets/song/Sawadeeka.mp3", cover: "assets/image/music profile/Sawadeeka.png" },
    { title: "Nenjin Ezhuth", artist: "", src: "assets/song/Nenjin Ezhuth.mp3", cover: "assets/image/music profile/Nenjin Ezhuth.png" },
    { title: "Kadhale Kadhale", artist: "", src: "assets/song/Kadhale Kadhale.mp3", cover: "assets/image/music profile/Kadhale Kadhale.png" },
    { title: "Kanave Unai", artist: "", src: "assets/song/Kanave Unai.mp3", cover: "assets/image/music profile/Kanave Unai.png" },
    { title: "Nee Kavithaigala", artist: "", src: "assets/song/Nee Kavithaigala.mp3", cover: "assets/image/music profile/Nee Kavithaigala.png" },
    { title: "Manasilaayo", artist: "", src: "assets/song/Manasilaayo.mp3", cover: "assets/image/music profile/Manasilaayo.png" },
];

let cur = 0;
function playSong(ind) {
    if (ind < 0 || ind >= playlist.length) return;
    cur = ind;
    event.preventDefault();
    const audio = document.getElementById("audio");
    const playIcon = document.querySelector(".play");
    const pauseIcon = document.querySelector(".pause");
    const coverimg = document.getElementById("cover_img");
    const covertxt = document.getElementById("cover_txt");

    coverimg.src = playlist[ind].cover;
    coverimg.style.display = "block";
    covertxt.textContent= playlist[ind].title;
    audio.src = playlist[cur].src;
    audio.load();
    audio.play();

    console.log("start");

    playIcon.style.display = "none";
    pauseIcon.style.display = "block";

}
const len_song = playlist.length;
function nxtsng() {
    if (cur == 28) {
        playSong(0);
    } else {
        cur++;
        playSong(cur);
    }
}

function pre() {
    if (cur > 0) {
        playSong(cur - 1);
    } else {
        playSong(len_song - 1);
    }
}

function play_pause(){
    const audio = document.getElementById("audio");
    const playIcon = document.querySelector(".play");
    const pauseIcon = document.querySelector(".pause");

    if (audio.paused) {
        audio.play();
        playIcon.style.display = "none";
        pauseIcon.style.display = "block";
    } else {
        audio.pause();
        playIcon.style.display = "block";
        pauseIcon.style.display = "none";
}
}

document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        event.preventDefault(); 
        play_pause();
    }
});

function toggleMute() {
    const audio = document.getElementById("audio");
    const mutepht = document.getElementById("mute_pht");

    audio.muted = !audio.muted;
    mutepht.src = audio.muted ? "assets/image/icon/mute.png" : "assets/image/icon/unmute.png";
}
const audio = document.getElementById("audio");
audio.onended = function() {
    console.log("end");
    nxtsng();  
};