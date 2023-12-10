let __env = require(`\.\./\.\./src/environment`);
let __text = [];
let __context = { __text };
let __serializer = __env.getSerializer();

__context[`Story Title`] = `StoryTailor. Origins`;
__context.__text.push(``);
__context.Versions = __context.Versions || { __text: [] };
__context.Versions.Rus = `README_RU.md`;
__context.Versions.En = `README.md`;
__context.__text.push(``);
__context[`Chapter Names`] = [
	`Logline`, 
	`Ordinary World`, 
	`Stranger in Their Own World`, 
	`Call to Adventure`, 
	`Refusal of the Call`, 
	`Mentor`, 
	`Beginning of the Journey`, 
	`Ally`, 
	`Point of Death`, 
	`Acquisition of the Sword`, 
	`Battle with the Monster`, 
	`Return with Victory`, 
	`Master of Two Worlds`
];
__context.__text.push(``);
__context[`Chapters Count`] = __context[`Chapter Names`].length;
__context.__text.push(``);
__context[`Chapter Source Files`] = [
];
__context.__text.push(``);
for (let chapterIndex = 0; chapterIndex < __context[`Chapters Count`]; chapterIndex++) { 
	const chapterSourceFile = `chapter${__serializer.serialize( chapterIndex, '\r\n' )}`;
	__context[`Chapter Source Files`].push(chapterSourceFile);
};


// INFO: this trick is for making this file node module
Object.assign(module.exports, __context);

//# sourceMappingURL=/Users/jack/Documents/SEA/Git/StorytailorOrigins/out/origins_story_en/data.js.map