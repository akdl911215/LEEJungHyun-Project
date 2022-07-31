const express = require("express");
const router = express.Router();
const userService = require("./userService");

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
  console.log("jwt start !! req : ", req);
  console.log("req?.header : ", req?.header);
  console.log("req?.header : ", req?.header("Roles"));

  // https://12bme.tistory.com/325
  // Roles과 token을 같이 받을방법 구상해보기
  const state = {
    token: req?.header("Authorization").split(" ")[1],
    roles: req?.header("Roles"),
  };
  console.log("state :", state);
  const { code, message, roles } = await userService.jwtToken(state);
  console.log(`2. code : ${code}, message : ${message}, roles : ${roles}`);
  return res.json({ code: code, message: message, roles: roles });
});

module.exports = router;
