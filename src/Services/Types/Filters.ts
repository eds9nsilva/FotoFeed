export interface Filter {
  page: number
  per_page: number
  query: string | undefined
  next_page: string
  prev_page: string
}
