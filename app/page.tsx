import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <section className={styles.me}>
                <Image
                    className={styles.photoMe}
                    src="/images/compe-ps-v2.jpg"
                    alt="Jean-Simon Cyr lors d'une compétition de karaté"
                    width={500}
                    height={625}
                    priority
                />

                <div className={styles.meContent}>
                    <h1>
                        Cours privés de karaté à Sherbrooke
                    </h1>
                    <p>Un accompagnement personnalisé pour progresser techniquement et préparer vos passages de grade.</p>
                    <Link className={styles.link} href="/contact">Discuter de vos objectifs</Link>
                </div>
            </section>

            <section className={styles.privateSession}>
                <h2>Cours privés</h2>
                <p>Travail technique, préparation de pré-test</p>
                <Link className={styles.link} href="/private-lessons">En savoir plus</Link>
            </section>

            <section className={styles.game}>
                <h2>Jeux d'apprentissage</h2>
                <p>De petits jeux éducatifs autour du karaté sont en développement.</p>
                <p>En collaboration avec : Jeux Sam amuse</p>
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
                    Visitez le site de Jeux Sam amuse
                </a>

            </section>
        </main>
    );
}
