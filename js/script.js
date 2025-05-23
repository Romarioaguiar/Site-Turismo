document.addEventListener('DOMContentLoaded', function() {
    // Inicializar partículas
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#00f2fe" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: "#00f2fe", opacity: 0.4, width: 1 },
            move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out" }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" }
            }
        }
    });

    // Cursor personalizado
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(() => {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 100);
    });
    
    // Efeito hover nos links
    const hoverElements = document.querySelectorAll('a, button, .card-futuristic, .nav-hover');
    
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.width = '20px';
            cursor.style.height = '20px';
            cursor.style.opacity = '0.5';
            cursorFollower.style.width = '50px';
            cursorFollower.style.height = '50px';
            cursorFollower.style.borderColor = '#ff00ff';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.width = '8px';
            cursor.style.height = '8px';
            cursor.style.opacity = '1';
            cursorFollower.style.width = '30px';
            cursorFollower.style.height = '30px';
            cursorFollower.style.borderColor = '#00f2fe';
        });
    });

    // Efeito de digitação nos títulos
    const holographicTitles = document.querySelectorAll('.holographic-title');
    
    holographicTitles.forEach(title => {
        const text = title.textContent;
        title.textContent = '';
        
        for (let i = 0; i < text.length; i++) {
            setTimeout(() => {
                title.textContent += text[i];
            }, i * 100);
        }
    });

    // Animação dos cards
    const cards = document.querySelectorAll('.card-futuristic');
    
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease-out';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 300 + (index * 100));
    });

    // Efeito de hover no formulário
    const inputs = document.querySelectorAll('.input-container input, .input-container textarea');
    
    inputs.forEach(input => {
        const icon = input.parentElement.querySelector('i');
        
        input.addEventListener('focus', () => {
            icon.style.color = '#ff00ff';
            icon.style.textShadow = '0 0 10px #ff00ff';
        });
        
        input.addEventListener('blur', () => {
            icon.style.color = '#00f2fe';
            icon.style.textShadow = 'none';
        });
    });
});