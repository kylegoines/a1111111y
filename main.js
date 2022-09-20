const toggles = document.querySelectorAll('[data-button]')

toggles.forEach((elem) => {
  let isToggled = false
  elem.addEventListener('click', () => {
    if (isToggled) {
      elem.classList.remove('is-pressed')
    } else {
      elem.classList.add('is-pressed')
    }
    isToggled = !isToggled
  })
})

const betterToggles = document.querySelectorAll('[data-bettertoggle]')

betterToggles.forEach((elem) => {
  let isToggled = false
  elem.addEventListener('click', () => {
    if (isToggled) {
      elem.classList.remove('is-pressed')
    } else {
      elem.classList.add('is-pressed')
    }
    isToggled = !isToggled
    elem.setAttribute('aria-pressed', isToggled)
  })
})
