let dic = {
  debug: "The process of figuring out why your program has a certain error and how to fix it",
  done: "When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)",
  uiux: "UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels",
  defect: "The formal word for ‘error’",
  pm: "The short version  of Project Manager, the person in charge of the final result of a project",
}
let red;
alert("hello, this is Dictonary");
red = prompt("What Keywork do you want to find");
while  (true){
  let res = dic[red];
  if (res) {
    alert(res);
  }
  else {
    let ex = prompt(`We can not find this work ${red}, leave your explanation`);
    dic[red] = ex;
  }
  
}