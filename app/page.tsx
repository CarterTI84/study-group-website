import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Image src="/coming-soon.png" alt="Coming soon!" width={500} height={300} />
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Link href="https://soundcloud.com/2173285">
        <Image src="/soundcloud.webp" alt="Soundcloud" width={500} height={300} />
        </Link>
      </div>
    </div>
  );
}
