const contentHandler = require('./content_handler.js');
const filePath = require('./file_path.js');


module.exports = {
    ...contentHandler,
    ...filePath,
}