#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"

let todoList: string [] = [];
let conditions = true;

// Print welcome message
console.log(chalk.bold.rgb(204, 204, 204)(`\n \t\t <<<==============================>>>`));
console.log(chalk.bold.rgb(204, 204, 204)(`<<<========>>> ${chalk.bold.hex('#9999FF')('welcome To \'Code with Saeed\' - Todo-List App ')} <<<<<<<<<<<<<<<<`));
console.log(chalk.bold.rgb(204, 204, 204)(`\t\t <<<====================================>>>\n`));

let main = async () => {
    while(conditions){
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Select an option you want to do",
                choice: ["Add Task", "DeleTaskte", "Update Task", "view Todo-List", "Exit"],
            }
        ]);
        if(option.choice === "Add Task"){
            await addTask()
        }
        else if (option.choice === "DeleTaskte"){
             await deleteTast()
        }
        else if(option.choice === "Update Task"){
            await updateTask()
        }
        else if(option.choice === "view Todo-List"){
            await viewTask()
        }
        else if (option.choice ==="Exit"){
            conditions = false;
        }
    }
}

// function to add new task to the list
let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
                name: "task",
                type: "input",
                message: "Enter your new task",
        }
    ]);
    todoList.push(newTask.task);
    console.log(`\n ${newTask} task added successfully in Todo-List`);
}

// function to view all Todo.List Tasks
let viewTask = () => {
    console.log("\n your Todo-List: \n");
    todoList.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`)
    });
    console.log("\n");
}

// function to delete a task from list
let deleteTast = async () => {
    await viewTask()
    let taskindex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the index of the task you want to delete :",
        }
    ]);
    let deleteTast = todoList.splice(taskindex.index - 1, 1);
    console.log(`\n ${deleteTast} this task has been deleted successfully from your Todo-List`)
}

// function to update a task
let updateTask = async () => {
    await viewTask()
    let update_task_index = await inquirer.prompt([
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
    todoList[update_task_index.index - 1] = update_task_index.new_task
    console.log(`\n Task at index no. ${update_task_index.index - 1} updated successfully [for updated list check option: "view Todo-List"] `)
}

main();