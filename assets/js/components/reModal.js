export default class ReModal
{
    constructor()
    {
        this.modalEl = $('#reModal');
        this.modalBody = $('#reModalBody');
        this.modalTitle = $('#reModalLabel');
    }

    async showModal(modalContent, modalTitle)
    {
        this.modalBody.html(modalContent);
        this.modalTitle.html(modalTitle);
        this.modalEl.modal('show');
    }

    hideModal()
    {
        this.modalBody.html('');
        this.modalTitle.html('');
        this.modalEl.modal('hide');
    }
}
