import {defineField, defineType} from 'sanity'

export const fechaImportante = defineType({
  name: 'fechaImportante',
  title: 'Fecha importante',
  type: 'object',
  fields: [
    defineField({
      name: 'nombre',
      title: 'Nombre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'fecha',
      title: 'Fecha',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {title: 'nombre', subtitle: 'fecha'},
  },
})
