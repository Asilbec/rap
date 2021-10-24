import './App.css';
import React from "react"
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    document.title = "Music"
  }, [])
  return (
    <div className="App">
      <div id='one' className='section'>
        <div onclick="" class="blur">
          <h1>Kanye West</h1>
          <p>
            Got treasures in my mind but couldn't open up my own vault {'\n'}
            My childlike creativity, purity and honesty {'\n'}
            Is honestly being crowded by these grown thoughts {'\n'}
            Reality is catching up with me {'\n'}
            Taking my inner child, I'm fighting for custody {'\n'}
            With these responsibilities that they entrusted me {'\n'}
            As I look down at my diamond encrusted piece{'\n'}
          </p>
        </div>
      </div>
      <div id='two' className='section'>
        <div onclick="" class="blur">
          <h1>Kid Cudi</h1>
          <p>
            I know it's easy to imagine, {'\n'}
            But it's easier to just do, {'\n'}
            See, if you can't do what you imagine, {'\n'}
            Then what is imagination to you? {'\n'}
            Just a waste of space in your brain, {'\n'}
            To take the place of hate, {'\n'}
            Or things all the same, {'\n'}
            Tell me your secrets {'\n'}
            The things that make you tick, {'\n'}
            I like it when you talk {'\n'}
            Because your voice is angelesque (aye), {'\n'}</p>
        </div>
      </div>
      <div id='three' className='section'>
        <div onclick="" class="blur">
          <h1>J Cole</h1>
          <p>
            On the road to riches, listen, this is what you'll find {'\n'}
            The good news is, nigga, you came a long way {'\n'}
            The bad news is, nigga, you went the wrong way</p> {'\n'}
        </div>


      </div>
      <div id='four' className='section'>
        <div onclick="" class="blur">
          <h1>A$AP Rocky</h1>
          <p>It's the irony how LSD inspired me to reach the high in me {'\n'}
            Used to never give a damn now I don't give a fuck entirely {'\n'}
            I think my pride died in me, somewhere inside of me, it's gotta be {'\n'}
            A whole 'nother side of me</p>

        </div>


      </div>

    </div>
  );
}

export default App;
