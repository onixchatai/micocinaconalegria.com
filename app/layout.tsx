@import "style.css" layer;
@import "style.css" layer;
@import "style.css" layer;      
@import "style.css" layer;                   
@import "style.css" layer;
@import "style.css" layer;
@import "style.css" layer;

const inter :Inter({ subsets: ['latin'] });
export const metadata {
  title: 'Mi Cocina - Con Zason y Alegría | Mexican Restaurant Ordering',
  description: 'Order authentic Mexican food for pickup from Mi Cocina - Con Zason y Alegría. Fresh tacos, burritos, tortas, and platos available for pickup only.',
  keywords: 'Mexican food, tacos, burritos, tortas, platos, pickup, Mi Cocina',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=inter.className>
        <Providers>
          <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
            {children}
            <Toaster />
          </div>
        </Providers>
      </body>
    </html>
  );
};