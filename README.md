# goit-js-hw-07
 
function handlerClick(evt) {
    evt.preventDefault();

    if (evt.target === evt.currentTarget) {
        return;
    }

    const instance = basicLightbox.create(`
	<div><img src="${evt.target.dataset.source}" alt="${evt.target.alt}"></div>
`, {
        handlerEscape: null,
        onShow(instance) {
            this.handlerEscape = handlerEsc.bind(instance)
            document.addEventListener('keydown', this.handlerEscape)
        },
        onClose() {
            document.removeEventListener('keydown', this.handlerEscape)
        }
    });

    instance.show()
}


function handlerEsc(evt) {
    if (evt.code === 'Escape') {
        console.log('Escape');
        this.close()
    }
}