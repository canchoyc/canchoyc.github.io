
const requisitesBtn = document.getElementById('requisitesBtn');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');

requisitesBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

const requisiteItems = document.querySelectorAll('.requisite-item');

requisiteItems.forEach(item => {
    item.addEventListener('click', () => {
        const textToCopy = item.getAttribute('data-copy');
        navigator.clipboard.writeText(textToCopy).then(() => {
            const originalText = item.innerHTML;
            item.innerHTML = 'Вы скопировали!';
            item.style.background = 'rgba(102, 255, 102, 0.3)';
            
            setTimeout(() => {
                item.innerHTML = originalText;
                item.style.background = 'rgba(255, 255, 255, 0.1)';
            }, 1500);
        }).catch(err => {
            console.error('ошибка копирования:', err);
        });
    });
});
