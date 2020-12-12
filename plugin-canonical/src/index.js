const { registerPlugin } = require('@scullyio/scully');
const { setCanonicalLink } = require('./plugin-canonical');

const validator = async (config) => [];
registerPlugin('render', 'setCanonicalLink', setCanonicalLink, validator);

module.exports = {
	setCanonicalLink,
};
