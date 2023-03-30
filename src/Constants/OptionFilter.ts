import { Filter } from "@/Services/Types/Filters"

export const OptionFilter = [
  { id: 1, name: 'Paisagem', value: 'landscape', isActive: false },
  { id: 2, name: 'Retrato', value: 'portrait', isActive: false },
  { id: 3, name: 'Animais', value: 'animals', isActive: false },
  { id: 4, name: 'Comida', value: 'food', isActive: false },
  { id: 5, name: 'Arquitetura', value: 'architecture', isActive: false },
  { id: 6, name: 'Esportes', value: 'sports', isActive: false },
  { id: 7, name: 'Moda', value: 'fashion', isActive: false },
  { id: 8, name: 'Natureza morta', value: 'still_life', isActive: false },
  { id: 9, name: 'Viagens', value: 'travel', isActive: false },
  { id: 10, name: 'Macro', value: 'macro', isActive: false },
  { id: 11, name: 'Preto e branco', value: 'black_and_white', isActive: false },
  { id: 12, name: 'Retrato de animais', value: 'animal_portrait', isActive: false },
  { id: 13, name: 'Fotografia de rua', value: 'street_photography', isActive: false },
  { id: 14, name: 'Arte digital', value: 'digital_art', isActive: false },
  { id: 15, name: 'Fotografia de viagem', value: 'travel_photography', isActive: false },
]

export const DefaultFilter: Filter = {
  page: 1,
  per_page: 80,
  query: undefined,
  next_page: '',
  prev_page: '',
}
