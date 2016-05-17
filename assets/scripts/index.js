'use strict';

// user require with a reference to bundle the node and use it in this node
// var example = require('./example');

// use require without a reference to ensure a node is bundled
require('./example');
const userEvents = require('./auth/events-user.js');
const nodeEvents = require('./auth/events-nodes.js');

$(() => {
  console.log('page loaded!');
  userEvents.userEventHandlers();
  nodeEvents.nodeEventHandlers();
});

$('body').scrollspy({
    target: '.navbar-fixed-top'
});
