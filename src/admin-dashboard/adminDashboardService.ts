import config from '../config/config'
import { token } from '../stores/auth'

interface IAdminCredentials {
  username: string
  password: string
}

/**
 * Receives admin credentials and returns the token or 401 error if not authorized
 * @param {IAdminCredentials} adminCredentials Object containing username and password
 */
const loginAdmin = async (adminCredentials: IAdminCredentials) => {
  const loginAdminOptions: RequestInit = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(adminCredentials),
  }

  let res: Response
  let returnedToken
  try {
    res = await fetch(`${config.API}/login`, loginAdminOptions)
    returnedToken = await res.json()
  } catch (error) {
    console.log(error)
    throw new Error(
      'Hubo un error al iniciar sesión. Inténtalo de nuevo en unos momentos.'
    )
  }

  if (res.ok) {
    token.login(returnedToken.token)
    return returnedToken
  } else {
    throw new Error(returnedToken.message)
  }
}

export default {
  loginAdmin,
}
