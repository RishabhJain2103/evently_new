import { z } from "zod"

export const eventformSchema = z.object({
    title: z.string().min(3, {
      message: "Title must be ateleast 3 characters.",
    }),
    description: z.string().min(3, {
        message: "Description must be ateleast 3 characters.",
    }).max(400{
        message: "Description can be max 400 characters"
    }),
    location: z.string().min(3, {
        message: "location must be ateleast 3 characters.",
    }).max(400{
        message: "location can be max 400 characters"
    }),
    imageUrL: z.string(),
    startDateTime: z.date(),
    endDateTime: z.date(),
    categoryId: z.string(),
    price: z.string(),
    isFree: z.boolean(),
    url : z.string().url()
})