// 1)Зробити рефакторинг коду, реалізувати структуру  проєкту через JS.
// 2)Для реалізації випадаючого спику використовувати масив technologies.
// 3)Створити кнопку, при кліці вона додає на строрінку текст з input, а кнопка видаляється.
// 4)Якщо input пустий, то кнопка має бути не активна(атрибут disabled)
const technologies = [
  "javascript",
  "typescript",
  "vue",
  "C#",
  "C++",
  "Python",
  "Rust",
  "React",
  "Ruby",
  "PHP",
  "Word",
  "Power Point",
  "Pascal",
  "Java",
  "Swift",
  "VBScript",
  "Perl",
  "Visual Basic",
  "Golang",
  "GO",
  "Assembler",
];

const inputForm = document.querySelector(".input-wrapper");
// створення input
const inputSearch = document.createElement("input");
inputSearch.id = "technologies";
inputSearch.setAttribute("list", "teach");

// створення datalist
const dataList = document.createElement("dataList");
dataList.setAttribute("id", "teach");
// додаємо створені елементи у форму
inputForm.append(inputSearch, dataList);
console.log(inputForm);
// реалізації випадаючого спику використовувати масив technologies
for (i = 0; i < technologies.length; i++) {
  const optionTech = document.createElement("option");
  optionTech.value = technologies[i];
  dataList.append(optionTech);
  console.log(optionTech);
}
