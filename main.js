// togglers selector
const togglers = document.querySelectorAll('.accordion__question-toggler')

// add click listener on each toggler
togglers.forEach((toggler) => toggler.addEventListener('click', toggleActive))

function toggleActive(e) {
  // remove all active class on wrapper
  togglers.forEach((toggler) => {
    const wrapper = toggler.parentNode
    if (wrapper === e.target.parentNode) return
    if (wrapper.className.includes('active')) {
      wrapper.classList.remove('active')
    }
  })

  // toggle active class only on clicked toggler
  e.target.parentNode.classList.toggle('active')
}
