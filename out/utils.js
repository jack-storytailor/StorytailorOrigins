let __env = require(`\.\./src/environment`);
let __text = [];
let __context = { __text };
let __serializer = __env.getSerializer();

__context.ref = function(url, text) { 
	return `[${__serializer.serialize( text, '\r\n' )}](${__serializer.serialize( url, '\r\n' )})`;
};
__context.ref_blog = function(url, text, urlRoot) { 
	if (!urlRoot) { 
		urlRoot = `https://freewebtime.blogspot.com/`;
	};
	return `[${__serializer.serialize( text, '\r\n' )}](${__serializer.serialize( urlRoot, '\r\n' )}${__serializer.serialize( url, '\r\n' )})`;
};
__context.ref_local = function(url, text, urlRoot) { 
	if (!urlRoot) { 
		urlRoot = `https://github.com/jack-storytailor/StorytailorOrigins/blob/master/`;
	};
	return `[${__serializer.serialize( text, '\r\n' )}](${__serializer.serialize( urlRoot, '\r\n' )}${__serializer.serialize( url, '\r\n' )})`;
};
__context.image = function(url, text, imgRoot) { 
	if (!imgRoot) { 
		imgRoot = `https://raw.githubusercontent.com/jack-storytailor/StorytailorOrigins/master/resources/`;
	};
	return `![${__serializer.serialize( text, '\r\n' )}](${__serializer.serialize( imgRoot, '\r\n' )}${__serializer.serialize( url, '\r\n' )})`;
};
__context.header = function(headerIndex, headerContent) { 
	return `${__serializer.serialize( `#`.repeat(headerIndex), '\r\n' )} ${__serializer.serialize( headerContent, '\r\n' )}`;
};


// INFO: this trick is for making this file node module
Object.assign(module.exports, __context);

//# sourceMappingURL=/Users/jack/Documents/SEA/Git/StorytailorOrigins/out/utils.js.map