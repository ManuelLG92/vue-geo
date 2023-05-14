import { useQuery } from '@tanstack/vue-query'

const get = (queryKey: string, url: () => Promise<Response>) => {
  return useQuery({
    queryKey: [queryKey],
    queryFn: url
  })
}

export { get }
