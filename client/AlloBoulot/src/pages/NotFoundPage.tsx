import Footer from "@/components/Footer";
import Header from "@/components/header/Header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import Image404 from "@/assets/404-error.png"

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 grid place-items-center bg-primary/10 p-5">
        <section className="w-full max-w-md flex flex-col gap-5 items-center">
          <img src={Image404} alt="" />
          <p className="text-2xl font-bold">La page démandée n'existe pas</p>
          <Button asChild>
            <Link to={'/'}> Retourner </Link>
            </Button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NotFoundPage;
