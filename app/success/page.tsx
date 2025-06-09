"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Home, ShoppingBag } from "lucide-react"
import Link from "next/link"
import { useCart } from "@/components/cart-provider"

export default function SuccessPage() {
  const { clearCart } = useCart()

  useEffect(() => {
    // Limpa o carrinho após pagamento bem-sucedido
    clearCart()
  }, [clearCart])

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <CardTitle className="text-2xl text-green-600">Pagamento Aprovado!</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-gray-600">
            Seu pagamento foi processado com sucesso. Você receberá um e-mail com os detalhes da compra.
          </p>

          <div className="space-y-2">
            <Link href="/" className="block">
              <Button className="w-full">
                <Home className="h-4 w-4 mr-2" />
                Voltar à Loja
              </Button>
            </Link>

            <Link href="/orders" className="block">
              <Button variant="outline" className="w-full">
                <ShoppingBag className="h-4 w-4 mr-2" />
                Ver Meus Pedidos
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
