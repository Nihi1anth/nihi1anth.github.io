// Управление модальным окном
function openModal() {
    document.getElementById('booking-modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('booking-modal').style.display = 'none';
}

// Закрытие по клику вне окна
window.onclick = function (event) {
    const modal = document.getElementById('booking-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// --- Логика версии для слабовидящих ---
const a11yPanel = document.getElementById('a11y-panel');
const openA11yBtn = document.getElementById('accessible-btn');

// Открыть панель и включить базовый режим
function toggleA11yPanel() {
    a11yPanel.style.display = 'block';
    openA11yBtn.style.display = 'none';
    if (!document.body.className.includes('a11y-theme-')) {
        setTheme('white');
        setFontSize('medium');
    }
    localStorage.setItem('a11y_active', 'true');
}

// Смена размера шрифта
function setFontSize(size) {
    document.body.classList.remove('a11y-font-normal', 'a11y-font-medium', 'a11y-font-large');
    if (size !== 'normal') {
        document.body.classList.add('a11y-font-' + size);
    }
    localStorage.setItem('a11y_font', size);
}

// Смена цветовой схемы
function setTheme(theme) {
    document.body.classList.remove('a11y-theme-white', 'a11y-theme-black', 'a11y-theme-blue');
    document.body.classList.add('a11y-theme-' + theme);
    localStorage.setItem('a11y_theme', theme);
}

// Включение/выключение изображений и карт
function toggleImages() {
    const btn = document.getElementById('toggle-img-btn');
    document.body.classList.toggle('a11y-no-images');
    const isHidden = document.body.classList.contains('a11y-no-images');
    btn.innerText = isHidden ? 'Включить изображения' : 'Выключить изображения';
    localStorage.setItem('a11y_no_images', isHidden);
}

// Возврат к обычной версии сайта
function resetA11y() {
    a11yPanel.style.display = 'none';
    openA11yBtn.style.display = 'inline-block';
    document.body.classList.remove(
        'a11y-font-normal', 'a11y-font-medium', 'a11y-font-large',
        'a11y-theme-white', 'a11y-theme-black', 'a11y-theme-blue',
        'a11y-no-images'
    );
    document.getElementById('toggle-img-btn').innerText = 'Выключить изображения';
    localStorage.removeItem('a11y_active');
    localStorage.removeItem('a11y_font');
    localStorage.removeItem('a11y_theme');
    localStorage.removeItem('a11y_no_images');
}

// Восстановление настроек при загрузке страницы
window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('a11y_active') === 'true') {
        a11yPanel.style.display = 'block';
        openA11yBtn.style.display = 'none';
        const savedFont = localStorage.getItem('a11y_font') || 'medium';
        const savedTheme = localStorage.getItem('a11y_theme') || 'white';
        setFontSize(savedFont);
        setTheme(savedTheme);
        if (localStorage.getItem('a11y_no_images') === 'true') {
            toggleImages();
        }
    }
});


// Обработка формы
document.getElementById('lead-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Спасибо за заявку! Мы свяжемся с вами в рабочее время клиники.');
    closeModal();
});
