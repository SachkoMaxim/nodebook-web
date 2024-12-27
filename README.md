# Nodebook

## 📝 Опис проєкту

Цей проєкт — це книжковий форум, який дозволяє користувачам переглянути книги з їх описом та відгуками від інших користувачів, і можливість вподобати улюблені книги.

### 👨‍💻 Основні функції:

- **✍️ Реєстрація та авторизація**:

  - Реєстрація через логін і пароль (credentials).
  - Реєстрація через Google.

- **📋🔍 Фільтрування та пошук книг**:

  - Користувачі можуть фільтрувати книги за жанрами.
  - Книги можна буде знайти за автором чи назвою у пошуковій системі.

- **👍❤️ Вподобання**:
  - Можливість поставити вподобання на улюблені книги.
  - Кожну вподобану книгу користувач може переглянути у своєму профілі.
- **💬 Коментарі щодо книг**:
  - Користувачі можуть залишити відгук (коментар) щодо книги.
  - Користувачі зможуть переглянути опис книги та коментарі інших користувачів щодо неї.

## 💻 Технології

- **⌨️ Backend**:
  - Next.js
  - MongoDB (база даних)
- **🖥 Frontend**:

  - Next.js
  - Tailwind CSS (для стилізації)
  - TypeScript
  - Jest
  - Playwright

- **🤖 Інтеграції**:

  - OAuth 2.0 для аутентифікації через Google.

  ## Аніліз сторінок (не авторизований користувач)

  - **Сторінка контактів**

    - [_Посилання на PageSpeed_](https://pagespeed.web.dev/analysis/https-nodebook-web-vercel-app-contacts/tr0yqom7t3?hl=uk&form_factor=desktop)
    - [_Посилання на WebPageTest_](https://www.webpagetest.org/result/241227_AiDcSV_5H7/)

  - **Сторінка авторизації**

    - [_Посилання на PageSpeed_](https://pagespeed.web.dev/analysis/https-nodebook-web-vercel-app-auth/2i6205z3e5?hl=uk&form_factor=desktop)
    - [_Посилання на WebPageTest_](https://www.webpagetest.org/result/241227_BiDcMZ_5J6/)

  - **Сторінка профілю**
    - [_Посилання на PageSpeed_](https://pagespeed.web.dev/analysis/https-nodebook-web-vercel-app-profile/5gv34atgpq?hl=uk&form_factor=desktop)
    - [_Посилання на WebPageTest_](https://www.webpagetest.org/result/241227_AiDc8C_5JC/)

  Проаналізувавши ці сторінки, виявили недоліки у кількох аспектах:

  - використання `<html lang="ua">`, який не має дійсного значення в нашому випадку
  - недостатність контрастність кольорів в інтерфейсі
  - відсутність файлу **robots.txt** для пошукових систем

  ## Аніліз сторінок (авторизований користувач)

  ![Profile page analyze with auth](/screenshots/profile-page-analyze-with-auth.jpg)

  Коли ж ми аналізуємо ці сторінки, то зменшується показник оптимальних підходів, тому що починають використовуватися cookie, який приймаються сервера.

  ![Warning cookie message](/screenshots/cookie-message.jpg)
