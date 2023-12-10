let __env = require(`\.\./src/environment`);
let __text = [];
let __context = { __text };
let __serializer = __env.getSerializer();

utils = require(`./utils`);
__context[`Story Language`] = `en`;
__context[`Chapter Folders`] = `origins_story_${__serializer.serialize( __context[`Story Language`], '\r\n' )}`;
__context.data = require(`./${__serializer.serialize( __context[`Chapter Folders`], '\r\n' )}/data`);
__context = { ...__context.data, ...__context };
__context.__text.push(`${__serializer.serialize( utils.header(1, __context[`Story Title`]), '\r\n' )} `);
__context.__text.push(`(English version | ${__serializer.serialize( utils.ref_local(`${__serializer.serialize( __context.Versions.Rus, '\r\n' )}`, `Русская версия`), '\r\n' )})`);
__context.__text.push(``);
for (let chapterIndex = 0; chapterIndex < __context[`Chapters Count`]; chapterIndex++) { 
	const chapterName = __context[`Chapter Names`][chapterIndex];
	const chapterSourceFile = __context[`Chapter Source Files`][chapterIndex];
	const chapterContent = require(`./${__serializer.serialize( __context[`Chapter Folders`], '\r\n' )}/${__serializer.serialize( chapterSourceFile, '\r\n' )}`);
	__text.push(`${__serializer.serialize( utils.header(2, chapterName), '\r\n' )}`);
	__text.push(`${__serializer.serialize( chapterContent, '\r\n' )}`);
	__text.push(``);
};


// INFO: this trick is for making this file node module
Object.assign(module.exports, __context);

//# sourceMappingURL=/Users/jack/Documents/SEA/Git/StorytailorOrigins/out/origins_story_en.js.map