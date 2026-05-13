Blockly.defineBlocksWithJsonArray([
{
  "type": "pause",
  "tooltip": "Pauses a script",
  "helpUrl": "",
  "message0": "pause %1",
  "args0": [
    {
      "type": "input_value",
      "name": "pauseseconds",
      "align": "RIGHT",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 60,
  "inputsInline": true
}               
]);
Blockly.JavaScript['pause'] = function(block) {
  const pauseseconds = block.getFieldValue('pauseseconds');
  const code = `setTimeout(${pauseseconds} * 1000);\n`;
  return code;
};

//Add blocks
gvbvdxxScriptMaker.blocks.register([
"pause"
], "Pause Block", "yellow");
