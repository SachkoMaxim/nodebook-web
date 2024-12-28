# Nodebook

## 📝 Опис проєкту

Цей проєкт — це книжковий форум, який дозволяє користувачам переглянути книги з їх описом та відгуками від інших користувачів, і можливість вподобати улюблені книги.

### 👨‍💻 Основні функції:

- **✍️ Реєстрація та авторизація**:

  - Реєстрація через логін і пароль (credentials).

- **📋🔍 Фільтрування та пошук книг**:

  - Користувачі можуть фільтрувати книги за жанрами.
  - Книги можна буде знайти за автором чи назвою у пошуковій системі.

- **👍❤️ Вподобання**:

  - Можливість поставити вподобання на улюблені книги.
  - Кожну вподобану книгу користувач може переглянути у своєму профілі.

- **💬 Коментарі щодо книг**:

  - Користувачі можуть залишити відгук (або коментар) щодо книги.
  - Користувачі зможуть переглянути опис книги та коментарі інших користувачів щодо неї.

## 💻 Технології

- **⌨️ Backend**:

  - Nest.js
  - MongoDB (база даних)
  - Jest (для тестування)

- **🖥 Frontend**:

  - Next.js
  - Tailwind CSS (для стилізації)
  - TypeScript
  - Jest (для unit та integration тестування)
  - Cypress (для e2e тестування)

- **🤖 Інтеграції**:

  - Nodemailer для надсилання повідомлень на пошту (а саме gmail).

# Виконання лабораторних робіт

## Лабораторна робота №1

Робили проєкт у команді:

- **Бонадренко Олександр**, ІМ-22: Back-end
- **Титянюк Артем**, ІМ-22: Front-end
- **Сачко Максим**, ІМ-22: Front-end

Вирішили робити у різних репозиторіях Front-end та Back-end

