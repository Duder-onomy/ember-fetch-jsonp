'use strict';

const mergeTrees = require('broccoli-merge-trees');
const path = require('path');
const Funnel = require('broccoli-funnel');
const fastbootTransform = require('fastboot-transform');
const resolve = require('resolve');

module.exports = {
  name: 'ember-fetch-jsonp',

  treeForVendor(existingTree) {
    let trees = [];

    if (existingTree) {
      trees.push(existingTree);
    }

    let fetchJsonP = path.dirname(
      resolve.sync('fetch-jsonp', { basedir: this.project.root })
    );

    fetchJsonP = fastbootTransform(new Funnel(fetchJsonP, {
      files: ['fetch-jsonp.js'],
      destDir: 'fetch-jsonp'
    }));

    trees.push(fetchJsonP);

    return new mergeTrees(trees);
  },

  included() {
    this._super(arguments);
    this.import('vendor/fetch-jsonp/fetch-jsonp.js');

    this.import('vendor/fetch-jsonp-shim.js', {
      exports: {
        'fetch-jsonp': ['default']
      }
    });
  },
};
