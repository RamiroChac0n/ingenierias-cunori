import {defineField, defineType} from 'sanity'

export const videoDestacado = defineType({
  name: 'videoDestacado',
  title: 'Video destacado',
  type: 'object',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título (referencia interna)',
      type: 'string',
      description: 'Solo para identificar el video en la lista del Studio.',
    }),
    defineField({
      name: 'youtubeUrl',
      title: 'Link de YouTube',
      type: 'url',
      validation: (Rule) => Rule.required().uri({scheme: ['http', 'https']}),
    }),
  ],
  preview: {
    select: {title: 'titulo', subtitle: 'youtubeUrl'},
  },
})
