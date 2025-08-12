console.log('Lets write JavaScript');

let currentSong = new Audio();
let songs;
let CurrFolder;
const play = document.getElementById("play");
const previous = document.getElementById("previous");
const next = document.getElementById("next");

function secondsToMinutesSeconds(seconds){
    if(isNaN(seconds) || seconds < 0){
        return "00:00"
    }

    const minutes = Math.floor(seconds/60);
    const remainingSeconds = Math.floor(seconds%60)

    const formattedMinutes = String(minutes).padStart(2,'0')
    const formattedSeconds = String(remainingSeconds).padStart(2, '0')

    return `${formattedMinutes}:${formattedSeconds}`
}

async function getSongs(folder){
    CurrFolder = folder
    let a = await fetch(`http://127.0.0.1:5500/${CurrFolder}/`)
    let response = await a.text();
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    songs  = []
    for(let index = 0; index < as.length; index++){
        const element = as[index];
        if(element.href.endsWith(".mp3")){
            songs.push(element.href.split(`/${CurrFolder}/`)[1])
        }
    }
    // Show all the songs in the playlist
    let songUL = document.querySelector('.songList').getElementsByTagName("ul")[0]
    songUL.innerHTML = ""
    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML + `
         <li>
                <img class="invert" src="/img/music.svg" alt="">
                <div class="info">
                  <div>${song.replaceAll("%20"," ")}</div>
                  <div>Prabhat</div>
                </div>
                <div class="playnow">
                  <span>Play Now</span>
                  <img class="invert" src="/img/play.svg" alt="">
                </div>
              </li>`;
    }

    // Attach an event listener to each song
    Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e=>{
        e.addEventListener("click", ()=>{
            playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())
        })
    })
}
const playMusic = (track, pause = false) => {
    currentSong.src = `/${CurrFolder}/`+track
    if(!pause){
        currentSong.play()
        play.src = "/img/pause.svg"
    }
    document.querySelector(".songinfo").innerHTML = decodeURI(track)
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00"
}

async function displayAlbums() {
    // Fetch the songs folder listing (HTML)
    let a = await fetch("http://127.0.0.1:5500/songs/");
    let response = await a.text();

    // Parse HTML
    let div = document.createElement("div");
    div.innerHTML = response;

    let anchors = div.getElementsByTagName("a");
    let cardContainer = document.querySelector(".cardContainer");

    // Clear old cards
    cardContainer.innerHTML = "";

    for (let e of anchors) {
        let href = e.getAttribute("href");

        // Only process album folders inside /songs
        if (href && href.startsWith("/songs/") && !href.includes(".htaccess") && href !== "/songs/") {
            let parts = href.split("/").filter(Boolean);
            let folder = parts.pop();

            try {
                // Fetch album metadata
                let metaReq = await fetch(`http://127.0.0.1:5500/songs/${folder}/info.json`);
                let meta = await metaReq.json();

                // Create the album card
                let card = document.createElement("div");
                card.classList.add("card");
                card.dataset.folder = folder;
                card.innerHTML = `
                    <div class="card-image">
                        <img src="/songs/${folder}/cover.jpg" alt="${meta.title}" />
                        <div class="play"></div>
                    </div>
                    <div class="card-text">
                        <h2>${meta.title}</h2>
                        <p>${meta.description}</p>
                    </div>
                `;

                // Click to load playlist and play
                card.addEventListener("click", async () => {
                    await getSongs(`songs/${folder}`);
                    playMusic(songs[0]);
                });

                cardContainer.appendChild(card);

            } catch (err) {
                console.error(`Error loading album ${folder}:`, err);
            }
        }
    }
}


// Function to update playlist section in UI
function updatePlaylistUI(songs) {
    let playlistContainer = document.querySelector(".playlistContainer"); // Change selector if needed
    playlistContainer.innerHTML = "";

    songs.forEach(song => {
        let songElement = document.createElement("div");
        songElement.classList.add("playlistItem");
        songElement.innerHTML = `
            <span>${song.name}</span>
        `;

        // Click to play this song
        songElement.addEventListener("click", () => {
            playMusic(song.name);
        });

        playlistContainer.appendChild(songElement);
    });
}




async function main(){
    
    await getSongs("songs/ncs")
    
    playMusic(songs[0], true)

    // Display all the albums on the page
    displayAlbums()

    // Attach an event listener to previous, play and next
    play.addEventListener("click", ()=> {
        if(currentSong.paused){
            currentSong.play()
            play.src = "/img/pause.svg"
        }
        else{
            currentSong.pause()
            play.src = "/img/play.svg"
        }
    })

    //Listen for time update event 
    currentSong.addEventListener("timeupdate", () => {
        document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentSong.currentTime)} / ${secondsToMinutesSeconds(currentSong.duration)}`

        document.querySelector(".circle").style.left = ((currentSong.currentTime / currentSong.duration) * 100) + "%";
    })

    // Add an event listener for seekbar
    document.querySelector(".seekbar").addEventListener("click", e=>{
        let percent = (e.offsetX/e.target.getBoundingClientRect().width) * 100;
        document.querySelector(".circle").style.left = percent + "%";
        currentSong.currentTime = ((currentSong.duration) * percent) / 100
    })

    // Add an event listener for hamburger
    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".left").style.left = "0"
    })

    // Add an event listener for close button
    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-110%"
    })

    // Add an event listener for previous button
    previous.addEventListener("click", ()=> {
        console.log("Previous clicked")
        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
        if ((index - 1) >= 0) {
            playMusic(songs[index - 1]);
        }
    })
    
    // Add an event listener for next button
    next.addEventListener("click", ()=> {
        currentSong.pause()
        console.log("Next clicked")
        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
        if((index + 1) < (songs.length)){
            playMusic(songs[index+1])
        }

    })

    // Add an event to volume
    document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e) => {
        console.log("Setting volume to", e.target.value, "/ 100")
        currentSong.volume = parseInt(e.target.value)/100
        if (currentSong.volume > 0) {
             document.querySelector(".volume>img").src = document.querySelector(".volume>img").src.replace("mute.svg","volume.svg")
        }
    })

    // Add an event listener to mute the track
    document.querySelector(".volume>img").addEventListener("click", e => {
        if(e.target.src.includes("volume.svg")){
            e.target.src = e.target.src.replace("volume.svg","mute.svg")
            currentSong.volume = 0;
            document.querySelector(".range").getElementsByTagName("input")[0].value = 0;
        }
        else{
            e.target.src = e.target.src.replace("mute.svg","volume.svg")
            currentSong.volume = .10;
            document.querySelector(".range").getElementsByTagName("input")[0].value = 10;
        }
    })
}
main()