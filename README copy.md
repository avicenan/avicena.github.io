# Web Portfolio Template

A modern, responsive portfolio website built with React, TypeScript, and shadcn/ui. This template provides a professional foundation for showcasing your work, skills, and experience.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Dark/Light Mode**: Built-in theme support
- **Smooth Scrolling**: Seamless navigation between sections
- **Contact Form**: Functional contact form (ready for backend integration)
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Performance**: Optimized for fast loading and smooth interactions

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                 # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   └── textarea.tsx
│   ├── Navigation.tsx      # Main navigation component
│   ├── Hero.tsx           # Hero/landing section
│   ├── About.tsx          # About me section
│   ├── Skills.tsx         # Skills and expertise
│   ├── Projects.tsx       # Portfolio projects
│   ├── Contact.tsx        # Contact form and info
│   └── Footer.tsx         # Footer with links
├── lib/
│   └── utils.ts           # Utility functions
├── App.tsx                # Main app component
└── main.tsx              # App entry point
```

## 🛠️ Technologies Used

- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - Component library
- **Lucide React** - Icons
- **Vite** - Build tool

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd web-portofolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   bun install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🎨 Customization

### Personal Information

Update the following files with your personal information:

1. **Navigation.tsx** - Change "Your Name" in the logo
2. **Hero.tsx** - Update name, title, and description
3. **About.tsx** - Personal details, experience, and bio
4. **Skills.tsx** - Your technical skills and proficiency levels
5. **Projects.tsx** - Your portfolio projects
6. **Contact.tsx** - Contact information and social links
7. **Footer.tsx** - Name and social links

### Styling

The portfolio uses Tailwind CSS with a custom color scheme. You can customize:

- **Colors**: Update CSS variables in `src/index.css`
- **Typography**: Modify font classes in components
- **Layout**: Adjust spacing and grid layouts
- **Animations**: Add or modify transition effects

### Adding New Sections

To add a new section:

1. Create a new component in `src/components/`
2. Import and add it to `App.tsx`
3. Add navigation link in `Navigation.tsx`
4. Update the navigation items array

### Contact Form Integration

The contact form is currently set up to log form data to the console. To integrate with a backend:

1. Update the `handleSubmit` function in `Contact.tsx`
2. Add form validation
3. Connect to your preferred backend service (EmailJS, Formspree, etc.)

## 📱 Sections Overview

### Hero Section

- Compelling introduction
- Call-to-action buttons
- Smooth scroll indicators

### About Section

- Personal information
- Professional photo placeholder
- Experience highlights
- Downloadable resume

### Skills Section

- Categorized technical skills
- Progress bars for proficiency
- Additional skills tags

### Projects Section

- Featured projects showcase
- Project descriptions and technologies
- Live demo and code links
- Responsive grid layout

### Contact Section

- Contact form
- Personal contact information
- Social media links
- Professional availability status

### Footer

- Quick navigation links
- Social media connections
- Copyright information

## 🎯 Best Practices

- **Performance**: Optimize images and use lazy loading
- **SEO**: Add meta tags and structured data
- **Accessibility**: Ensure proper ARIA labels and keyboard navigation
- **Mobile**: Test thoroughly on various devices
- **Content**: Keep content fresh and relevant

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help customizing the portfolio, please open an issue on GitHub.

---

**Happy coding! 🚀**
