const pics = [
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80',
    'https://images.unsplash.com/photo-1647891941746-fe1d53ddc7a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80',
    'https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80',
    'https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80',
    'https://images.unsplash.com/photo-1627483262112-039e9a0a0f16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  ]

  const allImage = []


for (let i = 0; i < pics.length; i++) {
  const img = document.createElement('div')
  img.style.backgroundImage = `url(${pics[i]})`
  document.querySelector('.pictures').append(img)
  img.classList = 'img-portfolio'
  const loading = document.createElement('div')
  loading.className = 'loading'
  document.querySelector('.pictures').append(loading)
  // loading.style.backgroundImage = `url(../Group\ 1.png)`
  // loading.style.backgroundColor = 'red'
  allImage.push(img)
  img.addEventListener("load", ()=> {
    
  })
}



const overlayImg = document.querySelector('.overlay-image')
const bigImage = document.querySelector('.big_image')

for (let i = 0; i<allImage.length; i++) {
  const box = document.createElement('button')
  box.classList = 'filter'
  const lupa = document.createElement('div')
  
  lupa.classList = 'lupa'
  allImage[i].append(box)
  box.append(lupa)
  allImage[i].addEventListener('mouseenter', () => {
    box.style.display = 'block'
  })
  allImage[i].addEventListener('mouseleave', () => {
    box.style.display = 'none'
  })
  allImage[i].addEventListener('click', () => {
    overlayImg.classList.add('openImg')
    bigImage.style.backgroundImage = `url(${pics[i]})`
  })
  overlayImg.addEventListener('click', () => {
    overlayImg.classList.remove('openImg')
  })

  
  
}


const contactMe = document.querySelector('.contact')
const overlayCard = document.querySelector('.overlay-card')
const closeBtn = document.querySelector('.closeBtn')

contactMe.addEventListener('click', () => {
  overlayCard.classList.add('openCard')
})

closeBtn.addEventListener('click', () => {
  overlayCard.classList.remove('openCard')
})


const user = {}

const sendMessage = document.querySelector('.card_button')
const inputText = document.querySelector('.input_text')
const inputEmail = document.querySelector('.input_email')
const textArea = document.querySelector('.textarea')

sendMessage.addEventListener('click', () => {
  user.name = inputText.value
  user.email = inputEmail.value
  user.message = textArea.value
  console.log(user)
})





 




