'use strict';

const server = {
  api: 'http://localhost:8080',
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
