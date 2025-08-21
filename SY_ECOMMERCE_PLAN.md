# SY Ecommerce Site - Practice Project Plan

## Project Overview
Building a practice ecommerce platform called "SY" to learn modern web development concepts and ecommerce fundamentals.

## 1. Modern Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **State Management**: React Context API + useState/useReducer
- **Forms**: React Hook Form + Zod validation

### Backend
- **API**: Next.js API Routes (built-in)
- **Database**: SQLite with Prisma ORM (easy setup)
- **Authentication**: NextAuth.js
- **Payment**: Mock payment system
- **File Storage**: Local public folder

### Development Tools
- **Package Manager**: npm
- **TypeScript**: Full TypeScript setup
- **Linting**: ESLint + Prettier
- **Version Control**: Git

## 2. ✅ Completed Frontend Features

### 🎉 What We've Built So Far:
- [x] **Header Component** - Floating navigation with scroll effects, search bar, cart icon
- [x] **Hero Section** - Full-screen background with CTA buttons and brand messaging
- [x] **Sale Banner** - Animated scrolling text with MagicUI scroll-based velocity
- [x] **Category Section** - Interactive category cards with gender toggle (Women/Men)
- [x] **Latest Arrivals** - Horizontal scrolling product carousel with navigation arrows
- [x] **Promotional Section** - Video background with sale messaging
- [x] **Footer** - Two-section footer with help section and links
- [x] **Design System** - SY brand colors, typography (Poppins), shadcn/ui components
- [x] **Responsive Design** - Mobile-first approach across all components
- [x] **Modern Animations** - Hover effects, scroll animations, floating header
- [x] **TypeScript Setup** - Full type safety across components

### 🎨 Design & UX Achievements:
- [x] **Brand Identity** - Consistent SY color palette and typography
- [x] **Professional UI** - Clean, modern design inspired by House of Blanks & AKKI
- [x] **Interactive Elements** - Smooth hover effects and micro-interactions
- [x] **Performance Optimized** - Next.js Image optimization, efficient animations
- [x] **Accessibility Ready** - shadcn/ui components with proper ARIA labels

## 3. Remaining Feature Requirements (MVP)

### 🏠 Homepage & Navigation
- [x] Hero section with featured products
- [x] Product categories grid (4-6 categories)
- [x] Navigation bar with cart icon and user menu
- [x] Search bar in header
- [x] Footer with links

### 📦 Product Catalog
- [x] Product grid with pagination (12 items per page) - *Implemented in LatestArrivals*
- [x] Product cards showing: image, name, price, rating - *Complete with discount badges*
- [ ] Filter by category, price range, rating
- [ ] Sort by: price (low/high), rating, newest
- [ ] Search functionality (name, description)
- [ ] "No results" state with suggestions

### 🔍 Product Details
- [ ] Product image gallery (3-5 images per product)
- [ ] Product info: name, price, description, specs
- [ ] Quantity selector (1-10)
- [ ] Add to cart button with loading state
- [ ] Related products section (4 items)
- [ ] Simple reviews section (rating + comments)

### 🛒 Shopping Cart
- [ ] Cart sidebar/drawer with smooth animation
- [ ] Cart items with: image, name, price, quantity controls
- [ ] Remove item functionality
- [ ] Cart total calculation
- [ ] Empty cart state with "Continue Shopping" button
- [ ] Cart persistence (localStorage)

### 👤 User Authentication (Simplified)
- [ ] Login/Register modal with form validation
- [ ] Guest checkout option (no account required)
- [ ] Simple user profile page (name, email, order history)
- [ ] Logout functionality
- [ ] "Remember me" option

### 💳 Checkout Process
- [ ] 3-step checkout: Shipping → Payment → Review
- [ ] Shipping form: name, address, phone
- [ ] Mock payment with fake card numbers
- [ ] Order summary with itemized costs
- [ ] Order confirmation page with order number
- [ ] Email confirmation (mock/console log)

