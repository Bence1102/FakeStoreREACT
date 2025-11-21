import './App.css';
import TermekekAdmin from './Components/admin/TermekekAdmin';
import TermekUrlap from './Components/admin/TermekUrlap';


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>FakeStore</h1>
      </header>
      <section>
        <TermekUrlap/>
      </section>
      <article>
            <TermekekAdmin />
      </article>
    </div>
  );
}

export default App;
