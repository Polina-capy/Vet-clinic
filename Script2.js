document.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('click', () => {
        // Удаляем класс 'active' со всех кнопок и добавляем на нажатую кнопку
        document.querySelectorAll('.filter-button').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Получаем выбранную категорию и убираем лишние пробелы
        const filter = button.getAttribute('data-filter').trim();

        // Фильтруем специалистов
        document.querySelectorAll('.specialist-item').forEach(item => {
            const category = item.getAttribute('data-category').trim();

            // Сравниваем без учета регистра
            if (filter.toUpperCase() === 'ALL' || filter.toUpperCase() === category.toUpperCase()) {
                item.style.display = 'block'; // Показать специалиста
            } else {
                item.style.display = 'none'; // Скрыть специалиста
            }
        });
    });
});
