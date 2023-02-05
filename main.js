const pics = [
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80',
  'https://images.unsplash.com/photo-1647891941746-fe1d53ddc7a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80',
  'https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80',
  'https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80',
  'https://images.unsplash.com/photo-1627483262112-039e9a0a0f16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  'https://images.unsplash.com/photo-1674745843370-244462ab8bb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
]


const images = document.querySelector('.images')

pics.forEach((picture) => {
  const img = document.createElement('img')
  img.setAttribute('src', './img/Group 1.png')
  images.append(img)
  img.setAttribute('alt', 'porfolio')
  // img.setAttribute('src', picture)

  // img.addEventListener('load', () => {
  //   img.setAttribute('src', picture)
  //   console.log(1)
  // })

  setTimeout(() => {
    img.setAttribute('src', picture)
  }, 1000)

})



const img = Array.from(document.querySelectorAll('.images>img'))
const pictureModal = document.querySelector('.picture-modal')
const pictureOverlay = document.querySelector('.picture-overlay')
const closePicture = document.querySelector('.close-picture')

img.forEach((picture) => {
  picture.addEventListener('click', () => {
    const liveImg = document.createElement('img')

    liveImg.setAttribute('src', picture.getAttribute('src'))
    pictureModal.prepend(liveImg)

    pictureOverlay.classList.add('openPicture')
  })

})

closePicture.addEventListener('click', () => {
  pictureOverlay.classList.remove('openPicture')
  pictureModal.removeChild(document.querySelector('.picture-modal>img'))
})



const openContactReg = document.querySelector('.contact')
const closeContactReg = document.querySelector('#close-contact')
const contactOverlay = document.querySelector('.contact-overlay')

openContactReg.addEventListener('click', () => {
  contactOverlay.classList.add('openContact')
})


closeContactReg.addEventListener('click', () => {
  contactOverlay.classList.remove('openContact')

})


const send = document.querySelector('.contact-modal-button')

let data = {
  name: '',
  email: '',
  massage: ''
}

send.addEventListener('click', () => {
  let { name, email, message } = data
  name = document.querySelector('#input-name').value
  email = document.querySelector('#input-email').value
  message = document.querySelector('#text-area').value
  console.log(data)
  contactOverlay.classList.remove('openContact')
})