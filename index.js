function searchFilters() {
    const filtered = document.querySelector('.form-control');
    document.addEventListener('keyup', (e) => {
        if (e.target === filtered) {
            console.log(e.target.value);

            if (e.key === 'Escape') {
                e.target.value = '';
            }

            document.querySelectorAll('.card').forEach((el) =>
                !el.textContent.toLowerCase().includes(e.target.value)
                    ? el.classList.add('filter')
                    : el.classList.remove('filter')
            );
        }
    });
}

searchFilters();