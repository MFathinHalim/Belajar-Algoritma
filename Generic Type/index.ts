const firstString = "Bla Bla";
const firstNum = 123456789;

//==================================

//Menggunakan any
function func(arg: any) {
  return arg;
}
const funcStr = func(firstString);
const funcNum = func(firstNum);

//Menggunakann Generic Types
function myFunc<T>(arg: T) {
  return arg;
}
const funcString = myFunc<string>(firstString);
const funcNumber = myFunc<number>(firstNum);
