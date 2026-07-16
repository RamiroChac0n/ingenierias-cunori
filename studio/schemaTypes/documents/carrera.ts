import {defineField, defineType} from 'sanity'

export const carrera = defineType({
  name: 'carrera',
  title: 'Carrera',
  type: 'document',
  fields: [
    defineField({
      name: 'nombre',
      title: 'Nombre de la carrera',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      description: 'Se usa en /pensum/[slug]',
      type: 'slug',
      options: {source: 'nombre', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'descripcionCorta',
      title: 'Descripción corta',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'semestres',
      title: 'Semestres',
      type: 'number',
      validation: (Rule) => Rule.required().positive().integer(),
    }),
    defineField({
      name: 'creditos',
      title: 'Créditos',
      type: 'number',
      validation: (Rule) => Rule.required().positive().integer(),
    }),
    defineField({
      name: 'sistemaCreditos',
      title: 'Sistema de créditos',
      type: 'string',
      options: {
        list: [
          {title: 'Tradicional', value: 'tradicional'},
          {title: 'CLAR', value: 'CLAR'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'areasAcademicas',
      title: 'Áreas académicas',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'pensumImages',
      title: 'Imágenes del pénsum',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'pensumPdf',
      title: 'PDF del pénsum',
      type: 'file',
      options: {accept: 'application/pdf'},
    }),
    defineField({
      name: 'updateNote',
      title: 'Nota de vigencia/actualización',
      type: 'text',
    }),
    defineField({
      name: 'lastUpdated',
      title: 'Última actualización',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {title: 'nombre', subtitle: 'sistemaCreditos', media: 'pensumImages.0'},
  },
})
