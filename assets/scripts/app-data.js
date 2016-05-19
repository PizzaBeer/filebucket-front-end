'use strict';

const server = {
  api: 'http://qloud.herokuapp.com',
  };

  let currentUser = {
    id: undefined,
    token:''
  };

  let currentDirectory = "home";

module.exports = {
  server,
  currentUser,
  currentDirectory
};
