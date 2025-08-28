
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

export const dynamic = "force-dynamic";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { customer, items, subtotal, tax, total } = body;

    // Validate required fields
    if (!customer?.name || !customer?.email || !customer?.phone || !items?.length) {
      return NextResponse.json(
        { error: 'Missing required order information' },
        { status: 400 }
      );
    }

    // Create order with items
    const order = await prisma.order.create({
      data: {
        customerName: customer.name,
        customerEmail: customer.email,
        customerPhone: customer.phone,
        specialInstructions: customer.specialInstructions || null,
        subtotal: subtotal,
        tax: tax,
        total: total,
        status: 'pending',
        items: {
          create: items.map((item: any) => ({
            category: item.category,
            protein: item.protein,
            price: item.price,
            quantity: item.quantity,
            itemTotal: item.price * item.quantity,
          })),
        },
      },
      include: {
        items: true,
      },
    });

    return NextResponse.json({
      success: true,
      orderNumber: order.orderNumber,
      order: {
        ...order,
        // Convert BigInt IDs to strings for JSON serialization
        id: order.id.toString(),
        items: order.items.map((item: any) => ({
          ...item,
          id: item.id.toString(),
        })),
      },
    });

  } catch (error) {
    console.error('Order creation error:', error);
    return NextResponse.json(
      { error: 'Failed to create order' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const orders = await prisma.order.findMany({
      include: {
        items: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
      take: 10, // Limit to last 10 orders
    });

    // Convert BigInt IDs to strings for JSON serialization
    const serializedOrders = orders.map((order: any) => ({
      ...order,
      id: order.id.toString(),
      items: order.items.map((item: any) => ({
        ...item,
        id: item.id.toString(),
      })),
    }));

    return NextResponse.json({ orders: serializedOrders });

  } catch (error) {
    console.error('Orders fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch orders' },
      { status: 500 }
    );
  }
}
