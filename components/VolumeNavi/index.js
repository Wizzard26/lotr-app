import { volumes } from "../../lib/data";
import Link from "next/link";
export default function VolumeNavi() {
  return (
    <ul>
      {volumes.map((volume) => (
        <li key={volume.slug}>
          <Link  href={`/volumes/${volume.slug}`} >{volume.title}</Link>
        </li>
      ))}
    </ul>
  )
}