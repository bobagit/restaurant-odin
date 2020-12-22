const currentPage = 'home';

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

const loadHome = function() {
  updateActiveTab(currentPage);
  localStorage.setItem('currentPage', currentPage)
  let mainContent = document.getElementById('main-content')
  mainContent.innerHTML = '';
  let innerDiv = document.createElement('div')
  innerDiv.className = 'inner'
  mainContent.appendChild(innerDiv)
  innerDiv.appendChild(createCard("Holiday Pop-up!", "All Dogs 50% off!", "Our dogs are loaded with nitrates and sodium - the best dogs in San Francisco or your money back!"))
  innerDiv.appendChild(createCard("Wine Shop", "Only Premium Quality!", "This isn't Two Buck Chuck from Trader Joe's, this is Costco Quality!"))
  }

function createCard(title, subTitle, copy) {
  let gridItem = document.createElement('div');
  gridItem.className = 'grid-item';
  let heading1 = document.createElement('h1');
  let heading2 = document.createElement('h2');
  let para = document.createElement('p');
  heading1.innerText = title;
  heading2.innerText = subTitle;
  para.innerText = copy;
  gridItem.appendChild(heading1)
  gridItem.appendChild(heading2)
  gridItem.appendChild(para)
  return gridItem
}
export default loadHome;