import {defineField, defineType} from 'sanity'

export const egresado = defineType({
  name: 'egresado',
  title: 'Egresado destacado',
  type: 'object',
  fields: [
    defineField({
      name: 'nombre',
      title: 'Nombre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'carrera',
      title: 'Carrera',
      type: 'string',
    }),
    defineField({
      name: 'foto',
      title: 'Foto',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {title: 'nombre', subtitle: 'carrera', media: 'foto'},
  },
})
