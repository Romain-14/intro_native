import RequireAuth from './helpers/RequireAuth';
import {Provider} from 'react-redux';
import store from './redux/store';

export default function App() {
    return (    
        <Provider store={store}>
            <RequireAuth />  
        </Provider>     
    )
}