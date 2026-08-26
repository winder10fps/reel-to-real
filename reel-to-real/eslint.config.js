import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import conartiFsd from '@conarti/eslint-plugin-feature-sliced';

export default tseslint.config(
  {
    ignores: ['dist', 'node_modules', '.eslintcache'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['src/**/*.{ts,tsx}'],
    plugins: {
      'fsd': conartiFsd,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        projectService: true,
      },
    },
    rules: {
      // 1. Правила FSD для контроля абсолютных путей и слоев через алиасы
      'fsd/public-api': 'error',
      'fsd/layers-slices': ['error', { alias: '@' }],
      
      // 2. ЗАКРЫВАЕМ ЛАЗЕЙКУ ДЛЯ ТОЧЕК:
      // Запрещаем использовать относительные пути для выхода в родительские слои
      'no-restricted-imports': ['error', {
        patterns: [
          {
            // Запрещает импорты, которые поднимаются выше текущей папки и лезут в другие слои
            group: ['**/app/**', '**/pages/**', '**/widgets/**', '**/features/**', '**/entities/**', '**/shared/**'],
            message: 'Перекрестные импорты между слоями через относительные пути запрещены. Используйте абсолютный алиас @/.'
          },
          {
            // Блокирует любые глубокие прыжки назад через ../../
            group: ['**../', '../**'],
            message: 'Используйте относительные пути только для соседних файлов внутри одного компонента (например, ./styles.css). Для остального используйте @/.'
          }
        ]
      }],
    },
  }
);
