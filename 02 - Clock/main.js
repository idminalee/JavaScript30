const hourHand = document.querySelector('.hour-hand')
const minHand = document.querySelector('.min-hand')
const secondHand = document.querySelector('.second-hand')

function setDate() {
  const now = new Date()

  const hour = now.getHours()
  const hourDegrees = (hour / 12) * 360 + 90
  hourHand.style.transform = `rotate(${hourDegrees}deg)`

  const mins = now.getMinutes()
  const minsDegrees = (mins / 60) * 360 + 90
  minHand.style.transform = `rotate(${minsDegrees}deg)`

  const seconds = now.getSeconds()
  const secondsDegrees = (seconds / 60) * 360 + 90
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`

  // Avoid the glitch when seconds reach 0
  if (secondsDegrees === 90) {
    secondHand.style.transition = 'transition 0s'
  } else {
    secondHand.style.transition = ''
  }
}

setInterval(setDate, 1000)

setDate()
