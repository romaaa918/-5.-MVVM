import Image from "next/image"
import { Button } from "@/components/ui/button"
import AppHeader from "@/components/app-header"

export default function CartPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="sticky top-0 z-10">
        <div className="text-xs text-center py-1">9:30</div>
        <AppHeader showBackButton={true} />
        <div className="py-2 px-4">
          <h1 className="text-center font-medium">Ваша корзина</h1>
        </div>
      </div>

      <main className="flex-1 p-4">
        <div className="bg-white rounded-lg p-4 mb-6 flex items-center">
          <Image
            src="/placeholder.svg?height=80&width=80"
            alt="Кроссовки"
            width={80}
            height={80}
            className="object-contain mr-4"
          />
          <div>
            <h2 className="font-bold">Кроссовки</h2>
            <div className="text-xs text-gray-500">для бега, 35 размер, черные</div>
            <div className="font-bold mt-1">500р.</div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 mb-6">
          <div className="flex justify-between mb-2">
            <div className="text-sm">Общая сумма:</div>
            <div className="font-bold">500р.</div>
          </div>

          <div className="mb-4">
            <div className="text-sm text-gray-500">Ваш адрес доставки</div>
            <div className="font-medium">г. Томск, ул. Ленина 329</div>
          </div>

          <Button className="w-full bg-primary text-white rounded-full py-2">Оплатить товар</Button>
        </div>
      </main>

      <footer className="mt-auto border-t border-border">
        <div className="flex justify-around py-2">
          <div className="flex flex-col items-center">
            <div className="h-1 w-8 bg-primary rounded-full"></div>
          </div>
        </div>
      </footer>
    </div>
  )
}

