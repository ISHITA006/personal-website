import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { insertNewsletterSchema } from "../shared/schema";

// Contact form data validation schema
const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().optional(),
  message: z.string().min(10)
});

// Newsletter subscription validation schema
const newsletterSubscriptionSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters" }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" })
});

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint for contact form submission
  app.post('/api/contact', async (req, res) => {
    try {
      // Validate the request body
      const validatedData = contactFormSchema.parse(req.body);
      
      // Here you would typically store the contact form data 
      // or send an email with the information
      
      // For this implementation, we'll just return a success response
      // In a real application, you might use a service like SendGrid, Mailgun, etc.
      
      res.status(200).json({ 
        success: true, 
        message: 'Message received successfully' 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: 'Invalid form data', 
          errors: error.errors 
        });
      }
      
      console.error('Contact form error:', error);
      res.status(500).json({ 
        success: false, 
        message: 'An error occurred while processing your request' 
      });
    }
  });

  // API endpoint for newsletter subscription
  app.post('/api/newsletter/subscribe', async (req, res) => {
    try {
      // Validate the request body
      const validatedData = newsletterSubscriptionSchema.parse(req.body);
      
      // Forward the validated subscription data to the webhook
      // The webhook URL should be stored in an environment variable in production
      const webhookUrl = process.env.NEWSLETTER_WEBHOOK_URL || 'https://your-webhook-url.com';
      
      try {
        const webhookResponse = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(validatedData),
        });
        
        if (!webhookResponse.ok) {
          throw new Error(`Webhook responded with status: ${webhookResponse.status}`);
        }
        
        res.status(200).json({ 
          success: true, 
          message: 'Successfully subscribed to the newsletter!' 
        });
      } catch (webhookError) {
        console.error('Webhook forwarding error:', webhookError);
        res.status(502).json({
          success: false,
          message: 'Unable to process your subscription at this time. Please try again later.'
        });
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: 'Invalid subscription data', 
          errors: error.errors 
        });
      }
      
      console.error('Newsletter subscription error:', error);
      res.status(500).json({ 
        success: false, 
        message: 'An error occurred while processing your subscription' 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
