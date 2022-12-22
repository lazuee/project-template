/** @type {import("prettier").Config} */
const config = {
	...require('gts/.prettierrc.json'),
	pluginSearchDirs: [__dirname],
	importOrder: ['^node:', '<THIRD_PARTY_MODULES>', '^#root', '^[./]'],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true,
	endOfLine: 'lf',
};

module.exports = config;
