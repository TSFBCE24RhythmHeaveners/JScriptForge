Blockly.defineBlocksWithJsonArray([
{
  "type": "my_block",
  "message0": "My Super Cool Block",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "My Super Cool Block",
  "helpUrl": ""
}
]);
Blockly.JavaScript['my_block'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'window.alert("So Cool, I Know Right!");\n';
  return code;
};

//Add blocks
gvbvdxxScriptMaker.blocks.register([
"my_block"
], "My Cool Blocks", "red");
