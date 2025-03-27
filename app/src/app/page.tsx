import Image from "next/image";
import { getSamples } from "./actions";

export default async function Home() {
  const samples = await getSamples()

  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-center bg-gradient-defang">
      <h1 className="text-4xl font-bold text-white">Next.js &times; Defang</h1>

      {/* pretty print json samples */}
      <div className="mt-8 w-full max-w-4xl rounded-lg border border-gray-700 bg-gray-800 p-4">
        <pre className="text-sm text-gray-200">
          {JSON.stringify(samples, null, 2)}
        </pre>
      </div>

    </main>
  );
}
