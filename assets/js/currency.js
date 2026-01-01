/**
 * currency.js
 * Handles currency detection and formatting based on user locale.
 */

const getCurrencyCode = () => {
    // Simple mapping of common locales to currency codes
    const locale = navigator.language || 'en-US';
    const currencyMap = {
        'en-US': 'USD',
        'en-GB': 'GBP',
        'en-IN': 'INR', // Rupee
        'ja-JP': 'JPY',
        'de-DE': 'EUR',
        'fr-FR': 'EUR',
        'en-CA': 'CAD',
        'en-AU': 'AUD'
    };
    
    // Try to find exact match
    if (currencyMap[locale]) return currencyMap[locale];
    
    // Fallback based on region code (last 2 chars)
    if (locale.endsWith('US')) return 'USD';
    if (locale.endsWith('GB')) return 'GBP';
    if (locale.endsWith('IN')) return 'INR';
    if (locale.endsWith('JP')) return 'JPY';
    if (locale.endsWith('EU') || locale.endsWith('DE') || locale.endsWith('FR') || locale.endsWith('IT') || locale.endsWith('ES')) return 'EUR';

    return 'USD'; // Default fallback
};

const formatCurrency = (amount) => {
    const currency = getCurrencyCode();
    const locale = navigator.language || 'en-US';
    
    try {
        return new Intl.NumberFormat(locale, {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(amount);
    } catch (e) {
        // Fallback if formatting fails
        return amount.toFixed(2);
    }
};

const updateCurrencyLabels = () => {
    // optional: update generic labels if we had placeholders like "Amount (CUR)"
    // Currently we will rely on removing hardcoded symbols from HTML
};
