Blockly.common.defineBlocksWithJsonArray([
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
Blockly.JavaScript['generalcblock'] = function(block) {
  var statement_insidegeneralcblock = generator.statementToCode(block, 'insidegeneralcblock');
  // TODO: Assemble JavaScript into code variable.
  var code = '{ + statement_insidegeneralcblock + };\n';
  return code;
};
//Add blocks
gvbvdxxScriptMaker.blocks.register([
"generalcblock"
], "General Purpose C-Block", "green");
