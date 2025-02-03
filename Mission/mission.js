const themeSelector = document.querySelector('#theme');
const container = document.querySelector(".container")

function changeTheme() {
    if (themeSelector.value === 'dark') {
        container.classList.add('dark');
        document.body.classList.add('dark');
        document.querySelector('img').src = 'byui-logo_dark.webp';
    } else {
        container.classList.remove('dark');
        document.body.classList.remove('dark');
        document.querySelector('img').src = 'byui-logo_blue.webp';
    }
}

themeSelector.addEventListener('change', changeTheme);

changeTheme();

