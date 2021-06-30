const express = require("express");
// const { format } = require("date-fns");
const app = express();

app.get("/", (request, response) => {
  const result = new Date();
  //   response.send(format(today_date, "dd-MM-yyyy"));
  response.send(
    `${result.getDate()}-${result.getMonth() + 1}-${result.getFullYear()}`
  );
});

app.listen(3002, () => {
  console.log("Server is running...");
});
module.exports = app;
