import Image from "next/legacy/image";
import bgImage from "../public/bg_placeholder.jpg";
import "../app/globals.css";

export default function Home() {
  return (
    <main
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Image
        src={bgImage}
        alt="Background"
        layout="fill"
        objectFit="cover"
        style={{ opacity: 0.5 }}
      />
      <div
        className="flex flex-col items-center gap-2"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "var(--foreground)",
          textAlign: "center",
          fontFamily: "'Grape Nuts', cursive",
        }}
      >
        <h1 className="text-5xl my-3">Sito in costruzione</h1>
        <p className="text-2xl my-2">
          Torna presto per scoprire tutte le novità!
        </p>
        <div>
          <p className="text-2xl">
            Per ulteriori informazioni scrivimi a:{" "}
            <a href="mailto:info@bloomingmoves.ch">info@bloomingmoves.ch</a>
          </p>
          <p className="text-2xl">
            Oppure seguimi su Instagram:{" "}
            <a
              href="https://www.instagram.com/mary_lin_dance/profilecard/?igsh=dXVlczc5NWlldG9i"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--foreground)" }}
            >
              @mary_lin_dance
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
