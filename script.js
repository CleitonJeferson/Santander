let count = 1;
document.getElementById('radio1').checked = true;

setInterval(() => {
    nextImage();
}, 5000);

function nextImage() {
    count++;
    if (count > 3) {
        count = 1;
    }
    document.getElementById('radio' + count).checked = true;
}


// agora sera a parte dos serviços

let currentIndex = 0;
const itemsPerPage = 3; // Quantos itens você quer mostrar de cada vez
const ul = document.getElementById('ul-servicos');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

// euj9ru9rew