### 📋 Order Management
- [ ] Order history page for logged-in users
- [ ] Order details page with status tracking
- [ ] Simple order statuses: Processing → Shipped → Delivered
- [ ] Mock tracking number generation

### 🎨 UI/UX Features
- [x] Responsive design (mobile-first) - *All components are responsive*
- [ ] Loading skeletons for product grids
- [ ] Toast notifications for actions
- [x] Smooth page transitions - *Header floating effects, hover animations*
- [ ] Dark/light mode toggle
- [x] Accessibility features (keyboard navigation, alt text) - *shadcn/ui components*

## 3. Enhanced Features (Phase 2)

### 🎯 Smart Shopping
- [ ] Recently viewed products (localStorage)
- [ ] Wishlist/favorites with heart icon
- [ ] Product recommendations based on category
- [ ] "Customers also bought" section
- [ ] Quick view modal for products

### 🏷️ Promotions & Discounts
- [ ] Discount codes/coupons system
- [ ] Sale badges on products
- [ ] Free shipping threshold
- [ ] Bulk discount (buy 2 get 1 free)
- [ ] Flash sale countdown timer

### 📊 Analytics & Insights
- [ ] Simple admin dashboard
- [ ] Sales charts (daily/weekly/monthly)
- [ ] Popular products tracking
- [ ] User activity logs
- [ ] Inventory alerts

### 🔧 Technical Improvements
- [ ] Image optimization and lazy loading
- [ ] Infinite scroll for product grid
- [ ] Advanced search with filters
- [ ] Product comparison table
- [ ] Export order data (CSV)

### 📱 Mobile Experience
- [ ] Touch-friendly interactions
- [ ] Swipe gestures for product images
- [ ] Mobile-optimized checkout
- [ ] App-like navigation
- [ ] Offline browsing (cached products)

## 4. Development Phases

### Phase 1: Foundation (Weeks 1-4)
- Set up development environment
- Create basic project structure
- Implement user authentication
- Design database schema
- Basic product catalog

### Phase 2: Core Features (Weeks 5-8)
- Shopping cart and checkout
- Payment integration
- Order management
- Basic admin panel
- Product search and filtering

### Phase 3: Polish & Launch (Weeks 9-12)
- UI/UX refinements
- Testing and bug fixes
- Performance optimization
- Security audit
- Deployment and monitoring

### Phase 4: Growth Features (Post-launch)
- Analytics and reporting
- Marketing tools
- Advanced features
- Mobile optimization
- Scaling improvements

## 5. Database Schema Overview

### Core Tables
- `users` (id, email, password_hash, profile_data)
- `products` (id, name, description, price, inventory, category_id)
- `categories` (id, name, parent_id, slug)
- `orders` (id, user_id, total, status, created_at)
- `order_items` (id, order_id, product_id, quantity, price)
- `cart_items` (id, user_id, product_id, quantity)
- `reviews` (id, user_id, product_id, rating, comment)

## 6. Learning-Focused Security
- [ ] Basic input validation
- [ ] Simple password hashing
- [ ] Basic XSS prevention
- [ ] Understanding authentication flows
- [ ] Learning about secure coding practices

## 7. Performance Optimization
- [ ] Image optimization and lazy loading
- [ ] Database indexing
- [ ] Caching strategies
- [ ] CDN implementation
- [ ] Code splitting
- [ ] Bundle optimization

## 8. Testing Strategy
- [ ] Unit tests for business logic
- [ ] Integration tests for APIs
- [ ] E2E tests for critical user flows
- [ ] Performance testing
- [ ] Security testing
- [ ] Mobile responsiveness testing

## Next Steps
1. Choose your preferred tech stack
2. Set up development environment
3. Create project repository structure
4. Design wireframes/mockups
5. Start with user authentication system
## P
ractice Project Benefits
- Learn full-stack development
- Understand ecommerce workflows
- Practice React state management
- Learn API design and database modeling
- Build a portfolio project
- Experiment with different features

