import VolumeNavi from "../../components/VolumeNavi";
import Image from "next/image";
import { volumes } from "../../lib/data";
import Link from "next/link";
export default function TheReturnOfTheKing() {
  const site = 'the-return-of-the-king'
  const data = volumes.find((volume) => volume.slug === site )

  return (
    <>
      <h2>{data.title}</h2>
      <VolumeNavi/>
      <Image
        src={data.cover}
        alt={data.title}
        width={140}
        height={230}
      />
      <p>{data.description}</p>
      <ul>
        {data.books.map((book)=>(
          <li key={book.ordinal}>
            <strong>{book.ordinal}</strong>
            <p>{book.title}</p>
          </li>
        ))}
      </ul>
      <Link  href={`/volumes`}>Back to Volumes overview</Link>
    </>
  )
}