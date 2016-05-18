'use strict';

const apiNodes = require('./api-nodes.js');

const uploadNodeSuccess = () => {
  console.log('Node successfully uploaded.');
  apiNodes.getAllNodes();
  $('#upload-file-modal').modal('hide');
  $('#upload-form').each(function(){
    this.reset();
  // will create notification/bootstrap alert for success

});
};
const uploadNodeFailure = (error) => {
  console.error(error);
  // will create a modal for upload fail
};

// edits/adds tags
const editNodeSuccess = () => {
  console.log('Tag successfully added');
  apiNodes.getAllNodes();
  $('#edit-tags-modal').modal('hide');
  $( '#edit-tag-form' ).each(function(){
    this.reset();
});
};

const deleteNodeSuccess = () => {
  console.log('Node successfully deleted');
  apiNodes.getAllNodes();
  $('#delete-file-modal').modal('hide');
  $( '#delete-file-form' ).each(function(){
    this.reset();
});
};




const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  uploadNodeSuccess,
  uploadNodeFailure,
  editNodeSuccess,
  deleteNodeSuccess,
  success,
  failure,
};
