import { defineCollection, z } from "astro:content";

const documentation = defineCollection({
  schema: () => z.object({
    title: z.string(),
    create_date: z.string(),
    update_date: z.string(),
  }),
});

const projects = defineCollection({
  schema: ({ image }) => z.object({
    cover: image(),
    description: z.string(),
    title: z.string(),
    tech_stack: z.array(z.string()),
    create_date: z.string()
  }),
});

export const collections = {
  projects: projects,
  documentation: documentation
};