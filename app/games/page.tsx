import styles from "@/app/about/page.module.css";

export default function GamesPage() {
    return (
        <main className={styles.main}>
            <h1>Jeux éducatifs</h1>

            <section>
                <h2>En développement</h2>

                <p>
                    En plus de ma pratique du karaté et de l'enseignement, je développe
                    également de petits jeux éducatifs afin de rendre l'apprentissage des
                    arts martiaux plus interactif et amusant.
                </p>

                <p>
                    Mon objectif est de proposer des outils qui permettent aux jeunes
                    comme aux adultes de réviser les techniques, le vocabulaire japonais
                    et certains concepts du karaté tout en s'amusant.
                </p>
            </section>

            <section>
                <h2>Projet actuel : Attaque des lettres</h2>

                <p>
                    <strong>Attaque des lettres</strong> est un jeu où les noms des
                    techniques de karaté sont affichés avec une ou plusieurs lettres
                    manquantes.
                </p>

                <p>
                    Des lettres tombent du haut de l'écran et le joueur doit déplacer
                    son karatéka afin d'attraper les bonnes lettres pour compléter
                    correctement chaque technique.
                </p>

                <p>
                    Plus le joueur progresse, plus les défis deviennent difficiles.
                    Les niveaux seront organisés selon les différentes ceintures afin
                    d'accompagner les élèves dans leur apprentissage.
                </p>
            </section>

            <section>
                <h2>Objectifs du jeu</h2>

                <ul>
                    <li>Mémoriser les noms des techniques.</li>
                    <li>Réviser le vocabulaire japonais.</li>
                    <li>Développer les réflexes et la concentration.</li>
                    <li>Apprendre en s'amusant.</li>
                </ul>
            </section>

            <section>
                <h2>Une passion qui rejoint deux mondes</h2>

                <p>
                    Ce projet me permet de réunir deux de mes passions :
                    le développement logiciel et les arts martiaux.
                </p>

                <p>
                    J'aime réfléchir à la façon dont les nouvelles technologies peuvent
                    rendre l'apprentissage plus motivant. À travers ces jeux, je souhaite
                    offrir un complément ludique à l'entraînement traditionnel tout en
                    continuant à développer mes compétences comme programmeur.
                </p>
            </section>

            <section>
                <h2>À venir</h2>

                <p>
                    Cette page évoluera au fil du développement des jeux. D'autres idées
                    sont déjà en réflexion afin de proposer une petite collection de jeux
                    éducatifs destinés aux pratiquants de karaté.
                </p>
            </section>
        </main>
    );
}