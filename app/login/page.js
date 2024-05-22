import LoginForm from "@/components/Auth/LoginForm";
import Link from "next/link";

const loginPage = () => {
  return (
    <main>
      <section className="h-screen grid place-items-center">
        <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
          <h4 className="font-bold text-2xl">Sign in</h4>
         <LoginForm/>

          <span className="text-center text-xs text-gray-500">
            Do not have an account?
            <Link
              className="underline hover:text-indigo-600"
              href="/registration"
            >
              Register
            </Link>
          </span>
        </div>
      </section>
    </main>
  );
};

export default loginPage;
