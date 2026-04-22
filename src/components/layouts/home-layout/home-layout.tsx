import { Calendar, DollarSign, Play, ReceiptText } from "lucide-react";
import {
  Card,
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
      <main className="flex flex-col gap-6 max-md:items-center">
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle>¡Bienvenido!</CardTitle>
              <CardDescription>Haz el número ganador.</CardDescription>
            </CardHeader>

            <CardFooter>
              <p className="flex gap-1">
                <Calendar size={16} />
                {formattedDate}
              </p>
            </CardFooter>
          </Card>

          {cards.map((card) => (
            <StatCard key={card.title} {...card} />
          ))}
        </div>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-4">
          <div className="col-span-1">
            <TicketForm />
          </div>

          <div className="col-span-3">
            <TableCard />
          </div>
        </div>
      </main>
    </div>
  );
}
