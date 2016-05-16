'use strict';


const displayAllFiles = function(files) {
  let allFilesTemplate = require('./templates/all-files.handlebars');
  $('.all-files').html(allFilesTemplate({
    files : files.files
  }));
};




module.exports = displayAllFiles;
