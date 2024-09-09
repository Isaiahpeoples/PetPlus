// ********** About Us Specific Page ************
const tab = document.querySelector('.tab')
const btns = document.querySelectorAll('.tab-btn')
const articles = document.querySelectorAll('.content')
tab.addEventListener('click', function (e) {
  const id = e.target.dataset.id
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove('active')
    })
    e.target.classList.add('active')
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove('active')
    })
    const element = document.getElementById(id)
    element.classList.add('active')
  }
})
