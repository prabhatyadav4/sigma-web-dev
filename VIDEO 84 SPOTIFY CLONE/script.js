console.log('Lets write JavaScript');

async function getSongs(){
    let a = await fetch("http://127.0.0.1:5500/songs/")    let response = await a.text().catch(error => {console.error("Error fetching songs:", error); return "<div>Failed to load songs</div>";});
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    let songs  = []
    for(let index = 0; index < as.length; index++){
        const element = as[index];
        if(element.href.endsWith(".mp3")){
            songs.push(element.href.split("/songs/")[1])
        }
    }
    return songs
}


const playMusic = (track) => {
    let audio = new Audio(`/songs/${encodeURIComponent(track)}`);
    audio.play().catch(error => console.error("Autoplay prevented:", error));
}
 
async function main(){

    let songs = await getSongs()
    console.log(songs)

    let songUL = document.querySelector('.songList').getElementsByTagName("ul")[0]
    for (const song of songs) {
        let listItem = document.createElement('li');
        listItem.innerHTML = `
         <li>
                <img class="invert" src="/img/music.svg" alt="">
                <div class="info">
                  <div>${song.replaceAll("%20"," ")}</div>
                  <div>Harry</div>
                </div>
              </li>`;
              listItem.addEventListener("click", () => {
            playMusic(song);
        })
        songUL.appendChild(listItem);
   
    })


}
main()