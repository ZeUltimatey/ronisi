export function localize(value, language = 'lv') {
  if (value === null || value === undefined) return '';
  if (typeof value === 'string' || typeof value === 'number') return value;
  return value[language] ?? value.lv ?? value.en ?? '';
}

export function localeCode(language) {
  return language === 'en' ? 'en-GB' : 'lv-LV';
}
