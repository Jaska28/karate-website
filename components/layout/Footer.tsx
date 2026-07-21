import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <section className={styles.section}>
                    <p>Cours privés de karaté</p>
                </section>

                <section className={styles.section}>
                    <h3>Navigation</h3>
                    <nav>
                        <ul>
                            <li><Link href="/">Accueil</Link></li>
                            <li><Link href="/about">À propos</Link></li>
                            <li><Link href="/private-lessons">Cours privés</Link></li>
                            <li><Link href="/games">Jeux</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                </section>
            </div>

            <p className={styles.copyright}>© 2026 Jean-Simon Cyr</p>

        </footer>
    )
}