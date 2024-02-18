import styles from './styles.module.css';
import Nav from '../navigation/Nav';

export default function Header() {

    return (
        <div>
            <h1 className={styles.header1}>Header</h1>
            <Nav />
        </div>
    )
}