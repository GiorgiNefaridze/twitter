import NavigationBar from './components/NavigationBar'
import RightSideBar from './components/RightSideBar'
import Content from './components/Content'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.scss'

export default function App() {
    return(
        <div className='app-container'>
            <NavigationBar />
            <Content />
            <RightSideBar />
        </div>
    )
}