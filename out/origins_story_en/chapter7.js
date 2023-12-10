let __env = require(`\.\./\.\./src/environment`);
let __text = [];
let __context = { __text };
let __serializer = __env.getSerializer();

__context.utils = require(`../utils`);
__context = { ...__context.utils, ...__context };
__context.__text.push(`Meanwhile, I thought about working part-time as an actor. For this, I needed a showreel, and I decided to shoot it at home, in my apartment. I listed the scenes that needed to be shot and realized that they could be combined into a plot. This is how the script for "${__serializer.serialize( __context.ref_blog(`2017/09/blog-post.html`, `Locked In`), '\r\n' )}" was born, featuring just two characters (one in episodes), one location, and a standard blockbuster structure.`);
__context.__text.push(``);
__context.__text.push(`It's the story of a bank robbers' driver who wakes up in his mistress's apartment on the day of the robbery, lies to his accomplices that he didn't oversleep and is already on his way to them, and discovers that his mistress has gone to work, locked the door, left no keys for him, and the bank robbery, from which he was supposed to pick up his robbers, has already begun.`);
__context.__text.push(``);
__context.__text.push(`Suddenly, I found people with whom all this could be filmed. We sorted out the organization, I invested all the remaining money I had, and we got started.`);


// INFO: this trick is for making this file node module
Object.assign(module.exports, __context);

//# sourceMappingURL=/Users/jack/Documents/SEA/Git/StorytailorOrigins/out/origins_story_en/chapter7.js.map