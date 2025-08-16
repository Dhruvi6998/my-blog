const articles = [
  {
    name: 'learn-react-basics',
    title: 'Mastering the Basics of React in One Go',
    content: [
      `Welcome! In this article, we’ll explore the foundational concepts of React that every developer should understand. React is a popular JavaScript library for building user interfaces, and mastering its basics sets the stage for building powerful web apps.`,
      `We’ll cover components, JSX, props, and state — the building blocks of any React application. Components allow you to split the UI into reusable, isolated pieces. JSX is a syntax extension that lets you write HTML inside JavaScript, making it easier to visualize your UI.`,
      `Props (short for properties) allow you to pass data between components, while state helps you manage dynamic data within a component. Understanding the difference and knowing when to use each is critical for building efficient React apps.`,
      `By the end of this blog, you’ll be able to create simple React components, pass props, manage state, and understand the render cycle. Keep practicing and exploring, and soon you'll be confident building interactive interfaces with React!`
    ]
  },
  {
    name: 'react-hooks',
    title: 'Understanding useState and useEffect in React',
    content: [
      `React hooks allow developers to use state and lifecycle features in functional components. Two of the most commonly used hooks are useState and useEffect.`,
      `The useState hook lets you create state variables in a functional component. It returns a pair: the current state value and a function that lets you update it. This makes it easy to track user input, UI toggles, and other dynamic changes.`,
      `The useEffect hook is used to perform side effects in your components — like data fetching, setting up subscriptions, or manually changing the DOM. It runs after the render and can be controlled with dependency arrays.`,
      `Understanding when and how to use these hooks properly is key to building efficient and clean React apps. useState helps your UI stay interactive, while useEffect ensures your components behave as expected when their state or props change.`
    ]
  },
  {
    name: 'tailwind-layout',
    title: 'Building a Responsive Layout with Tailwind CSS',
    content: [
      `Tailwind CSS is a utility-first framework that lets you build custom, responsive designs directly in your HTML. It simplifies styling by allowing you to use predefined classes for layout, spacing, typography, and more.`,
      `To create a responsive layout, Tailwind provides breakpoint prefixes like sm:, md:, lg:, and xl:. These allow you to control how elements behave across different screen sizes. For example, 'grid-cols-1 md:grid-cols-3' makes a grid with one column on small screens and three on medium and larger screens.`,
      `Tailwind also promotes consistency with its spacing scale and typography system, helping you avoid custom CSS unless necessary. Combined with tools like Flexbox and Grid utilities, building responsive UIs becomes fast and maintainable.`,
      `With Tailwind, you can focus on design and functionality without writing a single line of custom CSS. It's an ideal choice for developers who want to build clean, responsive layouts quickly.`
    ]
  },
  {
    name: 'nextjs-routing',
    title: 'Introduction to Routing in Next.js',
    content: [
      `Next.js simplifies routing by using the file system. Each file in the 'pages' directory automatically becomes a route — no need for additional routing libraries.`,
      `To create a new page, just add a new JavaScript or TypeScript file to the 'pages' folder. For example, 'about.js' becomes '/about' in the browser.`,
      `Dynamic routing is also supported. You can create files like '[id].js' to handle routes like '/post/123', and extract the ID using Next.js's useRouter hook.`,
      `This file-based routing system makes navigation intuitive and fast, and paired with Next.js’s performance features, it’s a great choice for building scalable React apps.`
    ]
  }
];

export default articles;
