import styles from "@/app/contact/page.module.css";
import {JSX} from "react";

export default function ContactPage(): JSX.Element {
    return (
        <main className={styles.main}>
            <form
                action="https://formspree.io/f/xeeyzvbw"
                method="POST"
                className={styles.form}
            >
                <fieldset className={styles.contactContainer}>
                    <legend className={styles.legend}>Contactez-moi</legend>
                    <label className={styles.label} htmlFor="name">Nom :</label>
                    <input className={styles.input} type="text" id="name" name="name" required/>

                    <label className={styles.label} htmlFor="email">Courriel :</label>
                    <input className={styles.input} type="email" id="email" name="email" required/>

                    <label className={styles.label} htmlFor="message">Message :</label>
                    <textarea className={styles.textarea} id="message" name="message" rows={5} required/>

                    <button className={styles.button} type="submit">Envoyer</button>
                </fieldset>
            </form>
        </main>
    );
}