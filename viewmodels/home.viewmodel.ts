"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import type { Product, Category } from "@/models/product.model"
import { ProductService } from "@/services/product.service"

export function useHomeViewModel() {
  const router = useRouter()
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState<boolean>(false)

  // Загрузка данных при инициализации
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const [productsData, categoriesData] = await Promise.all([
          ProductService.getProducts(),
          ProductService.getCategories(),
        ])
        setProducts(productsData)
        setCategories(categoriesData)
        setError(null)
      } catch (err) {
        setError("Ошибка при загрузке данных")
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  // Фильтрация продуктов по категории
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === categories.find((c) => c.id === selectedCategory)?.name)
    : products

  // Методы для взаимодействия с UI

  // Управление категориями
  const selectCategory = (categoryId: number | null) => {
    setSelectedCategory(categoryId)
  }

  const toggleCategoryMenu = () => {
    setIsCategoryMenuOpen(!isCategoryMenuOpen)
  }

  const closeCategoryMenu = () => {
    setIsCategoryMenuOpen(false)
  }

  // Навигация
  const navigateToProductDetails = (productId: number) => {
    router.push(`/product/${productId}`)
  }

  const navigateToProfile = () => {
    router.push("/profile")
  }

  const navigateToCart = () => {
    router.push("/cart")
  }

  const navigateToCategories = () => {
    router.push("/categories")
  }

  // Управление боковым меню
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Действия с товарами
  const addToCart = (productId: number) => {
    // Здесь была бы логика добавления в корзину
    console.log(`Добавлен товар с ID ${productId} в корзину`)
    // После добавления можно перейти в корзину
    // router.push('/cart');
  }

  const addToFavorites = (productId: number) => {
    // Здесь была бы логика добавления в избранное
    console.log(`Добавлен товар с ID ${productId} в избранное`)
  }

  return {
    // Состояние
    products: filteredProducts,
    categories,
    loading,
    error,
    selectedCategory,
    isMenuOpen,
    isCategoryMenuOpen,

    // Методы
    selectCategory,
    toggleCategoryMenu,
    closeCategoryMenu,
    navigateToProductDetails,
    navigateToProfile,
    navigateToCart,
    navigateToCategories,
    toggleMenu,
    closeMenu,
    addToCart,
    addToFavorites,
  }
}

