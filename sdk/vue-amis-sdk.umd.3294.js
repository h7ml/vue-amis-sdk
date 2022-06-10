"use strict";
((typeof self !== 'undefined' ? self : this)["webpackChunkvue_amis_sdk"] = (typeof self !== 'undefined' ? self : this)["webpackChunkvue_amis_sdk"] || []).push([[3294],{

/***/ 53294:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "gexf": function() { return /* reexport */ gexf_namespaceObject; },
  "prepareBoxplotData": function() { return /* reexport */ prepareBoxplotData; },
  "version": function() { return /* binding */ version; }
});

// NAMESPACE OBJECT: ./node_modules/.pnpm/echarts@5.3.1/node_modules/echarts/extension/dataTool/gexf.js
var gexf_namespaceObject = {};
__webpack_require__.r(gexf_namespaceObject);
__webpack_require__.d(gexf_namespaceObject, {
  "parse": function() { return parse; }
});

// EXTERNAL MODULE: ./node_modules/.pnpm/echarts@5.3.1/node_modules/echarts/index.js + 547 modules
var echarts = __webpack_require__(73761);
// EXTERNAL MODULE: ./node_modules/.pnpm/zrender@5.3.1/node_modules/zrender/lib/core/util.js
var util = __webpack_require__(45565);
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.3.1/node_modules/echarts/extension/dataTool/gexf.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/
// @ts-nocheck

/**
 * This is a parse of GEXF.
 *
 * The spec of GEXF:
 * https://gephi.org/gexf/1.2draft/gexf-12draft-primer.pdf
 */

function parse(xml) {
  var doc;

  if (typeof xml === 'string') {
    var parser = new DOMParser();
    doc = parser.parseFromString(xml, 'text/xml');
  } else {
    doc = xml;
  }

  if (!doc || doc.getElementsByTagName('parsererror').length) {
    return null;
  }

  var gexfRoot = getChildByTagName(doc, 'gexf');

  if (!gexfRoot) {
    return null;
  }

  var graphRoot = getChildByTagName(gexfRoot, 'graph');
  var attributes = parseAttributes(getChildByTagName(graphRoot, 'attributes'));
  var attributesMap = {};

  for (var i = 0; i < attributes.length; i++) {
    attributesMap[attributes[i].id] = attributes[i];
  }

  return {
    nodes: parseNodes(getChildByTagName(graphRoot, 'nodes'), attributesMap),
    links: parseEdges(getChildByTagName(graphRoot, 'edges'))
  };
}

function parseAttributes(parent) {
  return parent ? util.map(getChildrenByTagName(parent, 'attribute'), function (attribDom) {
    return {
      id: getAttr(attribDom, 'id'),
      title: getAttr(attribDom, 'title'),
      type: getAttr(attribDom, 'type')
    };
  }) : [];
}

function parseNodes(parent, attributesMap) {
  return parent ? util.map(getChildrenByTagName(parent, 'node'), function (nodeDom) {
    var id = getAttr(nodeDom, 'id');
    var label = getAttr(nodeDom, 'label');
    var node = {
      id: id,
      name: label,
      itemStyle: {
        normal: {}
      }
    };
    var vizSizeDom = getChildByTagName(nodeDom, 'viz:size');
    var vizPosDom = getChildByTagName(nodeDom, 'viz:position');
    var vizColorDom = getChildByTagName(nodeDom, 'viz:color'); // let vizShapeDom = getChildByTagName(nodeDom, 'viz:shape');

    var attvaluesDom = getChildByTagName(nodeDom, 'attvalues');

    if (vizSizeDom) {
      node.symbolSize = parseFloat(getAttr(vizSizeDom, 'value'));
    }

    if (vizPosDom) {
      node.x = parseFloat(getAttr(vizPosDom, 'x'));
      node.y = parseFloat(getAttr(vizPosDom, 'y')); // z
    }

    if (vizColorDom) {
      node.itemStyle.normal.color = 'rgb(' + [getAttr(vizColorDom, 'r') | 0, getAttr(vizColorDom, 'g') | 0, getAttr(vizColorDom, 'b') | 0].join(',') + ')';
    } // if (vizShapeDom) {
    // node.shape = getAttr(vizShapeDom, 'shape');
    // }


    if (attvaluesDom) {
      var attvalueDomList = getChildrenByTagName(attvaluesDom, 'attvalue');
      node.attributes = {};

      for (var j = 0; j < attvalueDomList.length; j++) {
        var attvalueDom = attvalueDomList[j];
        var attId = getAttr(attvalueDom, 'for');
        var attValue = getAttr(attvalueDom, 'value');
        var attribute = attributesMap[attId];

        if (attribute) {
          switch (attribute.type) {
            case 'integer':
            case 'long':
              attValue = parseInt(attValue, 10);
              break;

            case 'float':
            case 'double':
              attValue = parseFloat(attValue);
              break;

            case 'boolean':
              attValue = attValue.toLowerCase() === 'true';
              break;

            default:
          }

          node.attributes[attId] = attValue;
        }
      }
    }

    return node;
  }) : [];
}

function parseEdges(parent) {
  return parent ? util.map(getChildrenByTagName(parent, 'edge'), function (edgeDom) {
    var id = getAttr(edgeDom, 'id');
    var label = getAttr(edgeDom, 'label');
    var sourceId = getAttr(edgeDom, 'source');
    var targetId = getAttr(edgeDom, 'target');
    var edge = {
      id: id,
      name: label,
      source: sourceId,
      target: targetId,
      lineStyle: {
        normal: {}
      }
    };
    var lineStyle = edge.lineStyle.normal;
    var vizThicknessDom = getChildByTagName(edgeDom, 'viz:thickness');
    var vizColorDom = getChildByTagName(edgeDom, 'viz:color'); // let vizShapeDom = getChildByTagName(edgeDom, 'viz:shape');

    if (vizThicknessDom) {
      lineStyle.width = parseFloat(vizThicknessDom.getAttribute('value'));
    }

    if (vizColorDom) {
      lineStyle.color = 'rgb(' + [getAttr(vizColorDom, 'r') | 0, getAttr(vizColorDom, 'g') | 0, getAttr(vizColorDom, 'b') | 0].join(',') + ')';
    } // if (vizShapeDom) {
    //     edge.shape = vizShapeDom.getAttribute('shape');
    // }


    return edge;
  }) : [];
}

function getAttr(el, attrName) {
  return el.getAttribute(attrName);
}

function getChildByTagName(parent, tagName) {
  var node = parent.firstChild;

  while (node) {
    if (node.nodeType !== 1 || node.nodeName.toLowerCase() !== tagName.toLowerCase()) {
      node = node.nextSibling;
    } else {
      return node;
    }
  }

  return null;
}

function getChildrenByTagName(parent, tagName) {
  var node = parent.firstChild;
  var children = [];

  while (node) {
    if (node.nodeName.toLowerCase() === tagName.toLowerCase()) {
      children.push(node);
    }

    node = node.nextSibling;
  }

  return children;
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.3.1/node_modules/echarts/extension/dataTool/prepareBoxplotData.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/
function asc(arr) {
  arr.sort(function (a, b) {
    return a - b;
  });
  return arr;
}

function quantile(ascArr, p) {
  var H = (ascArr.length - 1) * p + 1;
  var h = Math.floor(H);
  var v = +ascArr[h - 1];
  var e = H - h;
  return e ? v + e * (ascArr[h] - v) : v;
}
/**
 * See:
 *  <https://en.wikipedia.org/wiki/Box_plot#cite_note-frigge_hoaglin_iglewicz-2>
 *  <http://stat.ethz.ch/R-manual/R-devel/library/grDevices/html/boxplot.stats.html>
 *
 * Helper method for preparing data.
 *
 * @param {Array.<number>} rawData like
 *        [
 *            [12,232,443], (raw data set for the first box)
 *            [3843,5545,1232], (raw data set for the second box)
 *            ...
 *        ]
 * @param {Object} [opt]
 *
 * @param {(number|string)} [opt.boundIQR=1.5] Data less than min bound is outlier.
 *      default 1.5, means Q1 - 1.5 * (Q3 - Q1).
 *      If 'none'/0 passed, min bound will not be used.
 * @param {(number|string)} [opt.layout='horizontal']
 *      Box plot layout, can be 'horizontal' or 'vertical'
 * @return {Object} {
 *      boxData: Array.<Array.<number>>
 *      outliers: Array.<Array.<number>>
 *      axisData: Array.<string>
 * }
 */


/* harmony default export */ function prepareBoxplotData(rawData, opt) {
  opt = opt || {};
  var boxData = [];
  var outliers = [];
  var axisData = [];
  var boundIQR = opt.boundIQR;
  var useExtreme = boundIQR === 'none' || boundIQR === 0;

  for (var i = 0; i < rawData.length; i++) {
    axisData.push(i + '');
    var ascList = asc(rawData[i].slice());
    var Q1 = quantile(ascList, 0.25);
    var Q2 = quantile(ascList, 0.5);
    var Q3 = quantile(ascList, 0.75);
    var min = ascList[0];
    var max = ascList[ascList.length - 1];
    var bound = (boundIQR == null ? 1.5 : boundIQR) * (Q3 - Q1);
    var low = useExtreme ? min : Math.max(min, Q1 - bound);
    var high = useExtreme ? max : Math.min(max, Q3 + bound);
    boxData.push([low, Q1, Q2, Q3, high]);

    for (var j = 0; j < ascList.length; j++) {
      var dataItem = ascList[j];

      if (dataItem < low || dataItem > high) {
        var outlier = [i, dataItem];
        opt.layout === 'vertical' && outlier.reverse();
        outliers.push(outlier);
      }
    }
  }

  return {
    boxData: boxData,
    outliers: outliers,
    axisData: axisData
  };
}
;// CONCATENATED MODULE: ./node_modules/.pnpm/echarts@5.3.1/node_modules/echarts/extension/dataTool/index.js

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/
// @ts-nocheck


 // import { boxplotTransform } from './boxplotTransform.js';

var version = '1.0.0';

 // export {boxplotTransform};
// For backward compatibility, where the namespace `dataTool` will
// be mounted on `echarts` is the extension `dataTool` is imported.
// But the old version of echarts do not have `dataTool` namespace,
// so check it before mounting.

if (echarts.dataTool) {
  echarts.dataTool.version = version;
  echarts.dataTool.gexf = gexf_namespaceObject;
  echarts.dataTool.prepareBoxplotData = prepareBoxplotData; // echarts.dataTool.boxplotTransform = boxplotTransform;
}

/***/ })

}]);