
export interface MenuCategory {
  name: string;
  description?: string;
  items: MenuItem[];
}

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  proteins: MenuProtein[];
}

export interface MenuProtein {
  name: string;
  price: number;
}

export interface CartItem {
  id: string;
  category: string;
  protein: string;
  price: number;
  quantity: number;
}

export interface Customer {
  name: string;
  email: string;
  phone: string;
  specialInstructions?: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  customer: Customer;
  items: CartItem[];
  subtotal: number;
  tax: number;
  total: number;
  status: string;
  createdAt: Date;
}
