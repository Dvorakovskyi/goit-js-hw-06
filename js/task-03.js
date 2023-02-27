const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryItem = images.map(({url, alt,}) =>
  `<li>
    <img src="${url}" alt="${alt}"></img>
  </li>`).join('');

const galleryEl = document.querySelector('.gallery');
galleryEl.insertAdjacentHTML("afterbegin", galleryItem);

const imagesEl = document.querySelectorAll('img');
const img = imagesEl.forEach((image) => {
  image.style.cssText = 'width: 350px; height: 200px;'
})
galleryEl.style.cssText = 'display: flex; flex-wrap: wrap; gap: 10px; list-style: none;'
