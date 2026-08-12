function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Buenos días";
  if (hour < 20) return "Buenas tardes";
  return "Buenas noches";
}

export function WelcomeBanner({ firstName }: { firstName: string }) {
  return (
    <div>
      <h1 className="font-display text-2xl tracking-tighter sm:text-3xl">
        {getGreeting()}, {firstName}
      </h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Esto es lo que ha pasado con tu aprendizaje.
      </p>
    </div>
  );
}
