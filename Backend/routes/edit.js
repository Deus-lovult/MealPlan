const router = require("express").Router();
const { query, pgPool } = require("../dbconnection");

//対象取得
router.get("/getEditTarget", async (req, res) => {
  try {
    //パラメータ取得
    const editTargetDate = req.query.targetDate;

    //SQL文作成
    const text = "SELECT * FROM mealtable WHERE date = $1";
    const value = [editTargetDate];

    //SQL実行
    const result = await pgPool.query(text, value);

    return res.status(200).json(result.rows);
  } catch (e) {
    return res.status(500).json(e);
  }
});

//新規作成
router.post("/post", async (req, res) => {
  try {
    //データ取得
    const data = req.body;

    //SQL
    const text =
      "INSERT INTO mealtable( " +
      "date," +
      "breakfastmealno1,breakfastmealno2,breakfastmealno3,breakfastmealno4,breakfastmealno5,breakfastmealno6,breakfastmealno7," +
      "lunchmealno1,lunchmealno2,lunchmealno3,lunchmealno4,lunchmealno5,lunchmealno6,lunchmealno7," +
      "dinnermealno1,dinnermealno2,dinnermealno3,dinnermealno4,dinnermealno5,dinnermealno6,dinnerMealNo7" +
      ")" +
      " VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22)";

    const value = [
      data.date,
      data.breakfastmealno1,
      data.breakfastmealno2,
      data.breakfastmealno3,
      data.breakfastmealno4,
      data.breakfastmealno5,
      data.breakfastmealno6,
      data.breakfastmealno7,
      data.lunchmealno1,
      data.lunchmealno2,
      data.lunchmealno3,
      data.lunchmealno4,
      data.lunchmealno5,
      data.lunchmealno6,
      data.lunchmealno7,
      data.dinnermealno1,
      data.dinnermealno2,
      data.dinnermealno3,
      data.dinnermealno4,
      data.dinnermealno5,
      data.dinnermealno6,
      data.dinnermealno7,
    ];

    //SQL実行
    await pgPool.query(text, value);

    return res.status(200).send();
  } catch (e) {
    return res.status(500).json({ stack: e.stack, error: e });
  }
});

//更新
router.put("/:id/put", async (req, res) => {
  try {
    //パラメータ取得
    const param = req.params.id;
    const data = req.body;

    //SQL作成
    const text =
      "UPDATE mealtable " +
      "SET " +
      "date = $1, " +
      "breakfastmealno1 = $2, " +
      "breakfastmealno2 = $3, " +
      "breakfastmealno3 = $4, " +
      "breakfastmealno4 = $5, " +
      "breakfastmealno5 = $6, " +
      "breakfastmealno6 = $7, " +
      "breakfastmealno7 = $8, " +
      "lunchmealno1 = $9, " +
      "lunchmealno2 = $10, " +
      "lunchmealno3 = $11, " +
      "lunchmealno4 = $12, " +
      "lunchmealno5 = $13, " +
      "lunchmealno6 = $14, " +
      "lunchmealno7 = $15, " +
      "dinnermealno1 = $16, " +
      "dinnermealno2 = $17, " +
      "dinnermealno3 = $18, " +
      "dinnermealno4 = $19, " +
      "dinnermealno5 = $20, " +
      "dinnermealno6 = $21, " +
      "dinnermealno7 = $22 " +
      "WHERE id = $23";

    const value = [
      data.date,
      data.breakfastmealno1,
      data.breakfastmealno2,
      data.breakfastmealno3,
      data.breakfastmealno4,
      data.breakfastmealno5,
      data.breakfastmealno6,
      data.breakfastmealno7,
      data.lunchmealno1,
      data.lunchmealno2,
      data.lunchmealno3,
      data.lunchmealno4,
      data.lunchmealno5,
      data.lunchmealno6,
      data.lunchmealno7,
      data.dinnermealno1,
      data.dinnermealno2,
      data.dinnermealno3,
      data.dinnermealno4,
      data.dinnermealno5,
      data.dinnermealno6,
      data.dinnermealno7,
      param,
    ];

    await pgPool.query(text, value);

    return res.status(200).send();
  } catch (e) {
    return res.status(500).json({ stack: e.stack, error: e });
  }
});

module.exports = router;
