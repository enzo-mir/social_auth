/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import AuthController from '#controllers/auth_controller'
import router from '@adonisjs/core/services/router'
router.on('/').renderInertia('home')
router.on('/login').renderInertia('login')
router.post('/login', [AuthController,'login'])