import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Image
        src={"/benwin.png"}
        alt="Vercel Logo"
        // className={styles.vercelLogo}
        width={100}
        height={100}
        priority
      />
    </div>
  );
}
