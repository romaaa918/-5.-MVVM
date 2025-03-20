import type { Product, Category } from "@/models/product.model"

// Имитация API-запросов
export class ProductService {
  static async getProducts(): Promise<Product[]> {
    // В реальном приложении здесь был бы запрос к API
    return Promise.resolve([
      {
        id: 1,
        name: "Футбол",
        price: 1000,
        category: "Футбол",
        image: "/placeholder.svg?height=120&width=120",
      },
      {
        id: 2,
        name: "Клюшка",
        price: 1500,
        category: "Хоккей с шайбой",
        image: "/placeholder.svg?height=120&width=120",
      },
      {
        id: 3,
        name: "Ракетка",
        price: 500,
        category: "Настольный теннис",
        image: "/placeholder.svg?height=120&width=120",
      },
      {
        id: 4,
        name: "Коньки",
        price: 2000,
        category: "Фигурное катание",
        image: "/placeholder.svg?height=120&width=120",
      },
      {
        id: 5,
        name: "Скейтборд",
        price: 1000,
        category: "Скейтбординг",
        image: "/placeholder.svg?height=120&width=120",
      },
      {
        id: 6,
        name: "Ракетка",
        price: 1500,
        category: "Большой теннис",
        image: "/placeholder.svg?height=120&width=120",
      },
      {
        id: 7,
        name: "Велосипед",
        price: 5000,
        category: "Велоспорт",
        image: "/placeholder.svg?height=120&width=120",
      },
      {
        id: 8,
        name: "Защита",
        price: 500,
        category: "Скейтбординг",
        image: "/placeholder.svg?height=120&width=120",
      },
    ])
  }

  static async getCategories(): Promise<Category[]> {
    // В реальном приложении здесь был бы запрос к API
    return Promise.resolve([
      { id: 1, name: "Хоккей с шайбой", image: "/placeholder.svg?height=40&width=40" },
      { id: 2, name: "Настольный теннис", image: "/placeholder.svg?height=40&width=40" },
      { id: 3, name: "Футбол", image: "/placeholder.svg?height=40&width=40" },
      { id: 4, name: "Баскетбол", image: "/placeholder.svg?height=40&width=40" },
      { id: 5, name: "Волейбол", image: "/placeholder.svg?height=40&width=40" },
      { id: 6, name: "Большой теннис", image: "/placeholder.svg?height=40&width=40" },
      { id: 7, name: "Велоспорт", image: "/placeholder.svg?height=40&width=40" },
      { id: 8, name: "Скейтбординг", image: "/placeholder.svg?height=40&width=40" },
    ])
  }
}

