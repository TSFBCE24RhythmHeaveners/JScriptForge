Blockly.defineBlocksWithJsonArray([
{
  "type": "pause_mseconds",
  "message0": "wait for %1 milliseconds, then do %2 %3",
  "args0": [
    {
      "type": "input_value",
      "name": "time",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "afterpause"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": %{BKY_LOOPS_HUE},
  "tooltip": "Wait for (Number) milliseconds",
  "helpUrl": "https://www.sitepoint.com/delay-sleep-pause-wait/"
}
]);

Blockly.JavaScript['pause_mseconds'] = function(block) {
  var pausing_time = Blockly.JavaScript.valueToCode(block, 'time', Blockly.JavaScript.ORDER_ATOMIC);
  var statements_afterpause = Blockly.JavaScript.statementToCode(block, 'afterpause');
  var code = 'setTimeout(() => {  ' + statements_afterpause + ' },(' + pausing_time + '));\n';
  return code;
}
