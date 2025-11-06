import { useState, useEffect, useReducer, useContext, createContext } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

// Create a theme context for the tutorial
const ThemeContext = createContext()

// Reducer for complex state management example
const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.text, completed: false }]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id)
    default:
      return state
  }
}

// Navigation Component
function Navigation({ activeSection, setActiveSection }) {
  const sections = ['intro', 'installation', 'components', 'hooks', 'state', 'examples']
  
  return (
    <nav className="tutorial-nav">
      <div className="nav-brand">
        <img src={reactLogo} className="nav-logo" alt="React logo" />
        <span>React Tutorial</span>
      </div>
      <ul className="nav-links">
        {sections.map(section => (
          <li key={section}>
            <button 
              className={activeSection === section ? 'active' : ''}
              onClick={() => setActiveSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

// Hero Section Component
function HeroSection() {
  const [displayText, setDisplayText] = useState('')
  const fullText = 'Learn React.js'
  
  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 150)
    
    return () => clearInterval(timer)
  }, [])
  
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">{displayText}<span className="cursor">|</span></h1>
        <p className="hero-subtitle">
          Master React.js with interactive examples and modern best practices
        </p>
        <div className="hero-features">
          <div className="feature">⚛️ Components</div>
          <div className="feature">🔄 Hooks</div>
          <div className="feature">🚀 Modern React</div>
        </div>
      </div>
      <div className="hero-visual">
        <div className="react-atom">
          <div className="nucleus"></div>
          <div className="orbit orbit-1"></div>
          <div className="orbit orbit-2"></div>
          <div className="orbit orbit-3"></div>
        </div>
      </div>
    </section>
  )
}

// Introduction Section
function IntroSection() {
  return (
    <section className="tutorial-section">
      <h2>What is React?</h2>
      <div className="content-grid">
        <div className="content-text">
          <p>
            React is a powerful JavaScript library for building user interfaces. 
            Created by Facebook, it has revolutionized frontend development with its 
            component-based architecture and virtual DOM.
          </p>
          <h3>Key Features:</h3>
          <ul className="feature-list">
            <li>🔧 <strong>Component-Based:</strong> Build encapsulated components</li>
            <li>⚡ <strong>Virtual DOM:</strong> Efficient updates and rendering</li>
            <li>📝 <strong>JSX:</strong> Write HTML-like syntax in JavaScript</li>
            <li>🔄 <strong>Unidirectional Data Flow:</strong> Predictable state management</li>
            <li>🌟 <strong>Rich Ecosystem:</strong> Vast community and tools</li>
          </ul>
        </div>
        <div className="stats-card">
          <h4>React by Numbers</h4>
          <div className="stat">
            <span className="stat-number">74.5%</span>
            <span className="stat-label">Developer Satisfaction</span>
          </div>
          <div className="stat">
            <span className="stat-number">40.14%</span>
            <span className="stat-label">Usage in 2023</span>
          </div>
          <div className="stat">
            <span className="stat-number">200k+</span>
            <span className="stat-label">GitHub Stars</span>
          </div>
        </div>
      </div>
    </section>
  )
}

// Installation Section
function InstallationSection() {
  const [copied, setCopied] = useState('')
  
  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text)
    setCopied(type)
    setTimeout(() => setCopied(''), 2000)
  }
  
  return (
    <section className="tutorial-section">
      <h2>Getting Started</h2>
      <div className="install-options">
        <div className="install-option">
          <h3>1. Create React App</h3>
          <p>The official way to create React applications</p>
          <div className="code-block">
            <pre><code>{`npx create-react-app my-app
cd my-app
npm start`}</code></pre>
            <button 
              className={`copy-btn ${copied === 'cra' ? 'copied' : ''}`}
              onClick={() => copyToClipboard('npx create-react-app my-app\ncd my-app\nnpm start', 'cra')}
            >
              {copied === 'cra' ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>
        
        <div className="install-option">
          <h3>2. Vite (Recommended)</h3>
          <p>Faster development with modern tooling</p>
          <div className="code-block">
            <pre><code>{`npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev`}</code></pre>
            <button 
              className={`copy-btn ${copied === 'vite' ? 'copied' : ''}`}
              onClick={() => copyToClipboard('npm create vite@latest my-app -- --template react\ncd my-app\nnpm install\nnpm run dev', 'vite')}
            >
              {copied === 'vite' ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

// Components Section
function ComponentsSection() {
  const [showExample, setShowExample] = useState(false)
  
  // Example functional component
  function WelcomeComponent({ name, role }) {
    return (
      <div className="welcome-card">
        <h4>Hello, {name}!</h4>
        <p>Role: {role}</p>
        <span className="badge">Active User</span>
      </div>
    )
  }
  
  return (
    <section className="tutorial-section">
      <h2>React Components</h2>
      <p>Components are the building blocks of React applications. They're reusable pieces of UI.</p>
      
      <div className="component-examples">
        <div className="example-block">
          <h3>Functional Component</h3>
          <div className="code-block">
            <pre><code>{`function Welcome({ name, role }) {
  return (
    <div className="welcome-card">
      <h4>Hello, {name}!</h4>
      <p>Role: {role}</p>
      <span className="badge">Active User</span>
    </div>
  )
}

// Usage
<Welcome name="React Developer" role="Frontend" />`}</code></pre>
          </div>
          
          <div className="live-example">
            <h4>Live Example:</h4>
            <button 
              className="demo-btn"
              onClick={() => setShowExample(!showExample)}
            >
              {showExample ? 'Hide' : 'Show'} Component Demo
            </button>
            {showExample && (
              <WelcomeComponent 
                name="React Developer" 
                role="Frontend Engineer" 
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

// Hooks Section
function HooksSection() {
  const [count, setCount] = useState(0)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  
  // useEffect example
  useEffect(() => {
    console.log(`Count changed to: ${count}`)
  }, [count])
  
  // Simulate API call
  const fetchUser = async () => {
    setLoading(true)
    // Simulate API delay
    setTimeout(() => {
      setUser({
        name: 'John Doe',
        email: 'john@example.com',
        avatar: '👨‍💻'
      })
      setLoading(false)
    }, 1000)
  }
  
  return (
    <section className="tutorial-section">
      <h2>React Hooks</h2>
      <p>Hooks let you use state and other React features in functional components.</p>
      
      <div className="hooks-examples">
        <div className="hook-example">
          <h3>useState Hook</h3>
          <div className="demo-area">
            <p>Current count: <strong>{count}</strong></p>
            <div className="button-group">
              <button onClick={() => setCount(count - 1)}>-</button>
              <button onClick={() => setCount(count + 1)}>+</button>
              <button onClick={() => setCount(0)}>Reset</button>
            </div>
          </div>
          <div className="code-block">
            <pre><code>{`const [count, setCount] = useState(0)

return (
  <div>
    <p>Current count: {count}</p>
    <button onClick={() => setCount(count + 1)}>
      Increment
    </button>
  </div>
)`}</code></pre>
          </div>
        </div>
        
        <div className="hook-example">
          <h3>useEffect Hook</h3>
          <div className="demo-area">
            <button onClick={fetchUser} disabled={loading}>
              {loading ? 'Loading...' : 'Fetch User'}
            </button>
            {user && (
              <div className="user-card">
                <span className="avatar">{user.avatar}</span>
                <div>
                  <h4>{user.name}</h4>
                  <p>{user.email}</p>
                </div>
              </div>
            )}
          </div>
          <div className="code-block">
            <pre><code>{`useEffect(() => {
  // Side effect code here
  console.log('Component updated')
}, [dependency]) // Dependency array`}</code></pre>
          </div>
        </div>
      </div>
    </section>
  )
}

// State Management Section
function StateSection() {
  const [todos, dispatch] = useReducer(todoReducer, [
    { id: 1, text: 'Learn React basics', completed: false },
    { id: 2, text: 'Build a todo app', completed: true }
  ])
  const [newTodo, setNewTodo] = useState('')
  
  const addTodo = () => {
    if (newTodo.trim()) {
      dispatch({ type: 'ADD_TODO', text: newTodo })
      setNewTodo('')
    }
  }
  
  return (
    <section className="tutorial-section">
      <h2>State Management</h2>
      <p>Learn how to manage complex state with useReducer and context.</p>
      
      <div className="state-example">
        <h3>Todo App with useReducer</h3>
        <div className="todo-app">
          <div className="todo-input">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add a new todo..."
              onKeyPress={(e) => e.key === 'Enter' && addTodo()}
            />
            <button onClick={addTodo}>Add</button>
          </div>
          
          <ul className="todo-list">
            {todos.map(todo => (
              <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                <span onClick={() => dispatch({ type: 'TOGGLE_TODO', id: todo.id })}>
                  {todo.text}
                </span>
                <button 
                  className="delete-btn"
                  onClick={() => dispatch({ type: 'DELETE_TODO', id: todo.id })}
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="code-block">
          <pre><code>{`const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { 
        id: Date.now(), 
        text: action.text, 
        completed: false 
      }]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id 
          ? { ...todo, completed: !todo.completed } 
          : todo
      )
    default:
      return state
  }
}

const [todos, dispatch] = useReducer(todoReducer, [])`}</code></pre>
        </div>
      </div>
    </section>
  )
}

// Examples Section
function ExamplesSection() {
  const theme = useContext(ThemeContext)
  
  return (
    <section className="tutorial-section">
      <h2>More Examples</h2>
      <div className="examples-grid">
        <div className="example-card">
          <h3>🎨 Theme Context</h3>
          <p>Current theme: <strong>{theme}</strong></p>
          <p>Using React Context to share data across components without prop drilling.</p>
        </div>
        
        <div className="example-card">
          <h3>🔄 Real-time Clock</h3>
          <ClockComponent />
        </div>
        
        <div className="example-card">
          <h3>📊 Dynamic Chart</h3>
          <ChartComponent />
        </div>
      </div>
    </section>
  )
}

// Clock Component Example
function ClockComponent() {
  const [time, setTime] = useState(new Date())
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)
    
    return () => clearInterval(timer)
  }, [])
  
  return (
    <div className="clock">
      <div className="time">{time.toLocaleTimeString()}</div>
      <div className="date">{time.toLocaleDateString()}</div>
    </div>
  )
}

// Chart Component Example
function ChartComponent() {
  const [data, setData] = useState([30, 50, 80, 40, 70])
  
  const regenerateData = () => {
    setData(Array.from({ length: 5 }, () => Math.floor(Math.random() * 100)))
  }
  
  return (
    <div className="chart">
      <div className="chart-bars">
        {data.map((value, index) => (
          <div 
            key={index} 
            className="bar" 
            style={{ height: `${value}%` }}
          >
            {value}
          </div>
        ))}
      </div>
      <button onClick={regenerateData}>Regenerate Data</button>
    </div>
  )
}

// Main App Component
function App() {
  const [activeSection, setActiveSection] = useState('intro')
  const [theme] = useState('light')
  
  const renderSection = () => {
    switch (activeSection) {
      case 'intro': return <IntroSection />
      case 'installation': return <InstallationSection />
      case 'components': return <ComponentsSection />
      case 'hooks': return <HooksSection />
      case 'state': return <StateSection />
      case 'examples': return <ExamplesSection />
      default: return <IntroSection />
    }
  }
  
  return (
    <ThemeContext.Provider value={theme}>
      <div className="app">
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
        <main className="main-content">
          <HeroSection />
          {renderSection()}
        </main>
        <footer className="footer">
          <p>Built with React {useState.version || '19.1.1'} • Learn by doing! 🚀</p>
        </footer>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
