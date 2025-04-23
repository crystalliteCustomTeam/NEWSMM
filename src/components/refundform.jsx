"use client"
// React Hook Form
import { useForm } from "react-hook-form"
// Zod
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
// Shadcnui
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
// React
import { useEffect, useState } from "react"

const formSchema = z.object({
    name: z.string().min(1, {
        message: "name cannot be empty",
    }),
    phone: z.string({
        required_error: "phone is required",
    }).min(7, {
        message: "phone must be at least 7 characters.",
    }).max(14, {
        message: "phone must be at most 14 characters.",
    }).regex(/^\d+$/, {
        message: "phone number can only contain digits.",
    }),
    email: z.string().email({
        message: "please use a valid email",
    }),
    message: z.string(),
    payment_method: z.string().min(1, {
        message: "payment method cannot be empty",
    }),
    card_digits: z.string({
        required_error: "card didgits is required",
    }).min(4, {
        message: "card didgits must be at least 4 characters.",
    }).max(4, {
        message: "card didgits must be at most 4 characters.",
    }).regex(/^\d+$/, {
        message: "card didgits can only contain digits.",
    }),
    invoice_num: z.string().min(1, {
        message: "invoice num cannot be empty",
    }),
    order_date: z.date({
        required_error: "order date is required.",
    }),
    refund_reason: z.string().min(1, {
        message: "refund reason cannot be empty",
    }),
})

const RefundForm = () => {
    const [loading, setLoading] = useState(false)
    const [url, setURL] = useState(false)
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            phone: "",
            email: "",
            message: "",
            payment_method: "",
            card_digits: "",
            invoice_num: "",
            order_date: "",
            refund_reason: ""
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
        console.log(filteredValues)

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
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="grid grid-cols-1 gap-5">
                <div className="grid grid-cols-2 gap-5">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Name" {...field} />
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
                                <FormControl>
                                    <Input placeholder="Email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Phone" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="payment_method"
                        render={({ field }) => (
                            <FormItem>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Payment Method" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="Card">Card</SelectItem>
                                        <SelectItem value="Cheque">Cheque</SelectItem>
                                        <SelectItem value="Wire">Wire</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="card_digits"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Last 4 Card Digits" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="invoice_num"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Invoice Number" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="order_date"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "",
                                                    !field.value && "text-[#989898]"
                                                )}
                                            >
                                                {field.value ? (
                                                    format(field.value, "PPP")
                                                ) : (
                                                    <span>Order Date</span>
                                                )}
                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={field.value}
                                            onSelect={field.onChange}
                                            disabled={(date) =>
                                                date > new Date() || date < new Date("1900-01-01")
                                            }
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="refund_reason"
                        render={({ field }) => (
                            <FormItem>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Refund Reason" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="Pre-delivery refund">Pre-delivery refund</SelectItem>
                                        <SelectItem value="Post-delivery refund">Post-delivery refund</SelectItem>
                                        <SelectItem value="Inactivity">Inactivity</SelectItem>
                                        <SelectItem value="Other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <Textarea placeholder="Tell us about your project..." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <button type="submit" className="  bg-secondary    h-[50px] inline-flex justify-center items-center text-[16px] font-medium text-white rounded-md transition-all duration-300 hover:bg-black hover:text-white">
                    {loading ? "Loading..." : "Submit"}
                </button>
            </form>
        </Form>
    )
}

export default RefundForm