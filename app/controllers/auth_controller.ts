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
            session.flash( "errors", { message: 'Adresse email ou mot de passe incorrect' } )
            

            return response.redirect().back()

        }

    }
}