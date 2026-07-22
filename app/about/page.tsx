import styles from "@/app/about/page.module.css";
import Image from "next/image";

export default function About() {
    return (
        <main className={styles.main}>
            <section className={styles.me}>
                <Image
                    className={styles.photoMe}
                    src="/images/about.jpg"
                    alt="moi compe"
                    width={500}
                    height={625}
                    priority
                />

                <div className={styles.meContent}>
                    <h1>
                        À propos de moi
                    </h1>
                    <p>Étudiant en développement de logiciels et passionné de karaté.</p>
                    <p>J'ai commencé les arts martiaux à l'âge de 15 ans, en 2006. Mon parcours n'a pas été linéaire,
                        mais chaque étape m'a permis d'apprendre, de grandir et de revenir avec une motivation renouvelée.</p>
                    <p>Je suis présentement shodan-ho en Shorinjiryu Kaizen. Ma passion pour les arts martiaux ne fait que grandir.
                    Je m'intéresse au kudo ainsi qu'au BJJ.</p>
                </div>
            </section>
        </main>
    );
}