const userName: string = "Юрій";
const age: number = 19;
const isStudent: boolean = true;
let dynamicData: any = "Текст";
dynamicData = 42;

console.log(`Ім'я: ${userName}, Вік: ${age}, Студент: ${isStudent}, Any: ${dynamicData}`);

const skills: string[] = ["TypeScript", "JavaScript", "HTML", "CSS"];
const scores: Array<number> = [95, 88, 76, 100];

console.log("Навички:", skills);
console.log("Оцінки:", scores);