Blockly.common.defineBlocksWithJsonArray([
{
  "type": "pause",
  "message0": "pause for %1 milliseconds",
  "args0": [{
    "type": "field_number",
    "name": "pausetime",
    "min": 0,
    "max": 86400000,
    "value": 1
  }],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "%{BKY_LOOPS_HUE}"
  "tooltip": "Pause for a specific amount of milliseconds",
  "helpUrl": ""
}
]);
Blockly.JavaScript['pause'] = function(block) {
  return setTimeout(' + pausetime + ');\n;
};
