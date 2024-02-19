document.addEventListener('DOMContentLoaded', function() {
    const openModal = document.getElementById('openModal');
    const modal = document.getElementById('modal');
    const closeModal = document.querySelector('#closeModal');

    openModal.addEventListener('click', function() {
        modal.classList.add('modal-display-block');
    });

    closeModal.addEventListener('click', function() {
        modal.classList.remove('modal-display-block');
    });

    window.addEventListener('click', function(event) {
        if(event.target === modal) {
            modal.classList.remove('modal-display-block');
        }
    })

})