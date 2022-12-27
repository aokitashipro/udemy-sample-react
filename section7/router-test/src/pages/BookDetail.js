import { useParams } from 'react-router-dom'
import { getBook } from '../functions/book'

const BookDetail = () => {
  const params = useParams()

  console.log(params)
  const book = getBook(parseInt(params.id, 10))

  return (<>
    id: { book.id } <br />
    title: {book.title }
  </>)
}


export default BookDetail