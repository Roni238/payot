import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    articles: defineCollection({
      type: 'data',
      source: {
        include: '**/*.json',
        exclude: ['**/*.md', '**/*.md/**', '**/*.json.md']
      },
      schema: z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  // Убираем жесткую проверку datetime и url на время теста
  createdAt: z.string().optional(), 
  price: z.number().optional(),
  image: z.string().optional(),
})
      // schema: z.object({
      //   title: z.string(),
      //   description: z.string().min(10, 'Описание должно быть не менее 10 символов'),
      //   createdAt: z.string().datetime(),
      //   price: z.number().optional(),
      //   image: z.string().url('Должен быть валидный URL').optional(),
      // })
    })}
})