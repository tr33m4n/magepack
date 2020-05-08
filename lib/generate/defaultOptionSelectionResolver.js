/**
 * Resolve product option selection (default)
 */
module.exports = () => {
    Array.from(
        document.querySelectorAll(
            '.product-options-wrapper .swatch-attribute'
        )
    ).forEach((swatch) => {
        const swatchOption = swatch.querySelector(
            '.swatch-option:not([disabled])'
        );
        swatch.querySelector('.swatch-input').value =
            swatchOption.getAttribute('option-id') ||
            swatchOption.getAttribute('data-option-id');
    });
}
