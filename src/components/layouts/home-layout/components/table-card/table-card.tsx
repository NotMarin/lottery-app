import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/molecules";
import { columns, TableDayTypes } from "./columns";
import { DataTable } from "@/src/components/organisms";

async function getData(): Promise<TableDayTypes[]> {
  return [
    {
      ticketId: "1",
      ticketNumber: 12345,
      ticketValue: 100,
      ticketLottery: "Lotería Nacional",
      ticketDate: "2024-06-01",
      clientName: "Juan Pérez",
    },
    {
      ticketId: "2",
      ticketNumber: 67890,
      ticketValue: 200,
      ticketLottery: "Lotería de la Ciudad",
      ticketDate: "2024-06-01",
      clientName: "María Gómez",
    },
    {
      ticketId: "3",
      ticketNumber: 54321,
      ticketValue: 150,
      ticketLottery: "Lotería de la Provincia",
      ticketDate: "2024-06-01",
      clientName: "Carlos Rodríguez",
    },
  ];
}

export default async function TableDayCard() {
  const data = await getData();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tabla del día</CardTitle>
        <CardDescription>
          Descarga el comprobante, edita y elimina tus tickets vendidos.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={data} />
      </CardContent>
    </Card>
  );
}
