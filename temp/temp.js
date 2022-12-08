'use strict';

try {
  console.log('All OK');
  console.log(a);
} catch (error) {
  console.log(`Some troubles! ${error}`);         // Сообщение об ошибке
  console.log(`Error name: ${error.name}`);       // Название ошибки
  console.log(`Error message: ${error.message}`); // Сообщение ошибки
  console.log(`Error stack: ${error.stack}`);     // Что привело к ошибке
} finally {
  console.log('Anyway OK');
}
console.log('Still OK');

// All OK
// Some troubles! ReferenceError: a is not defined
// Error name: ReferenceError
// Error message: a is not defined
// Error stack: ReferenceError: a is not defined
// Anyway OK
// Still OK