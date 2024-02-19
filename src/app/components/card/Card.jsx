import styles from './styles.module.css';
import LabelInput from '../input/LabelInputField';
import Button from '../button/Button';

export default function Card({ title, fields, button_fields }) {

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
                {button_fields.map(button_field => (
                    <Button
                        key={button_field.name}
                        type={button_field.type}
                        ariaLabel={button_field.ariaLabel}
                        children={button_field.children}
                    />
                ))}
            </form>
        </div>
    )
}