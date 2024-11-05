window.onbeforeunload = function () {
    window.scrollTo(0, 0); // Скроллим в начало страницы
};

// Функция, проверяющая, находится ли элемент в зоне видимости
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight);
}

function handleScroll() {
    // Выбираем все нужные элементы по разным селекторам
    const imgContainers = document.querySelectorAll('.divWithHuman, .fLargeDiv, .sLargeDiv1, .imgOmg, .move1, .move2, .planItem, #free, #standart, #premium');
    imgContainers.forEach(imgContainer => {
        if (isInViewport(imgContainer)) {
            imgContainer.classList.add('visible');
        }
    });
}

// Добавляем обработчик скролла
window.addEventListener('scroll', handleScroll);

// Также вызываем при загрузке страницы, если картинка уже видна
document.addEventListener('DOMContentLoaded', handleScroll);

function observeElements() {
    const boxes = document.querySelectorAll('.hugeIll');

    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    boxes.forEach(box => observer.observe(box));
}

document.addEventListener('DOMContentLoaded', observeElements);

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY || window.pageYOffset; // Текущая прокрутка
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight; // Полная высота страницы
    const scrollPercent = (scrollPosition / totalHeight) * 100; // Процент прокрутки

    const myDiv = document.querySelector('.container1'); // Ваш div

    // Если прокручено 20% или больше
    if (scrollPercent >= 7) {
        myDiv.classList.add('active'); // Добавляем класс для линии
    } else {
        myDiv.classList.remove('active'); // Убираем класс, если вернулись выше 20%
    }
});

// Получаем элемент по id
const div = document.getElementById("facebook");
document.addEventListener('DOMContentLoaded', function() {
    // Присваиваем каждому div обработчик клика с редиректом
    document.getElementById("facebook").addEventListener("click", function() {
        window.location.href = "https://facebook.com";
    });

    document.getElementById("twitter").addEventListener("click", function() {
        window.location.href = "https://x.com";
    });

    document.getElementById("instagram").addEventListener("click", function() {
        window.location.href = "https://instagram.com";
    });
});
