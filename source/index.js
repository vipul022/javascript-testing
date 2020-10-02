function repeatMessage(message, repeatCount) {
  let messageToShow = "";
  for (let index = 0; index < repeatCount; index++) {
    messageToShow += message;
  }
  return messageToShow;
}
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  // res.send("Hello World!");
  res.json({
    message: "Hello World!",
  }); //sending json from server
});

app.post("/studentNames", (request, response) => {
  let incomingData = request.body.studentsNames;
  // console.log(incomingData);
  response.json({
    firstStudentName: incomingData[0],
  }); //sending response as json
});
//app is coded-up routes and server instance
//here server is the app that is running
const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = {
  repeatMessage,
  app,
  server,
};

//for setting up cicd on git hub create a folder .github and inside create a folder workflows and inside create a file node.yaml and add the code
