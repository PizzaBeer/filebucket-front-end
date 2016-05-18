'use strict';

const authApiNodes = require('./api-nodes');
const authUi = require('./ui-user');
const display = require('../display');
const nodeUi = require('./ui-nodes');
const app = require('../app-data');

const traverseBreadcrumb = (e) => {
  $(e.target).parent().nextAll().remove();
  $(e.target).parent().addClass('active');
  $(e.target).contents().unwrap();
};

const nodeEventHandlers = () => {

  $('#application-x-www-form-urlencoded').on('submit', function(e) {
    e.preventDefault();
    let data = new FormData(this);
    data.append('path', `,${app.currentDirectory},`);
    authApiNodes.uploadNode(nodeUi.uploadNodeSuccess, nodeUi.uploadNodeFailure, data);
    console.log(data);
  });

  $('#get-nodes').on('click', function(e) {
    e.preventDefault();
    authApiNodes.getAllNodes(display.displayAllNodes, nodeUi.failure);
  });

  $('#all-nodes').on('click', '.edit-tags', function(e) {
    e.preventDefault();
    let nodeId = $(e.target).attr('data-id');
    $('.edit-tags-btn').attr('data-id', nodeId);
    console.log(nodeId);
  });

  $('#edit-tag-form').on('submit', function(e) {
    e.preventDefault();
    let data = getFormFields(this);
    let nodeId = $('.edit-tags-btn').attr('data-id');
    authApiNodes.editNode(nodeUi.editNodeSuccess, nodeUi.failure, data, nodeId);
  });

  $('#all-nodes').on('click', '.delete-node', function(e) {
    e.preventDefault();
    let nodeId = $(e.target).attr('data-id');
    $('.delete-node-btn').attr('data-id', nodeId);
    console.log('to delete' + nodeId);
  });

  $('.delete-node-btn').on('click', function(e) {
    e.preventDefault();
    let nodeId = $(this).attr('data-id');
    console.log('delete this => ' + nodeId);
    console.log(nodeId);
    authApiNodes.deleteNode(nodeUi.deleteNodeSuccess, nodeUi.failure, nodeId);
  });

  $('#create-folder-form').on('submit', function (event) {
    event.preventDefault();
    let data = getFormFields(this);
    data += `&node%5Bpath%5D=,${app.currentDirectory},`;
    console.log('this is data');
    authApiNodes.createFolder(nodeUi.createFolderSuccess, nodeUi.failure, data); //add ajax call
    console.log(data);
  });

  $('.all-nodes').on('click', function(e) {
    e.preventDefault();
    let dataType = $(e.target).attr('data-type');
    if (dataType === "file") {
      let external_link = $(e.target).attr('data-location');
      window.open(external_link, '_blank');
      // window.location.assign($(e.target).attr('data-location'));
    } else if (dataType === "folder") {
      app.currentDirectory += `,${$(e.target).text()}`;
      authApiNodes.getDirectory(display.displayAllNodes, nodeUi.Failure, app.currentDirectory);

      let text = $('.breadcrumb .active').text();

      //events to dynamically change breadcrumb to current location
      $('.breadcrumb .active').empty();
      $('.breadcrumb .active').append(`<a href="#">${text}</a>`);
      $('.breadcrumb .active').removeClass();
      $('.breadcrumb').append(`<li class="active">${$(e.target).text()}</li>`);
    }
  });


      $('.breadcrumb').on('click', function(e){
        e.preventDefault();
        let name = $(e.target).text();
        if(name === 'Home') {
          app.currentDirectory = 'home';
          authApiNodes.getDirectory(display.displayAllNodes, nodeUi.Failure, app.currentDirectory);
          traverseBreadcrumb(e);
        }
        else {
          let search = new RegExp(`^(.*?)${name}`);
          let result = app.currentDirectory.match(search);
          app.currentDirectory = result[0];
          authApiNodes.getDirectory(display.displayAllNodes, nodeUi.Failure, app.currentDirectory);
          traverseBreadcrumb(e);
        }

      });
};

module.exports = {
  nodeEventHandlers,
};
