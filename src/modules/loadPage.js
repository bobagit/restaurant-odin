// load the header, nav, content, and footer
const loadHeader = function() {
  const content = document.getElementById('content')
  const header = document.createElement('header')
  content.appendChild(header)
  const title = document.createElement('h1')
  title.textContent = "Vinny's Hot Dogs"
  header.appendChild(title)
  const nav = document.createElement('nav')
  nav.setAttribute('id', 'global-nav')
  nav.appendChild(createNavButton('id', 'home', 'Home'))
  nav.appendChild(createNavButton('id', 'menu', 'Menu'))
  nav.appendChild(createNavButton('id', 'contact', 'Contact'))
  header.appendChild(nav)
};

// blank
const loadMainContent = function() {
  const mainContent = document.createElement('main')
  mainContent.setAttribute('id', 'main-content')
  content.appendChild(mainContent)
}

const loadFooter = function() {
  const footer = document.createElement('footer')
  footer.setAttribute('id', 'footer')
  footer.textContent = 'Seriously, Costco Hot Dogs + Wine. Copyright 2020.'
  content.appendChild(footer)
}

const createNavButton = function(id, name, innerText) {
  let button = document.createElement('button')
  button.setAttribute(id, name)
  button.textContent = innerText
  button.className = "nav-button"
  return button
}

export {loadHeader, loadMainContent, loadFooter};