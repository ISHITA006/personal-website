import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import emailjs from 'emailjs-com';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

export const sendContactForm = async (data: {
  name: string;
  email: string;
  subject?: string;
  message: string;
}) => {
  try {
    const result = await emailjs.send(
      'service_65jgi6r',    
      'template_arj2s8k',
      {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject || 'No Subject',
        message: data.message,
      },
      'LBjA3Z9HrPRD9IZbc' // EmailJS public key
    );

    return result;
  } catch (error) {
    throw new Error('Failed to send email: ' + error);
  }
};
