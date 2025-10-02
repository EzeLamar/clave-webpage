# Clave Webpage

## Project Description

Clave Webpage is a modern web platform designed to provide an attractive and flexible experience for both content administrators and end users. The main goal of the site is to serve as a corporate and product catalog website, enabling easy management of articles, products, categories, and informational pages through an intuitive admin panel.

The project architecture is divided into two main parts:
- **Frontend (Next.js):** Delivers a fast, responsive, and customizable user interface, consuming the backend API to display dynamic content.
- **Backend (Strapi):** Allows content management via a headless CMS, making it easy to create, edit, and organize the information shown on the website.

### Purpose

The purpose of Clave Webpage is to:
- Provide a professional digital presence for the company or brand.
- Enable quick content updates without technical knowledge.
- Display products, articles, and other relevant information in an attractive and organized way.
- Facilitate scalability and customization through a decoupled architecture.

---

## Dynamic Blocks Functionality

One of the key features of the frontend is the ability to render pages using **dynamic blocks**. This means administrators can build and modify the structure of pages from the Strapi admin panel by selecting and arranging different types of blocks (such as banners, product lists, articles, testimonials, contact forms, etc.).

- Each block represents a reusable component in the frontend.
- The backend sends the configuration and content of the blocks via the API.
- The frontend interprets this configuration and renders the blocks in the specified order and with the provided content.
- This allows for highly customizable pages without the need to modify the source code.

This functionality provides great flexibility, enabling the site to evolve and adapt to new business needs easily.

---

## Project Structure

```
clave-webpage/
├── frontend/          # Next.js frontend application
└── backend/           # Strapi backend application
```

## Frontend (Next.js)

The frontend is built with Next.js, providing a modern and performant user interface.

### Getting Started

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests

## Backend (Strapi)

The backend is powered by Strapi, a headless CMS that provides a robust API and admin panel.

### Getting Started

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run develop
   # or
   yarn develop
   ```

4. Access the admin panel at [http://localhost:1337/admin](http://localhost:1337/admin)

### Environment Variables

Create a `.env` file in the backend directory with the following variables:

```env
HOST=0.0.0.0
PORT=1337
APP_KEYS=your-app-keys
API_TOKEN_SALT=your-api-token-salt
ADMIN_JWT_SECRET=your-admin-jwt-secret
JWT_SECRET=your-jwt-secret
```

## Development

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

### Best Practices

1. Always create a new branch for your features
2. Follow the existing code style
3. Write meaningful commit messages
4. Test your changes before submitting a PR

## Deployment

### Frontend

The frontend can be deployed to platforms like Vercel, Netlify, or any other hosting service that supports Next.js applications.

### Backend

The Strapi backend can be deployed to platforms like Heroku, DigitalOcean, or any other hosting service that supports Node.js applications.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 