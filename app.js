const express = require("express");
const cors = require("cors");

const app = express();

app.listen(8002, function (err) {
  if (err) {
    console.log("Error while starting server");
  } else {
    console.log("Server started");
  }
});

app.use(cors());

const callback = (data, timeOut) => {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve(data);
    }, timeOut)
  );
};

app.get("/task1", async (req, res) => {
  const func1 = await callback(
    { name: "Food", description: "About Food", price: "$100" },
    115
  );
  const func2 = await callback(
    { locations: ["Delhi", "Pune", "Chennai"] },
    1000 * 60 * 2
  );
  const func3 = await callback({ nutrition: "good Nutrition" }, 300);
  const func4 = await callback({ stock_out: ["pasta", "Noodles"] }, 100);
  const data = Object.assign({}, func1, func2, func3, func4);
  res.status(200).send(data);
});
