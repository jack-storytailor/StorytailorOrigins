let __env = require(`\.\./\.\./src/environment`);
let __text = [];
let __context = { __text };
let __serializer = __env.getSerializer();

__context.utils = require(`../utils`);
__context = { ...__context, ...__context.utils, __text };
__context.__text.push(`Как вы понимаете, этот текст, который вы сейчас читаете, я пишу на Storytailor.`);
__context.__text.push(``);
__context.__text.push(`${__serializer.serialize( __context.image(`writing_on_storyscript.png`, `этот текст я пишу на Storytailor`), '\r\n' )}`);
__context.__text.push(``);
__context.__text.push(`Два дня назад я закончил второй этап разработки языка: тот уже не урезанный. Полный по Тьюрингу.  `);
__context.__text.push(`В нем реализовано еще пока далеко не все, что я хочу туда добавить, но то, что уже готово - работает, и им можно пользоваться.`);


// INFO: this trick is for making this file node module
Object.assign(module.exports, __context);

//# sourceMappingURL=/Users/jack/Documents/SEA/Git/StorytailorOrigins/out/origins_story_ru/chapter11.js.map