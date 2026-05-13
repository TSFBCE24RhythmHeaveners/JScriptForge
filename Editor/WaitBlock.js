Blockly.defineBlocksWithJsonArray([{
  "type": "rest",
  "tooltip": "This is ma vare first bloc i made",
  "helpUrl": "",
  "message0": "rest %1 seconds",
  "args0": [
    {
      "type": "input_value",
      "name": "restseconds",
      "align": "RIGHT",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": %{BKY_LOOPS_HUE},
  "inputsInline": true
}]);

Blockly.JavaScript['wait_seconds'] = function(block) {
  var seconds = Number(block.getFieldValue('restseconds'));
  var code = 'sleep(' + seconds + ' * 1000);\n';
  return code;
};
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function demo() {
    for (let restseconds = 0; restseconds < 5; restseconds++) {
        await sleep(restseconds * 1000);
    }
}
