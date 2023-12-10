let __env = require(`\.\./\.\./src/environment`);
let __text = [];
let __context = { __text };
let __serializer = __env.getSerializer();

__context.__text.push(`Я с ранних лет хотел писать книги. `);
__context.__text.push(`Но 15 лет назад стал программистом, и 15 лет мечтаю сменить профессию.`);


// INFO: this trick is for making this file node module
Object.assign(module.exports, __context);

//# sourceMappingURL=/Users/jack/Documents/SEA/Git/StorytailorOrigins/out/origins_story_ru/chapter2.js.map