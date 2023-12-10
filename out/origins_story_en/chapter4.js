let __env = require(`\.\./\.\./src/environment`);
let __text = [];
let __context = { __text };
let __serializer = __env.getSerializer();

__context.utils = require(`../utils`);
__context = { ...__context.utils, ...__context };
__context.__text.push(`I wanted to write books, but I had no idea how to make money from it. So, I wrote programs. It's simpler with them - pure mathematics, and they pay as if they can't write it themselves. `);
__context.__text.push(`On the other hand, you can't complain - wanted to write? Well, there you go, write. Programmers write an order of magnitude more text than any playwright or copywriter.`);
__context.__text.push(``);
__context.__text.push(`${__serializer.serialize( __context.image(`programming.png`, `Программирование`), '\r\n' )}`);


// INFO: this trick is for making this file node module
Object.assign(module.exports, __context);

//# sourceMappingURL=/Users/jack/Documents/SEA/Git/StorytailorOrigins/out/origins_story_en/chapter4.js.map