const { registerPlugin } = require('@scullyio/scully');
const { setCanonicalLinkPlugin } = require('./plugin-canonical');

const validator = async (config) => [];
registerPlugin('render', 'setCanonicalLinkPlugin', setCanonicalLinkPlugin, validator);

module.exports = {
	setCanonicalLinkPlugin,
};
