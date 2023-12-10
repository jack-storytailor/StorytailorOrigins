let path = require('path');
let rootPath = path.resolve(__dirname, '..');
let stsConfigPath = path.resolve(rootPath, 'stsconfig.json');

let child_process = require('child_process');

let filesToRender = [
	{
		source: './origins_story_ru',
		target: '../README_RU.md'
	},
	{
		source: './origins_story_en',
		target: '../README_EN.md'
	},
	{
		source: './index',
		target: '../README.md'
	},
	{
		source: './instruction',
		target: '../Instruction.md'
	},
	{
		source: './instruction_ru',
		target: '../Instruction_ru.md'
	},
	{
		source: './instruction_en',
		target: '../Instruction_en.md'
	}
];

console.log('printing started...');
let stspFilePath = require.resolve('storytailor/out/printer');
filesToRender.forEach((fileInfo) => {
	let source = fileInfo.source;
	let target = fileInfo.target;

	let printCommand = `node "${stspFilePath}" "${stsConfigPath}" "${source}" "${target}"`;
	console.log('executing ', printCommand);
	console.log(child_process.execSync(printCommand).toString());
});
console.log('printing done.');