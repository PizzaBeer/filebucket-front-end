'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');
const userEvents = require('./auth/events-user.js');
const fileEvents = require('./auth/events-files.js');

$(() => {
  console.log('page loaded!');
  $('.modal-trigger').leanModal();
  userEvents.userEventHandlers();
  fileEvents.fileEventHandlers();
  $('.hide_until_login').hide();
});
