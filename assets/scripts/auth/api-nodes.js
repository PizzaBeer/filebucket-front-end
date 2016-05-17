'use strict';

const app = require('../app-data');
const display = require('../display');

const uploadNode = (success, failure, data) => {
  $.ajax({
      method: 'POST',
      url: app.server.api + '/nodes/create-file',
      dataType: 'json',
      processData: false,
      contentType: false,
      data,
      headers: {
        Authorization: 'Token token=' + app.currentUser.token
      },
    }).done(success)
    .fail(failure);
};

const getAllNodes = function(success, failure) {
  $.ajax({
      url: app.server.api + '/nodes',
      headers: {
        Authorization: 'Token token=' + app.currentUser.token,
      },
    }).done((data) => {
      display.displayAllNodes(data);
    })
    .fail(failure);
};

const editNode = function(success, failure, data, nodeId) {
  $.ajax({
    method: "PATCH",
    url: app.server.api + '/nodes/' + nodeId,
    data,
    headers: {
      Authorization: 'Token token='+ app.currentUser.token,
    },
  })
  .done(success)
   .fail(failure);
};

const deleteNode = function(success, failure, nodeId) {
  console.log(nodeId);
  $.ajax({
    method: "DELETE",
    url: app.server.api + '/nodes/' + nodeId,
    headers: {
      Authorization: 'Token token='+ app.currentUser.token,
    },
  })
  .done(success)
   .fail(failure);
};

module.exports = {
  uploadNode,
  getAllNodes,
  editNode,
  deleteNode,
};
