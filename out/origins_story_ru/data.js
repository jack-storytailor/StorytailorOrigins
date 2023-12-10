let __env = require(`\.\./\.\./src/environment`);
let __text = [];
let __context = { __text };
let __serializer = __env.getSerializer();

__context[`Story Title`] = `StoryTailor. Истоки`;
__context.__text.push(``);
__context.Versions = __context.Versions || { __text: [] };
__context.Versions.Rus = `README_RU.md`;
__context.Versions.En = `README.md`;
__context.__text.push(``);
__context[`Chapter Names`] = [
	`Логлайн`, 
	`Обычный мир`, 
	`Чужак в своем мире`, 
	`Зов приключений`, 
	`Отказ от зова`, 
	`Наставник`, 
	`Начало пути`, 
	`Союзник`, 
	`Точка смерти`, 
	`Обретение меча`, 
	`Сражение с чудовищем`, 
	`Возвращение с победой`, 
	`Хозяин двух миров`
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

//# sourceMappingURL=/Users/jack/Documents/SEA/Git/StorytailorOrigins/out/origins_story_ru/data.js.map