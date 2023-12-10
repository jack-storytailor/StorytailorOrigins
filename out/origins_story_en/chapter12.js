let __env = require(`\.\./\.\./src/environment`);
let __text = [];
let __context = { __text };
let __serializer = __env.getSerializer();

__context.utils = require(`../utils`);
__context = { ...__context.utils, ...__context };
__context.__text.push(`To write in Storytailor, you don't need to be a programmer. You just need to write the text of your story as before. Just now, you can add special symbols to this text that will 'bring it to life' (${__serializer.serialize( __context.ref_local(`Instruction.md`, `Instruction`), '\r\n' )}).`);
__context.__text.push(``);
__context.__text.push(`Storytailor is free. Open source on ${__serializer.serialize( __context.ref(`https://github.com/jack-storytailor/storytailor`, `Github`), '\r\n' )}.`);
__context.__text.push(`To use it, you need to install the free 'advanced notepad' ${__serializer.serialize( __context.ref(`https://code.visualstudio.com/`, `Microsoft Visual Studio Code`), '\r\n' )}. And there, in this notepad, choose '${__serializer.serialize( __context.ref(`https://marketplace.visualstudio.com/items?itemName=jackstorytailor.storytailor-vscode`, `storytailor-vscode`), '\r\n' )}' from the list of available plugins. If you already have ${__serializer.serialize( __context.ref(`https://nodejs.org/en/`, `Node.js`), '\r\n' )} installed on Windows, I recommend updating it to the latest version.`);
__context.__text.push(``);
__context.__text.push(`${__serializer.serialize( __context.image(`install_extension.png`, `Plugin Installation`), '\r\n' )}`);
__context.__text.push(``);
__context.__text.push(`I have completed programming. Now I want to go into cinema.`);


// INFO: this trick is for making this file node module
Object.assign(module.exports, __context);

//# sourceMappingURL=/Users/jack/Documents/SEA/Git/StorytailorOrigins/out/origins_story_en/chapter12.js.map