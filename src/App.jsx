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
          <table>
            <thead>
              <tr>
                <th>Day</th>
                <th>Recipe Name</th>
                <th>Primary Ingredient</th>
                <th>Ingredients Needed</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Item 1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="footer"></div>
    </main>
  )
}