## Sample Product Categories & Data

### 📱 Electronics
- Smartphones (iPhone 15, Samsung Galaxy, Google Pixel)
- Laptops (MacBook Pro, Dell XPS, ThinkPad)
- Headphones (AirPods, Sony WH-1000XM5, Bose QuietComfort)
- Accessories (Cases, Chargers, Cables)

### 👕 Fashion
- T-Shirts (Basic, Graphic, Premium)
- Sneakers (Nike Air Force, Adidas Stan Smith, Converse)
- Accessories (Watches, Sunglasses, Bags)
- Seasonal items (Hoodies, Jackets)

### 🏠 Home & Living
- Furniture (Chairs, Desks, Storage)
- Decor (Wall Art, Plants, Lighting)
- Kitchen (Coffee Makers, Blenders, Cookware)
- Bedding (Sheets, Pillows, Blankets)

### Sample Product Structure
```json
{
  "id": 1,
  "name": "iPhone 15 Pro",
  "price": 999,
  "originalPrice": 1099,
  "category": "Electronics",
  "subcategory": "Smartphones",
  "images": ["image1.jpg", "image2.jpg"],
  "description": "Latest iPhone with titanium design",
  "specs": ["6.1-inch display", "A17 Pro chip", "48MP camera"],
  "rating": 4.8,
  "reviewCount": 1247,
  "inStock": true,
  "inventory": 50,
  "tags": ["new", "popular", "sale"]
}
```

## Quick Start Approach
1. Create a simple product catalog with hardcoded data
2. Add shopping cart functionality
3. Build a basic checkout flow
4. Add user accounts and order history
5. Enhance UI and add more features as you learn
## Fe
ature Priority Matrix

### 🚀 Must Have (Week 1-2)
1. Basic product catalog with grid layout
2. Product detail pages
3. Shopping cart functionality
4. Simple checkout process
5. Responsive navigation

### 🎯 Should Have (Week 3-4)
1. User authentication (login/register)
2. Search and filtering
3. Order confirmation and history
4. Basic admin panel for products
5. Toast notifications

### 💡 Could Have (Week 5+)
1. Wishlist functionality
2. Product reviews and ratings
3. Discount codes
4. Advanced filtering
5. Dark mode

### 🔮 Won't Have (This Version)
1. Real payment processing
2. Email notifications
3. Multi-vendor support
4. Advanced analytics
5. Mobile app

## User Stories

### As a Customer
- I want to browse products by category so I can find what I'm looking for
- I want to search for specific products so I can quickly find items
- I want to add items to my cart so I can purchase multiple products
- I want to see product details and images so I can make informed decisions
- I want to checkout easily so I can complete my purchase quickly

### As a Guest User
- I want to browse and purchase without creating an account
- I want my cart to persist during my session
- I want to see order confirmation after purchase

### As a Registered User
- I want to see my order history so I can track past purchases
- I want to save my shipping information for faster checkout
- I want to manage my profile information

## Technical Considerations

### Performance Goals
- Page load time < 3 seconds
- Smooth animations (60fps)
- Optimized images (WebP format)
- Minimal bundle size

### Accessibility Requirements
- Keyboard navigation support
- Screen reader compatibility
- High contrast mode
- Focus indicators
- Alt text for all images## 🎨 Desig
n Inspiration & Visual Direction

### Key Design Elements from References

#### House of Blanks Style
- **Minimalist aesthetic** with lots of white space
- **Clean typography** with simple, readable fonts
- **Muted color palette** (whites, grays, earth tones)
- **Large hero images** with lifestyle photography
- **Grid-based product layouts** with consistent spacing
- **Subtle hover effects** and interactions
- **Story-driven sections** ("From Canada with Love")

