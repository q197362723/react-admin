

import ReactDOM from 'react-dom'
import App from './App.tsx'
import store from './stores'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
                <App />,
            </BrowserRouter>,
        </Provider>,
    document.getElementById('root')
)
