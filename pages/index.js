import { introduction } from "../lib/data";
import Link from "next/link";
export default function HomePage() {
  return (
    <div>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <Link  href={`/volumes`}>
        <button type="text">Go to Volumes</button>
      </Link>
    </div>
  );
}
