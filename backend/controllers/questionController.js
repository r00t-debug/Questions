const asyncHandler = require('express-async-handler')
const db = require('../config/db')

// @desc = Get questions
// @route = GET /api/questions
// @access = Public
const getQuestions = asyncHandler(async (req, res) => {
  if (req.params.id) {
    const questions = await db.promise().query(`SELECT * FROM domaine${req.params.id}`)
  
    res.json(questions[0])
    console.log(`showing all questions for domaine ${req.params.id}`.magenta)
  } else {
    const query = `SELECT ROUND(AVG(score)) as score FROM domaine1 where score != -1
      UNION ALL
      SELECT ROUND(AVG(score)) as score FROM domaine2 where score != -1
      UNION ALL
      SELECT ROUND(AVG(score)) as score FROM domaine3 where score != -1
      UNION ALL
      SELECT ROUND(AVG(score)) as score FROM domaine4 where score != -1
      UNION ALL
      SELECT ROUND(AVG(score)) as score FROM domaine5 where score != -1
      UNION ALL
      SELECT ROUND(AVG(score)) as score FROM domaine6 where score != -1
      UNION ALL
      SELECT ROUND(AVG(score)) as score FROM domaine7 where score != -1
      UNION ALL
      SELECT ROUND(AVG(score)) as score FROM domaine8 where score != -1
      UNION ALL
      SELECT ROUND(AVG(score)) as score FROM domaine9 where score != -1
      UNION ALL
      SELECT ROUND(AVG(score)) as score FROM domaine10 where score != -1
      UNION ALL
      SELECT ROUND(AVG(score)) as score FROM domaine11 where score != -1
      UNION ALL
      SELECT ROUND(AVG(score)) as score FROM domaine12 where score != -1
      UNION ALL
      SELECT ROUND(AVG(score)) as score FROM domaine13 where score != -1
      UNION ALL
      SELECT ROUND(AVG(score)) as score FROM domaine14 where score != -1
      UNION ALL
      SELECT ROUND(AVG(score)) as score FROM domaine15 where score != -1
      UNION ALL
      SELECT ROUND(AVG(score)) as score FROM domaine16 where score != -1
      UNION ALL
      SELECT ROUND(AVG(score)) as score FROM domaine17 where score != -1
      UNION ALL
      SELECT ROUND(AVG(score)) as score FROM domaine18 where score != -1
      UNION ALL
      SELECT ROUND(AVG(score)) as score FROM domaine19 where score != -1
      UNION ALL
      SELECT ROUND(AVG(score)) as score FROM domaine20 where score != -1;`
      
      const questions = await db.promise().query(query)
      res.json(questions[0])
      console.log("showing average of all domaines".magenta)
    }
})

// @desc = Update question
// @route = PUT /api/questions/:id
// @access = Public
// @body = question=INT, score=INT
const updateQuestion = asyncHandler(async (req, res) => {
  const domaine = req.params.id
  const { question, score } = req.body

  await db.promise().query(`UPDATE domaine${domaine} SET score = ${score} WHERE id = ${question}`)
  res.json({ msg: 'Update successful' })

  console.log(`updated domaine${domaine} question ${question} with value: ${score}`.yellow)
})

module.exports = {
  getQuestions,
  updateQuestion,
}