import Link from 'next/link';

import toast from 'react-hot-toast';

import Loader from '../components/Loader';

export default function Home() {
  return (
    <div>
      <Link prefetch={false} href={{
        pathname: '/[username]',
        query: { username: 'jeffd23' }
      }}>Jeffs Profile</Link>

      <Loader show />

      <button onClick={() => toast.success('Hello World!')}>Hello World!</button>

    </div>
  )
}
