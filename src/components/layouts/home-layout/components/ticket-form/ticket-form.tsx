"use client";

import { Button, Input } from "@/src/components/atoms";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/src/components/molecules";
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from "@/src/components/organisms";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { array, coerce, object, string, infer as zInfer } from "zod";

const formSchema = object({
  ticketNumber: string()
    .min(1, "El número del ticket es obligatorio")
    .max(4, "El número del ticket no puede tener más de 4 dígitos"),
  ticketLottery: array(string())
    .min(1, "Debes seleccionar al menos una lotería")
    .max(3, "No puedes seleccionar más de 3 loterías"),
  ticketValue: coerce
    .number<number>("Requiere un valor numérico")
    .min(50, "El valor del ticket debe ser al menos 50")
    .max(50000, "El valor del ticket no puede exceder 50000"),
  clientName: string()
    .max(50, "El nombre del cliente no puede exceder 50 caracteres")
    .optional(),
});

type FormTypes = zInfer<typeof formSchema>;

const lotteryOptions = [
  { label: "Risaralda", value: "risaralda" },
  { label: "Valle", value: "valle" },
];

const lotteryLabelByValue = Object.fromEntries(
  lotteryOptions.map((option) => [option.value, option.label])
);

export default function TicketForm() {
  const anchor = useComboboxAnchor();

  const form = useForm<FormTypes>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ticketNumber: "",
      ticketLottery: [],
      ticketValue: "" as unknown as number,
      clientName: "",
    },
  });

  function onSubmit(data: FormTypes) {
    console.log("Form data:", data);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Ingresar nuevo ticket</CardTitle>
        <CardDescription>Rellena los campos y juega.</CardDescription>
      </CardHeader>
      <CardContent>
        <form id="ticket-form" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="ticketNumber"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="ticket-form-number">
                    Número del ticket
                  </FieldLabel>
                  <Input
                    {...field}
                    id="ticket-form-number"
                    aria-invalid={fieldState.invalid}
                    placeholder="Ej: 1234"
                    autoComplete="off"
                    type="text"
                    inputMode="numeric"
                    className="h-9"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="ticketValue"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="ticket-form-value">
                    Valor del ticket
                  </FieldLabel>
                  <Input
                    {...field}
                    id="ticket-form-value"
                    aria-invalid={fieldState.invalid}
                    placeholder="Ej: 1000"
                    autoComplete="off"
                    type="number"
                    inputMode="numeric"
                    className="h-9"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="ticketLottery"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="ticket-form-lottery">
                    Loterías
                  </FieldLabel>
                  <Combobox
                    {...field}
                    id="ticket-form-lottery"
                    multiple
                    autoHighlight
                    items={lotteryOptions.map((option) => option.value)}
                    onValueChange={field.onChange}
                  >
                    <ComboboxChips ref={anchor} className="h-9 w-full">
                      <ComboboxValue>
                        {(values) => (
                          <>
                            {values.map((value: string) => (
                              <ComboboxChip key={value}>
                                {lotteryLabelByValue[value] ?? value}
                              </ComboboxChip>
                            ))}
                            <ComboboxChipsInput
                              placeholder={
                                values.length === 0 ? "Selecciona loterías" : ""
                              }
                              aria-invalid={fieldState.invalid}
                            />
                          </>
                        )}
                      </ComboboxValue>
                    </ComboboxChips>
                    <ComboboxContent anchor={anchor}>
                      <ComboboxEmpty>Sin resultados.</ComboboxEmpty>
                      <ComboboxList>
                        {(item) => (
                          <ComboboxItem key={item} value={item}>
                            {lotteryLabelByValue[item] ?? item}
                          </ComboboxItem>
                        )}
                      </ComboboxList>
                    </ComboboxContent>
                  </Combobox>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="clientName"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="ticket-form-client-name">
                    Nombre del cliente (opcional)
                  </FieldLabel>
                  <Input
                    {...field}
                    id="ticket-form-client-name"
                    aria-invalid={fieldState.invalid}
                    placeholder="Ej: Juan Pérez"
                    autoComplete="off"
                    type="text"
                    inputMode="text"
                    className="h-9"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-2">
        <p className="font-medium">Número sugerido: 4352</p>
        <Field className="grid grid-cols-2" orientation="horizontal">
          <Button
            size="lg"
            type="button"
            variant="outline"
            onClick={() => form.reset()}
          >
            Reiniciar
          </Button>
          <Button size="lg" type="submit" form="ticket-form">
            Subir
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
}
