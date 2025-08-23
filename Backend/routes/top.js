const router = require("express").Router();
const { pgPool } = require("../dbconnection");

//日付間の全件データを取得する
router.get("/getWeekMeals", async (req, res) => {
  let client;

  try {
    //パラメータ取得
    const startDate = req.query.startDate;
    const endDate = req.query.endDate;

    //SQL文作成
    const text =
      "SELECT * FROM mealtable WHERE date BETWEEN $1 AND $2 ORDER BY date ASC";
    const values = [startDate, endDate];

    //SQL実行
    const result = await pgPool.query(text, values);

    return res.status(200).json({ data: result.rows });
  } catch (e) {
    return res.status(500).json({ stack: e.stack, error: e });
  }
});

module.exports = router;
