/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.scss';
import {ReFlasher} from "./js/components/reFlasher";
import ReModal from "./js/components/reModal";
import ReLoader from "./js/components/reLoader";
import ReConfirm from "./js/components/reConfirm";
require('bootstrap-icons/font/bootstrap-icons.min.css');

const $ = require('jquery');
global.$ = global.jQuery = $;

require('bootstrap');

$(document).ready(() => {
    window.reFlasher = new ReFlasher();
    window.reModal = new ReModal();
    window.reLoader = new ReLoader();
    window.reConfirm = new ReConfirm();
})
