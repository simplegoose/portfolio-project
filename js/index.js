const menuBtn = document.querySelector('.hamburger-menu');
const nav = document.querySelector('.flex-nav');
const header = document.querySelector('.header');
const closeBtn = document.querySelector('.close');
const linksMenu = nav.getElementsByTagName('a');
const popUp = document.querySelector('.pop-up-wrapper');
const popUpClose = document.querySelector('.pop-up-close');
const form = document.querySelector('form');
const projects = document.querySelector('.projects');

window.addEventListener('scroll', () => {
  if (window.scrollY > 80 && window.innerWidth > 768) {
    header.style.background = '#fff';
    header.style.borderBottom = '1px solid #f7f7f9';
  } else {
    header.style = null;
  }
});

const data = [
  {
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
  {
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
  {
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
  {
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
];

let html = '';

data.forEach((item) => {
  html += `
  <article class="card">
    <figure>
      <picture>
        <source
          media="(min-width:768px)"
          srcset="
            ${item.imageURL.desktop}
          "
        />
        <img
          src=" ${item.imageURL.mobile}"
          alt="Demo of blog website"
          class="project-img"
        />
      </picture>
    </figure>
    <div class="details">
      <h3 class="project-title"> ${item.title} </h3>
      <ul class="explaining-list">
        <li class="list-item"> ${item.spans[0]} </li>
        <li class="list-item"> ${item.spans[1]} </li>
        <li class="list-item"> ${item.spans[2]} </li>
        <li class="list-item"> ${item.spans[3]} </li>
        <li class="list-item"> ${item.spans[4]} </li>
      </ul>
      <p class="short-description">
        ${item.description}
      </p>
      <div class="badges-wrapper">
        ${item.techStack.map((item) => `<span class="badge">${item}</span>`).join('')}
      </div>
      <button class="buttons" type="button">See Project</button>
    </div>
  </article>`;
});

projects.innerHTML = html;

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

const seeProjectsBtns = document.querySelectorAll('.projects .buttons');

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

function showMessage(input, msg, isError) {
  const classList = isError ? 'danger' : 'success';
  input.classList.add(classList);

  if (isError) {
    input.nextElementSibling.textContent = msg;
    input.nextElementSibling.style.display = 'block';
  } else {
    input.nextElementSibling.style = null;
  }
}

function showError(input, msg) {
  return showMessage(input, msg, true);
}

function showSuccess(input) {
  return showMessage(input);
}

function validateEmail(input) {
  const regEx = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;

  return regEx.test(input.value);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = event.target.user_mail;

  if (!validateEmail(email)) {
    showError(email, 'Your email should contail lowercase letters only');

    return;
  }

  showSuccess(email);

  form.submit();
});
