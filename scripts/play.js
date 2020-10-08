/**
 * Retrieve play buttons after DOM has rendered the songs
 */
const bottomSection = document.querySelector('.bottom_section')
const playButtons = document.querySelectorAll('.playSong')
const banner = document.querySelector('.banner')
const partyButton = document.querySelector('.party button')
const srcmp3 = document.querySelector('source')

// Controls
const previous = document.querySelector('#previous')
const pause = document.querySelector('#pause')
const next = document.querySelector('#next')

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

  // Display the bottom section
  bottomSection.style.display = 'block'

  // Update player song info
  songInfo.innerText = title.innerText + ' - ' + artist.innerText
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

// Previous song
previous.addEventListener('click', () => {
  songController('Back')
})

// Pause song
pause.addEventListener('click', () => {
  if (pause.getAttribute('name') == 'pause-circle-outline') {
    songPlayer.pause()
    pause.setAttribute('name', 'play-circle-outline')
  } else {
    pause.setAttribute('name', 'pause-circle-outline')
    songPlayer.play()
  }
})

// Next song
next.addEventListener('click', () => {
  songController('Next')
})

/**
 *
 * @param {String} direction - Next (Moves to the next song on the list)
 * @param {String} direction - Back (Moves back in the song list)
 */
function songController(action) {
  const currentPlaying = document.title.split('-')[0].trim()
  songReference.findIndex((index) => {
    if (index.title == currentPlaying) {
      const direction = action == 'Next' ? +index.id + 1 : +index.id - 1
      const nextSong = document.querySelector('#id' + direction)
      if (nextSong == undefined) {
        // If there is no song to play next. Player starts over.
        document.querySelector('#id1').click()
      } else {
        nextSong.click()
      }
    }
  })
}
