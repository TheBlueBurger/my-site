import {useRouter} from "next/router"
import styles from "../styles/Contact.module.css"
import Head from "next/head";

export default function Contact() {
    let router = useRouter();
    return <>
      <Head>
        <title>Contact me</title>
      </Head>
        <div className={styles.contactdialog}>
            <button onClick={() => {
                window.open("mailto:burger@duck.com")
            }}>Email</button>
        </div>
    </>
}
