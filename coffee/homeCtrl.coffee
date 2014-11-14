'use strict'
angular.module('Superwf').controller 'HomeCtrl', ['$scope', ($scope) ->
  jsPlumb.setContainer '#board'
  connectStyle = {
    endpoint: 'Blank'
    connector: 'Flowchart'
    paintStyle: {lineWidth: 3, strokeStyle: '#0e0'}
    overlays: [['Arrow', {location: 1, width: 15, length: 12}]]
  }
  jsPlumb.connect({
    source:'debian'
    target:'bash'
    anchors: ['Left', 'Top']
  }, connectStyle)

  jsPlumb.connect({
    source:'debian'
    target:'vim'
    anchors: ['Left', 'Top']
  }, connectStyle)
  jsPlumb.connect({
    source:'debian'
    target:'mysql'
    anchors: ['Left', 'Top']
  }, connectStyle)
  jsPlumb.connect({
    source:'mysql'
    target:'mongodb'
    anchors: ['Bottom', 'Top']
  }, connectStyle)
  jsPlumb.connect({
    source:'mongodb'
    target:'couchdb'
    anchors: ['Bottom', 'Top']
  }, connectStyle)
  jsPlumb.connect({
    source:'couchdb'
    target:'pouchdb'
    anchors: ['Left', 'Right']
  }, connectStyle)
  jsPlumb.connect({
    source:'mongodb'
    target:'riak'
    anchors: ['Right', 'Left']
  }, connectStyle)
  jsPlumb.connect({
    source:'debian'
    target:'postfix'
    anchors: ['Bottom', 'Top']
  }, connectStyle)
  jsPlumb.connect({
    source:'debian'
    target:'ntop'
    anchors: ['Bottom', 'Top']
  }, connectStyle)
  jsPlumb.connect({
    source:'debian'
    target:'cacti'
    anchors: ['Right', 'Top']
  }, connectStyle)
  jsPlumb.connect({
    source:'debian'
    target:'puppet'
    anchors: ['Right', 'Top']
  }, connectStyle)
  jsPlumb.connect({
    source:'postfix'
    target:'dovecot'
    anchors: ['Bottom', 'Top']
  }, connectStyle)
  jsPlumb.connect({
    source:'ntop'
    target:'awstats'
    anchors: ['Bottom', 'Top']
  }, connectStyle)
  jsPlumb.connect({
    source:'dovecot'
    target:'roundcube'
    anchors: ['Bottom', 'Top']
  }, connectStyle)
  jsPlumb.connect({
    source:'cacti'
    target:'nagios'
    anchors: ['Bottom', 'Top']
  }, connectStyle)
  jsPlumb.connect({
    source:'bash'
    target:'iptables'
    anchors: ['Bottom', 'Top']
  }, connectStyle)
  jsPlumb.connect({
    source:'iptables'
    target:'tc'
    anchors: ['Bottom', 'Top']
  }, connectStyle)
  jsPlumb.connect({
    source:'debian'
    target:'c'
    anchors: ['Right', 'Right']
    connector: 'Bezier'
    endpoint: 'Blank'
    paintStyle: {lineWidth: 3, strokeStyle: '#0e0'}
    overlays: [['Arrow', {location: 1, width: 15, length: 12}]]
  })
  jsPlumb.connect({
    source:'c'
    target:'javascript'
    anchors: ['Bottom', 'Top']
  }, connectStyle)
  jsPlumb.connect({
    source:'c'
    target:'php'
    anchors: ['Bottom', 'Top']
  }, connectStyle)
  jsPlumb.connect({
    source:'c'
    target:'ruby'
    anchors: ['Bottom', 'Top']
  }, connectStyle)
  jsPlumb.connect({
    source:'ruby'
    target:'rails'
    anchors: ['Bottom', 'Top']
  }, connectStyle)

  jsPlumb.connect({
    source:'rails'
    target:'scss'
    anchors: ['Left', 'Top']
  }, connectStyle)
  jsPlumb.connect({
    source:'rails'
    target:'slim'
    anchors: ['Bottom', 'Top']
  }, connectStyle)
  jsPlumb.connect({
    source:'c'
    target:'golang'
    anchors: ['Bottom', 'Top']
  }, connectStyle)
  jsPlumb.connect({
    source:'golang'
    target:'erlang'
    anchors: ['Bottom', 'Top']
  }, connectStyle)
  jsPlumb.connect({
    source:'javascript'
    target:'coffeescript'
    anchors: ['Bottom', 'Top']
  }, connectStyle)
  jsPlumb.connect({
    source:'coffeescript'
    target:'angularjs'
    anchors: ['Bottom', 'Top']
  }, connectStyle)
  jsPlumb.connect({
    source:'javascript'
    target:'jquery'
    anchors: ['Right', 'Top']
  }, connectStyle)
  jsPlumb.connect({
    source:'javascript'
    target:'ionic'
    anchors: ['Right', 'Left']
  }, connectStyle)
  jsPlumb.connect({
    source:'cordova'
    target:'ionic'
    anchors: ['Bottom', 'Top']
  }, connectStyle)
  jsPlumb.connect({
    source:'jquery'
    target:'jsplumb'
    anchors: ['Right', 'Left']
  }, connectStyle)
  jsPlumb.connect({
    source:'jquery'
    target:'jqplot'
    anchors: ['Bottom', 'Left']
  }, connectStyle)
  jsPlumb.connect({
    source:'html'
    target:'css'
    anchors: ['Bottom', 'Top']
  }, connectStyle)
  jsPlumb.connect({
    source:'css'
    target:'ionic'
    anchors: ['Left', 'Right']
  }, connectStyle)
  jsPlumb.connect({
    source:'angularjs'
    target:'gulp'
    anchors: ['Left', 'Top']
  }, connectStyle)
  jsPlumb.connect({
    source:'angularjs'
    target:'grunt'
    anchors: ['Bottom', 'Top']
  }, connectStyle)
  jsPlumb.connect({
    source:'angularjs'
    target:'yeoman'
    anchors: ['Bottom', 'Top']
  }, connectStyle)
  jsPlumb.connect({
    source:'angularjs'
    target:'bower'
    anchors: ['Bottom', 'Top']
  }, connectStyle)

  null
]
