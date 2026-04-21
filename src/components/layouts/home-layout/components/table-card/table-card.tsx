import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/molecules";
import React from "react";

export default function TableCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tabla del día</CardTitle>
        <CardDescription>
          Descarga el comprobante, edita y elimina tus tickets vendidos.
        </CardDescription>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
}
