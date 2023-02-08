#!/usr/bin/env node

import inquirer from "inquirer"
import chalkanimation from "chalk-animation"
import chalk from "chalk"
import { type } from "os";


const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 5000)
    }
    )
}

async function calculator() {
    let rainbowt = chalkanimation.rainbow('\t\t\t\t\tcalculator');
    await sleep()
    rainbowt.stop()
}
await calculator()

async function askquestion() {
await    inquirer
        .prompt([
            {
                type: "list",
                name: "operator",
                message: "\t\twhich opertion do you wanna perform?",
                choices: ["add", "sub", "multiply", "divide","power"]
            },
            {
                type: "number",
                name: "num1",
                message: "enter number1",
            },
            {
                type: "number",
                name: "num2",
                message: "enter number2"
            }

        ])


        .then((answer) => {
            // console.log(answer);
            if (answer.operator == "add") {
                console.log("required answer is ", answer.num1 + answer.num2)
            }
            else if(answer.operator == "sub"){
                console.log("required answer is ", answer.num1 - answer.num2)
            }
            else if(answer.operator == "multiply"){
                console.log("required answer is ", answer.num1 * answer.num2)
            }
            else if(answer.operator == "divide"){
                console.log("required answer is ", answer.num1 / answer.num2)
            }
            else if(answer.operator == "power"){
                console.log("required answer is ", answer.num1  ^ answer.num2)
            }

        })
    //calculator()
}
//askquestion()

async function start(){
do{
    await askquestion();               
    var again=await inquirer
    .prompt({
        type:"input",
        name:"restart",
        message:"press y for continue and n for leave:"
    })

}
while(again.restart=='y'|| again.restart=='Y' || again.restart=='yes'|| again.restart=='YES')

}
start()
