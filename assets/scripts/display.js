'use strict';

const app = require('./app-data');

const displayAllFiles = function(files) {
  let allFilesTemplate = require('./templates/all-files.handlebars');
  $('#all-files').html(allFilesTemplate({
    files: files.files
  }));
};

const displayAllFolders = function(folders) {
  let allFoldersTemplate = require('./templates/all-folders.handlebars');
  $('#all-folders').off('click');
  $('#all-folders').html(allFoldersTemplate({
    folders: folders.folders
  }));
  $('.modal-trigger').leanModal();
  $('#all-folders').on('click', function(e) {
    e.preventDefault();
    console.log(`${$(e.target).attr("data-path")}${$(e.target).text()},`);
    $.ajax({
        method: 'POST',
        url: 'http://localhost:3000/folders/test',
        dataType: 'json',
        data: {
            "folder": {
            "path": `${$(e.target).attr("data-path")}${$(e.target).text()},`
          }
        },
        headers: {
          Authorization: 'Token token=' + app.currentUser.token
        },
      }).done(data => console.log(data))
      .fail(err => console.log(err));
  });
};

module.exports = {
  displayAllFiles,
  displayAllFolders
};
