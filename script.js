console.log("Hello SmartEx Company!");

// !------------------------- Задача 1 -------------------------
//  Исправьте код так, чтобы результатом выполнения функции logArrayInfo([1, 2, 3]) было:
//  1
//  2
//  3
//  Done!
function addDelay() {
  return new Promise(resolve => setTimeout(resolve, 300));
}
async function logWithDelay(text) {
  await addDelay();
  console.log(text);
}

async function logArrayInfo(array) {
  // !не работает как ожидается, потому что forEach не ждет завершения асинхронных операций внутри него.
  // array.forEach(async item => {
  //   await logWithDelay(item);
  // });

  for (let i = 0; i < array.length; i++) {
    await logWithDelay(array[i]);
  }

  //! или можно использовать for ... of
  // for (const item of array) {
  //   await logWithDelay(item);
  // }

  console.log("Done!");
}

logArrayInfo([1, 2, 3]);

// !------------------------- Задача 2 -------------------------
// Данный код создаст массив из котиков. Каждая функция в массиве должна вывести свой порядковый номер, но что то пошло не
// так и все кошки говорят, что их номер 10. Почему у всех кошек одинаковые номера? Исправьте код, чтобы он работал как
// задумано.

function createCats() {
  // Ошибка заключается в использовании переменной var для переменной i. Переменная var имеет функциональную область видимости, что означает, что все функции замыкаются на одной и той же переменной i, и после завершения цикла значение i становится 10. Для исправления этой проблемы необходимо использовать переменную let, которая имеет блочную область видимости.
  let cats = [];
  // var i = 0;
  // 4 while (i < 10) {
  // 5 let cat = function() {
  // 6 console.log(`My index is ${i}`);
  // 7 };
  // Использование IIFE создает новую область видимости для каждой итерации цикла while. Это позволяет каждой функции замыкаться на правильное значение i.
  let i = 0;
  while (i < 10) {
    (function (i) {
      let cat = function () {
        console.log(`My index is ${i}`);
      };
      cats.push(cat);
    })(i);
    i++;
  }
  return cats;

  //! или можно еще использовать for
  // for (let i = 0; i < 10; i++) {
  //   let cat = function () {
  //     console.log(`My index is ${i}`);
  //   };
  //   cats.push(cat);
  // }

  // return cats;
}

let animals = createCats();
animals[0](); // My index is 0
animals[5](); // My index is 5

// ! ------------------------- Задача 3 -------------------------
// Необходимо найти сумму всех вершин, значение которых кратно 2
const tree = {
  value: 3,
  children: [
    {
      value: 1,
      children: [],
    },
    {
      value: 4,
      children: [],
    },
    {
      value: 3,
      children: [
        {
          value: 8,
          children: [
            {
              value: 2,
              children: [],
            },
            {
              value: 5,
              children: [],
            },
          ],
        },
        {
          value: 0,
          children: [],
        },
      ],
    },
  ],
};
function sumOfEvenVertices(node) {
  if (!node) return 0;

  let sum = 0;
  if (node.value % 2 === 0) {
    sum += node.value;
  }

  for (let child of node.children) {
    sum += sumOfEvenVertices(child);
  }

  return sum;
}

let sum = sumOfEvenVertices(tree);
console.log(sum);

//
