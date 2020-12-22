const currentPage = 'contact';

const updateActiveTab = (navButton) => {
  let activeTab = document.getElementById(navButton)
  let navigation = document.querySelectorAll('.nav-button')

  for (let i = 0; i < navigation.length; i++) {
    if (navigation[i].getAttribute('id') == currentPage) {
      activeTab.classList.add('active')
    } else {
      navigation[i].classList.remove('active')
    }
  }
}

const loadContact = function () {
  updateActiveTab(currentPage);
  localStorage.setItem('currentPage', currentPage)
  let mainContent = document.getElementById('main-content')
  mainContent.innerHTML = '';
  let innerDiv = document.createElement('div')
  innerDiv.classList.add('inner', 'contact')
  mainContent.appendChild(innerDiv)
  let para = document.createElement('p')
  para.textContent = '404 Kearny Street, San Francisco - 415-555-1212'
  innerDiv.appendChild(para)
};


export default loadContact;