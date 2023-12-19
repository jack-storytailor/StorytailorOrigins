let __env = require(`\.\./\.\./src/environment`);
let __text = [];
let __context = { __text };
let __serializer = __env.getSerializer();

__context.utils = require(`../utils`);
__context = { ...__context, ...__context.utils, __text };
__context.__text.push(`Все, что мне оставалось - это писать, писать и писать. Уже не пытаться заработать, а просто учиться новому ремеслу.`);
__context.__text.push(`Я сел работать и только теперь признал, что у меня нет инструментов. Вообще. У программистов есть Visual Studio, у художников Photoshop, а у 3d-шников - 3ds max, а у сценариста что? Блокнот? Вот тут я понял, что столкнулся с самой сложной задачей. У меня не было инструмента. `);
__context.__text.push(`Как я понял, сценаристы работают на чем придется. Безусловно, есть куча программ, которые позволяют отформатировать текст (вроде Microsoft Word, Amazon Storywrtiter, КИТ Сценарист или Truby Writers Studio), но я не нашел ни одной, дающей возможность текст компоновать и генерировать. `);
__context.__text.push(``);
__context.__text.push(`Например, что делать, если сценарий готов, а продюсер просит переименовать персонажа? Нужно прочесать весь текст сценария и везде попереименовывать? Программист просто выписал бы имена персонажей в отдельный список и подставлял бы их в текст по имени из того списка. И если нужно кого переименовать - вот там, в том списке и переименует. И все, весь остальной текст моментально подхватил бы изменения.`);
__context.__text.push(``);
__context.__text.push(`Вот, например, список с персонажами: `);
__context.__text.push(``);
__context.__text.push(`${__serializer.serialize( __context.image(`characters.png`, `персонажи`), '\r\n' )}`);
__context.__text.push(``);
__context.__text.push(`А вот его элементы вставлены в текст:`);
__context.__text.push(``);
__context.__text.push(`${__serializer.serialize( __context.image(`references.png`, `ссылка`), '\r\n' )} `);
__context.__text.push(``);
__context[`Первый Акт`] = 2003;
__context[`Разница между актами`] = 19;
__context[`Второй Акт`] = __context[`Первый Акт`] + __context[`Разница между актами`];
__context.__text.push(`Или другой пример. Допустим, действие первого акта происходит в ${__serializer.serialize( __context[`Первый Акт`], '\r\n' )} году, а второго акта - через ${__serializer.serialize( __context[`Разница между актами`], '\r\n' )} лет, т.е. в ${__serializer.serialize( __context[`Второй Акт`], '\r\n' )}. И вот сценарий написан, и эти цифры там в тексте есть. `);
__context[`Первый Акт`] = 1968;
__context[`Второй Акт`] = __context[`Первый Акт`] + __context[`Разница между актами`];
__context.__text.push(`Опять что-то случилось, и нужно сдвинуть действие первого акта на, скажем, ${__serializer.serialize( __context[`Первый Акт`], '\r\n' )} год. Второй акт должен автоматически переписаться, чтобы разница во времени между ними оставалась те же ${__serializer.serialize( __context[`Разница между актами`], '\r\n' )} лет. Т.е. уже в ${__serializer.serialize( __context[`Второй Акт`], '\r\n' )} году.`);
__context.__text.push(``);
__context.__text.push(`${__serializer.serialize( __context.image(`calculations.png`, `расчеты`), '\r\n' )}`);
__context.__text.push(``);
__context.__text.push(`Или, например, а что если это сценарий к компьютерной игре, а там много разных вариантов развития событий в зависимости от того, что, например, делает игрок. Т.е. мы хотим, чтобы в случае, если персонаж ранен к третьему акту, то тогда по сюжету он проигрывает бой, а если не ранен - то выигрывает. И есть разные концовки на оба случая, и выбирается одна из них автоматически. Автор описал бы обе и как-нибудь объяснил программе, какую из них выбрать. `);
__context.__text.push(``);
__context.__text.push(`${__serializer.serialize( __context.image(`choose_screenplay_end.png`, `выбор концовки`), '\r\n' )}`);
__context.__text.push(``);
__context.__text.push(`Для программиста это звучит обычно. А сценарист вообще, как правило, не в курсе, что так можно было.`);
__context.__text.push(`Ну, можно было бы. Если бы сценаристы были программистами, и у них был бы какой-то такой простой язык программирования, в котором можно было бы сделать то, что я описал.`);
__context.__text.push(``);
__context.__text.push(`Вот было бы классно, думал я, если б такой язык программирования бы был. Но его не было. `);
__context.__text.push(``);
__context.__text.push(`И тогда я понял: чтобы перестать быть программистом, нужно написать свой собственный язык программирования.`);


// INFO: this trick is for making this file node module
Object.assign(module.exports, __context);

//# sourceMappingURL=/Users/jack/Documents/SEA/Git/StorytailorOrigins/out/origins_story_ru/chapter9.js.map