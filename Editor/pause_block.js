Blockly.defineBlocksWithJsonArray([
{
  "type": "pause",
  "message0": "pause for %1 milliseconds then do %2 %3",
  "args0": [
    {
      "type": "input_value",
      "name": "milliseconds",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "afterpausing"
    }
  ],
  "previousStatement": null,
  "colour": %{BKY_LOOPS_HUE},
  "tooltip": "Pause for a specific amount of milliseconds.",
  "helpUrl": "https://www.sitepoint.com/delay-sleep-pause-wait/"
}
]);
Blockly.JavaScript['pause'] = function(block) {
  var value_milliseconds = Blockly.JavaScript.valueToCode(block, 'time', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_afterpausing = Blockly.JavaScript.statementToCode(block, 'afterpausing');
  var code = 'setTimeout(() => {  ' + statements_afterwait + ' },(' + value_milliseconds + '));\n';
  return code;
};
