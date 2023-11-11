export default class ReLoader
{
    constructor()
    {
        this.loaderWrap = $('#reLoader');
    }

    showLoader()
    {
        this.loaderWrap.removeClass('d-none');
    }

    hideLoader()
    {
        this.loaderWrap.addClass('d-none');
    }
}
