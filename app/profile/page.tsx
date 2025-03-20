import Image from "next/image"
import { Settings } from "lucide-react"
import AppHeader from "@/components/app-header"

export default function ProfilePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="sticky top-0 z-10">
        <div className="text-xs text-center py-1">9:30</div>
        <AppHeader showBackButton={true} />
      </div>

      <main className="flex-1 p-4">
        <div className="flex justify-center mb-6 relative">
          <Image
            src="/placeholder.svg?height=120&width=120"
            alt="Profile"
            width={120}
            height={120}
            className="rounded-full bg-secondary"
          />
          <div className="absolute bottom-0 right-1/3">
            <Settings size={20} className="text-foreground" />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <div className="text-sm text-gray-500">Ваше имя</div>
            <div className="font-medium">Василий</div>
          </div>

          <div>
            <div className="text-sm text-gray-500">Ваша фамилия</div>
            <div className="font-medium">Васильев</div>
          </div>

          <div>
            <div className="text-sm text-gray-500">Ваше отчество</div>
            <div className="font-medium">Васильевич</div>
          </div>

          <div>
            <div className="text-sm text-gray-500">Ваш номер телефона</div>
            <div className="font-medium">89134134422</div>
          </div>

          <div>
            <div className="text-sm text-gray-500">Ваш адрес доставки</div>
            <div className="font-medium">г. Томск, ул. Ленина 329</div>
          </div>
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

