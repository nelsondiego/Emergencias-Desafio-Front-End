import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import moment from 'moment'
import 'moment/locale/es';
moment().locale('es')

import { CalendarProvider } from '@/context/CalendarContext'
import { Layout } from '@/components/Layout';

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <CalendarProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CalendarProvider>
  )
}
