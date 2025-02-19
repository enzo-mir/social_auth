/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const AuthController = () => import('#controllers/auth_controller')
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
router.get('/', (ctx) => {
  return ctx.inertia.render('home', {
    session: ctx.session.all(),
  })
})
router.on('/login').renderInertia('login')
router.post('/login', [AuthController, 'login'])
router.get('/logout', [AuthController, 'logout'])
router.on('/dashboard').renderInertia('dashboard').use(middleware.auth())

router.get('/:provider/redirect', [AuthController, 'redirectToDiscord'])
router.get('/:provider/callback', [AuthController, 'handleDiscordCallback'])
