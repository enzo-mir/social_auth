import { DiscordToken, GithubToken, GoogleToken } from '@adonisjs/ally/types'

export type OauthCredType = {
  token: GithubToken | GoogleToken | DiscordToken
  id: any
  nickName: any
  email: any
  emailVerificationState: 'verified' | 'unverified' | 'unsupported'
  name: any
  avatarUrl: any
  original: any
  scope?: string
}
