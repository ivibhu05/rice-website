"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { contactSchema, type ContactFormValues } from "@/lib/contact-schema";
import { riceProducts } from "@/data/products";
import { countries } from "@/data/countries";

const QUANTITY_OPTIONS = [
  "Trial / sample quantity only",
  "1 x 20ft container",
  "1 x 40ft container",
  "Multiple containers",
  "Not sure yet",
];

const PACKAGING_OPTIONS = [
  "Bulk sacks (50kg / Jumbo)",
  "Retail bags (1–25kg)",
  "Private label / custom branding",
  "Not sure yet",
];

export function ContactForm({
  defaultProduct,
  defaultType,
}: {
  defaultProduct?: string;
  defaultType?: "quote" | "sample";
}) {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      requestType: defaultType === "sample" ? "sample" : "quote",
      products: defaultProduct ? [defaultProduct] : [],
      dialCode: "+971",
      country: "",
      quantity: "",
      packaging: "",
      message: "",
    },
  });

  const requestType = watch("requestType");

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSubmitted(true);
    } catch {
      setSubmitError(
        "Something went wrong sending your enquiry. Please try again or email us directly."
      );
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center rounded-lg border border-border bg-card px-8 py-16 text-center">
        <CheckCircle2 className="h-10 w-10 text-gold-600" strokeWidth={1.5} />
        <h3 className="mt-4 font-display text-xl text-navy-950">
          Enquiry received
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-navy-800/70">
          Thanks for reaching out. Our export team will come back to you
          within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Tabs
        value={requestType}
        onValueChange={(v) => setValue("requestType", v as "quote" | "sample")}
      >
        <TabsList>
          <TabsTrigger value="quote">Request a Quote</TabsTrigger>
          <TabsTrigger value="sample">Request a Sample</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" className="mt-1.5" {...register("name")} />
          {errors.name && (
            <p className="mt-1 text-xs text-destructive">
              {errors.name.message}
            </p>
          )}
        </div>
        <div>
          <Label htmlFor="company">Company</Label>
          <Input id="company" className="mt-1.5" {...register("company")} />
          {errors.company && (
            <p className="mt-1 text-xs text-destructive">
              {errors.company.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            className="mt-1.5"
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-destructive">
              {errors.email.message}
            </p>
          )}
        </div>
        <div>
          <Label>Country</Label>
          <Controller
            control={control}
            name="country"
            render={({ field }) => (
              <Select
                value={field.value}
                onValueChange={(v) => {
                  field.onChange(v);
                  const match = countries.find((c) => c.name === v);
                  if (match) setValue("dialCode", match.dialCode);
                }}
              >
                <SelectTrigger className="mt-1.5 w-full">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((c) => (
                    <SelectItem key={c.name} value={c.name}>
                      {c.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.country && (
            <p className="mt-1 text-xs text-destructive">
              {errors.country.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="phone">Phone / WhatsApp</Label>
        <div className="mt-1.5 flex gap-2">
          <Input
            className="w-20 shrink-0 text-center"
            {...register("dialCode")}
            aria-label="Dial code"
          />
          <Input
            id="phone"
            type="tel"
            className="flex-1"
            placeholder="50 123 4567"
            {...register("phone")}
          />
        </div>
        {errors.phone && (
          <p className="mt-1 text-xs text-destructive">
            {errors.phone.message}
          </p>
        )}
      </div>

      <div>
        <Label>Product(s) Interested In</Label>
        <Controller
          control={control}
          name="products"
          render={({ field }) => (
            <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {riceProducts.map((p) => {
                const checked = field.value?.includes(p.name);
                return (
                  <label
                    key={p.slug}
                    className="flex items-center gap-2.5 rounded-md border border-border px-3 py-2 text-sm text-navy-900"
                  >
                    <Checkbox
                      checked={checked}
                      onCheckedChange={(v) => {
                        const current = field.value ?? [];
                        field.onChange(
                          v
                            ? [...current, p.name]
                            : current.filter((n) => n !== p.name)
                        );
                      }}
                    />
                    {p.name}
                  </label>
                );
              })}
            </div>
          )}
        />
        {errors.products && (
          <p className="mt-1 text-xs text-destructive">
            {errors.products.message}
          </p>
        )}
      </div>

      {requestType === "quote" && (
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <Label>Quantity / Order Size</Label>
            <Controller
              control={control}
              name="quantity"
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="mt-1.5 w-full">
                    <SelectValue placeholder="Select quantity" />
                  </SelectTrigger>
                  <SelectContent>
                    {QUANTITY_OPTIONS.map((q) => (
                      <SelectItem key={q} value={q}>
                        {q}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          <div>
            <Label>Packaging Preference</Label>
            <Controller
              control={control}
              name="packaging"
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="mt-1.5 w-full">
                    <SelectValue placeholder="Select packaging" />
                  </SelectTrigger>
                  <SelectContent>
                    {PACKAGING_OPTIONS.map((p) => (
                      <SelectItem key={p} value={p}>
                        {p}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </div>
        </div>
      )}

      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          rows={4}
          className="mt-1.5"
          placeholder={
            requestType === "sample"
              ? "Shipping address for the sample and any specific varieties you'd like to try."
              : "Destination port, target delivery date, or anything else we should know."
          }
          {...register("message")}
        />
      </div>

      {submitError && (
        <p className="text-sm text-destructive">{submitError}</p>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full bg-navy-900 text-sand-50 hover:bg-navy-800 sm:w-auto"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : requestType === "sample" ? (
          "Request a Sample"
        ) : (
          "Request a Quote"
        )}
      </Button>
    </form>
  );
}
