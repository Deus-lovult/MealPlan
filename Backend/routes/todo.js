const router = require("express").Router();
const { pgPool } = require("../dbconnection");

//todo新規作成
router.post("/post", async (req, res) => {
  try {
    //パラメータ取得
    const data = req.body;

    //現在日取得
    const nowDate = createYYYYMMDD();

    //SQL文作成
    const text =
      "INSERT INTO todotable (registerdate, updatedate, contents, completeflg, deleteflg)" +
      "VALUES ($1,$2,$3,$4,$5)";
    const value = [
      nowDate,
      nowDate,
      data.contents,
      data.completeflg,
      data.deleteflg,
    ];

    //SQL実行
    await pgPool.query(text, value);

    return res.status(200).send();
  } catch (e) {
    return res.status(500).json({ stack: e.stack, error: e });
  }
});

//todo更新(内容更新)
router.put("/:id/putContent", async (req, res) => {
  try {
    //パラメータ取得
    const data = req.body;
    const id = req.params.id;

    //現在日取得
    const nowDate = createYYYYMMDD();

    //SQL文作成
    const text =
      "UPDATE todotable " +
      "SET " +
      "updatedate = $1, " +
      "contents = $2 " +
      "WHERE id = $3";
    const value = [nowDate, data.contents, id];

    //SQL実行
    await pgPool.query(text, value);

    return res.status(200).send();
  } catch (e) {
    return res.status(500).json({ stack: e.stack, error: e });
  }
});

//todo更新(完了)
router.put("/:id/putComplete", async (req, res) => {
  try {
    //パラメータ取得
    const data = req.body;
    const id = req.params.id;

    //現在日取得
    const nowDate = createYYYYMMDD();

    //SQL文作成
    const text =
      "UPDATE todotable " +
      "SET " +
      "updatedate = $1, " +
      "completeflg = $2 " +
      "WHERE id = $3";
    const value = [nowDate, data.completeflg, id];

    //SQL実行
    await pgPool.query(text, value);

    return res.status(200).send();
  } catch (e) {
    return res.status(500).json({ stack: e.stack, error: e });
  }
});

//todo取得(完了)
router.get("/getComplete", async (req, res) => {
  try {
    //SQL文作成
    const text =
      "SELECT * FROM todotable WHERE completeflg = '1' AND deleteflg = false";
    //SQL実行
    const result = await pgPool.query(text);

    return res.status(200).json(result.rows);
  } catch (e) {
    return res.status(500).json({ stack: e.stack, error: e });
  }
});

//todo更新(削除)
router.put("/:id/delete", async (req, res) => {
  try {
    //パラメータ取得
    const data = req.body;
    const id = req.params.id;

    //現在日取得
    const nowDate = createYYYYMMDD();

    //SQL文作成
    const text =
      "UPDATE todotable " +
      "SET " +
      "updatedate = $1, " +
      "deleteflg = $2 " +
      "WHERE id = $3";
    const value = [nowDate, data.deleteflg, id];

    //SQL実行
    await pgPool.query(text, value);

    return res.status(200).send();
  } catch (e) {
    return res.status(500).json({ stack: e.stack, error: e });
  }
});

//todo取得
router.get("/get", async (req, res) => {
  try {
    //SQL文作成
    const text =
      "SELECT * FROM todotable WHERE completeflg = '0' AND deleteflg = false";

    //SQL実行
    const result = await pgPool.query(text);

    return res.status(200).json(result.rows);
  } catch (e) {
    return res.status(500).json({ stack: e.stack, error: e });
  }
});

//現在日付取得(yyyyMMdd)
const createYYYYMMDD = () => {
  const today = new Date();
  const monthMM = ("0" + (today.getMonth() + 1)).slice(-2);
  const dayDD = ("0" + today.getDate()).slice(-2);
  return today.getFullYear() + monthMM + dayDD;
};

module.exports = router;
