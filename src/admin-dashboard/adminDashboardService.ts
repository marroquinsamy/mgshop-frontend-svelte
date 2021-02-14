import config from '../config/config'

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
  let data
  try {
    res = await fetch(`${config.API}/login`, loginAdminOptions)
    data = await res.json()

    console.log(res)
    console.log(data)
  } catch (error) {
    console.log(error)
    throw new Error(error)
  }

  if (res.ok) {
    return data
  } else {
    throw new Error(data.message)
  }
}

export default {
  loginAdmin,
}
