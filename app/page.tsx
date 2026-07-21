import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main>
            <section className={styles.me}>
                <Image
                    className={styles.photoMe}
                    src="/images/compe-ps.jpg"
                    alt="moi compe"
                    width={600}
                    height={400}
                    priority
                />

                <div>
                    <h1>
                        Jean-Simon Cyr
                    </h1>
                    <p>Cours privés de karaté à Sherbrooke
                        Progressez à votre rythme grâce à un accompagnement personnalisé, que vous soyez débutant ou intermédiaire.</p>
                    <Link href="/private-lessons">En savoir plus</Link>
                </div>
            </section>

            <section className={styles.privateSession}>
                <h2>Cours privés</h2>
                <p>Travail technique, préparation de pré-test</p>
                <Link className={styles.link} href="/private-lessons">En savoir plus</Link>
            </section>

            <section className = {styles.game}>
                <h2>Jeux d'apprentissage</h2>
                <p>De petits jeux éducatifs autour du karaté sont en développement.</p>
                <p>En collaboration avec : Jeux Samamuse</p>
                <Image
                    src="/images/JeuxSamAmuse-logo.png"
                    alt="Jeux Sam Amuse"
                    width={300}
                    height={200}
                />
                <a
                    className={styles.link}
                    href="https://www.samamuse.ca/fr/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Visitez le site de Jeux Samamuse
                </a>

            </section>
        </main>
    );
}
