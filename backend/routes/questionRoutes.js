const express = require('express')
const router = express.Router()
const { getQuestions, updateQuestion } = require('../controllers/questionController')

router.get('/:id?', getQuestions)
router.put('/:id', updateQuestion)

module.exports = router