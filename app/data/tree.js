export default {
  name: 'linux',
  children: [{
    name: 'debian',
    children: [{
      name: 'ubuntu',
    }]
  }, {
    name: 'vim',
  }, {
    name: 'chrome',
    children: [{
      name: 'html',
      children: [{
        name: 'svg',
        children: [{
          name: 'd3',
        }]
      }]
    }, {
      name: 'jquery',
      children: [{
        name: 'jsplot',
      }, {
        name: 'jsplumb',
      }]
    }, {
      name: 'css',
      children: [{
        name: 'less',
        children: [{
          name: 'iconmoon',
        }]
      }]
    }, {
      name: 'angularjs',
    }, {
      name: 'es6',
      children: [{
        name: 'react',
      }, {
        name: 'vue',
      }]
    }]
  }, {
    name: 'bash',
  }, {
    name: 'nginx',
    children: [{
      name: 'php',
      children: [{
        name: 'postfix',
        children: [{
          name: 'roundcube',
        }]
      }]
    }, {
      name: 'ntop',
      children: [{
        name: 'nagios',
        children: [{
          name: 'cacti',
        }]
      }]
    }]
  }, {
    name: 'mysql',
    children: [{
      name: 'mongodb',
    }]
  }, {
    name: 'ruby',
    children: [{
      name: 'rails',
      children: [{
        name: 'coffeescript',
      }, {
        name: 'puppet'
      }]
    }]
  }, {
    name: 'nodejs',
    children: [{
      name: 'gulp',
      children: [{
        name: 'grunt',
      }],
    }, {
      name: 'bower',
    }, {
      name: 'socketio',
      children: [{
        name: 'meteor',
      }]
    }, {
      name: 'lodash',
    }, {
      name: 'browserify',
      children: [{
        name: 'webpack',
      }],
    }, {
      name: 'jasmine',
      children: [{
        name: 'mocha',
      }]
    }]
  }]
}
