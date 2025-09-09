"use client";
// import React, { useEffect } from "react";
// Shadcnui
import {
    Form,
    FormControl,
    FormField, 
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Textarea } from "@/components/ui/textarea"
// React Hook Form
import { useForm } from "react-hook-form";
// Zod
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "name cannot be empty",
  }),
  phone: z
    .string({
      required_error: "phone is required",
      invalid_type_error: "phone must be a string",
    })
    .min(10, {
      message: "phone must be at least 10 characters.",
    })
    .max(14, {
      message: "phone must be at most 14 characters.",
    })
    .regex(/^\d+$/, {
      message: "phone number can only contain digits.",
    }),
  email: z.string().email({
    message: "please use a valid email",
  }),
  message: z.string(),
});

const LpFormContact = ({ label = true, button = "Submit" }) => {
  
  const [loading, setLoading] = useState(false)
      const [url, setURL] = useState(false)
      const form = useForm({
          resolver: zodResolver(formSchema),
          defaultValues: {
              name: "",
              phone: "",
              email: "",
              message: ""
          }
      })
      const handleSubmit = async (values) => {
          setLoading(true)
          const filteredValues = Object.entries(values).reduce((acc, [key, value]) => {
              if (value !== '' && value !== false) {
                  acc[key] = value
              }
              return acc
          }, {})
          try {
              let ip
              try {
                  const ipResponse = await fetch("https://ipinfo.io/?token=9e980d0651edf4", {
                      method: "GET",
                  });
                  if (!ipResponse.ok) {
                      throw new Error(`Failed to fetch IP: ${ipResponse.status}`)
                  }
                  const ipData = await ipResponse.json()
                  ip = ipData?.ip
              } catch (error) {
                  console.error("Error fetching IP:", error)
                  ip = '38.92.49.37'
              }
  
              const response = await fetch("https://brandsapi.pulse-force.com/api/v1/leads", {
                  method: "POST",
                  headers: {
                      "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                      "page_url": url,
                      "user_ip": ip,
                      "lead_data": filteredValues
                  })
              })
  
              if (!response.ok) {
                  const errorData = await response.text()
                  throw new Error(`HTTP error! Status: ${response.status}, Details: ${errorData}`)
              }
  
              window.location.href = "/thankyou"
  
          } catch (error) {
              console.error("Error:", error)
          } finally {
              setLoading(false)
          }
      }
      useEffect(() => {
          setURL(window.location.href)
      }, [setURL])


  return (
    <>
      {/* <form onSubmit={form.handleSubmit(handleSubmit)}>
        <div className="grid grid-cols-1 gap-3">
          <div className="mb-2">
            <Label htmlFor="name" className="font-bold">
              Full Name*
            </Label>
            <Input
              type="name"
              id="name"
              placeholder="Type Name"
              className="bg-transparent border-b-[2px] border-b-black rounded-none placeholder:!pl-0"
            />
          </div>
          <div className="mb-2">
            <Label htmlFor="email" className="font-bold">
              Email Address*
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="Type Email Address"
              className="bg-transparent border-b-[2px] border-b-black rounded-none placeholder:!pl-0"
            />
          </div>
          <div className="mb-2">
            <Label htmlFor="Phone" className="font-bold">
              Phone*
            </Label>
            <Input
              type="phone"
              id="phone"
              placeholder="(000) 000-0000"
              className="bg-transparent border-b-[2px] border-b-black rounded-none placeholder:!pl-0"
            />
          </div>
          <div className="mb-2">
            <Label htmlFor="url" className="font-bold">
              Website*
            </Label>
            <Input
              type="url"
              id="url"
              placeholder="Type Your Website"
              className="bg-transparent border-b-[2px] border-b-black rounded-none placeholder:!pl-0"
            />
          </div>
          <Button
            type="submit"
            variant="outline"
            className="bg-[linear-gradient(180deg,_#351a4b,_#723389)] text-white rounded-none"
          >
            Increase My Sales
          </Button>
        </div>
      </form> */}


<Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="grid grid-cols-1 gap-5">
                <div className="grid grid-cols-1 gap-5">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                {label && <FormLabel>Full Name <span className="text-primary">*</span></FormLabel>}
                                <FormControl>
                                    <Input className="bg-transparent h-[40px] border-b-[2px] border-b-black rounded-none placeholder:!pl-0 !px-0 focus-visible:outline-[#fff]" placeholder="Type Name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                {label && <FormLabel>Email Address <span className="text-primary">*</span></FormLabel>}
                                <FormControl>
                                    <Input className="bg-transparent h-[40px] border-b-[2px] border-b-black rounded-none placeholder:!pl-0 !px-0 focus-visible:outline-[#fff]" placeholder="Type Email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            {label && <FormLabel>Phone <span className="text-primary">*</span></FormLabel>}
                            <FormControl>
                                <Input className="bg-transparent h-[40px] border-b-[2px] border-b-black rounded-none placeholder:!pl-0 !px-0 focus-visible:outline-[#fff]" placeholder="(000) 000-0000" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            {label && <FormLabel>Website</FormLabel>}
                            <FormControl>
                                <Textarea className="bg-transparent border-b-[2px] border-b-black rounded-none  placeholder:!p-0 !min-h-[10px] !p-0 focus-visible:outline-[#fff]" placeholder="Tell us about your project..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <button type="submit" className="bg-[linear-gradient(180deg,_#351a4b,_#723389)] text-white rounded-none py-[10px]">
                  Increase My Sales  {/* {loading ? "Loading..." : button} */}
                </button>
            </form>
        </Form>

    </>
  );
};

export default LpFormContact;
