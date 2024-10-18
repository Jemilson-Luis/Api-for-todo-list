type UserTypes = {
  id:string,
  name:string
  email:string
  password:string
}

type AuthenticateUserTypes = {
  email: string,
  password: string
}

export {UserTypes, AuthenticateUserTypes }