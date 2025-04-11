// This script loads the Bootstrap navigation bar for all pages

async function loadNavBar() {
    try {
        const response = await fetch('/components/navigation_bar.html');
        const html = await response.text();
        
        document.body.insertAdjacentHTML('afterbegin', html);
    } catch (error) {
        console.error('Error loading navigation bar:', error);
    }
}

// Load the navigation bar when the DOM is ready
document.addEventListener('DOMContentLoaded', loadNavBar);