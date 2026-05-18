Blockly.defineBlocksWithJsonArray([
{
  "type": "pause",
  "tooltip": "Pause for a specific amount of milliseconds",
  "helpUrl": "https://www.sitepoint.com/delay-sleep-pause-wait/",
  "message0": "pause for %1 milliseconds then %2",
  "args0": [
    {
      "type": "input_number",
      "name": "milliseconds",
      "value": 0,
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
javascript.javascriptGenerator.forBlock['pause'] = function(block) {
  const number_milliseconds = block.getFieldValue('milliseconds');
  const statement_afterpause = generator.statementToCode(block, 'afterpause');
  const code = 'setTimeout(() => { ' + statements_afterpause + ' },(' + value_milliseconds + '))';
  return code;
}
