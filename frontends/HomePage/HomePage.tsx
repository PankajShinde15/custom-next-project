import { useRouter } from "next/router";
import { Header } from "../../components";

export const HomePage = () => {
  const router = useRouter();
  return (
    <>
      <Header />
      <p>Welcome to the Home Page!</p>
      <button type="button" onClick={() => router.push("/bank-accounts")}>
        Bank Accounts
      </button>
    </>
  );
};
