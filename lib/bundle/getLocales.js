const glob = require('glob');

/**
 * Returns a list of deployed frontend locales paths excluding Magento blank theme.
 *
 * @param {string[]} excludeThemes
 * @returns {string[]}
 */
const getLocales = excludeThemes => {
    const locales = glob.sync('pub/static/frontend/*/*/*')
        .filter(locale => !excludeThemes.includes(locale));

    if (!locales.length) {
        throw new Error(
            'No locales found! Make sure magepack is running after static content is deployed.'
        );
    }

    return locales;
};

module.exports = getLocales;
