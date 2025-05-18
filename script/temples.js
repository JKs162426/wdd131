const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const headerTitle = document.querySelector('.header h1')

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
