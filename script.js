console.log("hello SmartEx");

//  Задача 1
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

// CONSOLE
// ----------
// "Done!"
// 1;
// 2;
// 3;
// */
