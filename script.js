const label = document.getElementById('label')
const on = document.getElementById('on')
const container = document.querySelector('div.container')

container.addEventListener('click', () => {
  container.classList.toggle('off')
  if (on.checked) {
    on.checked = false
  } else {
    on.checked = true
  }
})
