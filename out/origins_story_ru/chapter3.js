let __env = require(`\.\./\.\./src/environment`);
let __text = [];
let __context = { __text };
let __serializer = __env.getSerializer();

__context.utils = require(`../utils`);
__context = { ...__context.utils, ...__context };
__context.__text.push(`Свой первый рассказ я написал еще до того, как пошел в школу. С тех пор, где бы я ни был, чем бы ни занимался, я всегда пишу. Я вообще знаю всего один период, когда я ничего не писал - когда был женат, но это совсем другая история.`);
__context.__text.push(``);
__context.__text.push(`У меня есть ${__serializer.serialize( __context.ref_blog(`index.html`, `блог-портфелио`), '\r\n' )}, где я публикую свои рассказы. `);
__context.__text.push(`А в 2013 году я издал книгу "${__serializer.serialize( __context.ref_blog(`2012/06/blog-post12.html`, `Сумасшедший отпуск`), '\r\n' )}". И даже не смотря на то, что тираж был всего 50 экземпляров, и печатался он на мои деньги, все равно - когда в руках твоя собственная книга, все сделанное обретает смысл.`);
__context.__text.push(``);
__context.__text.push(`${__serializer.serialize( __context.image(`book.jpg`, `Сумасшедший отпуск`), '\r\n' )}`);


// INFO: this trick is for making this file node module
Object.assign(module.exports, __context);

//# sourceMappingURL=/Users/jack/Documents/SEA/Git/StorytailorOrigins/out/origins_story_ru/chapter3.js.map