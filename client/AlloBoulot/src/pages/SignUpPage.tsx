import SignupForm from "@/components/auth/SignupForm";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";

const SignUpPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 grid place-items-center bg-primary/10 p-5">
        <section className="w-full max-w-md">
          <SignupForm />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SignUpPage;
