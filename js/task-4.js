/**
 *? Напишіть через свіч пошук автора мови програмування.
 *? Пишемо назву мови у шаблонному рядку отримує відповідь
 *? мова та автор
 *? PHP Расмус Лердорф
 *? C# група інженерів компанії Microsoft під керівництвом Андерса Хейлсберга та Скотта Вільтаумота
 *? Swift Кріс Латтнер
 *? JS Брендан Ейх
 *? Java Джеймс Гослінг
 *? Python Гвідо ван Россум
 */

const nameLang = prompt("Введіть назву мови програмування").trim();
switch (nameLang) {
  case "PHP":
    console.log("PHP Расмус Лердорф");
    break;
  case "C#":
    console.log(
      "C# група інженерів компанії Microsoft під керівництвом Андерса Хейлсберга та Скотта Вільтаумота"
    );
    break;
  case " Swift":
    console.log("Swift Кріс Латтнер");
    break;
  case "JS":
    console.log("JS Брендан Ейх");
    break;
  case "Java":
    console.log("Java Джеймс Гослінг");
    break;
  case "Python":
    console.log("Python Гвідо ван Россум");
    break;
    default:
        console.log( "Такого немає");
}

