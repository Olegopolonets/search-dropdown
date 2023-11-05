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

const wrapper = document.querySelector(".input-wrapper");
const textBox = document.querySelector(".text-box");

const input = document.createElement("input");
input.id = "technologies";
input.type = "text";
input.setAttribute("list", "teach");
console.log(input.value);

const dataList = document.createElement("datalist");
dataList.id = "teach";
console.log(dataList);

wrapper.append(input);
wrapper.append(dataList);

for (let i = 0; i < technologies.length; i += 1) {
  const optionTech = document.createElement("option");
  optionTech.value = `${technologies[i]}`;
  dataList.append(optionTech);
  console.log(optionTech);
}
// ми зверху
const button = document.createElement("button");
button.textContent = "Add";
button.disabled = true;
wrapper.append(button);

input.addEventListener("input", function () {
  if (input.value !== "") {
    button.disabled = false;
  } else {
    button.disabled = true;
  }
});

button.addEventListener("click", (event) => {
  const text = document.createElement("span");
  text.textContent = input.value;
  textBox.append(text);
  event.target.remove();
});

// wow

// <script>new WOW().init();</script>;
