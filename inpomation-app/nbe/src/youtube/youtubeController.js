const express = require("express");
const router = express.Router();
const service = require("./youtubeService");

router.post("/searchList", async (req, res, next) => {
  res.json({
    list: await service.searchList(req?.body),
  });
});

router.post("/upload", async (req, res, next) => {
  res.json({
    result: await service.upload(req?.body),
  });
});

router.post("/list", async (req, res, next) =>
  res.json(await service.list(req?.body))
);

module.exports = router;
