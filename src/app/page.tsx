import LoginForm from '@/components/LoginForm';

export default function Home() {
  return (
    <main className="py-10 px-3">
      <section className="mx-auto text-center my-6">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-3">
          LayeredLogin
        </h1>
        <p className="text-lg text-muted-foreground">
          The strongest security you won&apos;t even notice
        </p>
      </section>

      <LoginForm />
    </main>
  );
}
