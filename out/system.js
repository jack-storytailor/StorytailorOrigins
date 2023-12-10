let __env = require(`\.\./src/environment`);
let __text = [];
let __context = { __text };
let __serializer = __env.getSerializer();

__context.ссылка = function(урл, текст) { 
	return `[${__serializer.serialize( текст, '\r\n' )}](${__serializer.serialize( урл, '\r\n' )})`;
};
__context.__text.push(``);
__context.ссылкаБлог = function(урл, текст, урлРут) { 
	if (!урлРут) { 
		урлРут = `https://freewebtime.blogspot.com/`;
	};
	return `[${__serializer.serialize( текст, '\r\n' )}](${__serializer.serialize( урлРут, '\r\n' )}${__serializer.serialize( урл, '\r\n' )})`;
};
__context.ссылкаЛокал = function(урл, текст, урлРут) { 
	if (!урлРут) { 
		урлРут = `https://github.com/jack-storytailor/StorytailorOrigins/blob/master/`;
	};
	return `[${__serializer.serialize( текст, '\r\n' )}](${__serializer.serialize( урлРут, '\r\n' )}${__serializer.serialize( урл, '\r\n' )})`;
};
__context.__text.push(``);
__context.фото = function(урл, текст, imgRoot) { 
	if (!imgRoot) { 
		imgRoot = `https://raw.githubusercontent.com/jack-storytailor/StorytailorOrigins/master/resources/`;
	};
	return `![${__serializer.serialize( текст, '\r\n' )}](${__serializer.serialize( imgRoot, '\r\n' )}${__serializer.serialize( урл, '\r\n' )})`;
};


// INFO: this trick is for making this file node module
Object.assign(module.exports, __context);

//# sourceMappingURL=/Users/jack/Documents/SEA/Git/StorytailorOrigins/out/system.js.map