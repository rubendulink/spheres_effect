import './App.css';
import Particles from 'react-particles-js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Particles params={{
          particles: {
            number: {
              value: 6,
              density: {
                enable: false,
                value_area: 50
              }
            },
            color: {
              value: "#bf6eda"
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#bf6eda"
              },
              polygon: {
                nb_sides: 5
              },
            },
            opacity: {
              value: 1,
              random: false,
              anim: {
                enable: false,
              }
            },
            size: {
              value: 100,
              random: false,
              anim: {
                enable: false,
                speed: 0.3,
                size_min: 0.3,
                sync: false
              }
            },
            move: {
              enable: true,
              speed: 3,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "bounce",
              bounce: true,
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 600
              }
            }
          },
          interactivity: {
            detectsOn: "window",
            events: {
              resize: true
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 250,
                size: 0,
                duration: 2,
                opacity: 0,
                speed: 3
              },
              repulse: {
                distance: 400,
                duration: 0.4
              },
              push: {
                particles_nb: 4
              },
              remove: {
                particles_nb: 2
              }
            }
          },
          retina_detect: true
        }} />
        {/* <div className="container">
        </div> */}
      </header>
    </div>
  );
}

export default App;
