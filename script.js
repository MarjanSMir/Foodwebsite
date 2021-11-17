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