// import store from './redux/store'
// import '@fontsource/inter'
import { Provider } from 'react-redux'
import App from './App'
import { store } from './services/store'
import './styles/final.css'

export default function Root(props) {
  return (
    <div>
      <Provider store={store}>
        <App props={props} />
      </Provider>
    </div>
  )
}
