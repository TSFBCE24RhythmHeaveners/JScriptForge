Blockly.common.defineBlocksWithJsonArray([
{
  "type": "pause",
  "message0": "pause for %1 milliseconds then do %2 ",
  "args0": [
    {
      "type": "input_value",
      "name": "time",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_statement",
      "name": "afterwait"
    }
  ],
  "previousStatement": null,
  "colour": %{BKY_LOOPS_HUE},
  "tooltip": "Pause for a specific amount of milliseconds",
  "helpUrl": "https://www.sitepoint.com/delay-sleep-pause-wait/"
}
]);
Blockly.JavaScript['pause'] = function(block) {
  return setTimeout(' + pausetime + ');\n;
};
