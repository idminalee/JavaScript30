function playSound(e) {
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)

  if (!audio) return
  audio.currentTime = 0 // audio rewinds to the start
  audio.play()

  key.classList.add('playing')
}

window.addEventListener('keydown', playSound)
window.addEventListener('keyup', e => {
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if (!key) return
  key.classList.remove('playing')
})
