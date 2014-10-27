'use strict'
angular.module('Superwf').controller 'HomeCtrl', ['$scope', ($scope) ->
  #jsplumb.connect {
  #  source: 'e1'
  #  target: 'e2'
  #}
  #jsplumb.importDefaults {
  #  Connector: ['Bezier', {curviness: 150}]
  #  Anchors: ['TopCenter', 'BottomCenter']
  #}
  #jsPlumb.getInstance {
  #  PaintStyle:{
  #    lineWidth:6
  #    strokeStyle:"#567567"
  #    outlineColor:"black"
  #    outlineWidth:1
  #  }
  #  Connector:[ "Bezier", { curviness: 30 } ]
  #  Endpoint:[ "Dot", { radius:5 } ]
  #  EndpointStyle : { fillStyle: "#567567"  }
  #  Anchor : [ 0.5, 0.5, 1, 1 ]
  #}
  jsPlumb.setContainer '#board'
  jsPlumb.connect({
    source:'debian'
    target:'bash'
    endpoint: 'Dot'
    anchors: ['Bottom', 'Top']
    connector: 'Flowchart'
    connectorStyle: {strokeStyle: '#00ee00', lineWidth: '4'}
    overlays: ['Arrow']
  })
  jsPlumb.connect({
    source:'debian'
    target:'vim'
    endpoint: 'Dot'
    anchors: ['Bottom', 'Top']
    connector: 'Flowchart'
    connectorStyle: {strokeStyle: '#00ee00', lineWidth: '4'}
  })
  jsPlumb.connect({
    source:'debian'
    target:'mysql'
    endpoint: 'Dot'
    anchors: ['Bottom', 'Top']
    connector: 'Flowchart'
    connectorStyle: {strokeStyle: '#00ee00', lineWidth: '4'}
  })

  null
]
