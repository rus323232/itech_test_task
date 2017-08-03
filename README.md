# ITECH test task

Тестовое задание на должность верстальщика.

  - Верстка согласно предоставленного макета
  - Постраничный скроллинг 
  - Адаптивный дизайн
  - Взаимодействие с историей браузера

В процессе разработки были задействованы
  - Библиотека [jQuery](https://jquery.com/)
  - плагин, реализующий слайдер, [owlCarousel-2](https://owlcarousel2.github.io/OwlCarousel2/)
  - [Sass](http://sass-lang.com/)
  - [node.js](https://nodejs.org/), [gulp](https://gulpjs.com/), [browserify](http://browserify.org/), [babel](https://babeljs.io/) - для сборки проекта
# Установка
Для установки -- [Node.js]v4+ , [Gulp]v3.9.1

```sh
$ cd itech_test_task
$ npm install 
$ npm start 
```
# Компоненты

  - Модуль отвечающий за реализацию постраничной прокрутки страницы [SmoothScroll](https://github.com/rus323232/itech_test_task/blob/master/src/js/modules/SmoothScroll.js) 
  - События нажатия ссылок и кнопок, анимация, инициализация слайдера [PageTransform](https://github.com/rus323232/itech_test_task/blob/master/src/js/modules/PageTransform.js)

# Примечание

Адаптивность тестировал на IPhone 5s, Lenovo ideaPad, BQ Strike
