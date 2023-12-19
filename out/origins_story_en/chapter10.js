let __env = require(`\.\./\.\./src/environment`);
let __text = [];
let __context = { __text };
let __serializer = __env.getSerializer();

__context.utils = require(`../utils`);
__context = { ...__context, ...__context.utils, __text };
__context.__text.push(`${__serializer.serialize( __context.image(`writing_on_typescript.png`, `Battle with the Monster`), '\r\n' )}`);
__context.__text.push(``);
__context.__text.push(`And so here I was, a person who had firmly decided never to program again, spending months, sometimes several sleepless days in a row, hammering out this programming language, constantly reminding myself that I was crazy.`);
__context.__text.push(`This is not how it's done. If you want to change professions - change it. And I, it turns out, only changed it in words.`);
__context.__text.push(`Moreover, I was writing in JavaScript, a language I hardly knew (I was more into servers or desktops, and in recent years - only Unity3D), so I had to learn JavaScript additionally, which meant more time lost.`);
__context.__text.push(``);
__context.__text.push(`By the middle of last summer (2018), I had the first version ready. It was severely cut down, but it was a fully functional, working concept. A programming language for assembling texts. It's called Storytailor. Until the new year, I tested it as a user, i.e., as a screenwriter, not a programmer. When I already had a list of features that were missing, I sat down to program again.`);


// INFO: this trick is for making this file node module
Object.assign(module.exports, __context);

//# sourceMappingURL=/Users/jack/Documents/SEA/Git/StorytailorOrigins/out/origins_story_en/chapter10.js.map