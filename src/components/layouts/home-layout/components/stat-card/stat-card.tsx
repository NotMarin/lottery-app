import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/molecules";
import { ReactNode } from "react";

export interface StatCardProps {
  title: string;
  value: string | number;
  icon?: ReactNode;
}

export default function StatCard(props: StatCardProps) {
  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <CardTitle>{props.title}</CardTitle>
        {props.icon && (
          <div className="bg-muted text-muted-foreground flex size-10 shrink-0 items-center justify-center rounded-md font-normal [&>svg]:size-4">
            {props.icon}
          </div>
        )}
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-semibold tracking-tight">{props.value}</p>
      </CardContent>
    </Card>
  );
}