#### AKKI Style  
- **Bold, dramatic hero sections** with full-screen imagery
- **Strong typography** with large, impactful text overlays
- **Earthy, natural color schemes** (browns, oranges, muted tones)
- **Asymmetrical layouts** with creative image positioning
- **Organic shapes and flowing lines** as design elements
- **Multi-language support** with elegant transitions
- **Lifestyle-focused photography** showing products in context

### SY Brand Direction
- **Modern minimalism** with clean lines and generous spacing
- **Warm, approachable** color palette inspired by both references
- **High-quality product photography** with lifestyle context
- **Typography hierarchy** that's both elegant and readable
- **Subtle animations** that enhance UX without being distracting

### Color Palette Inspiration
```css
/* Primary Colors */
--primary: #2c2c2c;        /* Deep charcoal */
--secondary: #8b7355;      /* Warm brown */
--accent: #e8e2d4;         /* Cream/beige */

/* Neutral Colors */
--background: #fafafa;     /* Off-white */
--surface: #ffffff;        /* Pure white */
--muted: #6b7280;          /* Gray text */

/* Semantic Colors */
--success: #10b981;        /* Green for success states */
--warning: #f59e0b;        /* Orange for warnings */
--error: #ef4444;          /* Red for errors */
```

### Typography Scale
- **Headings**: Clean sans-serif (Inter, Poppins)
- **Body**: Readable sans-serif with good line height
- **Accent**: Optional serif for special sections

### Layout Principles
- **12-column grid system** for consistent alignment
- **Generous whitespace** (minimum 24px between sections)
- **Mobile-first responsive design**
- **Consistent component spacing** using 8px grid system
- **Maximum content width** of 1200px for readability

### Component Design Patterns

#### Product Cards
- **Clean white background** with subtle shadow
- **High-quality product images** (4:3 or 1:1 aspect ratio)
- **Minimal text overlay** (name, price, quick actions)
- **Hover states** with gentle scale or shadow effects
- **Color swatches** for variants (if applicable)

#### Navigation
- **Sticky header** with transparent/solid transition
- **Minimal menu items** with clear hierarchy
- **Search integration** in header
- **Cart icon** with item count badge
- **Mobile hamburger menu** with slide-out drawer

#### Hero Sections
- **Full-width background images** with overlay text
- **Strong call-to-action buttons** with clear contrast
- **Lifestyle photography** showing products in use
- **Scroll indicators** for long pages

#### Forms & Interactions
- **Clean input fields** with floating labels
- **Subtle focus states** with color transitions
- **Loading states** with skeleton screens
- **Toast notifications** for user feedback
- **Smooth page transitions** between routes

### Image Strategy
- **Consistent aspect ratios** across product categories
- **High-resolution images** optimized for web (WebP format)
- **Lifestyle shots** mixed with clean product shots
- **Consistent lighting and backgrounds** for product photos
- **Alt text** for accessibility compliance

### Animation Guidelines
- **Subtle micro-interactions** (button hovers, form focus)
- **Smooth page transitions** (fade, slide effects)
- **Loading animations** that feel natural
- **Scroll-triggered animations** for engagement
- **Performance-first approach** (CSS transforms over JS)

## Backend Architecture Plan (Next.js Full-Stack)

### 🏗️ Architecture Overview
- **Full-Stack Next.js** - Single codebase for frontend and backend
- **API Routes** - Built-in Next.js API routes in `/app/api/` directory
- **Database** - PostgreSQL with Prisma ORM for type safety
- **Authentication** - NextAuth.js with multiple providers
- **File Storage** - Vercel Blob for production, local storage for development
- **Deployment** - Vercel with automatic CI/CD

### 🗄️ Database Schema (Prisma)

