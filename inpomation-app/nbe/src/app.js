const express = require("express");
// const sqlDb = require('./config/database.js');
// const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const session = require("express-session");
const cors = require("cors");
// const crypto = require("crypto");
// const MySQLStore = require("express-mysql-session")(session);
const cookieParser = require("cookie-parser");
const mainRouter = require("./api/routes/main/main");
const userRouter = require("./api/routes/users/users");
const publicSmokingRouter = require("./api/apiData/smokingAreaInGwangjinGu/smokingAreaInGwangjinGu");
const publicImportAndExportRouter = require("./api/apiData/importAndExportPerformence/cityAndProvince");
const cityAndProvinceByItemRouter = require("./api/apiData/importAndExportPerformence/cityAndProvinceByItem");
const productInfomationRouter = require("./api/routes/productInfomation/productInfomation");
const cityAndProvinceByNatureRouter = require("./api/apiData/importAndExportPerformence/cityAndProvinceByNature");
// const authUtil = require("./api/routes/users/auth").checkToken;
// console.log("authUtil ::: ", authUtil);
const { verify } = require("./api/routes/users/jwt");
console.log("verify", verify);

require("dotenv").config();
const hostname = "localhost";
const port = 8080;

app.use(cors());
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "/public")));
app.use(cookieParser());

app.use("/", mainRouter);
// app.use("/verify", authUtil);
app.use("/productInfomation", productInfomationRouter);
app.post("/users/signup", userRouter.userRegister);
app.post("/users/signin", userRouter.userSignin);

app.post("/users/payload", verify, (req, res) => {
  console.log("req :: ", req);

  return res.json({
    message: "토큰이 정상입니다.",
  });
});
app.get("/users/logout", userRouter.userLogout);
app.get(
  "/publicData/smokingAreaInGwangjinGu",
  publicSmokingRouter.smokingAreaInGwangjinGu
);

app.post(
  "/publicData/cityAndProvice",
  publicImportAndExportRouter.cityAndProvince
);
app.post(
  "/publicData/cityAndProviceByItem",
  cityAndProvinceByItemRouter.cityAndProvinceByItem
);
app.post(
  "/publicData/cityAndProviceByNature",
  cityAndProvinceByNatureRouter.cityAndProvinceByNature
);

app.get("/process/example", (req, res) => {
  if (req.session.user) {
    // 세션에 유저가 존재한다면
    res.redirect("/example.html");
  } else {
    res.redirect("/login.html");
  }
});
