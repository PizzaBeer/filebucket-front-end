'use strict';


const authApi = require('./api-user');
const authApiFiles = require('./api-files');
const authUi = require('./ui-user');

const fileEventHandlers = () => {


$('#application-x-www-form-urlencoded').on('submit', function (event) {
  event.preventDefault();
  let data = new FormData(this);
  authApiFiles.uploadFile(authUi.success, authUi.failure, data);
  console.log(data);
});
};


module.exports = {
 fileEventHandlers,
};
