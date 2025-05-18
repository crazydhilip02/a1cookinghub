/**
 * Opens WhatsApp with a pre-filled message
 * @param message Message to pre-fill in WhatsApp
 */
export const openWhatsApp = (message: string = '') => {
  const phoneNumber = '917090707243';
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
};

/**
 * Formats currency in INR
 * @param amount Amount to format
 * @returns Formatted amount string
 */
export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0
  }).format(amount);
};

/**
 * Truncates text to specified length
 * @param text Text to truncate
 * @param maxLength Maximum length
 * @returns Truncated text
 */
export const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};