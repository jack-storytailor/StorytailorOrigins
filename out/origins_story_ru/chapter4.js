let __env = require(`\.\./\.\./src/environment`);
let __text = [];
let __context = { __text };
let __serializer = __env.getSerializer();

__context.utils = require(`../utils`);
__context = { ...__context.utils, ...__context };
__context.__text.push(`Я хотел писать книги, но понятия не имел, как на этом заработать. `);
__context.__text.push(`Поэтому я писал программы. С ними проще - сплошная математика, и платят так, будто сами этого написать не могут.`);
__context.__text.push(`С другой стороны, и не пожалуешься - хотел писать? - ну вот, пиши. Программисты пишут на порядок больше текста, чем любой драматург или копирайтер. `);
__context.__text.push(``);
__context.__text.push(`${__serializer.serialize( __context.image(`programming.png`, `Программирование`), '\r\n' )}`);


// INFO: this trick is for making this file node module
Object.assign(module.exports, __context);

//# sourceMappingURL=/Users/jack/Documents/SEA/Git/StorytailorOrigins/out/origins_story_ru/chapter4.js.map