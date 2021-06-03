// 🚨 Importing packages that have entry set as bundle's entry JS file
// works only when package has a bundle. Otherwise below fails. 👇
import { helloWorld } from "@cashew/a-js";
console.log("@cashew/a-js", helloWorld);

// 🚨 Importing packages that have entry set as TS file fails when bundling.
// Microbundle does not support transpiling dependency packages. 👇
import { helloWorldTS } from "@cashew/a-ts";
console.log("@cashew/a-ts", helloWorldTS);

export const helloWorldB = () => "hello world from package b!";
