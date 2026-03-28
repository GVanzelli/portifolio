const carousel = document.querySelector('.imagesFooter');
let index = 0;

function startAutoPlay() {
    if (window.innerWidth <= 768) { // Só roda no mobile
        const images = carousel.querySelectorAll('img');
        
        setInterval(() => {
            index++;
            if (index >= images.length) index = 0;
            
            // Calcula a posição do scroll com base na largura da imagem
            carousel.scrollTo({
                left: index * carousel.clientWidth,
                behavior: 'smooth'
            });
        }, 3000); // Altera a cada 3 segundos
    }
}

window.onload = startAutoPlay;