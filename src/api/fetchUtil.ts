const HOST = 'http://localhost:8080'
const fetcher = (url: string) => () => {
  return fetch(`${HOST}/${url}`)
    .then((res) => res.json())
    .catch((e) => console.log('error', e))
}

export { fetcher }
