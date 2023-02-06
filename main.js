const pics = [
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80',
  'https://images.unsplash.com/photo-1647891941746-fe1d53ddc7a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
  'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80',
  'https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80',
  'https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80',
  'https://images.unsplash.com/photo-1627483262112-039e9a0a0f16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1020&q=80',
]


const gallery = document.querySelector('.gallery')
const overlay = document.querySelector('.overlay')
const modal = document.querySelector('.modal')
const closeBtn = document.querySelector('.close')

const createGalleryItem = () => {
  const div = document.createElement('div')
  div.classList.add('image-overlay')
  return div 
}

const createImg = (src) => {
  const img = document.createElement('img')
  img.setAttribute('src', src)
  return img
}

pics.forEach((imgSrc) => {
  const home = createGalleryItem(imgSrc)

  const imgForGallery = createImg(imgSrc)
  const imgForModal = createImg(imgSrc)

  const child = document.createElement('div')
  child.className = 'child'

  const svjImage = createImg('./image/lupa.svg')
  child.append(svjImage)  

  child.addEventListener('click', () => {
    overlay.classList.add('open')
    modal.append(imgForModal)
  })

  gallery.append(home)
  home.append(imgForGallery, child)
})

closeBtn.addEventListener('click', () => {
  overlay.classList.remove('open')
  modal.querySelector('img').remove()
})





const contactOpen = document.querySelector('.contact')
const contactClose = document.querySelector('.close-cross')
const contactModal = document.querySelector('.contact-modal')
const overlayContact = document.querySelector('.overlay-contact')

const body = document.querySelector('body')

contactOpen.addEventListener('click', () => {
  overlayContact.classList.add('open')
  body.appendChild(overlayContact)
  overlayContact.appendChild(contactModal)
})

contactClose.addEventListener('click', () => {
  overlayContact.classList.remove('open')
  document.body.removeChild(overlayContact)
  overlayContact.removeChild(contactModal)
})


const sendMessage = document.querySelector('.send')
const inputText = document.querySelector('input[type="text"]')
const inputEmail = document.querySelector('input[type="email"]')
const textArea = document.querySelector('textarea')

const user = {}
sendMessage.addEventListener('click', () => {
  user.name = inputText.value
  user.email = inputEmail.value
  user.message = textArea.value
  console.log(user)

  overlayContact.classList.remove('open')
  document.body.removeChild(overlayContact)
  overlayContact.removeChild(contactModal)  
})