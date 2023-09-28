const imgCookieClose = document.querySelector('#imgCookieClose')
let pharseLuck = document.querySelector('#pharseLuck')

const btnNewCookie = document.querySelector('#btnNewCookie')

const screenClose = document.querySelector('.screenClose')
const screenOpen = document.querySelector('.screenOpen')

imgCookieClose.addEventListener('click', luckClick)
btnNewCookie.addEventListener('click', toogleScreen)
document.addEventListener('keydown', keyDownEnter)

function luckClick() {
  toogleScreen()
  pharsesLuck()
}

function toogleScreen() {
  screenClose.classList.toggle('hide')
  screenOpen.classList.toggle('hide')
}

function pharsesLuck() {
  let pharse = [
    'Você não pode mudar o seu passado, mas pode estragar o seu futuro.',
    'A vida é um lindo conto de falhas.',
    'O não você já tem. Agora basta buscar a humilhação.',
    'É só uma fase ruim, logo tudo vai piorar.'
  ]

  let indexPhrases = Math.floor(Math.random() * 4)
  pharseLuck.innerText = pharse[indexPhrases]
}

function keyDownEnter(e) {
  if (e.key == 'Enter' && screenClose.classList.contains('hide')) {
    toogleScreen()
  } else {
    toogleScreen()
    pharsesLuck()
  }
}

