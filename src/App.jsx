
import { useState } from 'react';
import "./App.css";
import { Header } from './components/header.jsx';
import { Boton } from './components/button.jsx';
import { Basic } from './components/Basic.jsx';
import { CORE_CONCEPTS } from './data.js';
import { EXAMPLES } from './data.js';

export function App() {
  const [selectedConcept, setSelectedConcept] = useState("");

  function handleSelect(selectedButton) {
    return () => setSelectedConcept(selectedButton);
  }

  return (
    <main>
      <section>
        <Header>JS Frameworks</Header>
        <div className='core'>
        {CORE_CONCEPTS.map((conceptFramework) => (
          <Basic
            key={conceptFramework.title}{...conceptFramework} />
        ))}
        </div>
      </section>
      <section className='explainedFrameworks'>
      <menu className='examples'>
          <h3>Examples</h3>
          <Boton isSelected={selectedConcept === 'angular'} onSelect={handleSelect('angular')}>Angular</Boton>
          <Boton isSelected={selectedConcept === 'react'} onSelect={handleSelect('react')}>React</Boton>
          <Boton isSelected={selectedConcept === 'vue'} onSelect={handleSelect('vue')}>Vue</Boton>
          <Boton isSelected={selectedConcept === 'svelte'} onSelect={handleSelect('svelte')}>Svelte</Boton>
      </menu>
      {!selectedConcept && <p>Pls select a framework</p>}
      {selectedConcept && (
        <div className='explainedFramework'>

          <h3>{EXAMPLES[selectedConcept].title}</h3>
          <p>{EXAMPLES[selectedConcept].description}</p>
          <pre>
          <code>{EXAMPLES[selectedConcept].code}</code>
          </pre>
        </div>
      )}
      </section>
    </main>
  );
}