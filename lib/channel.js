/* If this is a reply to a message or triggered by /msg
 * then open up a temporary channel with a url to link to
*/
exports.generate = function(content) {
  var crypto = require('crypto');
  var url = crypto.createHash('md5').update().digest("hex");
};