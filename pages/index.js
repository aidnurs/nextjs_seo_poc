import { withApollo } from '../lib/apollo'
import { useQuery } from '@apollo/react-hooks'
import USER_QUERY from '../queries/USER_QUERY.js'

function Home() {
  const { loading, error, data } = useQuery(USER_QUERY)
  console.log(data)

  return (
    <div>
      Hello World
      <p>{data?.user[0].username}</p>
    </div>
  )
}

export default withApollo({ ssr: true })(Home)
