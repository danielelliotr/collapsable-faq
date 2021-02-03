const buttons = document.querySelectorAll('.faq-toggle')

buttons.forEach(button => button.addEventListener('click', () => {
  const parent = button.parentNode;

  parent.classList.toggle('active')
}))
