import React, { useRef, useState} from 'react'
import { useTrail, animated as a } from "react-spring";
import { makeStyles } from '@material-ui/core/styles';
import './css/styles.css';

const items = ["Посмотри вниз", "Списки посещений", "", ""];
const config = { mass: 5, tension: 2000, friction: 200 };

const useStyles = makeStyles({
    root: {
      width: 500,
    }, 
    text: {
      margin: '0 auto',
      width: '100%',
      padding: '20px'
    }
  });

function About() {
    let classes = useStyles();
    const [toggle, set] = useState(true);
    const trail = useTrail(items.length, {
      config,
      opacity: toggle ? 1 : 0,
      x: toggle ? 0 : 20,
      height: toggle ? 80 : 0,
      from: { opacity: 0, x: 20, height: 0 }
    });
   
    return (
        <div className={classes.text}>
          <div className="trails-main" onClick={() => set(state => !state)}>
            <div>
              {trail.map(({ x, height, ...rest }, index) => (
                <a.div
                  key={items[index]}
                  className="trails-text"
                  style={{
                    ...rest,
                    transform: x.interpolate(x => `translate3d(0,${x}px,0)`)
                  }}
                >
                  <a.div style={{ height }}>{items[index]}</a.div>
                </a.div>
              ))}
          </div>
        </div>
        </div>
    )
}

export default About;



