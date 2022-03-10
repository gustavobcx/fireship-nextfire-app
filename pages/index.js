import Link from 'next/link';

import Loader from '../components/Loader';

export default function Home() {
  return (
    <div>
      <Link prefetch={false} href={{
        pathname: '/[username]',
        query: { username: 'jeffd23' }
      }}>Jeffs Profile</Link>

      <Loader show />
    </div>
  )
}
