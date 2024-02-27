import styles from '../../globals.css';
import Card from '../card/Card';

export default function Register() {

    return (
        <div
            className={styles.card_container}
        >
            <Card
                title="Registration"
                fields={[
                    { type: "text", name: "user_name", name2: "Username", placeholder: "username" },
                    { type: "text", name: "email", name2: "Email", placeholder: "your@email.com" },
                    { type: "text", name: "password", name2: "Password", placeholder: "password" },
                    { type: "text", name: "confirm_passwrod", name2: "Confirm Password", placeholder: "confirm password" },
                ]}
                button_fields={[
                    { type: "submit", name: "register", ariaLabel: "submit_registration", children: "Register" }
                ]}
            />
        </div>
    )
}