#### Core Models
```prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  password  String?  // For email/password auth
  image     String?  // For OAuth providers
  role      Role     @default(CUSTOMER)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  // Relations
  orders    Order[]
  cartItems CartItem[]
  reviews   Review[]
  addresses Address[]
}

model Category {
  id          String    @id @default(cuid())
  name        String
  slug        String    @unique
  description String?
  image       String?
  parentId    String?
  parent      Category? @relation("CategoryHierarchy", fields: [parentId], references: [id])
  children    Category[] @relation("CategoryHierarchy")
  products    Product[]
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
}

model Product {
  id          String   @id @default(cuid())
  name        String
  slug        String   @unique
  description String
  price       Decimal  @db.Decimal(10,2)
  salePrice   Decimal? @db.Decimal(10,2)
  images      String[] // Array of image URLs
  inventory   Int      @default(0)
  status      ProductStatus @default(ACTIVE)
  categoryId  String
  category    Category @relation(fields: [categoryId], references: [id])
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  // Relations
  cartItems   CartItem[]
  orderItems  OrderItem[]
  reviews     Review[]
}

model Order {
  id              String      @id @default(cuid())
  userId          String
  user            User        @relation(fields: [userId], references: [id])
  status          OrderStatus @default(PENDING)
  total           Decimal     @db.Decimal(10,2)
  subtotal        Decimal     @db.Decimal(10,2)
  tax             Decimal     @db.Decimal(10,2)
  shipping        Decimal     @db.Decimal(10,2)
  shippingAddress Json        // Flexible address storage
  paymentMethod   String
  paymentStatus   PaymentStatus @default(PENDING)
  createdAt       DateTime    @default(now())
  updatedAt       DateTime    @updatedAt
  
  // Relations
  items           OrderItem[]
}

model CartItem {
  id        String   @id @default(cuid())
  userId    String
  user      User     @relation(fields: [userId], references: [id])
  productId String
  product   Product  @relation(fields: [productId], references: [id])
  quantity  Int
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  @@unique([userId, productId])
}

// Enums
enum Role {
  CUSTOMER
  ADMIN
}

enum ProductStatus {
  ACTIVE
  INACTIVE
  OUT_OF_STOCK
}

enum OrderStatus {
  PENDING
  PROCESSING
  SHIPPED
  DELIVERED
  CANCELLED
}

enum PaymentStatus {
  PENDING
  PAID
  FAILED
  REFUNDED
}
```

### 🔌 API Routes Structure

#### Authentication APIs
```
POST /api/auth/register     - User registration
POST /api/auth/login        - User login
GET  /api/auth/session      - Get current session
POST /api/auth/logout       - User logout
```

#### Product APIs
```
GET    /api/products              - List products with filters/pagination
GET    /api/products/[slug]       - Get single product
GET    /api/products/search       - Search products
GET    /api/categories            - List all categories
GET    /api/categories/[slug]     - Get category with products
```

#### Cart APIs
```
GET    /api/cart                  - Get user's cart
POST   /api/cart/add              - Add item to cart
PUT    /api/cart/update           - Update cart item quantity
DELETE /api/cart/remove           - Remove item from cart
DELETE /api/cart/clear            - Clear entire cart
```

#### Order APIs
```
POST   /api/orders                - Create new order
GET    /api/orders                - Get user's orders
GET    /api/orders/[id]           - Get specific order
PUT    /api/orders/[id]/status    - Update order status (admin)
```

#### User APIs
```
GET    /api/user/profile          - Get user profile
PUT    /api/user/profile          - Update user profile
GET    /api/user/addresses        - Get user addresses
POST   /api/user/addresses        - Add new address
```

#### Admin APIs
```
GET    /api/admin/products        - Admin product management
POST   /api/admin/products        - Create new product
PUT    /api/admin/products/[id]   - Update product
DELETE /api/admin/products/[id]   - Delete product
GET    /api/admin/orders          - Admin order management
GET    /api/admin/analytics       - Sales analytics
```

### 🔐 Authentication Strategy

#### NextAuth.js Configuration
```typescript
// app/api/auth/[...nextauth]/route.ts
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from '@auth/prisma-adapter'

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        // Implement email/password authentication
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],
  session: { strategy: 'jwt' },
  pages: {
    signIn: '/auth/signin',
    signUp: '/auth/signup',
  }
}
```

