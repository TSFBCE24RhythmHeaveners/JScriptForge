Blockly.defineBlocksWithJsonArray([{
  "type": "wait_seconds",
  "message0": " wait %1 seconds",
  "args0": [{
    "type": "field_number",
    "name": "SECONDS",
    "min": 0,
    "max": 86400,
    "value": 1
  }],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "%{BKY_LOOPS_HUE}"
}]);

Blockly.JavaScript['wait_seconds'] = function(block) {
  var seconds = Number(block.getFieldValue('SECONDS'));
  var code = 'waitForSeconds(' + seconds + ');\n';
  return code;
};
function waitForSeconds(interpreter, globalObject) {
  Blockly.JavaScript.addReservedWords('waitForSeconds');
  var wrapper = interpreter.createAsyncFunction(
    function(timeInSeconds, callback) {
      setTimeout(callback, timeInSeconds * 1000);
    });
  interpreter.setProperty(globalObject, 'waitForSeconds', wrapper);
}
