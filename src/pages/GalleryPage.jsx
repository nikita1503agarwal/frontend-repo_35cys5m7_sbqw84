import { useOutletContext } from 'react-router-dom'
import Gallery from '../components/Gallery'

export default function GalleryPage() {
  const { addToCart, search } = useOutletContext()
  return (
    <div className="py-16">
      <Gallery onAddToCart={addToCart} search={search} />
    </div>
  )
}
