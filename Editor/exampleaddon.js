Blockly.defineBlocksWithJsonArray([
{
  "type": "my_block",
  "message0": "My Super Cool Block",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "My Super Cool Block",
  "helpUrl": ""
},
{
  "type": "generalcblock",
  "tooltip": "An example C-shaped block.",
  "helpUrl": "",
  "message0": "general c-block %1",
  "args0": [
    {
      "type": "input_statement",
      "name": "insidegeneralcblock",
      "align": "CENTRE"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": %{BKY_LOOPS_HUE},
  "inputsInline": false
}
]);
Blockly.JavaScript['my_block'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'window.alert("So Cool, I Know Right!");\n';
  return code;
};
Blockly.JavaScript['generalcblock'] = function(block) {
  var statement_insidegeneralcblock = generator.statementToCode(block, 'insidegeneralcblock');
  // TODO: Assemble JavaScript into code variable.
  var code = '{ + statement_insidegeneralcblock + };\n';
  return code;
};

//Add blocks
gvbvdxxScriptMaker.blocks.register([
"my_block", "generalcblock"
], "My Cool Blocks", "blue");
