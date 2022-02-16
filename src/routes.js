const Router = require('express');
const SignInController = require('./controllers/SignInController')


const router = Router()

router.get("/", SignInController.get)

module.exports = router;