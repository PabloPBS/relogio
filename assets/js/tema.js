const button = document.getElementById('button')
button.addEventListener('click', mudarTema)

function mudarTema() {
    if (button.innerHTML.includes('fa-sun')) {
        button.innerHTML = button.innerHTML.replace('fa-sun', 'fa-moon');
        document.documentElement.style.setProperty('--main-background', '#F2EBDF')
    } else {
        button.innerHTML = button.innerHTML.replace('fa-moon', 'fa-sun');
        document.documentElement.style.setProperty('--main-background', '#262626')
    }
}