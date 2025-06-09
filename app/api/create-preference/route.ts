import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Configuração da preferência do Mercado Pago
    const preference = {
      items: body.items,
      payer: body.payer,
      back_urls: {
        success: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/success`,
        failure: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/failure`,
        pending: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/pending`,
      },
      auto_return: "approved",
      payment_methods: {
        excluded_payment_methods: [],
        excluded_payment_types: [],
        installments: 12,
      },
      notification_url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/webhook`,
      statement_descriptor: "TechStore Brasil",
    }

    // Chamada para a API do Mercado Pago
    const response = await fetch("https://api.mercadopago.com/checkout/preferences", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.MERCADO_PAGO_ACCESS_TOKEN}`,
      },
      body: JSON.stringify(preference),
    })

    const data = await response.json()

    if (!response.ok) {
      console.error("Erro do Mercado Pago:", data)
      return NextResponse.json({ error: "Erro ao criar preferência de pagamento" }, { status: 400 })
    }

    return NextResponse.json({
      id: data.id,
      init_point: data.init_point,
      sandbox_init_point: data.sandbox_init_point,
    })
  } catch (error) {
    console.error("Erro na API:", error)
    return NextResponse.json({ error: "Erro interno do servidor" }, { status: 500 })
  }
}
