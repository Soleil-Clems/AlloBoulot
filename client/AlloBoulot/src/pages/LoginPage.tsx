import LoginForm from "@/components/auth/LoginForm";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 grid place-items-center bg-primary/10 p-5">
        <section className="w-full max-w-md">
          <LoginForm />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;

