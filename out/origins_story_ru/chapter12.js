let __env = require(`\.\./\.\./src/environment`);
let __text = [];
let __context = { __text };
let __serializer = __env.getSerializer();

__context.utils = require(`../utils`);
__context = { ...__context.utils, ...__context };
__context.__text.push(`Для того, чтобы писать на Storytailor, не нужно быть программистом. Нужно просто писать текст своей истории, как и раньше. Просто в этот текст теперь можно добавить спец-символы, которые его "оживят" (${__serializer.serialize( __context.ref_local(`Instruction.md`, `Инструкция`), '\r\n' )}).`);
__context.__text.push(``);
__context.__text.push(`Storytailor бесплатный. Открытый исходный код на ${__serializer.serialize( __context.ref(`https://github.com/jack-storytailor/storytailor`, `Гитхабе`), '\r\n' )}. `);
__context.__text.push(`Чтобы им воспользоваться, нужно установить бесплатный "продвинутый блокнот" ${__serializer.serialize( __context.ref(`https://code.visualstudio.com/`, `Microsoft Visual Studio Code`), '\r\n' )}. И там, в этом блокноте, выбрать из списка доступных плагинов ${__serializer.serialize( __context.ref(`https://marketplace.visualstudio.com/items?itemName=jackstorytailor.storytailor-vscode`, `storytailor-vscode`), '\r\n' )} Если она у вас уже стоит, и устанавливали вы ее очень давно, и у вас Windows, то рекоммендую обновить ${__serializer.serialize( __context.ref(`https://nodejs.org/en/`, `Node.js`), '\r\n' )} до последней версии.`);
__context.__text.push(``);
__context.__text.push(`${__serializer.serialize( __context.image(`install_extension.png`, `Установка плагина`), '\r\n' )}`);
__context.__text.push(``);
__context.__text.push(`Я прошел программирование. Теперь я хочу в кино`);


// INFO: this trick is for making this file node module
Object.assign(module.exports, __context);

//# sourceMappingURL=/Users/jack/Documents/SEA/Git/StorytailorOrigins/out/origins_story_ru/chapter12.js.map