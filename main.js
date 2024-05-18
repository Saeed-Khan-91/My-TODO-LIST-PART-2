"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
let todoList = [];
let conditions = true;
// Print welcome message
console.log(chalk_1.default.bold.rgb(204, 204, 204)(`\n \t\t <<<==============================>>>`));
console.log(chalk_1.default.bold.rgb(204, 204, 204)(`<<<========>>> ${chalk_1.default.bold.hex('#9999FF')('welcome To \'Code with Saeed\' - Todo-List App ')} <<<<<<<<<<<<<<<<`));
console.log(chalk_1.default.bold.rgb(204, 204, 204)(`\t\t <<<====================================>>>\n`));
let main = () => __awaiter(void 0, void 0, void 0, function* () {
    while (conditions) {
        let option = yield inquirer_1.default.prompt([
            {
                name: "choice",
                type: "list",
                message: "Select an option you want to do",
                choice: ["Add Task", "DeleTaskte", "Update Task", "view Todo-List", "Exit"],
            }
        ]);
        if (option.choice === "Add Task") {
            yield addTask();
        }
        else if (option.choice === "DeleTaskte") {
            yield deleteTast();
        }
        else if (option.choice === "Update Task") {
            yield updateTask();
        }
        else if (option.choice === "view Todo-List") {
            yield viewTask();
        }
        else if (option.choice === "Exit") {
            conditions = false;
        }
    }
});
// function to add new task to the list
let addTask = () => __awaiter(void 0, void 0, void 0, function* () {
    let newTask = yield inquirer_1.default.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new task",
        }
    ]);
    todoList.push(newTask.task);
    console.log(`\n ${newTask} task added successfully in Todo-List`);
});
// function to view all Todo.List Tasks
let viewTask = () => {
    console.log("\n your Todo-List: \n");
    todoList.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    });
    console.log("\n");
};
// function to delete a task from list
let deleteTast = () => __awaiter(void 0, void 0, void 0, function* () {
    yield viewTask();
    let taskindex = yield inquirer_1.default.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the index of the task you want to delete :",
        }
    ]);
    let deleteTast = todoList.splice(taskindex.index - 1, 1);
    console.log(`\n ${deleteTast} this task has been deleted successfully from your Todo-List`);
});
// function to update a task
let updateTask = () => __awaiter(void 0, void 0, void 0, function* () {
    yield viewTask();
    let update_task_index = yield inquirer_1.default.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the index of the task you want to update :"
        },
        {
            name: "new_task",
            type: "input",
            message: "Now Enter new task name :",
        }
    ]);
    todoList[update_task_index.index - 1] = update_task_index.new_task;
    console.log(`\n Task at index no. ${update_task_index.index - 1} updated successfully [for updated list check option: "view Todo-List"] `);
});
main();
