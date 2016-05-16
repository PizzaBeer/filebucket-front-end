'use strict';

const authApiFiles = require('./api-files');
const authUi = require('./ui-user');
const display = require('../display');

const fileEventHandlers = () => {


  $('#application-x-www-form-urlencoded').on('submit', function(event) {
    event.preventDefault();
    let data = new FormData(this);
    authApiFiles.uploadFile(authUi.success, authUi.failure, data);
    console.log(data);
  });

  $('#get-files').on('click', function(e) {
    e.preventDefault();
    authApiFiles.getAllFiles(display.displayAllFiles, authUi.failure);
  });
};

module.exports = {
  fileEventHandlers,
};
