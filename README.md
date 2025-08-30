# 🏢 KT Enterprise Management System

A comprehensive enterprise management solution built with Next.js and modern web technologies.

![KT System Dashboard](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)

## Features

- **Dashboard**: Real-time business metrics and analytics
- **Human Resources**: Employee management and HR operations
- **Inventory Management**: Stock tracking and warehouse operations
- **Finance**: Payment processing and financial reporting
- **Sales & Orders**: Order management and sales tracking
- **Reports**: Comprehensive business analytics
- **Settings**: System configuration and user preferences

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React
- **Charts**: Recharts
- **Forms**: React Hook Form + Zod

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd erpsystem
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
erpsystem/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Dashboard page
│   ├── hr/                # HR module
│   ├── inventory/         # Inventory module
│   ├── finance/           # Finance module
│   ├── sales/             # Sales module
│   ├── reports/           # Reports module
│   └── settings/          # Settings module
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   └── sidebar.tsx       # Navigation sidebar
├── lib/                  # Utility functions
├── public/               # Static assets
├── styles/               # Additional styles
└── erp-homepage.tsx      # Main dashboard component
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm run start
```

### Environment Variables

Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Features Overview

### Dashboard
- Real-time business metrics
- Animated counters and charts
- Quick action buttons
- Recent activity feed
- Performance metrics

### Navigation
- Responsive sidebar navigation
- Module-based routing
- Active state indicators
- Search functionality

### Modules
- **HR**: Employee management, attendance, payroll
- **Inventory**: Stock management, orders, warehouse
- **Finance**: Invoices, payments, financial reports
- **Sales**: Order processing, customer management
- **Reports**: Analytics and business intelligence
- **Settings**: System configuration

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please open an issue in the repository. 