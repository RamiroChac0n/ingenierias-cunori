import {defineField, defineType} from 'sanity'

export const noticia = defineType({
  name: 'noticia',
  title: 'Noticia',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      description: 'Se usa en /noticias/[slug]',
      type: 'slug',
      options: {source: 'titulo', maxLength: 96},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'fechaPublicacion',
      title: 'Fecha de publicación',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'autor',
      title: 'Autor',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tipoPost',
      title: 'Tipo de post',
      type: 'string',
      options: {
        list: [
          {title: 'Documento', value: 'documento'},
          {title: 'Enlace externo', value: 'enlace_externo'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'imagenDestacada',
      title: 'Imagen destacada',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'documentoPdf',
      title: 'Archivo PDF',
      description: 'Requerido si el tipo de post es "Documento".',
      type: 'file',
      options: {accept: 'application/pdf'},
      hidden: ({parent}) => parent?.tipoPost !== 'documento',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const parent = context.parent as {tipoPost?: string} | undefined
          if (parent?.tipoPost === 'documento' && !value) {
            return 'El archivo PDF es requerido cuando el tipo de post es "Documento"'
          }
          return true
        }),
    }),
    defineField({
      name: 'documentosAdicionales',
      title: 'PDFs adicionales',
      description: 'Opcional. Para publicaciones con más de un documento (ej. varios normativos).',
      type: 'array',
      of: [{type: 'file', options: {accept: 'application/pdf'}}],
      hidden: ({parent}) => parent?.tipoPost !== 'documento',
    }),
    defineField({
      name: 'urlExterna',
      title: 'URL externa',
      description: 'Requerida si el tipo de post es "Enlace externo".',
      type: 'url',
      hidden: ({parent}) => parent?.tipoPost !== 'enlace_externo',
      validation: (Rule) =>
        Rule.uri({scheme: ['http', 'https']}).custom((value, context) => {
          const parent = context.parent as {tipoPost?: string} | undefined
          if (parent?.tipoPost === 'enlace_externo' && !value) {
            return 'La URL externa es requerida cuando el tipo de post es "Enlace externo"'
          }
          return true
        }),
    }),
    defineField({
      name: 'fuenteEnlace',
      title: 'Fuente del enlace externo',
      type: 'string',
      hidden: ({parent}) => parent?.tipoPost !== 'enlace_externo',
    }),
  ],
  orderings: [
    {
      name: 'fechaPublicacionDesc',
      title: 'Fecha de publicación (recientes primero)',
      by: [{field: 'fechaPublicacion', direction: 'desc'}],
    },
  ],
  preview: {
    select: {title: 'titulo', subtitle: 'tipoPost', media: 'imagenDestacada'},
  },
})
