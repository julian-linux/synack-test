export const number = (value) => Number(value).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

export const money = (value, spacing = true) => `$${spacing ? ' ' : ''}${number(value)}`;
