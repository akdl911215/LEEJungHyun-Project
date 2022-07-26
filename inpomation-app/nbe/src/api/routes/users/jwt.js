const jwt = require("jsonwebtoken");
const { encode, decode } = require("js-base64");
const cookieParser = require("cookie-parser");
const iconv = require("iconv-lite");
// const util = require("node:util");
require("dotenv").config();
console.log("JWT_SECRET : ", process.env.JWT_SECRET);

module.exports = {
  sign: async (user) => {
    const payload = {
      username: user,
      // alg: "HS256",
      typ: "JWT",
    };

    const encodeSecret = encodeURI(process.env.JWT_SECRET);
    console.log("encodeSecret ::;: ", encodeSecret);
    const option = {
      scretKey: process.env.JWT_SECRET,
      options: {
        exp: "1m", // 토큰 유효 기간
        iss: "investing", // 발행자
        sub: "invest token", // 토큰 제목
        algorithm: "HS256",
        expiresIn: "1m", // 만료시간
        issuer: "issuer",
      },
    };
    return {
      token: jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1m" }),
    };
  },
  verify: async (req, res, next) => {
    console.log("verift start !!");
    const token = req?.header("Authorization");
    const token2 = req?.header("x-auth-token");
    console.log("token ", token);
    console.log("token2 ", token2);
    // console.log(
    //   util.inspect(token, { showHidden: false, depth: null, colors: true })
    // );
    console.log("JSON.stringify(token) ", JSON.stringify(token));
    console.log("typeof token ", typeof token);
    // console.log('req?.header("x-auth-token") :: ', req?.header("x-auth-token"));
    if (!token) {
      return res.status(401).json({ msg: "No token, authorization denied" });
    }
    console.log("token :: ", token);
    try {
      const KEY = iconv.decode(Buffer.from(process.env.JWT_SECRET), "EUC-KR");
      console.log("KEY : ", KEY);

      req.user = jwt.verify(token2, KEY);
      // console.log("req : ", req);
      console.log("req.user : ", req.user);

      // res.setHeader("authorization", token2);

      return res.json({
        user: req.user,
      });
    } catch (err) {
      if (err.name === "TokenExpiredError") {
        // 유효기간 초과
        return res.status(419).json({
          code: 419,
          message: "토큰이 만료되었습니다",
        });
      }

      return res.status(401).json({
        code: 401,
        message: "유효하지 않은 토큰입니다.",
      });
    }
  },
};
