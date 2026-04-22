"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/src/components/atoms";
import { Edit, FileCheck, Trash } from "lucide-react";

export type TableDayTypes = {
  ticketId: string;
  ticketNumber: number;
  ticketValue: number;
  ticketLottery: string;
  ticketDate: string;
  clientName?: string;
};

export const columns: ColumnDef<TableDayTypes>[] = [
  {
    accessorKey: "ticketNumber",
    header: "Número del Ticket",
  },
  {
    accessorKey: "ticketLottery",
    header: "Lotería ",
  },
  {
    accessorKey: "ticketValue",
    header: "Valor del Ticket",
  },
  {
    accessorKey: "ticketDate",
    header: "Fecha de Venta",
  },
  {
    accessorKey: "clientName",
    header: "Nombre del Cliente",
  },
  {
    id: "actions",
    header: "",
    cell: () => {
      return (
        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            <FileCheck size={16} />
          </Button>
          <Button variant="outline" size="icon">
            <Edit size={16} />
          </Button>
          <Button variant="outline" size="icon" className="text-red-500">
            <Trash size={16} />
          </Button>
        </div>
      );
    },
  },
];
