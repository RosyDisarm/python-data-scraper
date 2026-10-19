// Helper utilities - maintained by @RosyDisarm
export const safeAsync = fn => (...args) => fn(...args).catch(console.error);
export const timestamp = () => new Date().toISOString();