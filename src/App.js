import Footer from "./components/Footer";
import Quote from "./components/Quote";
import { data } from "./data/data";
import { useState } from "react";

function App() {
  const [quote, setQuote] = useState(data[0]);
  const randomNumber = Math.floor(Math.random() * data.length);
  console.log(randomNumber);
  const randomise
  return (
    <section>
      <div className="App">
        <h1>Quote Generator</h1>
        <Quote data={quote} />
        <button onClick={() => setQuote(data[2])}>Generate!</button>
      </div>
      <Footer />
    </section>
  );
}

export default App;
