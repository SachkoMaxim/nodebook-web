import { Book, Filters } from '@/types/book'

export const filterBooks = (books: Book[], filters: Filters): Book[] => {
  return books.filter((book) => {
    return (
      (book.name.toLowerCase().includes(filters.search?.toLowerCase() ?? '') ||
        book.author
          .toLowerCase()
          .includes(filters.search?.toLowerCase() ?? '')) &&
      book.category
        .toLowerCase()
        .includes(filters.category?.toLowerCase() ?? '') &&
      book.averageRating >= (filters.minRating ?? 0)
    )
  })
}