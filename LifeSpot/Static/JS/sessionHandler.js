window.onload = function () {
    console.log('sessionHandler.js loaded');

    // Создадим и обработаем сессию
    let session = handleSession();

    // Логируем сессию в консоль
    sessionLog(session);
};

function handleSession() {
    // создадим объект Map для хранения сессии
    let session = new Map();

    // Сохраним UserAgent
    session.set("userAgent", window.navigator.userAgent);

    // Запросим возраст пользователя и тоже сохраним
    let age = prompt("Пожалуйста, введите ваш возраст?");

    // Проверка на возраст и сохранение сессии
    if (age >= 18)
    {
        let startDate = new Date().toLocaleString();
        alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + startDate);
        session.set("startDate", startDate);
    }
    else
    {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com";
    }

    session.set("age", age);
    return session;
}

// Логирование сессии (объявлено через function expression)
let sessionLog = function (session) {
    for (let [key, value] of session) {
        console.log(`${key}: ${value}`);
    }
};