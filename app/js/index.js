// import Vue from 'vue'
import d3 from 'd3'
import '../less/index.less'
// import Circle from '../components/circle.vue'
// import template from '../views/svg.html'

window.onload = function() {
  // new Vue({
  //   el: '#main',
  //   template: template()
  // })

  // let colors = ['red', 'green', 'blue']
  let svg = d3.select('svg')
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

  let images = ['debian', 'vim', 'bash']
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

  let edges = [{
    source: 0, target: 1
  }, {
    source: 0, target: 2
  }]

  let nodes = images.map(i => {return {name: i}})

  let force = d3.layout.force()
  .nodes(nodes)
  .links(edges)
  .size([500, 500])
  .linkDistance(200)
  .charge([-400])

  force.start()

  // console.log(edges)
  let svg_edges = svg.selectAll('line')
    .data(edges)
    .enter()
    .append('line')
    .style('stroke', '#ccc')
    .style('stroke-width', 1)
    .attr('marker-end', 'url(#arrow)')

  // let color = d3.scale.category20()

  let svg_nodes = svg.selectAll('image')
    .data(nodes)
    .enter()
    .append('image')
    .attr('xlink:href', d => {
      return require(`../images/${d.name}.png`)
    })
    .attr('width', 100)
    .attr('height', 100)
    // .attr('r', 20)
    // .style('fill', function(d, i) {
    //   return color(i)
    // })
    .call(force.drag)  //使得节点能够拖动

  let svg_texts = svg.selectAll('text')
    .data(nodes)
    .enter()
    .append('text')
    .style('fill', 'black')
    // .attr('dx', 0)
    .attr('dy', 100)
    .text(function(d) {
      return d.name
    })

  force.on('tick', () => {
    svg_edges.attr('x1', d => {return d.source.x + 50})
    .attr('y1', d => {return d.source.y + 100})
    .attr('x2', d => {return d.target.x + 50})
    .attr('y2', d => {return d.target.y})

    svg_nodes.attr('x', function(d) {return d.x})
    .attr('y', d => {return d.y})

    svg_texts.attr('x', d => {return d.x})
    .attr('y', d => {return d.y})
  })


  // let axis = d3.svg.axis()
  // .scale(d3.scale.linear().domain([0, 10]).range([0, 300]))
  // .orient('bottom')
  // .ticks(6)

  // svg.append('g')
  // .attr('transform', 'translate(10, 300)')
  // .call(axis)
}
