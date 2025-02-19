import User from '#models/user'
import { oauthService } from '#services/oauth.service'
import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  public async login({ auth, session, response, request, inertia }: HttpContext) {
    const { email, password } = request.all()
    try {
      const user = await User.verifyCredentials(email, password)
      await auth.use('web').login(user)
      return response.redirect('/dashboard')
    } catch (error) {
      session.flash('errors', { message: 'Adresse email ou mot de passe incorrect' })
      return response.redirect().back()
    }
  }

  public async redirectToDiscord({ ally, params }: HttpContext) {
    return ally.use(params.provider).redirect()
  }

  public async handleDiscordCallback({ ally, auth, response, params }: HttpContext) {
    const provider: 'discord' | 'google' | 'github' = params.provider
    const credentials = await oauthService(ally.use(provider))

    if (typeof credentials === 'string') return response.redirect().back()

    const findUser = await User.findBy({ email: credentials.email, provider })
    if (!findUser) {
      const user = await User.create({
        email: credentials.email,
        name: credentials.name,
        password: null,
        avatar: credentials.avatarUrl,
        provider,
      })

      await auth.use('web').login(user)
      return response.redirect('/dashboard')
    } else {
      await auth.use('web').login(findUser)
      return response.redirect('/dashboard')
    }
  }
  public async logout({ auth, response }: HttpContext) {
    await auth.use('web').logout()
    return response.redirect('/')
  }
}
