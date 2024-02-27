import styles from './landing.module.css';
import Register from '../components/register/RegistrationCard';
import Login from '../components/login/LoginCard';
import UserHome from '../components/user-home/UserHome';

export default function Landing() {

    return (
        <>
            <Login />
            <Register />
            <UserHome />
        </>
    )
}