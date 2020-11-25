const menu    = document.getElementById('buttons');
const toggle  = document.getElementById('toggle');

toggle.addEventListener('click', () => {
	menu.classList.toggle('show')
});

menu.addEventListener('click', () => {
	menu.classList.remove('show')
});