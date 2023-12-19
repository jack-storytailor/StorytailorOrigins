let __env = require(`\.\./\.\./src/environment`);
let __text = [];
let __context = { __text };
let __serializer = __env.getSerializer();

__context.utils = require(`../utils`);
__context = { ...__context, ...__context.utils, __text };
__context.__text.push(`А тем временем я думал подработать актером. Для этого нужен шоурил, и я решил снять его дома, в квартире. Я выписал сцены, которые нужно будет отснять, и понял, что их можно объединить в сюжет. Так родился сценарий "${__serializer.serialize( __context.ref_blog(`2017/09/blog-post.html`, `Взаперти`), '\r\n' )}", где всего два персонажа (один из них - в эпизодах), одна локация и стандартная блокбастерная структура. `);
__context.__text.push(`  `);
__context.__text.push(`Это история о Водителе грабителей банков, который в день ограбления просыпается в квартире любовницы, врет подельникам, что он не проспал, он уже к ним едет, и обнаруживает, что любовница ушла на работу, дверь заперла, ключей ему не оставила, а ограбление банка, с которого он должен забрать своих грабителей, уже началось.`);
__context.__text.push(``);
__context.__text.push(`Внезапно сами собой нашлись люди, с которыми это все можно было снять. Мы утрясли организацию, я вложил туда все деньги, что у меня оставались, и мы приступили.`);


// INFO: this trick is for making this file node module
Object.assign(module.exports, __context);

//# sourceMappingURL=/Users/jack/Documents/SEA/Git/StorytailorOrigins/out/origins_story_ru/chapter7.js.map