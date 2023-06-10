const feedbackButton = document.querySelector('.address-feedback');
const modal = document.querySelector('.modal-container');
const closeButton = document.querySelector('.modal-close-button');

if(feedbackButton) {
    feedbackButton.addEventListener('click', (evt) => {
        evt.preventDefault();
        modal.classList.remove('modal-close');
    });

    closeButton.addEventListener('click', (evt) => {
        evt.preventDefault();
        modal.classList.add('modal-close');
    });

}
