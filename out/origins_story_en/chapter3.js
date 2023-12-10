let __env = require(`\.\./\.\./src/environment`);
let __text = [];
let __context = { __text };
let __serializer = __env.getSerializer();

__context.utils = require(`../utils`);
__context = { ...__context.utils, ...__context };
__context.__text.push(`I wrote my first story even before I went to school. Since then, wherever I have been, whatever I have been doing, I have always been writing. In fact, I know only one period when I didn't write anything - when I was married, but that's a completely different story.`);
__context.__text.push(``);
__context.__text.push(`I have a ${__serializer.serialize( __context.ref_blog(`index.html`, `blog-portfolio`), '\r\n' )} where I publish my stories. `);
__context.__text.push(`In 2013, I published a book called "${__serializer.serialize( __context.ref_blog(`2012/06/blog-post12.html`, `Crazy Vacation`), '\r\n' )}". And even though the print run was only 50 copies and it was printed with my own money, still - when you hold your own book in your hands, everything you've done gains meaning.`);
__context.__text.push(``);
__context.__text.push(`${__serializer.serialize( __context.image(`book.jpg`, `Crazy Vacation`), '\r\n' )}`);


// INFO: this trick is for making this file node module
Object.assign(module.exports, __context);

//# sourceMappingURL=/Users/jack/Documents/SEA/Git/StorytailorOrigins/out/origins_story_en/chapter3.js.map