export default class ReConfirm
{
    constructor()
    {
        this.modalEl = $('#reConfirmModal');
        this.modalBody = $('#reConfirmModalBody');
        this.modalTitle = $('#reConfirmModalLabel')
        this.buttonYes = $('#reConfirmModalYes');
        this.buttonNo = $('#reConfirmModalNo');
    }

    async showModal(modalContent, modalTitle, callbackYes, callBackNo)
    {
        this.modalBody.html(modalContent);
        this.modalTitle.html(modalTitle);
        if (callbackYes) {
            this.onButtonYes(callbackYes);
        }
        if (callBackNo) {
            this.onButtonNo();
        }
        this.modalEl.modal('show');
    }

    hideModal()
    {
        this.modalBody.html('');
        this.modalTitle.html('');
        this.modalEl.modal('hide');
    }

    onButtonYes(fn)
    {
        this.buttonYes.click(() => {
            fn();
        })
    }
    onButtonNo(fn)
    {
        this.buttonNo.click(() => {
            fn();
        })
    }
}
