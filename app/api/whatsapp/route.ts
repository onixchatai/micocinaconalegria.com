
import { NextRequest, NextResponse } from 'next/server';
import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromWhatsApp = process.env.TWILIO_WHATSAPP_NUMBER;

const client = twilio(accountSid, authToken);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { to, orderNumber, customerName, items, total } = body;

    if (!to) {
      return NextResponse.json({ error: 'Phone number is required' }, { status: 400 });
    }

    // Format the order details for WhatsApp
    const itemsList = items.map((item: any) => 
      `• ${item.quantity}x ${item.protein} ${item.category} - $${item.price.toFixed(2)}`
    ).join('\n');

    const message = `
🌮 *MI COCINA* - Con Zason y Alegría 🌮

¡Gracias por tu pedido!

*Número de Orden:* #${orderNumber}
*Cliente:* ${customerName}

*Tu Pedido:*
${itemsList}

*Total:* $${total.toFixed(2)}

*SOLO RECOGIDA* 📍
Estaremos preparando tu orden. Te notificaremos cuando esté lista.

¡Gracias por elegir Mi Cocina! 🙏
    `.trim();

    // Send WhatsApp message
    const whatsappMessage = await client.messages.create({
      from: fromWhatsApp,
      to: `whatsapp:${to}`,
      body: message
    });

    return NextResponse.json({ 
      success: true, 
      messageSid: whatsappMessage.sid 
    });

  } catch (error) {
    console.error('WhatsApp API Error:', error);
    return NextResponse.json({ 
      error: 'Failed to send WhatsApp message',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
