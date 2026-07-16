import {defineField, defineType} from 'sanity'

export const nuevoIngreso = defineType({
  name: 'nuevoIngreso',
  title: 'Nuevo Ingreso',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitulo',
      title: 'Subtítulo/mensaje motivacional',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pasosAdmision',
      title: 'Pasos del proceso de admisión',
      type: 'array',
      of: [{type: 'pasoAdmision'}],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'requisitos',
      title: 'Requisitos',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'fechasImportantes',
      title: 'Fechas importantes',
      type: 'array',
      of: [{type: 'fechaImportante'}],
    }),
    defineField({
      name: 'whatsapp',
      title: 'Link/número de WhatsApp',
      description: 'Opcional — si está vacío, se usa el WhatsApp general de Configuración del Sitio (si existe).',
      type: 'string',
    }),
  ],
  preview: {
    select: {title: 'titulo'},
    prepare: ({title}) => ({title: title ?? 'Nuevo Ingreso', subtitle: 'Página de admisiones'}),
  },
})
