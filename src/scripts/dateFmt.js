import { format, isValid } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function dateFmt(rawDate) {
  let dateObj

  if (typeof rawDate === 'string' && isValid(new Date(rawDate)))
    dateObj = new Date(rawDate)
  else if (rawDate instanceof Date)
    dateObj = rawDate
  else {
    return ''
  }
  
  const formattedDate = format(dateObj, 'MMMM dd, yyyy', { locale: ptBR })
  return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1)
}