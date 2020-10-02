/**
 * Retrieve play buttons after DOM has rendered the songs
 */
const playButtons = document.querySelectorAll('.playSong')

playButtons.forEach((single) => {
  single.addEventListener('click', startPlaySong)
})

function startPlaySong(e) {
  const tableData = Array.from(e.target.parentElement.parentElement.children)
  const [title, artist, , song, cover] = tableData
  // Update player song info
  songInfo[0].innerText = title.innerText
  songInfo[1].innerText = artist.innerText
  // Set the cover image
  songImage.setAttribute('src', `songs/covers/${cover.innerText}.png`)
  // Set the source for player
  songPlayer.src = `songs/${song.innerText}.mp3`
  songPlayer.load()
  songPlayer.play()

  // Update Page title to show song title and artist
  document.title = ` ${title.innerText} - ${artist.innerText}`
}
