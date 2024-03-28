👉synchronous-the code runs in a particular sequences of instruction given in the program.Each instruction waits fot the previous instruction to complete the execution
👉Asynchronous;Due to synchronous programming , sometimes impinstruction get blocked due to some previous instructions, which causes a delay in the ul o async code execution allows to execute nextinstruction immediately and doesnot block the flow
👉Callback:any function that is passed in a another function as an argument is called callback function
settumeout also is an example of callback
👉callback Hell🔥:Nested callback stacjed below one another forming a pyramid stucture,
noteL donot use paranthesis in callback function use instead arrow function
👉Promises: to solve the callback hell🔥 problem <unfullfilled resolve reject>
is a object in js
new promises((resolve, reject)=>{}) this reolve and reject are callback fun in js
Promises State🫴🏻
Pending
Fullfilled[resolved]
Rejected

promise.then((res)=>{...}) if fullfilled and we want to work anything after fullfill
promise.catch((err)=>{...}) if fullfilled and we want to work anything after fullfill
👉🏻Promises Chaining
