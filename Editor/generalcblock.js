Blockly.common.defineBlocksWithJsonArray([
{
  "type": "generalcblock",
  "message0": "general c-shaped block %1 %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "insidegeneralcblock"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": %{BKY_LOOPS_HUE},
  "tooltip": "An example C-shaped block.",
  "helpUrl": "",
  "inputsInline": false
}
]);
javascriptGenerator.forBlock['generalcblock'] = function(block) {
  const statement_insidegeneralcblock = generator.statementToCode(block, 'insidegeneralcblock');
  // TODO: Assemble JavaScript into code variable.
  const code = '{ + statement_insidegeneralcblock + };\n';
  return code;
};
//Add blocks
gvbvdxxScriptMaker.blocks.register([
"generalcblock"
], "General Purpose C-Block", "green");
