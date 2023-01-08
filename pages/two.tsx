import Link from "next/link";
import TwoChild from "./two_child";

export default function Two() {
  return <>
    <h1>Page Two</h1>
    <TwoChild/>
    <Link href='/'>home</Link>
  </>
}