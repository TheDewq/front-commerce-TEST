import styles from "@/scss/global.scss";
import Link from "next/link"
export default function Home() {
  return (
    <>
      <h2>
        esto es el home
      </h2>

      <Link href={"/logout"}>
        logout
      </Link>
      <br></br>
      <Link href={"/join/sign-in"}>
        sign in
      </Link>
    </>
  );
}
