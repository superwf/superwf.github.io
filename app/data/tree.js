export default {
  name: 'linux',
  children: [{
    name: 'debian',
    children: [{
      name: 'ubuntu',
      children: [{
        name: 'bash',
        children: [{
          name: 'vim',
        }]
      }]
    }]
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
        name: 'lodash',
        children: [{
          name: 'jsplot',
          children: [{
            name: 'jsplumb',
          }]
        }]
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
      name: 'es6',
      children: [{
        name: 'coffeescript',
        children: [{
          name: 'angularjs',
          children: [{
            name: 'react',
            children: [{
              name: 'vue',
            }]
          }]
        }]
      }]
    }]
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
        name: 'puppet'
      }]
    }]
  }, {
    name: 'nodejs',
    children: [{
      name: 'grunt',
      children: [{
        name: 'gulp',
      }],
    }, {
      name: 'bower',
      children: [{
        name: 'browserify',
        children: [{
          name: 'webpack',
        }]
      }],
    }, {
      name: 'socketio',
      children: [{
        name: 'meteor',
      }]
    }, {
      name: 'jasmine',
      children: [{
        name: 'mocha',
      }]
    }]
  }]
}
