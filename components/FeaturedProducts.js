'use client'

import React, { useState, useEffect } from 'react'
import SafeImage from './SafeImage'
import Link from 'next/link'
import { ShoppingCart, Star, Heart } from 'lucide-react'
import { buildApiUrl } from '../utils/api'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'
import { useToast } from './Toaster'



const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        setLoading(true)
        setError(null)
        const res = await fetch(buildApiUrl('/products?featured=true'))
        if (!res.ok) throw new Error('Failed to fetch featured products')
        const data = await res.json()
        setFeaturedProducts(data.data.products || [])
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchFeatured()
  }, [])

  return (
    <section className="py-20 bg-vibe-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-vibe-brown mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-vibe-brown/70 max-w-2xl mx-auto">
            Our most loved snacks, carefully selected for their amazing taste and nutritional value
          </p>
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="text-center text-vibe-brown">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.length === 0 ? (
              <div className="col-span-full text-center text-vibe-brown/60">No featured products found.</div>
            ) : (
              featuredProducts.map((product) => (
                <ProductCard key={product._id || product.id} product={product} />
              ))
            )}
          </div>
        )}

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-8 py-4 bg-vibe-cookie text-vibe-brown font-semibold rounded-full hover:bg-vibe-accent transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts 