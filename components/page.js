import Link from 'next/link'
import { connect } from 'react-redux'

import Head from 'next/head'
import Counter from './counter'

function Page({
  error,
  lastUpdate,
  light,
  linkTo,
  NavigateTo,
  placeholderData,
  title,
}) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>{title}</h1>
      <Counter />
      <nav>
        <Link href={linkTo}>
          <a>Navigate: {NavigateTo}</a>
        </Link>
      </nav>
    </div>
  )
}

export default connect(state => state)(Page)
