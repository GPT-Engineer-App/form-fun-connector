import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

const SellYourBike = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [error, setError] = useState(null);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setError(null);
    try {
      const templateParams = {
        to_email: 'a0jankowski@gmail.com',
        from_name: `${data.firstName} ${data.lastName}`,
        message: `
          Name: ${data.firstName} ${data.lastName}
          Email: ${data.email}
          Phone: ${data.phone}
          Postcode: ${data.postcode}
          Part Exchange: ${data.partExchange}
          Manufacturer: ${data.manufacturer}
          Model: ${data.model}
          Frame Size: ${data.frameSize}
          Issues: ${data.issues}
          How they heard about us: ${data.heardAbout}
          Other: ${data.other}
          Marketing consent: ${data.marketing ? 'Yes' : 'No'}
        `
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      toast.success("Form submitted successfully!");
    } catch (error) {
      console.error("EmailJS error:", error);
      setError("Failed to submit form. Please try again or contact support.");
      toast.error("Failed to submit form. Please try again.");
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-yellow-500 mb-8">GET A USED BIKE QUOTE</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="mb-4">We are quite selective in which bikes we buy. Key factors include:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Cost at least £600 when brand new</li>
              <li>Must be from a reputable brand</li>
              <li>No structural damage, cracks or dents to the frame</li>
              <li>The only folding bikes we buy are Brompton's</li>
              <li>We will NOT buy Carrera, Triban, Apollo, Planet X etc.</li>
              <li>We will NOT buy bikes over 9 years old</li>
              <li>We will not buy triathlon/tt bikes</li>
            </ul>
            <p className="mb-4">Your bike may well meet our buying criteria, but there is still a chance we may not want to buy it. If you are unsure on whether your bike ticks all the criteria boxes please don't hesitate to get in touch - worst case scenario is we say: no thanks.</p>
            <p className="font-bold">Please fill out the form here. We will respond to you via WhatsApp with further details about the pictures we require.</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" {...register("firstName", { required: true })} className="bg-yellow-500 text-black" />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" {...register("lastName", { required: true })} className="bg-yellow-500 text-black" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" {...register("email", { required: true })} className="bg-yellow-500 text-black" />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" {...register("phone", { required: true })} className="bg-yellow-500 text-black" />
              </div>
            </div>
            <div>
              <Label htmlFor="postcode">Postcode (we will quote for both drop off and collection)</Label>
              <Input id="postcode" {...register("postcode", { required: true })} className="bg-yellow-500 text-black" />
            </div>
            <div>
              <Label>Are you looking to part exchange? *</Label>
              <RadioGroup defaultValue="no" onValueChange={(value) => register("partExchange")(value)}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="yes" />
                  <Label htmlFor="yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="no" />
                  <Label htmlFor="no">No</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="manufacturer">Manufacturer</Label>
                <Input id="manufacturer" {...register("manufacturer", { required: true })} className="bg-yellow-500 text-black" />
              </div>
              <div>
                <Label htmlFor="model">Model</Label>
                <Input id="model" {...register("model", { required: true })} className="bg-yellow-500 text-black" />
              </div>
            </div>
            <div>
              <Label htmlFor="frameSize">Frame size (Leave blank for Brompton)</Label>
              <Input id="frameSize" {...register("frameSize")} className="bg-yellow-500 text-black" />
            </div>
            <div>
              <Label htmlFor="issues">Any issues, faults, damage etc. to note? Please specify here</Label>
              <Textarea id="issues" {...register("issues")} className="bg-yellow-500 text-black" />
            </div>
            <div>
              <Label>How did you hear about us? *</Label>
              <RadioGroup defaultValue="google">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="google" id="google" />
                  <Label htmlFor="google">Google Search</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="instagram" id="instagram" />
                  <Label htmlFor="instagram">Sponsored Instagram Post</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="facebook" id="facebook" />
                  <Label htmlFor="facebook">Sponsored Facebook Post</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="marketplace" id="marketplace" />
                  <Label htmlFor="marketplace">Gumtree of Facebook Marketplace Listing</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="repeat" id="repeat" />
                  <Label htmlFor="repeat">Repeat Customer</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="recommendation" id="recommendation" />
                  <Label htmlFor="recommendation">Recommendation</Label>
                </div>
              </RadioGroup>
            </div>
            <div>
              <Label htmlFor="other">Other (Please Specify)</Label>
              <Input id="other" {...register("other")} className="bg-yellow-500 text-black" />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="marketing" />
              <Label htmlFor="marketing">Are you happy to hear from us by email with our latest offers?</Label>
            </div>
            <Button type="submit" disabled={isSubmitting} className="bg-yellow-500 text-black hover:bg-yellow-600">
              {isSubmitting ? 'Submitting...' : 'SUBMIT'}
            </Button>
          </form>
          {error && (
            <Alert variant="destructive" className="mt-4">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default SellYourBike;
