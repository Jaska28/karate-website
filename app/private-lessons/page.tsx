import Link from "next/link";
import styles from "@/app/about/page.module.css";

export default function PrivateLessonsPage() {
    return (
        <main className={styles.main}>
            <h1>Cours privés</h1>

            <section>
                <h2>Un accompagnement adapté à vos objectifs</h2>

                <p>
                    Chaque personne progresse à son propre rythme. Que vous soyez débutant
                    ou pratiquant expérimenté, les cours privés permettent de travailler les
                    aspects qui sont les plus importants pour vous.
                </p>

                <p>
                    Mon objectif est de vous offrir un enseignement personnalisé, dans une
                    ambiance respectueuse, motivante et adaptée à votre niveau.
                </p>
            </section>

            <section>
                <h2>À qui s'adressent les cours ?</h2>

                <p>Les cours privés peuvent convenir à plusieurs situations :</p>

                <ul>
                    <li>Développer des bases techniques solides</li>
                    <li>Approfondir certaines techniques</li>
                    <li>Préparer un examen de ceinture</li>
                    <li>Reprendre l'entraînement après une pause</li>
                    <li>Gagner en confiance</li>
                    <li>Obtenir des conseils personnalisés pour progresser plus rapidement</li>
                </ul>

                <p>
                    Chaque cours est préparé en fonction de vos besoins et de vos objectifs.
                </p>
            </section>

            <section>
                <h2>Ce que nous pouvons travailler</h2>

                <p>
                    Selon vos attentes, un cours peut porter sur différents aspects du
                    karaté :
                </p>

                <ul>
                    <li>Kihon et techniques fondamentales</li>
                    <li>Kata</li>
                    <li>Kumite</li>
                    <li>Déplacements, postures et précision</li>
                    <li>Préparation aux examens</li>
                </ul>

                <p>
                    L'objectif n'est pas simplement de répéter des mouvements, mais de
                    comprendre pourquoi ils sont exécutés de cette façon et comment les
                    améliorer.
                </p>
            </section>

            <section>
                <h2>Ma philosophie d'enseignement</h2>

                <p>
                    Je crois que chacun apprend différemment. Certains comprennent
                    rapidement avec une démonstration, d'autres ont besoin d'explications
                    détaillées ou d'exercices progressifs.
                </p>

                <p>
                    J'accorde donc beaucoup d'importance à l'adaptation de mon
                    enseignement. J'aime prendre le temps d'observer, d'expliquer et de
                    trouver la méthode qui permettra à chaque élève de progresser avec
                    confiance.
                </p>

                <p>
                    Je ne prétends pas avoir réponse à tout. Lorsqu'une question dépasse
                    mes connaissances, je préfère prendre le temps de vérifier, de faire
                    des recherches ou de consulter des pratiquants plus expérimentés
                    plutôt que de donner une réponse approximative. Je crois qu'un bon
                    enseignant doit lui aussi continuer d'apprendre.
                </p>

                <p>
                    Pour moi, enseigner ne consiste pas seulement à transmettre des
                    techniques, mais aussi à encourager l'autonomie, la discipline et le
                    plaisir d'apprendre.
                </p>
            </section>

            <section>
                <h2>Déroulement d'un cours</h2>

                <p>
                    Chaque cours est adapté à vos objectifs. Selon vos besoins, nous
                    déterminerons ensemble les points à travailler afin que le temps
                    d'entraînement soit le plus bénéfique possible.
                </p>

                <p>
                    Une séance peut inclure une révision des bases, un travail technique,
                    des exercices ciblés, des mises en situation ainsi que des conseils
                    pour poursuivre votre progression entre les cours.
                </p>

                <p>
                    <strong>Durée :</strong> Minimum 1 heure
                    <br />
                    <strong>Lieu :</strong> 167, rue Aberdeen (coin Brooks) Sherbrooke. Il est également possible pour me déplacer.
                </p>
            </section>

            <section>
                <h2>Tarifs</h2>

                <p>
                    35$ de l'heure
                </p>
            </section>

            <section>
                <h2>Réserver un cours</h2>

                <p>
                    Si vous souhaitez discuter de vos objectifs ou obtenir davantage
                    d'informations, n'hésitez pas à me contacter. Il me fera plaisir
                    d'échanger avec vous et de déterminer comment je peux vous accompagner
                    dans votre progression.
                </p>

                <Link href="/contact" className={styles.contactButton}>
                    Me contacter
                </Link>
            </section>
        </main>
    );
}