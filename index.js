#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const quiz = [
    {
        question: "What is TypeScript?",
        options: [
            "a) A JavaScript framework",
            "b) A JavaScript superset",
            "c) A CSS preprocessor",
            "d) A database query language"
        ],
        answer: "b) A JavaScript superset"
    },
    {
        question: "Which of the following is a TypeScript feature?",
        options: [
            "a) Static typing",
            "b) Dynamic typing",
            "c) CSS preprocessor support",
            "d) No variable declaration"
        ],
        answer: "a) Static typing"
    },
    {
        question: "How do you define an interface in TypeScript?",
        options: [
            "a) class",
            "b) interface",
            "c) type",
            "d) enum"
        ],
        answer: "b) interface"
    },
    {
        question: "Which of the following is not a valid TypeScript type?",
        options: [
            "a) string",
            "b) boolean",
            "c) number",
            "d) decimal"
        ],
        answer: "d) decimal"
    },
    {
        question: "How do you specify a type for a function parameter in TypeScript?",
        options: [
            "a) function myFunction(param: type) {}",
            "b) function myFunction(param) : type {}",
            "c) function myFunction(param, type) {}",
            "d) function myFunction(type: param) {}"
        ],
        answer: "a) function myFunction(param: type) {}"
    },
    {
        question: "What is the correct way to create a TypeScript variable that holds a string?",
        options: [
            'a) let name: string = "John";',
            'b) let name = string "John";',
            'c) let string name = "John";',
            'd) let name = "John": string;'
        ],
        answer: 'a) let name: string = "John";'
    },
    {
        question: "Which command is used to compile TypeScript code into JavaScript?",
        options: [
            "a) tsc",
            "b) npm build",
            "c) ts build",
            "d) ts compile"
        ],
        answer: "a) tsc"
    },
    {
        question: "How do you declare an array of numbers in TypeScript?",
        options: [
            "a) let arr: number[];",
            "b) let arr: Array[number];",
            "c) let arr: numbers[];",
            "d) let arr: [number];"
        ],
        answer: "a) let arr: number[];"
    },
    {
        question: "What is the purpose of TypeScript decorators?",
        options: [
            "a) To enhance classes and methods with metadata",
            "b) To add CSS styles to TypeScript files",
            "c) To manage HTTP requests",
            "d) To handle database connections"
        ],
        answer: "a) To enhance classes and methods with metadata"
    },
    {
        question: "Which of the following is a TypeScript access modifier?",
        options: [
            "a) open",
            "b) public",
            "c) closed",
            "d) exposed"
        ],
        answer: "b) public"
    },
    {
        question: "Which of the following is the correct syntax for a function with optional parameters in TypeScript?",
        options: [
            "a) function myFunction(param1?: string, param2: number) {}",
            "b) function myFunction(param1: string?, param2: number) {}",
            "c) function myFunction(param1: string, param2?: number) {}",
            "d) function myFunction(param1?: string?, param2?: number?) {}"
        ],
        answer: "a) function myFunction(param1?: string, param2: number) {}"
    },
    {
        question: "How do you define a function type in TypeScript?",
        options: [
            "a) let myFunction: (param1: string, param2: number) => boolean;",
            "b) let myFunction: function(param1: string, param2: number): boolean;",
            "c) let myFunction = (param1: string, param2: number) -> boolean;",
            "d) let myFunction = (param1: string, param2: number): boolean;"
        ],
        answer: "a) let myFunction: (param1: string, param2: number) => boolean;"
    },
    {
        question: "What is the correct way to specify a default parameter value in a TypeScript function?",
        options: [
            'a) function myFunction(param1: string = "default") {}',
            'b) function myFunction(param1 = "default": string) {}',
            'c) function myFunction(param1: string default = "default") {}',
            'd) function myFunction(param1 = "default" string) {}'
        ],
        answer: 'a) function myFunction(param1: string = "default") {}'
    },
    {
        question: "Which of the following is a valid TypeScript function that returns a promise?",
        options: [
            'a) function myFunction(): Promise<number> { return new Promise((resolve, reject) => resolve(1)); }',
            'b) function myFunction(): Promise<number> { return Promise((resolve, reject) => resolve(1)); }',
            'c) function myFunction(): number { return Promise((resolve, reject) => resolve(1)); }',
            'd) function myFunction(): number { return new Promise((resolve, reject) => resolve(1)); }'
        ],
        answer: 'a) function myFunction(): Promise<number> { return new Promise((resolve, reject) => resolve(1)); }'
    },
    {
        question: "How can you define a function that accepts a rest parameter in TypeScript?",
        options: [
            "a) function myFunction(...params: number[]) {}",
            "b) function myFunction(...params: number) {}",
            "c) function myFunction(...params: number[]) => {}",
            "d) function myFunction(params: number...) {}"
        ],
        answer: "a) function myFunction(...params: number[]) {}"
    },
    {
        question: "Which of the following is the correct way to define an arrow function in TypeScript?",
        options: [
            "a) let myFunction = (param1: string, param2: number) => { return param1 + param2; }",
            "b) let myFunction = (param1: string, param2: number) => { param1 + param2 }",
            "c) let myFunction = (param1: string, param2: number) => return param1 + param2;",
            "d) let myFunction = (param1: string, param2: number) { return param1 + param2; }"
        ],
        answer: "a) let myFunction = (param1: string, param2: number) => { return param1 + param2; }"
    },
    {
        question: "How do you define a function that has no return value in TypeScript?",
        options: [
            "a) function myFunction(): void {}",
            "b) function myFunction(): undefined {}",
            "c) function myFunction() {}",
            "d) function myFunction(): null {}"
        ],
        answer: "a) function myFunction(): void {}"
    },
    {
        question: "Which of the following is the correct syntax to create a function that has a union type as a parameter?",
        options: [
            "a) function myFunction(param: string | number) {}",
            "b) function myFunction(param: (string, number)) {}",
            "c) function myFunction(param: string or number) {}",
            "d) function myFunction(param: [string, number]) {}"
        ],
        answer: "a) function myFunction(param: string | number) {}"
    },
    {
        question: "How do you overload a function in TypeScript?",
        options: [
            "a) function myFunction(param: string): string; function myFunction(param: number): number; function myFunction(param: any): any { return param; }",
            "b) function myFunction(param: string | number): any { return param; }",
            "c) function myFunction(param: any): any { return param; }",
            "d) function myFunction(param: string, param: number): any { return param; }"
        ],
        answer: "a) function myFunction(param: string): string; function myFunction(param: number): number; function myFunction(param: any): any { return param; }"
    },
    {
        question: "What is the correct syntax for defining a generic function in TypeScript?",
        options: [
            "a) function myFunction<T>(param: T): T { return param; }",
            "b) function myFunction<T>(param: T): <T> { return param; }",
            "c) function myFunction(param: T): T { return param; }",
            "d) function myFunction(param: T): <T> { return param; }"
        ],
        answer: "a) function myFunction<T>(param: T): T { return param; }"
    },
    {
        question: "Practice-01: What is the output of the following code?\n\n" +
            "let arr:number[] = [1,5,6,7];\n" +
            "function arrayOperations(arr:number[]) {\n" +
            "    arr.push(2);\n" +
            "    arr.shift();\n" +
            "    console.log(`Modified array: ${arr}`);\n" +
            "}\n" +
            "arrayOperations(arr);\n",
        options: [
            "a) Modified array: [1,5,6,7]",
            "b) Modified array: [5,6,7,2]",
            "c) Modified array: [1,2,5,6,7]",
            "d) Modified array: [2,5,6,7]"
        ],
        answer: "b) Modified array: [5,6,7,2]"
    },
    {
        question: "Practice-02: What is the output of the following code?\n\n" +
            "let arr2:number[] = [1,5,6,7];\n" +
            "function arrayOperations2(arr2:number[]) {\n" +
            "    arr2.push(8);\n" +
            "    arr2.shift();\n" +
            "    console.log(`Modified array: ${arr2}`);\n" +
            "}\n" +
            "arrayOperations2(arr2);\n",
        options: [
            "a) Modified array: [1,5,6,7]",
            "b) Modified array: [5,6,7,8]",
            "c) Modified array: [1,2,5,6,7]",
            "d) Modified array: [2,5,6,7]"
        ],
        answer: "b) Modified array: [5,6,7,8]"
    },
    {
        question: "Practice-03: What is the output of the following code?\n\n" +
            "function reverseStrings(str:string) {\n" +
            "    return str.split('').reverse().join('');\n" +
            "}\n\n" +
            "console.log(reverseStrings('   hello'));\n",
        options: [
            "a) hello",
            "b) olleh",
            "c)   olleh",
            "d)   hello"
        ],
        answer: "b) olleh"
    },
    {
        question: "Practice-05: What is the output of the following code?\n\n" +
            "let new_array2:(string|number|boolean)[];\n" +
            "new_array2 = [2024, true, 'tsc'];\n" +
            "console.log(new_array2);\n",
        options: [
            "a) [2024, true, 'tsc']",
            "b) ['tsc', true, 2024]",
            "c) [true, 2024, 'tsc']",
            "d) ['tsc', 2024, true]"
        ],
        answer: "a) [2024, true, 'tsc']"
    },
    {
        question: "Practice-06: What is the output of the following code?\n\n" +
            "let new_array3:(string|number|boolean)[];\n" +
            "new_array3 = ['tsc', true, 1234];\n" +
            "console.log(new_array3);\n",
        options: [
            "a) [2024, true, 'tsc']",
            "b) ['tsc', true, 1234]",
            "c) [true, 1234, 'tsc']",
            "d) ['tsc', 2024, true]"
        ],
        answer: "b) ['tsc', true, 1234]"
    },
    {
        question: "Practice-07: What is the output of the following code?\n\n" +
            "let new_array4:(string|number|boolean)[];\n" +
            "new_array4 = ['tsc', true, 1234];\n" +
            "console.log(new_array4[2]);\n",
        options: [
            "a) tsc",
            "b) true",
            "c) 1234",
            "d) undefined"
        ],
        answer: "c) 1234"
    },
    {
        question: "Practice-08: What happens if you run the following code?\n\n" +
            "let new_array5:(string|boolean)[];\n" +
            "new_array5 = ['tsc', true, 1234];\n" +
            "console.log(new_array5);\n",
        options: [
            "a) ['tsc', true, 1234]",
            "b) ['tsc', true]",
            "c) Error: Type 'number' is not assignable to type 'string | boolean'",
            "d) undefined"
        ],
        answer: "c) Error: Type 'number' is not assignable to type 'string | boolean'"
    },
    {
        question: "Practice-09: What is the output of the following code?\n\n" +
            "let array1:number[] = [5,6,7];\n" +
            "console.log(array1[1]);\n",
        options: [
            "a) 5",
            "b) 6",
            "c) 7",
            "d) undefined"
        ],
        answer: "b) 6"
    },
    {
        question: "Practice-10: Which is the correct TypeScript syntax for declaring a boolean variable?\n\n",
        options: [
            "a) let isDone:boolean = false;",
            "b) let isTrue:boolean = true;",
            "c) const c = 1;",
            "d) let d = false;"
        ],
        answer: "d) let d = false;"
    },
    {
        question: "Practice-11: What result will be displayed after the code is executed?\n\n" +
            "let myArray:string[] = ['apple','banana','orange','grapes','peach','watermelon','pineapple'];\n" +
            "myArray.splice(0,4,'ball');\n" +
            "console.log(myArray);\n",
        options: [
            "a) ['ball','banana','orange','grapes','peach','watermelon','pineapple']",
            "b) ['apple','banana','orange','grapes','ball','peach','watermelon','pineapple']",
            "c) ['ball','peach','watermelon','pineapple']",
            "d) ['ball','peach','watermelon','pineapple']"
        ],
        answer: "c) ['ball','peach','watermelon','pineapple']"
    },
    {
        question: "Practice-12: What is the output of the following code?\n\n" +
            "const arr =[1,2,3,4,5,6,7,8,9,10];\n" +
            "const result = arr.filter(num => num % 2 === 0);\n" +
            "console.log(result);\n",
        options: [
            "a) [1,2,3,4,5,6,7,8,9,10]",
            "b) [2,4,6,8,10]",
            "c) [1,3,5,7,9]",
            "d) [2,4,6,8,9]"
        ],
        answer: "b) [2,4,6,8,10]"
    },
    {
        question: "Practice-13: Which method is used to concatenate two or more arrays in TypeScript?\n\n",
        options: [
            "a) merge",
            "b) join",
            "c) concat",
            "d) append"
        ],
        answer: "c) concat"
    }
];
const runQuiz = async () => {
    let score = 0;
    for (const item of quiz) {
        const answer = await inquirer.prompt({
            name: 'userAnswer',
            type: 'list',
            message: item.question,
            choices: item.options,
        });
        if (answer.userAnswer === item.answer) {
            console.log(chalk.greenBright('Correct!\n'));
            score++;
        }
        else {
            console.log(chalk.yellowBright(`Wrong! The correct answer is: ${item.answer}\n`));
        }
    }
    console.log(chalk.italic.blueBright(`Quiz finished! Your score is ${score} out of ${quiz.length}`));
};
runQuiz();
