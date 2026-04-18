import { Calendar } from "lucide-react";

export default function Home() {
  const today = new Date();
  const formattedDate = `${String(today.getDate()).padStart(2, "0")}-${String(
    today.getMonth() + 1
  ).padStart(2, "0")}-${today.getFullYear()}`;

  return (
    <main className="flex flex-col max-md:items-center">
      <div className="max-md:text-center">
        <h2 className="text-xl font-medium">¡Bienvenido!</h2>
        <p className="text-muted-foreground text-sm">Haz el número ganador.</p>
        <p className="text-muted-foreground flex items-center gap-1 text-sm max-md:justify-center">
          <Calendar size={16} />
          {formattedDate}
        </p>
      </div>
    </main>
  );
}
