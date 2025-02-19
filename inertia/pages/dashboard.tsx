import { Link } from '@inertiajs/react'

const Dashboard = () => {
  return (
    <div>
      <h1>Vous êtes connecté !</h1>

      <Link href="/logout">Deconnexion</Link>
    </div>
  )
}

export default Dashboard
