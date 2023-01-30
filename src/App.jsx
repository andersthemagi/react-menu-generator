import './App.css'

export default function App() {
  return (
    <main>
      <div className="header">
        <h1>Menu Generator</h1>
      </div>
      <div className="app"> 
        <div className="toolbar">
          <label htmlFor="days"># of days:</label>
          <input id="days"></input>
          <button className="button primary">Create a Menu</button>
          <button className="button">Add Recipe</button>
        </div>
        <div className="body">
          <div id="es-initial" className="empty-state">
             <img className="empty-state-image" src="public/kitchen.png" width="125"/>
             <h3 className="empty-state-title">Create a Menu</h3>
             <p className="empty-state-subtitle">Input the number of days and click 'Create Menu' to get started.</p>
          </div>
        </div>
      </div>
      <div className="footer">Footer Placeholder Copyright</div>
    </main>
  )
}
