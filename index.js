const express = require("express");
const { userRouter, productRouter, cartRouter } = require("./routers");
const fs = require("fs");
//fs adalah filesytem untuk penyimpanan
const PORT = 8000;
const app = express();
app.use(express.json());

app.use("/user", userRouter);
app.use("/product", productRouter);
app.use("/cart", cartRouter);

app.listen(PORT, () => {
  console.log("I'm running on port ", PORT);
});
