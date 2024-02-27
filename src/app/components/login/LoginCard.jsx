import React, { useState } from 'react';
import Card from '../card/Card';
import styles from '../page.module.css';

export default function Login({ onLogin }) {
    const [formValues, setFormValues] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validateForm(formValues);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        setIsSubmitting(true);

        onLogin(formValues.email, formValues.password)
            .then(() => {
                setFormValues({
                    email: '',
                    password: ''
                });
            })
            .catch((error) => {
                console.error('Login failed:', error);
                setErrors({ server: 'Login failed. Please try again later.' });
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <div className={styles.card_container}>
            <Card
                title="Login"
                fields={[
                    { type: "text", name: "email", name2: "Email", placeholder: "your@email.com", value: formValues.email, onChange: handleInputChange },
                    { type: "text", name: "password", name2: "Password", placeholder: "password", value: formValues.password, onChange: handleInputChange },
                ]}
                button_fields={[
                    { type: "submit", name: "login", ariaLabel: "submit_login", children: "Login", onClick: handleSubmit }
                ]}
            />
            {errors.server && <p>{errors.server}</p>}
            {errors.email && <p>{errors.email}</p>}
            {errors.password && <p>{errors.password}</p>}
        </div>
    )
}