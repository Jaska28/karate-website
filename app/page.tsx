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
                    <h1>Cours privés de karaté à Sherbrooke</h1>

                    <p>
                        Un accompagnement personnalisé pour améliorer vos techniques, progresser
                        et préparer vos passations de ceinture.
                    </p>

                    <div className={styles.links}>
                        <Link className={styles.link} href="/private-lessons">
                            Découvrir les cours privés
                        </Link>

                        <Link className={styles.link} href="/contact">
                            Discuter de vos objectifs
                        </Link>
                    </div>
                </div>
            </section>

            <section className={styles.privateSession}>
                <h2>Progressez à votre rythme</h2>

                <p>
                    Chaque élève apprend différemment. Les cours privés permettent de cibler
                    vos besoins, de travailler les difficultés rencontrées au dojo et de
                    recevoir des explications adaptées à votre façon d'apprendre.
                </p>

                <ul className={styles.benefits}>
                    <li>Techniques de base, kihon, kata et kumite</li>
                    <li>Préparation aux examens de ceinture</li>
                    <li>Retour à l'entraînement après une pause</li>
                    <li>Accompagnement personnalisé selon vos objectifs</li>
                </ul>

                <Link className={styles.link} href="/private-lessons">
                    En savoir plus sur les cours
                </Link>
            </section>

            <section className={styles.approach}>
                <h2>Une approche basée sur la compréhension</h2>

                <p>
                    Mon objectif n'est pas seulement de faire répéter des mouvements,
                    mais d'aider chaque élève à comprendre leur fonctionnement et à
                    développer une progression durable.
                </p>

                <p>
                    Je crois qu'un bon enseignant doit aussi continuer d'apprendre.
                    Lorsqu'une question dépasse mes connaissances, je préfère prendre le
                    temps de vérifier et de chercher une réponse juste plutôt que de donner
                    une réponse approximative.
                </p>

                <Link className={styles.link} href="/about">
                    En apprendre davantage sur mon parcours
                </Link>
            </section>

            <section className={styles.game}>
                <div className={styles.gameContent}>
                    <h2>Jeux éducatifs en développement</h2>

                    <p>
                        Je travaille actuellement sur <strong>Attaque des lettres</strong>,
                        un jeu permettant aux jeunes karatékas de réviser les noms des
                        techniques tout en s'amusant.
                    </p>

                    <p>
                        Les techniques sont affichées avec des lettres manquantes. Le joueur
                        doit déplacer son karatéka afin d'attraper les bonnes lettres et
                        compléter chaque mot. Les niveaux seront organisés selon les
                        différentes ceintures.
                    </p>

                    <Link className={styles.link} href="/games">
                        Découvrir le projet
                    </Link>
                </div>

                <div className={styles.collaboration}>
                    <p>Un projet réalisé en collaboration avec :</p>

                    <Image
                        className={styles.samAmuseLogo}
                        src="/images/JeuxSamAmuse-logo.png"
                        alt="Logo de Jeux Sam Amuse"
                        width={300}
                        height={200}
                    />

                    <a
                        className={styles.link}
                        href="https://www.samamuse.ca/fr/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Visiter le site de Jeux Sam Amuse
                    </a>
                </div>
            </section>

            <section className={styles.contact}>
                <h2>Vous souhaitez travailler un objectif précis ?</h2>

                <p>
                    Écrivez-moi pour discuter de votre niveau, de vos besoins et de la
                    meilleure façon de vous accompagner.
                </p>

                <Link className={styles.link} href="/contact">
                    Me contacter
                </Link>
            </section>
        </main>
    );
}