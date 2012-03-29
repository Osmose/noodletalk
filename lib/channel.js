/* If this is a reply to a message or triggered by /msg
 * then open up a temporary channel with a url to link to
*/
exports.generateTemporary = function(content) {
  var crypto = require('crypto');
  var url = crypto.createHash('md5').update((new Date().getTime()).toString()).digest("hex");
  return url;
};