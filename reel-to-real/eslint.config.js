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
      // Разрешаем использовать точки ТОЛЬКО для соседних файлов (./) внутри папки.
      // Любые прыжки наружу в другие слои через (../) будут заблокированы.
      'no-restricted-imports': ['error', {
        patterns: [
          {
            // Ловим любые относительные пути с выходом на уровень выше (../)
            group: ['../*'],
            message: 'Импорты между слоями через относительные точки (../) запрещены. Используйте абсолютный алиас @/.'
          }
        ]
      }],
    },
  }
);