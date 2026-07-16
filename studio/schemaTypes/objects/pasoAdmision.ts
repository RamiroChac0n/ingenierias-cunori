import {defineField, defineType} from 'sanity'

export const pasoAdmision = defineType({
  name: 'pasoAdmision',
  title: 'Paso del proceso de admisión',
  type: 'object',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'descripcion',
      title: 'Descripción',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {title: 'titulo', subtitle: 'descripcion'},
  },
})
