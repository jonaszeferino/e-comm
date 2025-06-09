"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { XCircle, ArrowLeft, CreditCard } from "lucide-react"
import Link from "next/link"

export default function FailurePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <XCircle className="h-8 w-8 text-red-600" />
          </div>
          <CardTitle className="text-2xl text-red-600">Pagamento Recusado</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-gray-600">
            Houve um problema com seu pagamento. Verifique os dados do cartão e tente novamente.
          </p>

          <div className="space-y-2">
            <Link href="/checkout" className="block">
              <Button className="w-full">
                <CreditCard className="h-4 w-4 mr-2" />
                Tentar Novamente
              </Button>
            </Link>

            <Link href="/" className="block">
              <Button variant="outline" className="w-full">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar à Loja
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
