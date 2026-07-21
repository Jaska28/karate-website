import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <section className={styles.content}>
                <nav className={styles.nav}>
                    <ul>
                        <li><Link href="/">Accueil</Link></li>
                        <li><Link href="/about">À propos</Link></li>
                        <li><Link href="/private-lessons">Cours privés</Link></li>
                        <li><Link href="/games">Jeux</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </section>
        </header>
    )
}