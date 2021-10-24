import styles from "../styles/Contact.module.css"
import Head from "next/head";

export default function Contact() {
  return <>
      <Head>
        <title>Contact me</title>
      </Head>
        <div className={styles.contactdialog}>
            <button onClick={() => {
                window.open("mailto:burger@duck.com")
            }}>Email</button>
          <span>Discord: TheBlueBurger#1499</span>
        </div>
    </>
}
