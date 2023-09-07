import React, { useEffect, useState } from 'react';
import { Layout } from '@/components';

import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
