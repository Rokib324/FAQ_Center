export const faqData = [
  {
    id: 1,
    questions: "What is React and why should I use it?",
    answers: "React is a JavaScript library for building user interfaces, particularly single-page applications. It's used for handling the view layer and can be used for developing both web and mobile applications. React allows you to create reusable UI components and efficiently update and render them when data changes."
  },
  {
    id: 2,
    questions: "How do I install and set up a React project?",
    answers: "You can create a new React project using Create React App by running 'npx create-react-app my-app' in your terminal. Alternatively, you can use Vite with 'npm create vite@latest my-app -- --template react'. After installation, navigate to the project directory and run 'npm install' followed by 'npm run dev' to start the development server."
  },
  {
    id: 3,
    questions: "What are React components and how do they work?",
    answers: "React components are reusable pieces of UI that can be either function components or class components. They accept inputs called props and return React elements describing what should appear on the screen. Components can be nested, reused, and can maintain their own state using hooks or setState."
  },
  {
    id: 4,
    questions: "What is the difference between props and state in React?",
    answers: "Props (properties) are read-only and are passed from parent to child components. They are immutable and help components communicate with each other. State, on the other hand, is managed within the component and can be changed using setState or useState hook. State changes trigger re-renders of the component."
  },
  {
    id: 5,
    questions: "How do I handle events in React?",
    answers: "React events are handled using camelCase naming convention (e.g., onClick, onChange). You pass a function as the event handler, and React will call it when the event occurs. Event handlers receive a synthetic event object that wraps the browser's native event and provides a consistent interface across different browsers."
  },
  {
    id: 6,
    questions: "What are React hooks and how do I use them?",
    answers: "React hooks are functions that allow you to use state and other React features in function components. The most common hooks are useState (for managing state), useEffect (for side effects), and useContext (for consuming context). Hooks must be called at the top level of your component and cannot be called inside loops, conditions, or nested functions."
  }
];
