import styles from './styles.module.css';
import LabelInput from '../input/LabelInputField';
import Button from '../button/Button';

export default function Card({ title, fields }) {

    return (
        <div className={styles.container}>
            <h3 className={styles.h3}>{title}</h3>
            <form className={styles.item_form}>
                {fields.map(field => (
                    <LabelInput
                        key={field.name}
                        type={field.type}
                        name={field.name}
                        name2={field.name2}
                        placeholder={field.placeholder}
                    />
                ))}
                <Button
                    type="submit"
                    ariaLabel="submit-form"
                    children="Submit"
                    className={styles.submit_button}
                />
            </form>
        </div>
    )
}