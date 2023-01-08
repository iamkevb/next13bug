import Link from "next/link";
import OneChild from "./one_child";

export default function One() {
  return <>
    <h1>Page One</h1>
    <OneChild/>
    <Link href='/two'>two</Link>
  </>
}