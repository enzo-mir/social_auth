import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
    public async login({ auth, session, response, request, inertia }: HttpContext) {
        const { email, password } = request.all()
        try {
            const user = await User.verifyCredentials(email, password)
            await auth.use('web').login(user)
            return response.redirect('/dashboard')
        } catch (error) {
            session.flash("errors", { message: 'Adresse email ou mot de passe incorrect' })
            return response.redirect().back()
        }
    }

    public async redirectToDiscord({ ally, params }: HttpContext) {
        return ally.use(params.provider).redirect()
    }

    public async handleDiscordCallback({ ally, auth, response, params }: HttpContext) {
        const discordUser = await ally.use(params.provider).user()
         const user = await auth.use('web').login(discordUser.email)
        return response.redirect('/dashboard')
    }

}