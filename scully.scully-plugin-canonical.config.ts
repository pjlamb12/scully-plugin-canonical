import { HandledRoute, registerPlugin, ScullyConfig } from '@scullyio/scully';
require('scully-plugin-canonical');

export const config: ScullyConfig = {
	projectRoot: './src',
	projectName: 'scully-plugin-canonical',
	outDir: './dist/static',
	routes: {},
	defaultPostRenderers: ['combineStylesAmpPlugin'],
};
