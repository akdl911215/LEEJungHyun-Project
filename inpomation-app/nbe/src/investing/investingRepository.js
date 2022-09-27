const db = require("../api/middlewares/pool");
const date = require("../common/date");
// const currentDate = date.date();
const currentDate = date.today();

exports.commentRead = async (req, res, next) => {
  const { boardId } = req;
  const sql = `SELECT writer, content, regdate FROM investing_board_reply WHERE board_id = ${boardId}`;

  return new Promise((resolve, reject) => {
    try {
      db.getConnectionPool((connection) => {
        connection.query(sql, (err, doc) => {
          if (err) {
            console.error("connection comments error : ", err);
            resolve({
              message: "투자 게시판 댓글 리드 조회 실패",
              error: err,
            });
          }

          if (doc) {
            console.log("connection comments result : ", doc);
            resolve({
              code: 200,
              message: "투자 게시판 댓글 리드 조회 성공",
              commentsList: doc,
            });
          }
        });
        connection.release();
      });
    } catch (err) {
      console.error("read promise error : ", err);
    }
  });
};

exports.commentRegister = async (req, res, next) => {
  const { boardId, username, comment } = req;
  console.log(
    `boardId : ${boardId}, username : ${username}, comment: ${comment}`
  );
  const sql = `INSERT INTO investing_board_reply (board_id, writer, content, regdate) VALUES (${boardId}, '${username}', '${comment}', '${currentDate}')`;
  console.log("register sql : ", sql);

  return new Promise((resolve, reject) => {
    try {
      db.getConnectionPool((connection) => {
        connection.query(sql, (err, doc) => {
          if (err) {
            console.error("connection comment register error : ", err);
            resolve({
              message: "투자 게시판 댓글 등록 실패",
              error: err,
            });
          }

          if (doc) {
            console.log("connection comment register result : ", doc);
            resolve({
              code: 200,
              message: "투자 게시판 댓글 등록 성공",
            });
          }
        });
        connection.release();
      });
    } catch (err) {
      console.error("read promise error : ", err);
    }
  });
};

exports.read = async (req, res, next) => {
  const { boardId } = req;
  const sql = `SELECT writer, title, content, regdate FROM investing_board WHERE id = ${boardId}`;

  return new Promise((resolve, reject) => {
    try {
      db.getConnectionPool((connection) => {
        connection.query(sql, (err, doc) => {
          if (err) {
            console.error("connection board read error : ", err);
            resolve({
              message: "투자 게시판 리드 조회 실패",
              error: err,
            });
          }

          if (doc) {
            console.log("connection board read result : ", doc);
            resolve({
              code: 200,
              message: "투자 게시판 리드 조회 성공",
              success: doc,
            });
          }
        });
        connection.release();
      });
    } catch (err) {
      console.error("read promise error : ", err);
    }
  });
};

exports.list = async (rqe, res, next) => {
  const sql = `SELECT * FROM investing_board`;

  return new Promise((resolve, reject) => {
    try {
      db.getConnectionPool((connection) => {
        connection.query(sql, (err, doc) => {
          if (err) {
            console.error("connection investing list error : ", err);
            resolve({
              message: "투자 리스트 조회 실패",
              error: err,
            });
          }

          if (doc) {
            console.log("connection investing list result : ", doc);
            resolve({
              code: 200,
              message: "투자 리스트 조회 성공",
              list: doc,
            });
          }
        });
        connection.release();
      });
    } catch (err) {
      console.error("register promise error : ", err);
    }
  });
};

exports.register = async (req, res, next) => {
  const { userId, writer, title, content } = req;
  const sql = `INSERT INTO investing_board (user_id, writer, title, content, regdate) VALUES (${userId}, '${writer}', '${title}', '${content}', '${currentDate}')`;

  return new Promise((resolve, reject) => {
    try {
      db.getConnectionPool((connection) => {
        connection.query(sql, (err, doc) => {
          if (err) {
            console.error("connection board register error : ", err);
            resolve({
              message: "투자 게시판 업로드 실패",
              error: err,
            });
          }

          if (doc) {
            console.log("connection board register result : ", doc);
            resolve({
              code: 200,
              message: "투자 게시판 업로드 성공",
            });
          }
        });
        connection.release();
      });
    } catch (err) {
      console.error("register promise error : ", err);
    }
  });
};
