import {defineField, defineType} from 'sanity'

export const evento = defineType({
  name: 'evento',
  title: 'Evento (Galería)',
  type: 'document',
  fields: [
    defineField({
      name: 'tituloEvento',
      title: 'Título del evento',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      description: 'Se usa en /galeria/[slug]',
      type: 'slug',
      options: {source: 'tituloEvento', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'fechaEvento',
      title: 'Fecha del evento',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'soloAnio',
      title: 'Mostrar solo el año',
      description:
        'Actívalo si no se conoce la fecha exacta del evento: el sitio mostrará únicamente el año (el día y el mes de la fecha se ignoran).',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'descripcion',
      title: 'Descripción',
      type: 'text',
    }),
    defineField({
      name: 'imagenPortada',
      title: 'Imagen de portada',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'fotosAlbum',
      title: 'Fotos del álbum',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  orderings: [
    {
      name: 'fechaEventoDesc',
      title: 'Fecha del evento (recientes primero)',
      by: [{field: 'fechaEvento', direction: 'desc'}],
    },
  ],
  preview: {
    select: {title: 'tituloEvento', subtitle: 'fechaEvento', media: 'imagenPortada'},
  },
})
