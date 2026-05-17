Blockly.common.defineBlocksWithJsonArray([
{
  "type": "pause",
  "message0": "pause for %1 milliseconds then do %2",
  "args0": [
    {
      "type": "input_value",
      "name": "pausetime",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_statement",
      "name": "afterpausing"
    }
  ],
  "previousStatement": null,
  "colour": %{BKY_LOOPS_HUE},
  "tooltip": "Pause for a specific amount of milliseconds",
  "helpUrl": "https://www.sitepoint.com/delay-sleep-pause-wait/"
}
]);
Blockly.JavaScript['pause'] = function(block) {
  var value_pausetime = Blockly.JavaScript.valueToCode(block, 'pausetime', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_afterpausing = Blockly.JavaScript.statementToCode(block, 'afterpausing');
  // TODO: Assemble JavaScript into code variable.
  var code = 'setTimeout(() => {  ' + statements_afterpausing + ' },(' + value_pausetime + '));\n';
  return code;
gvbvdxxScriptMaker.blocks.register([
"pause"
], "Pause Block", "green");
