// Управление модальным окном
function openModal() {
    document.getElementById('booking-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('booking-modal').style.display = 'none';
}

// Закрытие по клику вне окна
window.onclick = function(event) {
    const modal = document.getElementById('booking-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Версия для слабовидящих (Простая реализация через класс у body)
const accessibleBtn = document.getElementById('accessible-btn');
accessibleBtn.addEventListener('click', () => {
    document.body.classList.toggle('accessible-mode');
    
    // Динамически меняем стили, если включен режим
    if(document.body.classList.contains('accessible-mode')) {
        document.body.style.fontSize = '22px';
        document.body.style.filter = 'grayscale(100%)';
        accessibleBtn.innerText = 'Обычная версия';
    } else {
        document.body.style.fontSize = '';
        document.body.style.filter = '';
        accessibleBtn.innerText = 'Глаз';
    }
});

// Обработка формы
document.getElementById('lead-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Спасибо за заявку! Мы свяжемся с вами в рабочее время клиники.');
    closeModal();
});
