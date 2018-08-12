export const config = {
  API_ENDPOINT: 'https://hogehoge/api/v1/todos',
  AUTH_CONFIG: {
      clientID: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
      graphScopes: ['user.read'],
      authority: 'https://login.microsoftonline.com/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
      redirect_uri: 'http://localhost'
  }
}