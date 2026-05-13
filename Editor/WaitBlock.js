const pausescript = {
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
};
Blockly.common.defineBlocksWithJsonArray([pausescript]); {
  const pauseseconds = block.getFieldValue('pauseseconds');
  const code = `setTimeout(pauseseconds * 1000);\n`;
  return code;
};

//Add blocks
Blockly.blocks.register([
"pause"
], "Pause Block", "yellow");
