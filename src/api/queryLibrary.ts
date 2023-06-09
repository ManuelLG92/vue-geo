import { useQuery } from '@tanstack/vue-query'

const get = (queryKey: string, url: () => Promise<Response>) => {
  return useQuery({
    queryKey: [queryKey],
    queryFn: url,
    cacheTime: 300000, // ms
    refetchOnWindowFocus: false
  })
}

export { get }
