import styles from '../page.module.css';
import Card from '../components/card/Card';

export default function Login() {

    return (
        <>
            <Card
                title="Login"
                fields={[
                    { type: "text", name: "email", name2: "Email", placeholder: "your@email.com" },
                    { type: "text", name: "password", name2: "Password", placeholder: "password" },
                ]}
                button_fields={[
                    { type: "submit", name: "login", ariaLabel: "submit_login", children: "Login" }
                ]}
            />
        </>
    )
}