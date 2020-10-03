/**
 * Retrieve play buttons after DOM has rendered the songs
 */
const playButtons = document.querySelectorAll('.playSong')
const banner = document.querySelector('.banner')
const partyButton = document.querySelector('.party button')

// User can click the playbutton or the table row itself and this will trigger the song to start
playButtons.forEach((single) => {
  single.parentElement.parentElement.addEventListener('click', () => {
    single.addEventListener('click', startPlaySong)
    single.click()
  })
})

// Run party mode
partyButton.addEventListener('click', partyMode)

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
  songPlayer.setAttribute('preload', 'auto')
  songPlayer.load()
  songPlayer.play()

  // Update Page title to show song title and artist
  document.title = ` ${title.innerText} - ${artist.innerText}`
}

// Shuffle
function partyMode(e) {
  const randomSong = Math.floor(Math.random() * (playButtons.length - 1)) + 1
  playButtons[randomSong].parentElement.click()
}
