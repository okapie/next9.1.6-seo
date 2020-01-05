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
        <meta name="description" content="Here is OGP tag SNS link test." />
        <meta name="keyword" content="OGP tag SNS link test." />
        <meta property="og:url" content="https://next916-seo.okapie.now.sh/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Index Page" />
        <meta property="og:image" content="https://next916-seo.okapie.now.sh/ogp_dummy.png" />
        <meta name="og:description" content="Here is OGP tag SNS link test." />
        <meta name="og:site_name" content="OGP tag SNS link test" />
      </Head>
      <h1>{title}</h1>
      <Counter />
      <img src="/ogp_dummy.png" alt="tag image" />
      <nav>
        <Link href={linkTo}>
          <a>Navigate: {NavigateTo}</a>
        </Link>
      </nav>
    </div>
  )
}

export default connect(state => state)(Page)
