import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://www.tecnisys.com.br/wp-content/uploads/sobreBanner.png"
            />

            <div className={styles.profile}>
                <Avatar src="https://github.com/marcosfa1.png" />

                <strong>Marcos Filipe</strong>
                <span>Dev Full Stack</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}