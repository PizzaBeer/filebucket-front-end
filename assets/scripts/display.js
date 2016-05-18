'use strict';

const displayAllNodes = function(nodes) {
  let allNodesTemplate = require('./templates/all-nodes.handlebars');
  $('#all-nodes').html(allNodesTemplate({
    nodes: nodes.nodes
  }));
};

module.exports = {
  displayAllNodes
};
