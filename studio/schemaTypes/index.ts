import {egresado} from './objects/egresado'
import {videoDestacado} from './objects/videoDestacado'
import {pasoAdmision} from './objects/pasoAdmision'
import {fechaImportante} from './objects/fechaImportante'
import {siteSettings} from './documents/siteSettings'
import {homePage} from './documents/homePage'
import {carrera} from './documents/carrera'
import {noticia} from './documents/noticia'
import {revista} from './documents/revista'
import {nuevoIngreso} from './documents/nuevoIngreso'
import {evento} from './documents/evento'

export const schemaTypes = [
  // objects
  egresado,
  videoDestacado,
  pasoAdmision,
  fechaImportante,
  // documents
  siteSettings,
  homePage,
  carrera,
  noticia,
  revista,
  nuevoIngreso,
  evento,
]
