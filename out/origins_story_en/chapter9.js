let __env = require(`\.\./\.\./src/environment`);
let __text = [];
let __context = { __text };
let __serializer = __env.getSerializer();

__context.utils = require(`../utils`);
__context = { ...__context.utils, ...__context };
__context.__text.push(`All that was left for me was to write, write, and write. Not to try to earn money anymore, but just to learn a new craft. I sat down to work and only then realized that I had no tools. None at all. Programmers have Visual Studio, artists have Photoshop, and 3D artists have 3ds Max, but what about a screenwriter? A notepad? That's when I realized that I was facing the most difficult task. I had no tool. As I understood, screenwriters work with whatever is at hand. Of course, there are plenty of programs that allow you to format text (like Microsoft Word, Amazon Storywriter, Script Kit, or Truby Writers Studio), but I didn't find any that allowed for the assembly and generation of text.`);
__context.__text.push(``);
__context.__text.push(`For example, what if the script is ready, but the producer asks to rename a character? Do you need to comb through the entire script and rename everywhere? A programmer would simply have written the names of the characters in a separate list and inserted them into the text by name from that list. And if you need to rename someone - there, in that list, and rename. And that's it, the rest of the text would immediately pick up the changes.`);
__context.__text.push(``);
__context.__text.push(`Here, for example, is a list of characters:`);
__context.__text.push(``);
__context.__text.push(`${__serializer.serialize( __context.image(`characters.png`, `characters`), '\r\n' )}`);
__context.__text.push(``);
__context.__text.push(`And here are its elements inserted into the text:`);
__context.__text.push(``);
__context.__text.push(`${__serializer.serialize( __context.image(`references.png`, `references`), '\r\n' )} `);
__context[`First Act`] = 2003;
__context[`Difference between acts`] = 19;
__context[`Second Act`] = function() { 
	return __context[`First Act`] + __context[`Difference between acts`];
};
__context.__text.push(`Or another example. Suppose the action of the first act takes place in ${__serializer.serialize( __context[`First Act`], '\r\n' )} year, and the second act - ${__serializer.serialize( __context[`Difference between acts`], '\r\n' )} years later, i.e., in ${__serializer.serialize( __context[`Second Act`](), '\r\n' )}. And now the script is written, and these numbers are there in the text.`);
__context[`First Act`] = 1968;
__context.__text.push(`Again, something happened, and the action of the first act needs to be shifted to, say, ${__serializer.serialize( __context[`First Act`], '\r\n' )} year. The second act should automatically rewrite itself so that the time difference between them remains the same ${__serializer.serialize( __context[`Difference between acts`], '\r\n' )} years. That is, already in ${__serializer.serialize( __context[`Second Act`](), '\r\n' )} year.`);
__context.__text.push(``);
__context.__text.push(`${__serializer.serialize( __context.image(`calculations.png`, `calculations`), '\r\n' )}`);
__context.__text.push(``);
__context.__text.push(`Or, for example, what if this is a script for a computer game, where there are many different scenarios depending on, for example, what the player does. That is, we want that if the character is injured by the third act, then he loses the fight according to the plot, but if not injured - then he wins. And there are different endings for both cases, and one of them is chosen automatically. The author would describe both and somehow explain to the program which one to choose.`);
__context.__text.push(``);
__context.__text.push(`${__serializer.serialize( __context.image(`choose_screenplay_end.png`, `Ending Selection`), '\r\n' )}`);
__context.__text.push(``);
__context.__text.push(`For a programmer, this sounds usual. But screenwriters, as a rule, are not aware that this could be done.`);
__context.__text.push(`Well, it could be done. If screenwriters were programmers, and they had some simple programming language in which they could do what I described.`);
__context.__text.push(``);
__context.__text.push(`It would be cool, I thought, if such a programming language existed. But there wasn't one.`);
__context.__text.push(``);
__context.__text.push(`And then I realized: to stop being a programmer, I needed to write my own programming language.`);


// INFO: this trick is for making this file node module
Object.assign(module.exports, __context);

//# sourceMappingURL=/Users/jack/Documents/SEA/Git/StorytailorOrigins/out/origins_story_en/chapter9.js.map