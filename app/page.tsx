"use client"

import { ProductCard } from "@/components/product-card"
import { CartSidebar } from "@/components/cart-sidebar"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/components/cart-provider"

const products = [
  {
    id: "1",
    name: "TechnoWizard Pro Max",
    price: 1299.99,
    image: "/placeholder.svg?height=300&width=300",
    description: "Dispositivo mágico com 128GB, câmera tripla 50MP e tela Super AMOLED de 6.4 polegadas",
  },
  {
    id: "2",
    name: "SuperGadget Mágico",
    price: 2499.9,
    image: "/placeholder.svg?height=300&width=300",
    description: "Aparelho fantástico com processador turbo, 8GB RAM, SSD 256GB e tela 15.6 polegadas",
  },
  {
    id: "3",
    name: "SoundBlaster Wonder",
    price: 199.99,
    image: "/placeholder.svg?height=300&width=300",
    description: "Fone mágico sem fio com até 40h de bateria e som cristalino",
  },
  {
    id: "4",
    name: "MegaTreco Fantástico",
    price: 1899.0,
    image: "/placeholder.svg?height=300&width=300",
    description: "Tela gigante de 50 polegadas 4K com sistema inteligente e cores vibrantes",
  },
  {
    id: "5",
    name: "GameMaster Supreme",
    price: 3999.99,
    image: "/placeholder.svg?height=300&width=300",
    description: "Console de nova geração com SSD ultra-rápido e controle sensacional",
  },
  {
    id: "6",
    name: "GigaApparelho Incrível",
    price: 2299.0,
    image: "/placeholder.svg?height=300&width=300",
    description: "Relógio inteligente com GPS, tela sempre ligada e monitoramento de saúde",
  },
]

export default function HomePage() {
  const { items, toggleCart } = useCart()
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-gray-900">TechStore Brasil</h1>
            <Button variant="outline" onClick={toggleCart} className="relative">
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
              <span className="ml-2">Carrinho</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Produtos em Destaque</h2>
          <p className="text-gray-600">Confira nossa seleção especial de produtos tecnológicos</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      <CartSidebar />
    </div>
  )
}
