import styles from "../styles/Contact.module.css"
import Head from "next/head";
import Link from "next/link";

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
          <Link href="https://matrix.to/#/@theblueburger:matrix.org"><a>Matrix: @theblueburger:matrix.org</a></Link>
        </div>
    </>
}
