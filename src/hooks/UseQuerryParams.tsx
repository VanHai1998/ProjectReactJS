import { useSearchParams } from 'react-router-dom'

export default function UseQuerryParams() {
  const [searchParams] = useSearchParams()
  return Object.fromEntries([...searchParams])
}
