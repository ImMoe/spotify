const table = document.getElementById('songs')
const songPlayer = document.querySelector('#player')
const songImage = document.querySelector('.song-cover img')
const songInfo = document.querySelectorAll('.cover p')

createSongList()

function createSongList() {
  songReference.forEach((song) => {
    table.innerHTML += `
      <tr>
        <td>${song.title}</td>
        <td>${song.artist}</td>
        <td><ion-icon name="play-circle-outline" size="large" class="playSong"></ion-icon></td>
        <td style="display: none">${song.song}</td>
        <td style="display: none">${song.cover}</td>
      </tr>
    `
  })
}
