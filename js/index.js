const menuBtn = document.querySelector('.hamburger-menu');
const nav = document.querySelector('.flex-nav');
const closeBtn = document.querySelector('.close');
const linksMenu = nav.getElementsByTagName('a');
const popUp = document.querySelector('.pop-up-wrapper');
const seeProjectsBtns = document.querySelectorAll('.projects .buttons');
const popUpClose = document.querySelector('.pop-up-close');

const data = {
  0: {
    title: 'Tonic',
    spans: ['CANOPY', '', 'Back End Dev', '', '2018'],
    imageURL: {
      mobile: './assets/images/mobile/Snapshoot Portfolio-4.png',
      desktop: './assets/images/desktop/Portoflio-Card/Snapshoot-ova.png',
    },
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ex fugiat perferendis laudantium magni voluptatem at. Accusamus autem beatae porro corrupti minus distinctio, numquam explicabo iusto consequuntur culpa magnam possimus?
    Saepe numquam sunt libero blanditiis recusandae eos rem, voluptatem expedita aperiam aliquam nostrum, minima doloribus possimus suscipit corporis hic sapiente est laborum praesentium sint obcaecati. Animi minus veritatis sapiente iste!`,
    techStack: ['html', 'css', 'javaScript'],
    liveURL: '',
    sourceURL: '',
  },
  1: {
    title: 'Multi-Post Stories',
    spans: ['CANOPY', '', 'Back End Dev', '', '2018'],
    imageURL: {
      mobile: './assets/images/mobile/Snapshoot Portfolio-1.png',
      desktop: './assets/images/desktop/Portoflio-Card/Snapshoot-multi.png',
    },
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ex fugiat perferendis laudantium magni voluptatem at. Accusamus autem beatae porro corrupti minus distinctio, numquam explicabo iusto consequuntur culpa magnam possimus?
    Saepe numquam sunt libero blanditiis recusandae eos rem, voluptatem expedita aperiam aliquam nostrum, minima doloribus possimus suscipit corporis hic sapiente est laborum praesentium sint obcaecati. Animi minus veritatis sapiente iste!`,
    techStack: ['html', 'css', 'javaScript'],
    liveURL: '',
    sourceURL: '',
  },
  2: {
    title: 'Tonic',
    spans: ['CANOPY', '', 'Back End Dev', '', '2018'],
    imageURL: {
      mobile: './assets/images/mobile/Snapshoot Portfolio-2.png',
      desktop: './assets/images/desktop/Portoflio-Card/Snapshoot-tonic.png',
    },
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ex fugiat perferendis laudantium magni voluptatem at. Accusamus autem beatae porro corrupti minus distinctio, numquam explicabo iusto consequuntur culpa magnam possimus?
    Saepe numquam sunt libero blanditiis recusandae eos rem, voluptatem expedita aperiam aliquam nostrum, minima doloribus possimus suscipit corporis hic sapiente est laborum praesentium sint obcaecati. Animi minus veritatis sapiente iste!`,
    techStack: ['html', 'css', 'javaScript'],
    liveURL: '',
    sourceURL: '',
  },
  3: {
    title: 'Multi-Post Stories',
    spans: ['CANOPY', '', 'Back End Dev', '', '2018'],
    imageURL: {
      mobile: './assets/images/mobile/Snapshoot Portfolio-3.png',
      desktop: './assets/images/desktop/Portoflio-Card/Snapshoot-uber.png',
    },
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ex fugiat perferendis laudantium magni voluptatem at. Accusamus autem beatae porro corrupti minus distinctio, numquam explicabo iusto consequuntur culpa magnam possimus?
    Saepe numquam sunt libero blanditiis recusandae eos rem, voluptatem expedita aperiam aliquam nostrum, minima doloribus possimus suscipit corporis hic sapiente est laborum praesentium sint obcaecati. Animi minus veritatis sapiente iste!`,
    techStack: ['html', 'css', 'javaScript'],
    liveURL: '',
    sourceURL: '',
  },
};

menuBtn.addEventListener('click', () => {
  nav.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  nav.classList.remove('open');
});

for (let i = 0; i < linksMenu.length; i += 1) {
  linksMenu[i].addEventListener('click', () => {
    nav.classList.remove('open');
  });
}

seeProjectsBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const title = popUp.querySelector('.pop-up-title');
    const descriptors = popUp.querySelector('.explaining-list');
    const img = popUp.querySelector('img');
    const description = popUp.querySelector('.pop-up-description');
    const badges = popUp.querySelector('.badges-wrapper');

    title.textContent = data[index].title;
    descriptors.innerHTML = data[index].spans.map((item) => `<li class="list-item>${item}</li>`).join('');
    img.src = data[index].imageURL.mobile;
    img.srcset = `${data[index].imageURL.desktop} 768vw`;
    description.textContent = data[index].description;
    badges.innerHTML = data[index].techStack.map((item) => `<span class="badge">${item}</span>`).join('');

    popUp.style.display = 'block';
  });
});

popUpClose.addEventListener('click', () => {
  popUp.style = null;
});