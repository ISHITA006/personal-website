import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Mail } from "lucide-react";

const newsletterSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters" }),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
});

type NewsletterValues = z.infer<typeof newsletterSchema>;

const NewsletterSubscription = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<NewsletterValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  const onSubmit = async (data: NewsletterValues) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Successfully subscribed!",
          description:
            "Thank you for subscribing to our newsletter. You'll receive updates on AI and automation insights.",
          variant: "default",
        });
        form.reset();
      } else {
        throw new Error(result.message || "Failed to subscribe to newsletter");
      }
    } catch (error) {
      toast({
        title: "Subscription failed",
        description:
          error instanceof Error
            ? error.message
            : "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="overflow-hidden">
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mr-4">
          <Mail className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">Stay Updated</h3>
          <p className="text-gray-600">
            Get the latest insights on AI and automation
          </p>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">
                    First Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="John"
                      {...field}
                      className="w-full px-4 py-2 border border-gray-300 bg-white rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition duration-200"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">
                    Last Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Smith"
                      {...field}
                      className="w-full px-4 py-2 border border-gray-300 bg-white rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition duration-200"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="your.email@example.com"
                    type="email"
                    {...field}
                    className="w-full px-4 py-2 border border-gray-300 bg-white rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition duration-200"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-white hover:bg-black transition-colors duration-300"
          >
            {isSubmitting ? "Subscribing..." : "Subscribe to Newsletter"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default NewsletterSubscription;
