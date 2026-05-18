Blockly.defineBlocksWithJsonArray([
{
  "type": "pause",
  "tooltip": "Pause for a specific amount of milliseconds",
  "helpUrl": "https://www.sitepoint.com/delay-sleep-pause-wait/",
  "message0": "pause for %1 milliseconds then %2",
  "args0": [
    {
      "type": "input_value",
      "name": "milliseconds",
      "check": "Number"
      "value": 1000,
      "min": 0,
      "max": 86400000
    },
    {
      "type": "input_statement",
      "name": "afterpause"
    }
  ],
  "previousStatement": null,
  "colour": 120
}
]);
javascript.javascriptGenerator.forBlock['pause'] = function() {
  const value_milliseconds = block.getFieldValue('milliseconds');
  const statement_afterpause = generator.statementToCode(block, 'afterpause');
  const code = 'setTimeout(() => { ' + statements_afterpause + ' },(' + value_milliseconds + '))';
  return code;
}
