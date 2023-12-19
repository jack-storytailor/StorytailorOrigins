let __env = require(`\.\./src/environment`);
let __text = [];
let __context = { __text };
let __serializer = __env.getSerializer();

__context.utils = require(`./utils`);
__context = { ...__context, ...__context.utils, __text };
__context.__text.push(`# Storytailor. Инструкция`);
__context.__text.push(`${__serializer.serialize( __context.ref(`https://github.com/jack-storytailor/StorytailorOrigins/blob/master/README.md`, `Презентация storytailor`), '\r\n' )}`);
__context.__text.push(``);
__context.__text.push(`Актуально для версий 0.0.x. Примите во внимание, что Storytailor работает в экспериментальном режиме, и некоторые правила могут быть в дальнейшем изменены`);
__context.__text.push(``);
__context.__text.push(`Это - краткая инструкция пользователя языка программирования ${__serializer.serialize( __context.ref(`https://github.com/jack-storytailor/storytailor`, `Storytailor`), '\r\n' )} в ${__serializer.serialize( __context.ref(`https://code.visualstudio.com/`, `Microsoft Visual Studio Code`), '\r\n' )}`);
__context.__text.push(``);
__context.__text.push(`## Начало работы`);
__context.__text.push(`Установите ${__serializer.serialize( __context.ref(`https://code.visualstudio.com/`, `Microsoft Visual Studio Code`), '\r\n' )}`);
__context.__text.push(`${__serializer.serialize( __context.image(`vscode_new.png`, `vscode`), '\r\n' )}`);
__context.__text.push(``);
__context.__text.push(`Установите ${__serializer.serialize( __context.ref(`https://marketplace.visualstudio.com/items?itemName=jackstorytailor.storytailor-vscode`, `Storytailor плагин для vscode`), '\r\n' )}`);
__context.__text.push(`${__serializer.serialize( __context.image(`install_extension.png`, `пустая папка`), '\r\n' )}`);
__context.__text.push(``);
__context.__text.push(`#### Начинаем`);
__context.__text.push(``);
__context.__text.push(`Самый простой способ приступить к работе - это открыть пустую папку в vscode и скопировать в нее тестовый проект`);
__context.__text.push(``);
__context.__text.push(`Откройте пустую папку`);
__context.__text.push(`${__serializer.serialize( __context.image(`vscode_empty.png`, `пустая папка`), '\r\n' )}`);
__context.__text.push(``);
__context.__text.push(`Кликните правой клавишей мыши в корне проекта и выберите из выпадающего меню "Initialize example project in a working root"`);
__context.__text.push(`${__serializer.serialize( __context.image(`init_example_project.png`, `скопировать тестовый проект в корневую папку`), '\r\n' )}`);
__context.__text.push(``);
__context.__text.push(`Эта операция скопирует в корневую папку тестовый проект. Учтите, что если в корневой папке уже есть такие файлы, то они будут перетерты. Подтверждайте копирование`);
__context.__text.push(`${__serializer.serialize( __context.image(`confirm_init_example_project.png`, `подтвердить копирование`), '\r\n' )}`);
__context.__text.push(``);
__context.__text.push(`Тестовый проект скопирован в корневую папку. Примерно так должна выглядеть файловая структура проекта`);
__context.__text.push(`${__serializer.serialize( __context.image(`example_project_created.png`, `тестовый проект создан`), '\r\n' )}`);
__context.__text.push(``);
__context.__text.push(`Обновите node-модули. Для этого`);
__context.__text.push(``);
__context.__text.push(`Откройте терминал`);
__context.__text.push(`${__serializer.serialize( __context.image(`open_terminal.png`, `npm install в терминале`), '\r\n' )}`);
__context.__text.push(``);
__context.__text.push(`Вбейте комманду "npm install" или "npm i" и нажмите "ENTER"`);
__context.__text.push(`${__serializer.serialize( __context.image(`npm_install.png`, `npm install в терминале`), '\r\n' )}`);
__context.__text.push(``);
__context.__text.push(`node-модули обновлены`);
__context.__text.push(`${__serializer.serialize( __context.image(`node_modules_created.png`, `npm install в терминале`), '\r\n' )}`);
__context.__text.push(``);
__context.__text.push(`терминал можно закрыть`);
__context.__text.push(`${__serializer.serialize( __context.image(`close_terminal.png`, `закрыть терминал`), '\r\n' )}`);
__context.__text.push(``);
__context.__text.push(``);
__context.__text.push(`Исходные файлы истории хранятся в папке story (\*.sts)`);
__context.__text.push(`${__serializer.serialize( __context.image(`story_source_files.png`, `исходники истории`), '\r\n' )}`);
__context.__text.push(``);
__context.__text.push(`Подготовка проекта завершена. Это его рабочее состояние`);
__context.__text.push(``);
__context.__text.push(`#### Теперь выполним сборку тестового проекта. `);
__context.__text.push(`Откройте файл с исходниками истории. Например, story/index.sts`);
__context.__text.push(``);
__context.__text.push(`Открывайте Command Palette (Меню View -> Command Palette или комбинация клавиш Ctrl+Shift+P) `);
__context.__text.push(`${__serializer.serialize( __context.image(`command_palette.png`, `command palette`), '\r\n' )}`);
__context.__text.push(``);
__context.__text.push(`${__serializer.serialize( __context.image(`command_palette_openned.png`, `command palette openned`), '\r\n' )}`);
__context.__text.push(``);
__context.__text.push(`Выбирайте комманду "Compile: Compile and show preview" (по-умолчанию Ctrl+Alt+P)`);
__context.__text.push(`${__serializer.serialize( __context.image(`compile_and_show_preview.png`, `compile and show preview`), '\r\n' )}`);
__context.__text.push(``);
__context.__text.push(`В папке src сохраняется история на typescript. В папке out будет эта история на javascript`);
__context.__text.push(`${__serializer.serialize( __context.image(`compiled_story.png`, `compiled story`), '\r\n' )}`);
__context.__text.push(``);
__context.__text.push(`Когда сборка истории завершена, открывается предпросмотр`);
__context.__text.push(`${__serializer.serialize( __context.image(`preview_story.png`, `compiled story`), '\r\n' )}`);
__context.__text.push(``);
__context.__text.push(`Окно предпросмотра можно размещать как удобно`);
__context.__text.push(`${__serializer.serialize( __context.image(`layout_2.png`, `compiled story`), '\r\n' )}`);
__context.__text.push(`${__serializer.serialize( __context.image(`layout_3.png`, `compiled story`), '\r\n' )}`);
__context.__text.push(``);
__context.__text.push(`Текст, показанный в окне предпросмотра, сохраняется в файл "story output.txt" в корне проекта`);
__context.__text.push(`${__serializer.serialize( __context.image(`story_output.png`, `story output`), '\r\n' )}`);
__context.__text.push(``);
__context.__text.push(``);
__context.__text.push(`## Для всех (база)`);
__context.__text.push(`Упрощенная инструкция затрагивает только базовый функционал.`);
__context.__text.push(`Этого хватит, чтобы собрать сценарий, и предполагается, что пользователю не понадобится никаких технических знаний`);
__context.__text.push(``);
__context.__text.push(`### Текст истории`);
__context.__text.push(``);
__context.__text.push(`Давайте удалим все содержимое файла story/index.sts и начнем историю с чистого листа`);
__context.__text.push(``);
__context.__text.push(``);
__context.__text.push(`#### Обычный текст`);
__context.__text.push(`Обычный текст попадает в финальную сборку "как есть", без изменений`);
__context.__text.push(`${__serializer.serialize( __context.image(`simple_text.png`, `simple text`), '\r\n' )}`);
__context.__text.push(``);
__context.__text.push(`#### Комментарии`);
__context.__text.push(`Комментарии - это фрагмент текста, который не пойдет в финальную сборку. Комментарии нужны для самих разработчиков истории. Весь текст от символов /\/ и до конца строки будет считаться комментарием`);
__context.__text.push(`${__serializer.serialize( __context.image(`comments.png`, `comments`), '\r\n' )}`);
__context.__text.push(``);
__context.__text.push(`#### Спец-символы (перенос строки, табуляция)`);
__context.__text.push(`Есть три спец-символа, которые попадают в финальную сборку нестандартно. `);
__context.__text.push(``);
__context.__text.push(`Это символ переноса строки`);
__context.__text.push(`${__serializer.serialize( __context.image(`endline_symbol.png`, `endline symbol`), '\r\n' )}`);
__context.__text.push(``);
__context.__text.push(`Символы конца строки и табуляции`);
__context.__text.push(`${__serializer.serialize( __context.image(`endline_and_tab.png`, `endline and tab symbols`), '\r\n' )}`);
__context.__text.push(``);
__context.__text.push(`#### Экранирование спец-символов`);
__context.__text.push(`Экранирование спец-символов - это маркировка этих символов таким образом, чтобы компилятор не считал их спец-символами. Вот пример:`);
__context.__text.push(`${__serializer.serialize( __context.image(`escaped_symbols.png`, `escaped symbols`), '\r\n' )}`);
__context.__text.push(``);
__context.__text.push(`### Переменные`);
__context.__text.push(`Если оформить текст в виде списка, то элементы этого списка можно будет вставлять в других местах истории`);
__context.__text.push(`Переменная пишется так (отступ из пробелов, потом звездочка, потом пробел, потом название переменной):`);
__context.__text.push(``);
__context.__text.push(`\t\* Название Переменной`);
__context.__text.push(`\t  Содержание переменной пишется`);
__context.__text.push(`\t  с новой строки и отступом от края `);
__context.__text.push(`\t  на 2 (два) пробела больше, чем у названия`);
__context.__text.push(`\t  `);
__context.__text.push(`\t  * Подпеременная`);
__context.__text.push(`\t    Содержание подпеременной`);
__context.__text.push(``);
__context.__text.push(`Вот пример объявленной переменной`);
__context.__text.push(`${__serializer.serialize( __context.image(`outer_variable.png`, `outer variables`), '\r\n' )}`);
__context.__text.push(``);
__context.__text.push(`### Вставки в текст`);
__context.__text.push(``);
__context.__text.push(`\t\// Вставка в текст начинается со звездочки (\*) и заканчивается точкой с запятой (;)`);
__context.__text.push(`\t\// Например:`);
__context.__text.push(`\tТекст до вставки переменной, \*Переменная; текст после вставки переменной`);
__context.__text.push(``);
__context.__text.push(`А вот переменная вставлена в текст, и что из этого получается:`);
__context.__text.push(`${__serializer.serialize( __context.image(`outer_variable_inserted.png`, `outer variables inserted`), '\r\n' )}`);
__context.__text.push(``);
__context.__text.push(`#### Многоуровневые переменные`);
__context.__text.push(`${__serializer.serialize( __context.image(`outer_variables_hierarchy.png`, `outer variables hierarchy`), '\r\n' )}`);
__context.__text.push(``);
__context.__text.push(`\t\// если содержание переменной задается через знак "=", то у нее не может быть вложенных переменных:`);
__context.__text.push(`\t`);
__context.__text.push(`\t* Переменная = 100500`);
__context.__text.push(`\t  * Подпеременная \// Ошибка! Значение переменной "Переменная" - цифра, у нее не может быть вложенных переменных`);
__context.__text.push(``);
__context.__text.push(`#### Вставка в текст мат. выражения`);
__context.__text.push(`А вот переменная вставлена в текст, и что из этого получается:`);
__context.__text.push(`${__serializer.serialize( __context.image(`include_expression.png`, `include expression`), '\r\n' )}`);
__context.__text.push(``);
__context.__text.push(`#### Операции над данными`);
__context.__text.push(`А вот так можно между строк совершать операции над данными:`);
__context.__text.push(`${__serializer.serialize( __context.image(`insert_operations.png`, `insert operations`), '\r\n' )}`);
__context.__text.push(``);
__context.__text.push(`### Импорт других файлов`);
__context.__text.push(`Мы работаем в файле story/index.sts`);
__context.__text.push(`Давайте посмотрим, что у нас еще есть в папке story:`);
__context.__text.push(`${__serializer.serialize( __context.image(`external_file.png`, `external file`), '\r\n' )}`);
__context.__text.push(``);
__context.__text.push(`Импортируем этот файл к нам`);
__context.__text.push(`${__serializer.serialize( __context.image(`import_characters.png`, `import characters`), '\r\n' )}`);
__context.__text.push(``);
__context.__text.push(`И вставим персонажа из того файла в наш текст`);
__context.__text.push(`${__serializer.serialize( __context.image(`inserted_imported_character.png`, `inserted imported characters`), '\r\n' )}`);
__context.__text.push(``);
__context.__text.push(``);
__context.__text.push(`## Для программистов`);
__context.__text.push(`Усложненная инструкция. Предполагается, что без объяснений ее должны понять программисты и всякие технари`);
__context.__text.push(``);
__context.__text.push(`### Идея`);
__context.__text.push(`Storytailor задуман как диалект javascript по аналогии с ${__serializer.serialize( __context.ref(`https:\//www.typescriptlang.org/`, `typescript`), '\r\n' )}.`);
__context.__text.push(`Каждый sts модуль из папки projectRoot/story компилируется в соответствующий .ts файл и складывается это все в папке projectRoot/src. После чего typescript компилирует содержимое папки projectRoot/src в projectRoot/out - это уже javascript файлы. `);
__context.__text.push(`${__serializer.serialize( __context.image(`storyscript_compiled_to_typescript.png`, `compiled typescript`), '\r\n' )}`);
__context.__text.push(`${__serializer.serialize( __context.image(`storyscript_compiled_to_javascript.png`, `compiled javascript`), '\r\n' )}`);
__context.__text.push(``);
__context.__text.push(`### Как это работает`);
__context.__text.push(`строка формата (звездочка, пробел, скоп с инструкциями "{}")`);
__context.__text.push(``);
__context.__text.push(`\t-> storytailor`);
__context.__text.push(`\t* {`);
__context.__text.push(`\t  instructions;`);
__context.__text.push(`\t}`);
__context.__text.push(``);
__context.__text.push(`компилируется как скоп с инструкциями`);
__context.__text.push(``);
__context.__text.push(`\t-> typescript`);
__context.__text.push(`\t{`);
__context.__text.push(`\t  instructions;`);
__context.__text.push(`\t}`);
__context.__text.push(``);
__context.__text.push(`${__serializer.serialize( __context.image(`operation_include.png`, `operations`), '\r\n' )}`);
__context.__text.push(``);
__context.__text.push(`Строка без спец-символов компилируется как инструкция:`);
__context.__text.push(``);
__context.__text.push(`\t  -> storytailor:`);
__context.__text.push(`\t  строка без спец-символов`);
__context.__text.push(``);
__context.__text.push(`\t  -> typescript`);
__context.__text.push(`\t  __context['__text'] = [...__context['__text'], \`строка без спец-символов\`];`);
__context.__text.push(``);
__context.__text.push(`Строка с вставкой:`);
__context.__text.push(``);
__context.__text.push(`\t  -> storytailor`);
__context.__text.push(`\t  строка с \*Переменная;`);
__context.__text.push(``);
__context.__text.push(`\t  -> typescript`);
__context.__text.push(`\t  __context['__text'] = [...__context['__text'], \`строка с \${__serializer.serialize( __context['Переменная'], '\\r\\n' )} \`];`);
__context.__text.push(``);
__context.__text.push(`Переменная`);
__context.__text.push(``);
__context.__text.push(`\t  -> storytailor`);
__context.__text.push(`\t  * Переменная`);
__context.__text.push(``);
__context.__text.push(`\t  -> typescript`);
__context.__text.push(`\t  __context['Переменная'] = __context['Переменная'] || { __text: [] };`);
__context.__text.push(``);
__context.__text.push(`№2`);
__context.__text.push(``);
__context.__text.push(`\t  -> storytailor`);
__context.__text.push(`\t  * Переменная = 100500`);
__context.__text.push(``);
__context.__text.push(`\t  -> typescript`);
__context.__text.push(`\t  __context['Переменная'] = 100500;`);
__context.__text.push(``);
__context.__text.push(`Raw-переменная (с префиксом "@")`);
__context.__text.push(``);
__context.__text.push(`\t  -> storytailor`);
__context.__text.push(`\t  * { @Переменная = 100500; }`);
__context.__text.push(``);
__context.__text.push(`\t  -> typescript`);
__context.__text.push(`\t  Переменная = 100500;`);
__context.__text.push(``);
__context.__text.push(``);
__context.__text.push(`### Синтаксис`);
__context.__text.push(``);
__context.__text.push(`#### Строки, числа, булевые`);
__context.__text.push(`Строка`);
__context.__text.push(``);
__context.__text.push(`\t "Содержание строки"`);
__context.__text.push(``);
__context.__text.push(`Строка с инклудами (инклуд пишется так: звездочка, потом без пробела экспрешн, а в конце перенос строки или точка с запятой: \*includeExpression;)`);
__context.__text.push(``);
__context.__text.push(`\t "Содержание строки \*include1; \*include2;"`);
__context.__text.push(``);
__context.__text.push(`Число`);
__context.__text.push(``);
__context.__text.push(`\t 100500`);
__context.__text.push(``);
__context.__text.push(`Булевые`);
__context.__text.push(``);
__context.__text.push(`\t  true false`);
__context.__text.push(``);
__context.__text.push(`#### Операторы`);
__context.__text.push(`\t  \+`);
__context.__text.push(`\t  \-`);
__context.__text.push(`\t  \/`);
__context.__text.push(`\t  \*`);
__context.__text.push(`\t  \= `);
__context.__text.push(`\t  \=\=`);
__context.__text.push(`\t  \=\=\=`);
__context.__text.push(`\t  \!`);
__context.__text.push(`\t  \!\= `);
__context.__text.push(`\t  \!\=\=`);
__context.__text.push(`\t  \<`);
__context.__text.push(`\t  \>`);
__context.__text.push(`\t  \<\=`);
__context.__text.push(`\t  \>\=`);
__context.__text.push(`\t  \|`);
__context.__text.push(`\t  \|\|`);
__context.__text.push(`\t  \&`);
__context.__text.push(`\t  \&\&`);
__context.__text.push(`\t  \+\+`);
__context.__text.push(`\t  \-\-`);
__context.__text.push(``);
__context.__text.push(`#### Функции`);
__context.__text.push(``);
__context.__text.push(`\tvarname = function (params) {`);
__context.__text.push(`\t  instruction1;`);
__context.__text.push(`\t  ...`);
__context.__text.push(`\t  instruction2;`);
__context.__text.push(`\t}`);
__context.__text.push(``);
__context.__text.push(`#### Объекты, массивы`);
__context.__text.push(`Объекты`);
__context.__text.push(``);
__context.__text.push(`\tlet obj = {`);
__context.__text.push(`\t  ...otherObj,`);
__context.__text.push(`\t  fieldName: "fieldValue",`);
__context.__text.push(`\t  otherVariable,`);
__context.__text.push(`\t  "fieldName2": 100500,`);
__context.__text.push(`\t  "isTrue": false`);
__context.__text.push(`\t}`);
__context.__text.push(``);
__context.__text.push(`Конструктор`);
__context.__text.push(``);
__context.__text.push(`\tlet obj = new Object(prototype);`);
__context.__text.push(``);
__context.__text.push(`Массивы`);
__context.__text.push(``);
__context.__text.push(`\tlet array = [`);
__context.__text.push(`\t  ...otherArray,`);
__context.__text.push(`\t  newValue`);
__context.__text.push(`\t] `);
__context.__text.push(``);
__context.__text.push(`#### Инструкции`);
__context.__text.push(``);
__context.__text.push(`Import`);
__context.__text.push(``);
__context.__text.push(`\timport * as varname from './module/Path'`);
__context.__text.push(``);
__context.__text.push(`If`);
__context.__text.push(``);
__context.__text.push(`\tif (condition) {`);
__context.__text.push(`\t  instructions;`);
__context.__text.push(`\t} else if (condition2) {`);
__context.__text.push(`\t  instructions2;`);
__context.__text.push(`\t} else {`);
__context.__text.push(`\t  instructions3`);
__context.__text.push(`\t}`);
__context.__text.push(``);
__context.__text.push(`For`);
__context.__text.push(``);
__context.__text.push(`\tfor (var i; @i < 10; @i++) {`);
__context.__text.push(`\t instructions;  `);
__context.__text.push(`\t}`);
__context.__text.push(``);
__context.__text.push(`For In`);
__context.__text.push(``);
__context.__text.push(`\tfor (let key in obj) {`);
__context.__text.push(`\t  instructions;`);
__context.__text.push(`\t}`);
__context.__text.push(``);
__context.__text.push(`While`);
__context.__text.push(``);
__context.__text.push(`\twhile (condition) {`);
__context.__text.push(`\t  instructions;`);
__context.__text.push(`\t}`);
__context.__text.push(``);
__context.__text.push(`Do while`);
__context.__text.push(``);
__context.__text.push(`\tdo {`);
__context.__text.push(`\t  instructions;`);
__context.__text.push(`\t} while (condition)`);
__context.__text.push(``);
__context.__text.push(`Switch case`);
__context.__text.push(``);
__context.__text.push(`\tswitch (condition) {`);
__context.__text.push(`\t`);
__context.__text.push(`\t  case condition: `);
__context.__text.push(`\t    instructions;`);
__context.__text.push(`\t  break;`);
__context.__text.push(`\t`);
__context.__text.push(`\t  default:`);
__context.__text.push(`\t    instructions;`);
__context.__text.push(`\t  break;`);
__context.__text.push(`\t`);
__context.__text.push(`\t}`);
__context.__text.push(``);
__context.__text.push(`Delete`);
__context.__text.push(``);
__context.__text.push(`\tdelete obj.field;`);
__context.__text.push(``);
__context.__text.push(`##  `);
__context.__text.push(`[Сидоренко Евгений](https:\//www.facebook.com/evgeny.sydorenko), февраль 2019`);


// INFO: this trick is for making this file node module
Object.assign(module.exports, __context);

//# sourceMappingURL=/Users/jack/Documents/SEA/Git/StorytailorOrigins/out/instruction_ru.js.map