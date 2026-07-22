import styles from "@/app/about/page.module.css";
import Image from "next/image";

export default function About() {
    return (
        <main className={styles.main}>
            <section className={styles.me}>
                <Image
                    className={styles.photoMe}
                    src="/images/about-v2.jpg"
                    alt="moi compe"
                    width={500}
                    height={625}
                    priority
                />

                <div className={styles.meContent}>
                    <h1>
                        À propos de moi
                    </h1>
                    <p>
                        J'ai commencé les arts martiaux à l'âge de 15 ans, en 2006.
                        Mon parcours n'a pas toujours été linéaire, mais chaque étape m'a permis d'apprendre,
                        de grandir et de revenir avec une motivation renouvelée.
                        Aujourd'hui, je poursuis toujours mon cheminement avec le même enthousiasme qu'à mes débuts.
                    </p>
                    <p>
                        Je pratique le Shorinjiryu Kaizen, où j'ai obtenu le grade de shodan-ho.
                        J'ai également développé un intérêt pour d'autres disciplines comme le Kudo
                        et le jiu-jitsu brésilien (BJJ), qui me permettent d'enrichir ma compréhension
                        des arts martiaux et d'apprendre sous différents angles.
                    </p>

                    <p>
                        Au-delà des techniques, le karaté m'a enseigné des valeurs qui m'accompagnent au quotidien :
                        le respect, la discipline, la persévérance et l'humilité.
                        Ce sont ces valeurs que je souhaite transmettre lorsque j'enseigne.
                    </p>

                    <p>
                        J'ai le privilège de participer à l'enseignement au dojo, principalement auprès des jeunes.
                        J'apprécie particulièrement les voir gagner en confiance,
                        progresser à leur rythme et découvrir le plaisir d'apprendre. Chaque élève évolue différemment,
                        et je crois qu'un bon enseignant doit savoir s'adapter à la personne devant lui.
                    </p>

                    <p>
                        Cette expérience a éveillé chez moi un intérêt particulier pour les méthodes d'apprentissage.
                        J'aime réfléchir à la façon de rendre l'enseignement plus clair, plus motivant et plus adapté à
                        chaque élève, que ce soit par des exercices, des jeux ou des explications différentes.
                    </p>

                    <p>
                        En parallèle de ma pratique du karaté, je poursuis des études en développement logiciel.
                        Cette seconde passion me permet de créer de nouveaux projets,
                        dont des jeux éducatifs visant à rendre l'apprentissage des arts martiaux plus interactif et amusant.
                    </p>

                    <p>
                        Que vous souhaitiez perfectionner une technique, préparer un examen de ceinture ou simplement
                        progresser dans votre pratique, je serai heureux de vous accompagner dans votre cheminement.
                    </p>
                </div>
            </section>
        </main>
    );
}