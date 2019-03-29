let __env = require(`./environment`);
let __context = { __text: [] };
let __serializer = __env.getSerializer();

__context['ссылка'] = function (урл, текст) {
return `[${__serializer.serialize( текст, '\r\n' )}](${__serializer.serialize( урл, '\r\n' )})`;
};
__context['ссылкаБлог'] = function (урл, текст, урлРут) {
if (!урлРут) { 
	урлРут = `https://freewebtime.blogspot.com/`;
 };
return `[${__serializer.serialize( текст, '\r\n' )}](${__serializer.serialize( урлРут, '\r\n' )}${__serializer.serialize( урл, '\r\n' )})`;
};
__context['ссылкаЛокал'] = function (урл, текст, урлРут) {
if (!урлРут) { 
	урлРут = `https://github.com/jack-storytailor/StorytailorOrigins/blob/master/`;
 };
return `[${__serializer.serialize( текст, '\r\n' )}](${__serializer.serialize( урлРут, '\r\n' )}${__serializer.serialize( урл, '\r\n' )})`;
};
__context['фото'] = function (урл, текст, imgRoot) {
if (!imgRoot) { 
	imgRoot = `https://raw.githubusercontent.com/jack-storytailor/StorytailorOrigins/master/resources/`;
 };
return `![${__serializer.serialize( текст, '\r\n' )}](${__serializer.serialize( imgRoot, '\r\n' )}${__serializer.serialize( урл, '\r\n' )})`;
};


// INFO: this trick is for making this file node module
export default __context
module.exports = {...__context}
