const themeSelector = document.querySelector('#themeSelector'); // Replace with the correct selector for your dropdown element

function changeTheme() {
    if (themeSelector.value === 'dark') {
        document.body.classList.add('dark');
        document.querySelector('#logo').src = 'Mission/byui-logo_dark.webp';
    } else {
        document.body.classList.remove('dark');
        document.querySelector('#logo').src = 'Mission/byui-logo_blue.webp'; // Replace with the correct path to the blue logo
    }
}

// Add an event listener to the themeSelector element
themeSelector.addEventListener('change', changeTheme);


