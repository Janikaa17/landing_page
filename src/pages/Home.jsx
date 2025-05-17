import faces from "../assets/download.jpg";

export default function Home() {
  return (
    <div
      className="flex flex-col items-center"
      style={{
        minHeight: "calc(100vh - 64px)", // adjust if your navbar height is different
        backgroundColor: "#D4A76A",
        backgroundImage:
          'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'2\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3CfeGaussianBlur stdDeviation=\'0.05\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
      }}
    >
      <h1 className="text-[3.5rem] md:text-[3rem] font-extrabold leading-tight text-black text-center mt-6" style={{ letterSpacing: "-0.03em", maxWidth: "90vw" }}>
        IT DIDN&apos;T START WITH YOU,<br />BUT IT CAN END BECAUSE OF YOU
      </h1>
      <img
        src={faces}
        alt="Diverse faces"
        className="mt-6 rounded-lg shadow-lg w-full h-auto max-w-3xl"
        style={{ maxWidth: "700px" }}
      />
    </div>
  );
}
