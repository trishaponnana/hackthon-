
// JavaScript to handle menu toggle on mobile view
document.querySelector('.menu-toggle').addEventListener('click', function () {
    this.classList.toggle('opened');
    document.querySelector('.nav-links').classList.toggle('show');
});


    document.addEventListener('DOMContentLoaded', () => {
        const getStartedBtn = document.getElementById('get-started-btn');
        
        getStartedBtn.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent the default link behavior
            
            // Example check for authentication status (this should be replaced with actual authentication check)
            const isAuthenticated = checkUserAuthentication(); // This function should check the user's auth status
            
            if (isAuthenticated) {
                // Redirect to the dashboard if the user is authenticated
                window.location.href = 'dashboard.html';
            } else {
                // Redirect to the login page if the user is not authenticated
                window.location.href = 'login.html';
            }
        });
    });

    function checkUserAuthentication() {
        // Replace this function with actual logic to check user authentication status
        // For demonstration purposes, this will return false
        return false;
    }




document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.floating-circles-container');
    const colors = ['pink', 'blue']; // Colors of circles

    function createCircle() {
        const circle = document.createElement('div');
        const size = Math.random() * 50 + 20; // Random size between 20px and 70px
        const color = colors[Math.floor(Math.random() * colors.length)]; // Random color
        const positionLeft = Math.random() * 100; // Random left position
        const positionTop = Math.random() * 100; // Random top position
        const delay = Math.random() * 5; // Random animation delay

        circle.classList.add('circle', color);
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
        circle.style.left = `${positionLeft}%`;
        circle.style.top = `${positionTop}%`;
        circle.style.animationDelay = `${delay}s`;

        container.appendChild(circle);
    }

    // Create 5-8 circles
    for (let i = 0; i < Math.floor(Math.random() * 4) + 5; i++) {
        createCircle();
    }
});


document.addEventListener('DOMContentLoaded', () => {
    // JavaScript code can be added here if needed
});

