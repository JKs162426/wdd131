const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const headerTitle = document.querySelector('.header h1')
const pageTitle = document.querySelector('#page-title');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
	headerTitle.classList.toggle('hidden');
});

const today = new Date;
const year = document.querySelector("#currentyear");
year.innerHTML = today.getFullYear();

const lastModified = document.querySelector("#lastModified");
lastModified.textContent = document.lastModified;


const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake City Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-316.jpg"
  },
  {
    templeName: "Provo City Center Utah",
    location: "Provo, Utah, United States",
    dedicated: "2016, March, 20",
    area: 85084,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/provo-city-center-temple/provo-city-center-temple-56386.jpg"
  },
  {
    templeName: "Santiago Chile",
    location: "Santiago, Region Metropolitana, Chile",
    dedicated: "1983, September, 15",
    area: 20831,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/santiago-chile-temple/santiago-chile-temple-45812.jpg"
  }
];

function displayTemples(temples) {
  const templeList = document.querySelector('.temple-list');
  templeList.innerHTML = '';

  temples.forEach(temple => {
    const templeItem = document.createElement('div');
    templeItem.classList.add('temple-item');

    templeItem.innerHTML = `
      <h2>${temple.templeName}</h2>
      <p>Location: ${temple.location}</p>
      <p>Dedicated: ${temple.dedicated}</p>
      <p>Area: ${temple.area} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    `;

    templeList.appendChild(templeItem);
    console.log(templeItem.innerHTML);
  });
}

displayTemples(temples);

const oldTemplesLink = document.querySelector('#old-temples');
oldTemplesLink.addEventListener('click', () => {
  const filteredTemples = temples.filter(temple => {
    const dedicatedYear = parseInt(temple.dedicated.split(',')[0]);
    return dedicatedYear < 1900;
  });
  pageTitle.textContent = "Temples Dedicated Before 1900";
  displayTemples(filteredTemples);
});

const newTemplesLink = document.querySelector('#new-temples');
newTemplesLink.addEventListener('click', () => {
  const filteredTemples = temples.filter(temple => {
    const dedicatedYear = parseInt(temple.dedicated.split(',')[0]);
    return dedicatedYear > 2000;
  });
  pageTitle.textContent = "Temples Dedicated After 2000";
  displayTemples(filteredTemples);
});

const largeTemplesLink = document.querySelector('#large-temples');
largeTemplesLink.addEventListener('click', () => {
  const filteredTemples = temples.filter(temple => {
    const area = parseInt(temple.area);
    return area > 90000;
  });
  pageTitle.textContent = "Temples Larger Than 90,000 sq ft";
  displayTemples(filteredTemples);
});

const smallTemplesLink = document.querySelector('#small-temples');
smallTemplesLink.addEventListener('click', () => {
  const filteredTemples = temples.filter(temple => {
    const area = parseInt(temple.area);
    return area < 10000;
  });
  pageTitle.textContent = "Temples Smaller Than 10,000 sq ft";
  displayTemples(filteredTemples);
});