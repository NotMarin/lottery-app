import { Calendar, DollarSign, Play, ReceiptText } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../molecules";
import TicketForm from "./components/ticket-form/ticket-form";
import StatCard, { StatCardProps } from "./components/stat-card/stat-card";
import TableCard from "./components/table-card/table-card";

const cards: StatCardProps[] = [
  {
    title: "Tickets vendidos",
    value: 120,
    icon: <ReceiptText size={16} />,
  },
  {
    title: "Ganancias del día",
    value: "$1,200,000",
    icon: <DollarSign size={16} />,
  },
  {
    title: "Loterías activas",
    value: 5,
    icon: <Play size={16} />,
  },
];

export default function HomeLayout() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div>
      <main className="flex flex-col max-md:items-center">
        <div className="grid w-full gap-4 max-md:grid-cols-1 md:grid-cols-2 lg:grid-cols-[20%_1fr]">
          <div className="flex w-full flex-col gap-4">
            <Card>
              <CardHeader>
                <CardTitle>¡Bienvenido!</CardTitle>
                <CardDescription>Haz el número ganador.</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Administra tus números, loterías activas y seguimiento diario
                  desde un solo lugar.
                </p>
              </CardContent>
              <CardFooter>
                <p className="flex gap-1">
                  <Calendar size={16} />
                  {formattedDate}
                </p>
              </CardFooter>
            </Card>

            <TicketForm />
          </div>
          <div className="flex w-full flex-col gap-4">
            <div className="grid w-full gap-4 max-md:grid-cols-1 lg:grid-cols-3">
              {cards.map((card) => (
                <StatCard key={card.title} {...card} />
              ))}
            </div>
            <TableCard />
          </div>
        </div>
      </main>
    </div>
  );
}
