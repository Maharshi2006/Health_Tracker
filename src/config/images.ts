
export const images = {
  icons: {  },

  img: {
  },
};

export const emojis = {
  avatars: ['👤', '😊', '🙂', '😎', '🤗', '💪', '🏃', '🧘', '🤓', '🥰'],

  water: '💧',
  steps: '👟',
  stepsAlt: '👣',
  sleep: '🌙',

  profile: '👤',
  edit: '✏️',
  save: '💾',
  close: '✕',
  plus: '+',
  check: '✓',
  sparkle: '✨',
  arrow: '→',
  calendar: '📅',
  chart: '📊',
  refresh: '🔄',

  success: '✅',
  warning: '⚠️',
  error: '❌',
  info: 'ℹ️',
};

export type ImageKeys = keyof typeof images;
export type EmojiKeys = keyof typeof emojis;

export default images;
