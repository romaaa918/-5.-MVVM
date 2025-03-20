"use client"

import { useHomeViewModel } from "@/viewmodels/home.viewmodel"
import AppHeader from "@/components/app-header"
import CategoriesMenu from "@/components/categories-menu"
import ProductCard from "@/components/product-card"
import SideMenu from "@/components/side-menu"
import { Loader2 } from "lucide-react"

export default function HomePage() {
  const {
    // Состояние
    products,
    categories,
    loading,
    error,
    selectedCategory,
    isCategoryMenuOpen,
    isMenuOpen,

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
  } = useHomeViewModel()

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="sticky top-0 z-10">
        <div className="text-xs text-center py-1">9:30</div>
        <AppHeader title="Категории" showMenu={true} onMenuClick={toggleMenu} onProfileClick={navigateToProfile} />
        <div className="px-4 py-2">
          <CategoriesMenu
            categories={categories}
            onSelectCategory={selectCategory}
            selectedCategory={selectedCategory}
            isOpen={isCategoryMenuOpen}
            onToggle={toggleCategoryMenu}
            onClose={closeCategoryMenu}
          />
        </div>
      </div>

      <main className="flex-1 p-2">
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : error ? (
          <div className="text-center text-red-500 p-4">{error}</div>
        ) : (
          <div className="grid grid-cols-2 gap-2">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} onClick={navigateToProductDetails} />
            ))}
          </div>
        )}
      </main>

      <footer className="mt-auto border-t border-border">
        <div className="flex justify-around py-2">
          <div className="flex flex-col items-center">
            <div className="h-1 w-8 bg-primary rounded-full"></div>
          </div>
        </div>
      </footer>

      <SideMenu
        isOpen={isMenuOpen}
        onClose={closeMenu}
        onNavigateHome={() => navigateToProductDetails(0)} // Переход на главную
        onNavigateProfile={navigateToProfile}
        onNavigateCart={navigateToCart}
        onNavigateCategories={navigateToCategories}
      />
    </div>
  )
}

