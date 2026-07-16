import type {StructureResolver} from 'sanity/structure'

const SINGLETONS = ['siteSettings', 'homePage', 'revista', 'nuevoIngreso']

function singleton(S: Parameters<StructureResolver>[0], typeName: string, title: string) {
  return S.listItem()
    .title(title)
    .id(typeName)
    .child(S.document().schemaType(typeName).documentId(typeName).title(title))
}

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Contenido del sitio')
    .items([
      singleton(S, 'siteSettings', 'Configuración General del Sitio'),
      singleton(S, 'homePage', 'Home'),
      singleton(S, 'nuevoIngreso', 'Nuevo Ingreso'),
      singleton(S, 'revista', 'Revista'),

      S.divider(),

      S.documentTypeListItem('carrera').title('Carreras'),
      S.documentTypeListItem('noticia').title('Noticias'),
      S.documentTypeListItem('evento').title('Galería (eventos)'),

      S.divider(),

      ...S.documentTypeListItems().filter(
        (listItem) => !SINGLETONS.includes(listItem.getId() as string) &&
          !['carrera', 'noticia', 'evento'].includes(listItem.getId() as string),
      ),
    ])
