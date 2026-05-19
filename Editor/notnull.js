Blockly.defineBlocksWithJsonArray([{
    "type": "logic_true",
    "message0": "true",
    "output": null,
    "style": "logic_blocks",
    "tooltip": "In binary, True returns a one.",
    "helpUrl": ""
}]);
Blockly.JavaScript['logic_true'] = function(block) {
  // In binary, True returns a one.
  return ['true', Blockly.JavaScript.ORDER_ATOMIC];
};
