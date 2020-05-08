const glob = require('glob');

/**
 * Returns a list of deployed frontend locales paths excluding Magento blank theme.
 *
 * @param {(string|null)} excludeThemes
 * @returns {string[]}
 */
const getLocales = (excludeThemes) => {
    const themes = excludeThemes ? excludeThemes.split(',') : [];
    const locales = glob.sync('pub/static/frontend/*/*/*')
        .filter(locale => !themes.includes(locale));

    if (!locales.length) {
        throw new Error(
            'No locales found! Make sure magepack is running after static content is deployed.'
        );
    }

    return locales;
};

module.exports = getLocales;