Посилання на [Back-end](https://github.com/DreammyOleksandr/nodebook-server)

## Лабораторна робота №2

- [Prettier](https://github.com/tytianiuk/nodebook-web/blob/main/.prettierrc)
- [ESlint](https://github.com/tytianiuk/nodebook-web/blob/main/.eslintrc.json)
- Husky як git-hooks
  - [commit-msg](https://github.com/tytianiuk/nodebook-web/blob/main/.husky/commit-msg)
  - [pre-commit](https://github.com/tytianiuk/nodebook-web/blob/main/.husky/pre-commit)
  - [pre-push](https://github.com/tytianiuk/nodebook-web/blob/main/.husky/pre-push)

## Лабораторна робота №3

### 📈 Діаграма компонентів ([Сачко Максим](https://github.com/tytianiuk/nodebook-web/commit/4ca7181c14a29af55fb7e4ef83095af2328b599b))

![Components diagram](/public/graph.jpeg)

### 📈 Use Case діаграма ([Титянюк Артем](https://github.com/tytianiuk/nodebook-web/commit/e3a61c950b6285439f22dd9126bfe850f129a716))

![Use Case Diagram](/public/use-case-diagram.jpeg)

## Лабораторна робота №4

Із самого початку розробки вирішили відразу підключити базу данних, бо вважали це зручнішим.

Проте трохи використали статичні дані, у цьому [Pull Request](https://github.com/tytianiuk/nodebook-web/pull/3) продемонстровано:

- [статичні файли](https://github.com/tytianiuk/nodebook-web/tree/main/src/mock)
- [мокнутий користувач на сторінці логіну](https://github.com/tytianiuk/nodebook-web/pull/4/commits/7af59b77b725434d8fe12427f8346ee1b413ef32#diff-7f748f9375382cca428afc3c03fe10d817dc21efc20e8f6db79c216efb148990)

## Лабораторна робота №5

Для кожної сторінки підключили API та використовували БД:

- **Сачко Максим**

  - сторінка каталогу та книги [commit](https://github.com/tytianiuk/nodebook-web/pull/9/commits/0be62953df3216ac55392c6b336af65758ce473c)
  - сторінка книги [commit](https://github.com/tytianiuk/nodebook-web/pull/9/commits/7ee82f743420f39ff71d6c998f5c7b7248328e1b#diff-ebd9b411d516aaef655b2ba1bb28a41c9169aec201f1946246e17c09b1d4fcfc)

- **Титянюк Артем**

  - сторінка авторизації [commit](https://github.com/tytianiuk/nodebook-web/pull/5/commits/db00dbde8616b89dd3e71202ca62b84f4fab9665)
  - сторінка профілю [commit](https://github.com/tytianiuk/nodebook-web/pull/8/commits/f403bd94fe9ab06867259bf19e0777c14fe7bfea)
  - сторінка контактів [commit](https://github.com/tytianiuk/nodebook-web/pull/6/commits/6bf2aadd801fe86be63e0421cdb030a97b0ee003)

## Лабораторна робота №6

Тести писали для кожної сторінки.

- **Сачко Максим**

  - сторінка каталогу та книги
  - сторінка книги

- **Титянюк Артем**

  - сторінка авторизації
  - сторінка профілю
  - сторінка контактів

- **[unit](https://github.com/tytianiuk/nodebook-web/tree/main/tests/unit)**
- **[integration](https://github.com/tytianiuk/nodebook-web/tree/main/tests/integration)**
- **[e2e](https://github.com/tytianiuk/nodebook-web/tree/main/tests/e2e)**

## Лабораторна робота №7

- **Титянюк Артем**

  - [ci.yml](https://github.com/tytianiuk/nodebook-web/pull/7/commits/7544e14657ede189cf81edf7e54afc71460ce3cd)
  - [e2e.yml](https://github.com/tytianiuk/nodebook-web/pull/14/commits/e6f81ef45255386cf986ebafb3f2f672e19be91d)

- **Сачко Максим**
  - [cd](https://nodebook-web.vercel.app/)

## Лабораторна робота №8

### Аніліз сторінок (не авторизований користувач)

- **Сторінка контактів**

  - [_Посилання на PageSpeed_](https://pagespeed.web.dev/analysis/https-nodebook-web-vercel-app-contacts/tr0yqom7t3?hl=uk&form_factor=desktop)
  - [_Посилання на WebPageTest_](https://www.webpagetest.org/result/241227_AiDcSV_5H7/)

- **Сторінка авторизації**

  - [_Посилання на PageSpeed_](https://pagespeed.web.dev/analysis/https-nodebook-web-vercel-app-auth/2i6205z3e5?hl=uk&form_factor=desktop)
  - [_Посилання на WebPageTest_](https://www.webpagetest.org/result/241227_BiDcMZ_5J6/)

- **Сторінка профілю**

  - [_Посилання на PageSpeed_](https://pagespeed.web.dev/analysis/https-nodebook-web-vercel-app-profile/5gv34atgpq?hl=uk&form_factor=desktop)
  - [_Посилання на WebPageTest_](https://www.webpagetest.org/result/241227_AiDc8C_5JC/)

- **Сторінка каталогу (головна сторінка)**

  - [_Посилання на PageSpeed_](https://pagespeed.web.dev/analysis/https-nodebook-web-vercel-app/z4xtdlymiw?form_factor=desktop)
  - [_Посилання на WebPageTest_](https://www.webpagetest.org/result/241227_BiDcTD_7P0/)

- **Сторінка книги**

  - [_Посилання на PageSpeed_](https://pagespeed.web.dev/analysis/https-nodebook-web-vercel-app-676c16bfbacc3dd34717d3c8/5lgein33l1?form_factor=desktop)
  - [_Посилання на WebPageTest_](https://www.webpagetest.org/result/241227_AiDcAP_7DT/)

Проаналізувавши ці сторінки, виявили недоліки у кількох аспектах:

- відображення великого контенту йде з затримкою
- деякі кнопки не мають доступних для зчитування назв
- використання `<html lang="ua">`, який не має дійсного значення в нашому випадку
- недостатність контрастність кольорів в інтерфейсі
- відсутність файлу **robots.txt** для пошукових систем

### Аніліз сторінок (авторизований користувач)

![Profile page analyze with auth](/public/screenshots/profile-page-analyze-with-auth.jpg)

Коли ж ми аналізуємо ці сторінки з авторизованим користувачем, то зменшується показник оптимальних підходів, тому що починають використовуватися cookie, який приймаються сервера.

![Warning cookie message](/public/screenshots/cookie-message.jpg)

### Вирішення проблем

Зробили разом певну роботу, щоб позбутися проблем з ефективністю, оптимізацією пошукових систем та доступністю:

- [pull request](https://github.com/tytianiuk/nodebook-web/pull/15/commits)

## Лабораторна робота №9

Ми вирішили, що модуль з api був найбільш проблематичним та потребував рефакторингу.

Тож абстрагували його і зробили рефакторинг: [commit](https://github.com/tytianiuk/nodebook-web/pull/13/commits/a07a3f0b1a3fb1387d9385f55077ff9bbf17bc14).

Проєкт увесь написаний на TypeScript.
