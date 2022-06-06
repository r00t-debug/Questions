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
    const query = `SELECT ROUND(AVG(score)) as score FROM domaine1
      UNION ALL
      SELECT ROUND(AVG(score)) as score FROM domaine2
      UNION ALL
      SELECT ROUND(AVG(score)) as score FROM domaine3
      UNION ALL
      SELECT ROUND(AVG(score)) as score FROM domaine4
      UNION ALL
      SELECT ROUND(AVG(score)) as score FROM domaine5
      UNION ALL
      SELECT ROUND(AVG(score)) as score FROM domaine6
      UNION ALL
      SELECT ROUND(AVG(score)) as score FROM domaine7
      UNION ALL
      SELECT ROUND(AVG(score)) as score FROM domaine8
      UNION ALL
      SELECT ROUND(AVG(score)) as score FROM domaine9
      UNION ALL
      SELECT ROUND(AVG(score)) as score FROM domaine10
      UNION ALL
      SELECT ROUND(AVG(score)) as score FROM domaine11
      UNION ALL
      SELECT ROUND(AVG(score)) as score FROM domaine12
      UNION ALL
      SELECT ROUND(AVG(score)) as score FROM domaine13
      UNION ALL
      SELECT ROUND(AVG(score)) as score FROM domaine14
      UNION ALL
      SELECT ROUND(AVG(score)) as score FROM domaine15
      UNION ALL
      SELECT ROUND(AVG(score)) as score FROM domaine16
      UNION ALL
      SELECT ROUND(AVG(score)) as score FROM domaine17
      UNION ALL
      SELECT ROUND(AVG(score)) as score FROM domaine18
      UNION ALL
      SELECT ROUND(AVG(score)) as score FROM domaine19
      UNION ALL
      SELECT ROUND(AVG(score)) as score FROM domaine20;`
      
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