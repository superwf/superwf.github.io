// import Vue from 'vue'
import d3 from 'd3'
import '../less/index.less'
// import once from 'lodash/once'
// import times from 'lodash/times'
// import Circle from '../components/circle.vue'
// import template from '../views/svg.html'
import treeData from '../data/tree.js'

window.onload = function() {
  // new Vue({
  //   el: '#main',
  //   template: template()
  // })

  // let colors = ['red', 'green', 'blue']
  // let svg = d3.select('svg')
  // svg.selectAll('circle')
  // .data(colors)
  // .enter()
  // .append('circle')
  // .attr('cx', (d, i) => {
  //   return (i + 1) * 20
  // })
  // .attr('cy', (d, i) => {
  //   return (i + 1) * 20
  // })
  // .attr('fill', d => {
  //   return d
  // })
  // .attr('r', (d, i) => {
  //   return (i + 1) * 5
  // })
  // .transition()
  // .duration(2000)
  // .ease('bounce')
  // .attr('cy', () => {
  //   return 500
  // })
  // .attr('fill', (d, i) => {
  //   if (i > colors.length - 2) {
  //     return colors[0]
  //   }
  //   return colors[i + 1]
  // })

  // let images = ['debian', 'vim', 'bash']
  // svg.selectAll('image')
  // .data(images)
  // .enter()
  // .append('image')
  // .attr('xlink:href', d => {
  //   return require(`../images/${d}.png`)
  // })
  // .attr('y', () => {
  //   return 100
  // })
  // .attr('x', (d, i) => {
  //   return (i + 1) * 100
  // })
  // .attr('width', 100)
  // .attr('height', 100)

  // let edges = [{
  //   source: 0, target: 1
  // }, {
  //   source: 0, target: 2
  // }]

  // let nodes = images.map(i => {return {name: i}})
  // let imageData = images.map(d => {return require(`../images/${d}.png`)})

  // let force = d3.layout.force()
  // .nodes(nodes)
  // .links(edges)
  // .size([500, 500])
  // .linkDistance(200)
  // .charge([-400])

  // force.start()

  // // console.log(edges)
  // let svg_edges = svg.selectAll('line')
  //   .data(edges)
  //   .enter()
  //   .append('line')
  //   .style('stroke', '#ccc')
  //   .style('stroke-width', 1)
  //   .attr('marker-end', 'url(#arrow)')

  // // let color = d3.scale.category20()

  // let svg_nodes = svg.selectAll('image')
  //   .data(nodes)
  //   .enter()
  //   .append('image')
  //   .attr('xlink:href', (d, i) => {
  //     return imageData[i]
  //   })
  //   .attr('width', 100)
  //   .attr('height', 100)
  //   // .attr('r', 20)
  //   // .style('fill', function(d, i) {
  //   //   return color(i)
  //   // })
  //   .call(force.drag)  //使得节点能够拖动

  // let svg_texts = svg.selectAll('text')
  //   .data(nodes)
  //   .enter()
  //   .append('text')
  //   .style('fill', 'black')
  //   // .attr('dx', 0)
  //   .attr('dy', 100)
  //   .text(function(d) {
  //     return d.name
  //   })

  // force.on('tick', () => {
  //   svg_edges.attr('x1', d => {return d.source.x + 50})
  //   .attr('y1', d => {return d.source.y + 100})
  //   .attr('x2', d => {return d.target.x + 50})
  //   .attr('y2', d => {return d.target.y})

  //   svg_nodes.attr('x', function(d) {return d.x})
  //   .attr('y', d => {return d.y})

  //   svg_texts.attr('x', d => {return d.x})
  //   .attr('y', d => {return d.y})
  // })


  let tree = d3.layout.tree()
    // .size([width, height - 200])
    .nodeSize([150, 250])

  let nodes = tree.nodes(treeData)

  let centerWidth = 2000
  let svg = d3.select('svg')
    .append('g')
    .attr('transform', `translate(${centerWidth}, 100)`)
  // let growTime = 1500

  let draw = nodes => {
    let links = tree.links(nodes)

    let diagonal = d3.svg.diagonal()
      .projection(function(d, i) {
        // 顶点定在首图的下部
        if (i === 0) {
          return [d.x, d.y + 50]
        }
        // 终点定在children图的顶部
        if (i === 3) {
          return [d.x, d.y - 50]
        }
        return [d.x, d.y]
      })

    let lines = svg.selectAll('.link')
      .data(links)
      .enter()
      .append('path')
      .attr({class: 'link'})
      .attr('d', diagonal)
    setTimeout(() => {
      lines.attr({'marker-end': 'url(#arrow)'})
    }, 1000)
    let node = svg.selectAll('.node').data(nodes)

    node
    .enter()
    .append('image')
    .attr('xlink:href', d => {
      return require(`../images/${d.name}.png`)
    }).attr({width: 100, height: 100})
    .attr('x', function(d) {
      return d.x - 50
    })
    .attr('y', function(d) {
      return d.y - 40
    })
    .on('click', function() {
      console.log(this.getBoundingClientRect())
      d3.select(this)
      .style('transform', 'rotate(0deg)')
      .transition()
      .duration(500)
      .ease('bounce')
      .style('transform', 'rotate(30deg)')
    })
    // .on('mousemove', function() {
    //   d3.event.preventDefault()
    //   d3.event.stopPropagation()
    // })
    // .on('mouseout', function() {
    //   d3.select(this)
    //   .transition()
    //   .duration(1000)
    //   .ease('bounce')
    //   .style('transform', 'rotate(0deg)')
    // })
    .classed('revert', true)
  }

  draw(nodes)


  // times(7, t => {
  //   setTimeout(() => {
  //     draw(filter(nodes, n => {
  //       return n.depth <= t
  //     }))
  //     // node.classed('rotateX90', d => {
  //     //   return t < d.depth
  //     // })
  //     // lines.attr({'marker-end': 'url(#arrow)'})
  //   }, growTime * t)
  // })
}
