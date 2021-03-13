import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

import './App.css';
const App =() => {

    if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine
             height="100vh"
             projectID="3c67aead-6773-4264-acce-13329c3d87be"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            
            renderChatFeed={(chatAppProps) => <ChatFeed  {...chatAppProps} />}
        />
    )
}
export default App;