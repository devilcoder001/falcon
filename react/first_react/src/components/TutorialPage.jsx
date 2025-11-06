import { useState } from 'react'
import './TutorialPage.css'

function TutorialPage() {
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState('')
  const [items, setItems] = useState([])

  const handleAddItem = () => {
    if (inputValue.trim()) {
      setItems([...items, inputValue])
      setInputValue('')
    }
  }

  const handleRemoveItem = (index) => {
    setItems(items.filter((_, i) => i !== index))
  }

  return (
    <div className="tutorial-container">
      <header className="tutorial-header">
        <h1>⚛️ React Tutorial</h1>
        <p>Learn React fundamentals with interactive examples</p>
      </header>

      <nav className="tutorial-nav">
        <a href="#intro">Introduction</a>
        <a href="#components">Components</a>
        <a href="#state">State</a>
        <a href="#props">Props</a>
        <a href="#events">Events</a>
        <a href="#hooks">Hooks</a>
      </nav>

      <main className="tutorial-content">
        <section id="intro" className="tutorial-section">
          <h2>📚 Introduction to React</h2>
          <div className="content-card">
            <h3>What is React?</h3>
            <p>
              React is a JavaScript library for building user interfaces. It was
              developed by Facebook and is widely used for creating single-page
              applications with reusable components.
            </p>
            <h3>Key Features:</h3>
            <ul>
              <li>🔄 Virtual DOM for efficient updates</li>
              <li>🧩 Component-based architecture</li>
              <li>⚡ Fast and responsive</li>
              <li>🔗 One-way data binding</li>
              <li>🛠️ Rich ecosystem and community</li>
            </ul>
          </div>
        </section>

        <section id="components" className="tutorial-section">
          <h2>🧩 Components</h2>
          <div className="content-card">
            <h3>Functional Components</h3>
            <p>
              Components are the building blocks of React applications. They are
              reusable pieces of UI that can accept inputs (props) and return
              React elements.
            </p>
            <div className="code-example">
              <pre>{`function Welcome() {
  return <h1>Hello, React!</h1>;
}

export default Welcome;`}</pre>
            </div>
          </div>
        </section>

        <section id="state" className="tutorial-section">
          <h2>🔄 State Management</h2>
          <div className="content-card">
            <h3>Interactive Counter Example</h3>
            <p>
              State allows components to create and manage their own data.
              When state changes, the component re-renders.
            </p>
            <div className="interactive-demo">
              <div className="counter-display">
                <h4>Count: {count}</h4>
              </div>
              <div className="button-group">
                <button onClick={() => setCount(count + 1)}>
                  Increment +
                </button>
                <button onClick={() => setCount(count - 1)}>
                  Decrement -
                </button>
                <button onClick={() => setCount(0)}>
                  Reset
                </button>
              </div>
            </div>
            <div className="code-example">
              <pre>{`const [count, setCount] = useState(0);

<button onClick={() => setCount(count + 1)}>
  Increment
</button>`}</pre>
            </div>
          </div>
        </section>

        <section id="props" className="tutorial-section">
          <h2>📦 Props</h2>
          <div className="content-card">
            <h3>Passing Data Between Components</h3>
            <p>
              Props (short for properties) are used to pass data from parent
              components to child components. They are read-only and cannot
              be modified by the child component.
            </p>
            <div className="code-example">
              <pre>{`function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

<Greeting name="React Developer" />`}</pre>
            </div>
            <div className="demo-box">
              <Greeting name="React Developer" />
            </div>
          </div>
        </section>

        <section id="events" className="tutorial-section">
          <h2>⚡ Event Handling</h2>
          <div className="content-card">
            <h3>Interactive List Example</h3>
            <p>
              React can handle user interactions like clicks, form submissions,
              and input changes through event handlers.
            </p>
            <div className="interactive-demo">
              <div className="input-group">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Enter an item..."
                  onKeyPress={(e) => e.key === 'Enter' && handleAddItem()}
                />
                <button onClick={handleAddItem}>Add Item</button>
              </div>
              <ul className="item-list">
                {items.map((item, index) => (
                  <li key={index}>
                    {item}
                    <button 
                      className="delete-btn"
                      onClick={() => handleRemoveItem(index)}
                    >
                      ✕
                    </button>
                  </li>
                ))}
              </ul>
              {items.length === 0 && (
                <p className="empty-state">No items yet. Add one above!</p>
              )}
            </div>
          </div>
        </section>

        <section id="hooks" className="tutorial-section">
          <h2>🪝 React Hooks</h2>
          <div className="content-card">
            <h3>Common React Hooks</h3>
            <div className="hooks-grid">
              <div className="hook-card">
                <h4>useState</h4>
                <p>Manage component state</p>
                <code>const [state, setState] = useState(initial)</code>
              </div>
              <div className="hook-card">
                <h4>useEffect</h4>
                <p>Handle side effects</p>
                <code>useEffect(() {'=> {}'}, [deps])</code>
              </div>
              <div className="hook-card">
                <h4>useContext</h4>
                <p>Access context values</p>
                <code>const value = useContext(Context)</code>
              </div>
              <div className="hook-card">
                <h4>useRef</h4>
                <p>Reference DOM elements</p>
                <code>const ref = useRef(null)</code>
              </div>
            </div>
          </div>
        </section>

        <section className="tutorial-section">
          <h2>🚀 Next Steps</h2>
          <div className="content-card">
            <h3>Continue Your React Journey</h3>
            <ul className="next-steps">
              <li>📖 Read the official React documentation</li>
              <li>💻 Build small projects to practice</li>
              <li>🔍 Explore React Router for navigation</li>
              <li>🎨 Learn CSS-in-JS libraries like styled-components</li>
              <li>⚙️ Understand state management with Redux or Context API</li>
              <li>🧪 Write tests with React Testing Library</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="tutorial-footer">
        <p>© 2025 React Tutorial | Built with React + Vite</p>
        <p>Keep learning and building amazing things! 🎉</p>
      </footer>
    </div>
  )
}

// Helper component for Props example
function Greeting({ name }) {
  return <h2 className="greeting">Hello, {name}!</h2>
}

export default TutorialPage
