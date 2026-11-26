Blockly.defineBlocksWithJsonArray([
{
  "type": "wick_play_project",
  "message0": "play project timeline %1",
  "args0": [
    {
      "type": "input_dummy",
      "name": ""
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 54,
  "tooltip": "Plays the project's timeline.",
  "helpUrl": "",
  "inputsInline": false
},{
  "type": "wick_play_sprite",
  "message0": "play sprite timeline %1",
  "args0": [
    {
      "type": "input_dummy",
      "name": ""
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 54,
  "tooltip": "Plays the current sprite's timeline.",
  "helpUrl": "",
  "inputsInline": false
},{
  "type": "wick_stop_project",
  "message0": "stop project timeline %1",
  "args0": [
    {
      "type": "input_dummy",
      "name": ""
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 54,
  "tooltip": "Stops the project's timeline.",
  "helpUrl": "",
  "inputsInline": false
},{
  "type": "wick_stop_sprite",
  "message0": "stop sprite timeline %1",
  "args0": [
    {
      "type": "input_dummy",
      "name": ""
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 54,
  "tooltip": "Stops the current sprite's timeline.",
  "helpUrl": "",
  "inputsInline": false
}
]);
Blockly.JavaScript['wick_play_project'] = function(block) {
  var code = 'project.play();\n';
  return code;
};
Blockly.JavaScript['wick_play_sprite'] = function(block) {
  var code = 'this.play();\n';
  return code;
};
Blockly.JavaScript['wick_stop_project'] = function(block) {
  var code = 'project.stop();\n';
  return code;
};
Blockly.JavaScript['wick_stop_sprite'] = function(block) {
  var code = 'this.stop();\n';
  return code;
};