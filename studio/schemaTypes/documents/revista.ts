import {defineField, defineType} from 'sanity'

export const revista = defineType({
  name: 'revista',
  title: 'Revista',
  type: 'document',
  fields: [
    defineField({
      name: 'nombreRevista',
      title: 'Nombre de la revista',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'descripcion',
      title: 'Descripción',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'portadaEdicionActual',
      title: 'Portada de la edición actual',
      description: 'Opcional — si queda vacía, la tarjeta de edición actual se muestra sin portada.',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'linkEdicionActual',
      title: 'Link edición actual',
      type: 'url',
      validation: (Rule) => Rule.required().uri({scheme: ['http', 'https']}),
    }),
    defineField({
      name: 'anioEdicionActual',
      title: 'Año edición actual',
      type: 'number',
      validation: (Rule) => Rule.required().integer(),
    }),
    defineField({
      name: 'linkListadoEdicionesAnteriores',
      title: 'Link listado de ediciones anteriores',
      type: 'url',
      validation: (Rule) => Rule.uri({scheme: ['http', 'https']}),
    }),
    defineField({
      name: 'emailContacto',
      title: 'Email de contacto (encargado de revista)',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
  ],
  preview: {
    select: {title: 'nombreRevista', subtitle: 'anioEdicionActual'},
  },
})