### 📊 State Management Strategy

#### Server State (React Query/TanStack Query)
```typescript
// lib/queries/products.ts
export const useProducts = (filters?: ProductFilters) => {
  return useQuery({
    queryKey: ['products', filters],
    queryFn: () => fetchProducts(filters),
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
}

export const useCart = () => {
  return useQuery({
    queryKey: ['cart'],
    queryFn: fetchCart,
    enabled: !!session?.user,
  })
}
```

#### Client State (Zustand)
```typescript
// lib/store/cart.ts
interface CartStore {
  items: CartItem[]
  addItem: (product: Product, quantity: number) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  addItem: (product, quantity) => {
    // Add item logic with API call
  },
  // ... other methods
}))
```

### 🚀 Implementation Phases

#### Phase 1: Database & Auth Setup (Week 1)
- [ ] Set up PostgreSQL database (local + production)
- [ ] Configure Prisma ORM with schema
- [ ] Implement NextAuth.js authentication
- [ ] Create basic API routes structure
- [ ] Set up environment variables

#### Phase 2: Product Management (Week 2)
- [ ] Create product CRUD API routes
- [ ] Implement category management
- [ ] Set up image upload with Vercel Blob
- [ ] Create admin panel for product management
- [ ] Seed database with sample products

#### Phase 3: Shopping Cart & Orders (Week 3)
- [ ] Implement cart API routes
- [ ] Create order processing system
- [ ] Set up email notifications (mock)
- [ ] Implement order status tracking
- [ ] Create user dashboard

#### Phase 4: Advanced Features (Week 4)
- [ ] Add search functionality with filters
- [ ] Implement product reviews system
- [ ] Create analytics dashboard
- [ ] Add newsletter subscription
- [ ] Performance optimization

### 🛠️ Development Tools & Setup

#### Required Dependencies
```json
{
  "dependencies": {
    "@prisma/client": "^5.0.0",
    "next-auth": "^4.24.0",
    "@auth/prisma-adapter": "^1.0.0",
    "@tanstack/react-query": "^5.0.0",
    "zustand": "^4.4.0",
    "zod": "^3.22.0",
    "bcryptjs": "^2.4.3",
    "@vercel/blob": "^0.15.0"
  },
  "devDependencies": {
    "prisma": "^5.0.0",
    "@types/bcryptjs": "^2.4.0"
  }
}
```

#### Environment Variables
```env
# Database
DATABASE_URL="postgresql://..."
DIRECT_URL="postgresql://..." # For migrations

# NextAuth
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"

# OAuth Providers
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# File Storage
BLOB_READ_WRITE_TOKEN="your-vercel-blob-token"

# Email (for notifications)
SMTP_HOST="smtp.gmail.com"
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"
```

### 📈 Performance Considerations

#### Database Optimization
- [ ] Proper indexing on frequently queried fields
- [ ] Database connection pooling
- [ ] Query optimization with Prisma
- [ ] Caching with Redis (future enhancement)

#### API Performance
- [ ] Response caching with Next.js
- [ ] Image optimization with Next.js Image
- [ ] API rate limiting
- [ ] Pagination for large datasets

#### Frontend Performance
- [ ] Server-side rendering for product pages
- [ ] Static generation for category pages
- [ ] Lazy loading for product images
- [ ] Code splitting for admin features

### 🔒 Security Measures

#### Authentication Security
- [ ] Password hashing with bcrypt
- [ ] JWT token security
- [ ] Session management
- [ ] CSRF protection

#### API Security
- [ ] Input validation with Zod
- [ ] SQL injection prevention (Prisma)
- [ ] Rate limiting on API routes
- [ ] Admin route protection

#### Data Security
- [ ] Environment variable protection
- [ ] Secure cookie settings
- [ ] HTTPS enforcement
- [ ] Data sanitization

This backend architecture provides a solid foundation for the SY ecommerce platform while maintaining the practice-focused approach with room for learning and experimentation.