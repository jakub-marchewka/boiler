import flasher from "@flasher/flasher";

export class ReFlasher
{
    showSuccess(message)
    {
        flasher.success(message, 'Success');
    }
    showError(message)
    {
        flasher.error(message, 'Error');
    }
    showInfo(message)
    {
        flasher.info(message, 'Info');
    }
}
