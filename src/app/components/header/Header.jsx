import styles from './styles.module.css';
import Nav from '../navigation/Nav';

export default function Header() {

    return (
        <div className={styles.header}>
            <Nav />
        </div>
    )
}