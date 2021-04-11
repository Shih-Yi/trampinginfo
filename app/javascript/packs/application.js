// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

import "bootstrap"
import "@fortawesome/fontawesome-free/js/all"
import $ from 'jquery'
window.jQuery = $;
window.$ = $;

document.addEventListener("turbolinks:load", () => {
  $('[data-toggle="tooltip"]').tooltip()
  $('[data-toggle="popover"]').popover()
})

// libraries
// toast notifications
import toastr from 'toastr';
window.toastr = toastr;

// scss
import "../stylesheets/application"
import '../stylesheets/users/sessions'

// custom js
import "./main"

Rails.start()
Turbolinks.start()
ActiveStorage.start()
