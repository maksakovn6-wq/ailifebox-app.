# AI LIFEBOX Web (PWA)

Клиентское приложение на React + TypeScript + Vite.  
Демо-версия без серверов и платных API. Работает в StackBlitz и устанавливается как PWA на Android.

## Как запустить в StackBlitz с Android

1. Откройте в браузере Chrome на телефоне: **https://stackblitz.com**
2. Нажмите **New Project** → выберите **Vite** → **React (TypeScript)**
3. Удалите все файлы в папке `src/` кроме `main.tsx` (или замените их содержимое)
4. Создайте папки и файлы точно как в структуре ниже
5. Скопируйте код каждого файла из этого проекта
6. Нажмите **Run** (или дождитесь автозапуска)
7. Откройте превью на телефоне

### Установка как приложение (PWA)
- В Chrome на Android откройте превью
- Меню (три точки) → **Добавить на главный экран** / **Install app**

## Структура файлов

```
├── package.json
├── vite.config.ts
├── tsconfig.json
├── index.html
├── public/manifest.json
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── index.css
    ├── i18n/
    │   ├── translations.ts
    │   └── LanguageContext.tsx
    └── pages/
        ├── Home.tsx
        ├── Chat.tsx
        ├── Translator.tsx
        ├── Camera.tsx
        ├── Documents.tsx
        └── Reminders.tsx
```

## Что умеет демо-версия

- Главная с 5 инструментами
- Переключение языка: EN / RU / KK (сохраняется)
- AI Chat — симулированные ответы
- Translator — демо-переводы
- Camera — загрузка фото + демо-анализ
- Documents — загрузка файла + демо-суммаризация
- Reminders — сохраняются в localStorage телефона
- Полная адаптация под смартфон
- Тёмная премиальная тема

## Следующий этап (после того как эта версия заработает)

Подключение реальных AI API (OpenAI / Gemini) через простые serverless-функции или внешние сервисы с учётом бюджета.
