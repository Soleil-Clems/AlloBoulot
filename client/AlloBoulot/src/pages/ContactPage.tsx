import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import { userInfo } from "@/constant";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 grid place-items-center bg-primary/10 p-5">
        <section className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-center">Contact AlloBoulot</h1>
          <p className="mt-3 text-center text-muted-foreground">
            Cliquez pour nous joindre.
          </p>

          <ul className="mt-8 grid gap-3">
            <li>
              <a
                href="mailto:contact@alloboulot.com"
                className="block rounded-lg border bg-white px-4 py-3 hover:bg-gray-50"
              >
                {userInfo.email}
              </a>
            </li>

            <li>
              <a
                href={userInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg border bg-white px-4 py-3 hover:bg-gray-50"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={`https://maps.google.com/?q=${userInfo.address}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg border bg-white px-4 py-3 hover:bg-gray-50"
              >
                {userInfo.address}
              </a>
            </li>
            <li>
              <a
                href={userInfo.portfolio_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg border bg-white px-4 py-3 hover:bg-gray-50"
              >
                {userInfo.portfolio}
              </a>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}
