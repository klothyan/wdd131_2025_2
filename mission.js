const themeSelector = document.querySelector('#theme');

function changeTheme() {
    if (themeSelector.value === 'dark') {
        document.body.classList.add('dark');
        document.querySelector('#logo').src = 'path/to/white-logo.png';
    } else {
        document.body.classList.remove('dark');
        document.querySelector('#logo').src = 'path/to/blue-logo.png';
    }
}

themeSelector.addEventListener('change', changeTheme);

changeTheme();

