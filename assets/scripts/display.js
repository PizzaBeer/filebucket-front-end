'use strict';

const displayAllNodes = function(nodes) {
  nodes.nodes.forEach((e) => e.updated_at = e.updated_at.split('T')[0]);
  let allNodesTemplate = require('./templates/all-nodes.handlebars');
  $('#all-nodes').html(allNodesTemplate({
    nodes: nodes.nodes
  }));
};

module.exports = {
  displayAllNodes
};
