import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-start justify-center px-5 pt-28 pb-20 sm:px-8">
        <p className="font-mono text-sm text-accent">404</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-fg">Page not found.</h1>
        <p className="mt-4 text-muted">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
        <Link href="/" className="mt-8 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-accent-fg">
          Back to home
        </Link>
      </main>
      <Footer />
    </>
  );
}
