import type { FC } from 'react'
import RenderRouter from './routes/index'
import {IntlProvider} from 'react-intl'
import {useSelector} from 'react-redux'
import {localeConfig} from './locales'

const App:FC = () => {
  const {locale} = useSelector(state => state.user)
  return (
  <div>
    <IntlProvider locale={locale.split('_')[0]} messages={localeConfig[locale]}>

    <RenderRouter />
    </IntlProvider>
  </div>
  )
}

export default App