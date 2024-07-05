#!/usr/bin/env node
import inquirer from "inquirer";
let option = await inquirer.prompt([
  {
    name: "select",
    type: "list",
    message: " select option what you want to do?",
    choices: [
      "start quiz",
      "exit",
    ],
  },
]);
if (option.select === "start quiz") {
  let start = await inquirer.prompt([
    {
      name: "Q1",
      type: "list",
      message: "what is syntax error?",
      choices: [
        "let num:num= wahhaj",
        "const name:string = 234",
        "lett names:string = wahaj",
        "lets name = wahaj",
      ],
    },
    {
      name: "Q2",
      type: "list",
      message: "what is type error in typescript?",
      choices: [
        "let num:num=126",
        "const name:boolean = wahaj ali",
        "let check:string = wahaj",
        "let num = true",
      ],
    },
    {
      name: "Q3",
      type: "list",
      message: "how to assign wahaj to ali ?",
      choices: ["ali = wahaj", "wahaj - ali", "wahaj = ali", "wahaj = true"],
    },
    {
      name: "Q4",
      type: "list",
      message: "what is the primitive data types in TypeScript?",
      choices: [
        "number,string,object",
        "string,boolean,number",
        "any,object,array",
        "bigInt,string,boolean",
      ],
    },
    {
      name: "Q5",
      type: "list",
      message: "what is assinabiltiy error in typescript?",
      choices: [
        "let num:num=295",
        "let myName:string = true",
        "let iMarried:boolean = false ",
        "let myId:number|string=wahaj",
      ],
    },
  ]);
  if (start.Q1 === "lett names:string = wahaj") {
    console.log("******** see  your Result *********");
    console.log(  "correct answer!");
  } else {
    console.log("incorrect answer");
  }
  if (start.Q2 === "const name:boolean = wahaj ali") {
    console.log( "correct answer!");
  } else {
    console.log("incorrect answer");
  }
  if (start.Q3 === "wahaj = ali") {
    console.log("correct answer!");
  } else {
    console.log("incorrect answer");
  }
  if (start.Q4 === "string,boolean,number") {
    console.log("correct answer!");
  } else {
    console.log("incorrect answer");
  }
  if (start.Q5 === "let myName:string = true") {
    console.log("correct answer!");
    console.log("********************************");
  } else {
    console.log("incorrect answer");
  }
}
if(option.select === "exit"){
  console.log("thank you for using our app GOOD BYE:)!");

}

    // else {
    //   console.log("thank you for using our app GOOD BYE:)!");
    // }


