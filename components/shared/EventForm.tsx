"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form';
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {Form,FormControl,FormDescription,FormField,FormItem,FormLabel,FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { eventformSchema } from "@/lib/validator";
import { eventDefaultValues } from "@/constants";



type EventFromProps={
    userId: string
    type: "Create"| "Update"
}

const EventForm = ( { userId , type}: EventFromProps) => {
    const initialValues=eventDefaultValues;

    const form = useForm<z.infer<typeof eventformSchema>>({
        resolver: zodResolver(eventformSchema),
        defaultValues: initialValues
    })
     
    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof eventformSchema>) {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      console.log(values)
    }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div className="flex flex-col gap-5 flex-row">
            <FormField
              control={form.control}
              name="Title"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input placeholder="Event Title" {...field} className="input-field"/>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
        </div>
        
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default EventForm