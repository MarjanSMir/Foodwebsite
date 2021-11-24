/* menu */
document.querySelector(".menu").addEventListener('click', () => {
    let icon = document.getElementsByClassName('icon');
    let link = document.getElementsByClassName('link');
    if (document.querySelector('.nav').style.top == "0%" && document.querySelector('.menu').style.top == "22%") {
        for (var i = 0; i < icon.length; i++) {
            icon[i].style.opacity = "0";
        }
        for (var i = 0; i < link.length; i++) {
            link[i].style.opacity = "0";
        }
        document.querySelector('.nav').style.top = "-119px";
        document.querySelector('.menu').style.top = "1%";
    } else {
        document.querySelector('.nav').style.top = "0%";
        document.querySelector('.menu').style.top = "22%";
        for (var i = 0; i < icon.length; i++) {
            icon[i].style.opacity = "1";
        }
        for (var i = 0; i < link.length; i++) {
            link[i].style.opacity = "1";
        }
    }
})

/* sevtion 1 */
const icons = document.querySelectorAll('.icon-container i')
let i = 1;

setInterval(() => {
	i++;
	const icon = document.querySelector('.icon-container .change');
	icon.classList.remove('change');

	if (i > icons.length) {
		icons[0].classList.add('change');
		i = 1;
	} else {
		icon.nextElementSibling.classList.add('change');
	}
}, 1500)
