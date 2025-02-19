import { DiscordDriver } from '@adonisjs/ally/drivers/discord'
import { GithubDriver } from '@adonisjs/ally/drivers/github'
import { GoogleDriver } from '@adonisjs/ally/drivers/google'
import { OauthCredType } from '../../types/oauth.type.js'

export const oauthService = async (
  provider: GithubDriver | GoogleDriver | DiscordDriver
): Promise<string | OauthCredType> => {
  if (provider.accessDenied()) {
    return 'Access was denied'
  }

  if (provider.stateMisMatch()) {
    return 'Request expired. Retry again'
  }

  if (provider.hasError()) {
    return provider.getError() || 'An error occured'
  }

  return await provider.user()
}
