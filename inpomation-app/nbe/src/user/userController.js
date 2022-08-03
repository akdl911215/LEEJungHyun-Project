const express = require("express");
const router = express.Router();
const userService = require("./userService");

router.post("/modify", async (req, res, next) => {
  const username = req?.body?.username;
  console.log("username :: ", username);
  const test = await userService.modify(username);
});

router.post("/inquiry", async (req, res, next) => {
  const username = req?.body?.username;
  console.log("username :: ", username);
  const user = await userService.inquiry(username);
  if (user) {
    res.json(user);
  } else {
    res.json({
      message: "회원정보를 확인해보세요.",
    });
  }
});

router.post("/signup", async (req, res, next) => {
  const userDTO = req.body;
  const { username, password } = await userService.signup(userDTO);
  console.log(`username: ${username}, password: ${password}`);

  if (username !== undefined && password !== undefined) {
    res.json({
      message: "회원가입 성공",
    });
  } else {
    res.json({
      message: "회원가입 실패",
    });
  }
});

router.post("/signin", async (req, res, next) => {
  console.log("userSignin start!!");
  const userDTO = req.body;
  const { username, token, roles } = await userService.signin(userDTO);
  console.log(`username : ${username}, token : ${token}`);

  res.set({
    "content-type": "application/json; charset=utf-8",
  });
  if (username !== undefined && token !== undefined) {
    res.json({
      message: "로그인 성공",
      result: "토큰 발급 완료",
      id: username,
      token: token,
      roles: roles,
    });
  } else {
    res.json({
      message: "로그인 실패",
      id: username,
      token: token,
      roles: roles,
    });
  }
});

router.post("/auth", async (req, res, next) => {
  console.log("auth con req : ", req);
  const { code, message, roles } = await userService.jwtToken({
    token: req?.header("Authorization").split(" ")[1],
    roles: req?.body?.roles,
  });
  console.log(`2. code : ${code}, message : ${message}, roles : ${roles}`);
  return res.json({ code: code, message: message, roles: roles });
});

module.exports = router;
