'use strict';

const app = require('../app-data');

const uploadFile = (success, failure, data) => {
  console.log(data);
  // $.ajax({
  //     method: 'POST',
  //     url: app.server.api + '/files',
  //     processData: false,
  //     contentType: false,
  //     data,
  //     headers: {
  //     Authorization: 'Token token=' + app.currentUser.token
  //   },
  // }).done(success)
  //   .fail(failure);
  };


module.exports = {
  uploadFile,
};
