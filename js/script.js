document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.price-window').forEach(window => {
        window.addEventListener('click', () => {
            const tableId = window.dataset.table;
            const table = document.getElementById(tableId);
            if (table.style.height === 'auto') {
                table.style.height = '0';
            } else {
                table.style.height = 'auto';
            }
        });
    });
});
