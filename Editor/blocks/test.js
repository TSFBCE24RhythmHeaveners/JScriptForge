/**
 * @license
 * Copyright 2012 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Math blocks for Blockly.
 *
 * This file is scraped to extract a .json file of block definitions. The array
 * passed to defineBlocksWithJsonArray(..) must be strict JSON: double quotes
 * only, no outside references, no functions, no trailing commas, etc. The one
 * exception is end-of-line comments, which the scraper will remove.
 * @author q.neutron@gmail.com (Quynh Neutron)
 */
'use strict';

goog.provide('Blockly.Blocks.custom');  // Deprecated
goog.provide('Blockly.Constants.custom');

goog.require('Blockly');
goog.require('Blockly.Blocks');
goog.require('Blockly.FieldDropdown');
goog.require('Blockly.FieldLabel');
goog.require('Blockly.FieldNumber');
goog.require('Blockly.FieldVariable');


/**
 * Unused constant for the common HSV hue for all blocks in this category.
 * @deprecated Use Blockly.Msg['MATH_HUE']. (2018 April 5)
 */
Blockly.Constants.Math.HUE = 230;

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
 
[{
  "type": "window_open",
  "message0": "%1 Open Page %2",
  "args0": [
    {
      "type": "field_image",
      "src": "https://cdn2.scratch.mit.edu/get_image/user/34495634_60x60.png",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    },
    {
      "type": "input_value",
      "name": "NAME"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 270,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "window_close",
  "message0": "%1 Close Window",
  "args0": [
    {
      "type": "field_image",
      "src": "https://cdn2.scratch.mit.edu/get_image/user/34495634_60x60.png",
      "width": 15,
      "height": 15,
      "alt": "*",
      "flipRtl": false
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "",
  "helpUrl": ""
}]);  // END JSON EXTRACT (Do not delete this comment.)

/**
 * Mapping of math block OP value to tooltip message for blocks
 * math_arithmetic, math_simple, math_trig, and math_on_lists.
 * @see {Blockly.Extensions#buildTooltipForDropdown}
 * @package
 * @readonly
 */
Blockly.Constants.Math.TOOLTIPS_BY_OP = {
  // math_arithmetic
  'ADD': '%{BKY_MATH_ARITHMETIC_TOOLTIP_ADD}',
  'MINUS': '%{BKY_MATH_ARITHMETIC_TOOLTIP_MINUS}',
  'MULTIPLY': '%{BKY_MATH_ARITHMETIC_TOOLTIP_MULTIPLY}',
  'DIVIDE': '%{BKY_MATH_ARITHMETIC_TOOLTIP_DIVIDE}',
  'POWER': '%{BKY_MATH_ARITHMETIC_TOOLTIP_POWER}',

  // math_simple
  'ROOT': '%{BKY_MATH_SINGLE_TOOLTIP_ROOT}',
  'ABS': '%{BKY_MATH_SINGLE_TOOLTIP_ABS}',
  'NEG': '%{BKY_MATH_SINGLE_TOOLTIP_NEG}',
  'LN': '%{BKY_MATH_SINGLE_TOOLTIP_LN}',
  'LOG10': '%{BKY_MATH_SINGLE_TOOLTIP_LOG10}',
  'EXP': '%{BKY_MATH_SINGLE_TOOLTIP_EXP}',
  'POW10': '%{BKY_MATH_SINGLE_TOOLTIP_POW10}',

  // math_trig
  'SIN': '%{BKY_MATH_TRIG_TOOLTIP_SIN}',
  'COS': '%{BKY_MATH_TRIG_TOOLTIP_COS}',
  'TAN': '%{BKY_MATH_TRIG_TOOLTIP_TAN}',
  'ASIN': '%{BKY_MATH_TRIG_TOOLTIP_ASIN}',
  'ACOS': '%{BKY_MATH_TRIG_TOOLTIP_ACOS}',
  'ATAN': '%{BKY_MATH_TRIG_TOOLTIP_ATAN}',

  // math_on_lists
  'SUM': '%{BKY_MATH_ONLIST_TOOLTIP_SUM}',
  'MIN': '%{BKY_MATH_ONLIST_TOOLTIP_MIN}',
  'MAX': '%{BKY_MATH_ONLIST_TOOLTIP_MAX}',
  'AVERAGE': '%{BKY_MATH_ONLIST_TOOLTIP_AVERAGE}',
  'MEDIAN': '%{BKY_MATH_ONLIST_TOOLTIP_MEDIAN}',
  'MODE': '%{BKY_MATH_ONLIST_TOOLTIP_MODE}',
  'STD_DEV': '%{BKY_MATH_ONLIST_TOOLTIP_STD_DEV}',
  'RANDOM': '%{BKY_MATH_ONLIST_TOOLTIP_RANDOM}'
};

Blockly.Extensions.register('math_op_tooltip',
    Blockly.Extensions.buildTooltipForDropdown(
        'OP', Blockly.Constants.Math.TOOLTIPS_BY_OP));


/**
 * Mixin for mutator functions in the 'math_is_divisibleby_mutator'
 * extension.
 * @mixin
 * @augments Blockly.Block
 * @package
 */
Blockly.Constants.Math.IS_DIVISIBLEBY_MUTATOR_MIXIN = {
  /**
   * Create XML to represent whether the 'divisorInput' should be present.
   * @return {!Element} XML storage element.
   * @this {Blockly.Block}
   */
  mutationToDom: function() {
    var container = Blockly.utils.xml.createElement('mutation');
    var divisorInput = (this.getFieldValue('PROPERTY') == 'DIVISIBLE_BY');
    container.setAttribute('divisor_input', divisorInput);
    return container;
  },
  /**
   * Parse XML to restore the 'divisorInput'.
   * @param {!Element} xmlElement XML storage element.
   * @this {Blockly.Block}
   */
  domToMutation: function(xmlElement) {
    var divisorInput = (xmlElement.getAttribute('divisor_input') == 'true');
    this.updateShape_(divisorInput);
  },
  /**
   * Modify this block to have (or not have) an input for 'is divisible by'.
   * @param {boolean} divisorInput True if this block has a divisor input.
   * @private
   * @this {Blockly.Block}
   */
  updateShape_: function(divisorInput) {
    // Add or remove a Value Input.
    var inputExists = this.getInput('DIVISOR');
    if (divisorInput) {
      if (!inputExists) {
        this.appendValueInput('DIVISOR')
            .setCheck('Number');
      }
    } else if (inputExists) {
      this.removeInput('DIVISOR');
    }
  }
};

/**
 * 'math_is_divisibleby_mutator' extension to the 'math_property' block that
 * can update the block shape (add/remove divisor input) based on whether
 * property is "divisible by".
 * @this {Blockly.Block}
 * @package
 */
Blockly.Constants.Math.IS_DIVISIBLE_MUTATOR_EXTENSION = function() {
  this.getField('PROPERTY').setValidator(function(option) {
    var divisorInput = (option == 'DIVISIBLE_BY');
    this.getSourceBlock().updateShape_(divisorInput);
  });
};

Blockly.Extensions.registerMutator('math_is_divisibleby_mutator',
    Blockly.Constants.Math.IS_DIVISIBLEBY_MUTATOR_MIXIN,
    Blockly.Constants.Math.IS_DIVISIBLE_MUTATOR_EXTENSION);

// Update the tooltip of 'math_change' block to reference the variable.
Blockly.Extensions.register('math_change_tooltip',
    Blockly.Extensions.buildTooltipWithFieldText(
        '%{BKY_MATH_CHANGE_TOOLTIP}', 'VAR'));

/**
 * Mixin with mutator methods to support alternate output based if the
 * 'math_on_list' block uses the 'MODE' operation.
 * @mixin
 * @augments Blockly.Block
 * @package
 * @readonly
 */
Blockly.Constants.Math.LIST_MODES_MUTATOR_MIXIN = {
  /**
   * Modify this block to have the correct output type.
   * @param {string} newOp Either 'MODE' or some op than returns a number.
   * @private
   * @this {Blockly.Block}
   */
  updateType_: function(newOp) {
    if (newOp == 'MODE') {
      this.outputConnection.setCheck('Array');
    } else {
      this.outputConnection.setCheck('Number');
    }
  },
  /**
   * Create XML to represent the output type.
   * @return {!Element} XML storage element.
   * @this {Blockly.Block}
   */
  mutationToDom: function() {
    var container = Blockly.utils.xml.createElement('mutation');
    container.setAttribute('op', this.getFieldValue('OP'));
    return container;
  },
  /**
   * Parse XML to restore the output type.
   * @param {!Element} xmlElement XML storage element.
   * @this {Blockly.Block}
   */
  domToMutation: function(xmlElement) {
    this.updateType_(xmlElement.getAttribute('op'));
  }
};

/**
 * Extension to 'math_on_list' blocks that allows support of
 * modes operation (outputs a list of numbers).
 * @this {Blockly.Block}
 * @package
 */
Blockly.Constants.Math.LIST_MODES_MUTATOR_EXTENSION = function() {
  this.getField('OP').setValidator(function(newOp) {
    this.updateType_(newOp);
  }.bind(this));
};

Blockly.Extensions.registerMutator('math_modes_of_list_mutator',
    Blockly.Constants.Math.LIST_MODES_MUTATOR_MIXIN,
    Blockly.Constants.Math.LIST_MODES_MUTATOR_EXTENSION);
