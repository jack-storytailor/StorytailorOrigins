let __env = require(`\.\./\.\./src/environment`);
let __text = [];
let __context = { __text };
let __serializer = __env.getSerializer();

__context.utils = require(`../utils`);
__context = { ...__context, ...__context.utils, __text };
__context.__text.push(`As you understand, this text that you are now reading, I am writing in Storytailor.`);
__context.__text.push(``);
__context.__text.push(`${__serializer.serialize( __context.image(`writing_on_storyscript.png`, `I am writing in Storytailor`), '\r\n' )}`);
__context.__text.push(``);
__context.__text.push(`Two days ago, I completed the second stage of the language development: the full, Turing-complete version. It still doesn't have everything I want to add to it, but what is already done works, and it can be used.`);


// INFO: this trick is for making this file node module
Object.assign(module.exports, __context);

//# sourceMappingURL=/Users/jack/Documents/SEA/Git/StorytailorOrigins/out/origins_story_en/chapter11.js.map