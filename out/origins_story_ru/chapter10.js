let __env = require(`\.\./\.\./src/environment`);
let __text = [];
let __context = { __text };
let __serializer = __env.getSerializer();

__context.utils = require(`../utils`);
__context = { ...__context, ...__context.utils, __text };
__context.__text.push(`${__serializer.serialize( __context.image(`writing_on_typescript.png`, `Сражение с чудовищем`), '\r\n' )}`);
__context.__text.push(``);
__context.__text.push(`И вот я, человек, который твердо решил никогда больше не программировать, месяцами, иногда заплывами по нескольку бессонных суток подряд, фигачил этот язык программирования, постоянно напоминая себе, что я - псих.  `);
__context.__text.push(`Так не делают. Если хочешь сменить профессию - меняй. А я, выходит, сменил ее только на словах. `);
__context.__text.push(`Более того, я еще и писал на javascript, а это тот язык, которого я практически не знал (я больше по серверам или десктопам, а в последние годы - вообще только Unity3d), т.е. пришлось еще и дополнительно js изучить, а это новые потери времени.`);
__context.__text.push(``);
__context.__text.push(`К середине прошедшего лета (2018) у меня была готова самая первая версия. Сильно урезанная, но это был полноценный, рабочий концепт. Язык программирования для сборки текстов. Он называется Storytailor (Стори-тэйлор, это игра слов: от английского История и Ткач). До нового года я его тестировал, как пользователь, т.е. как сценарист, а не программист. Когда у меня уже был список фич, которых не хватает, я снова сел программировать.`);


// INFO: this trick is for making this file node module
Object.assign(module.exports, __context);

//# sourceMappingURL=/Users/jack/Documents/SEA/Git/StorytailorOrigins/out/origins_story_ru/chapter10.js.map