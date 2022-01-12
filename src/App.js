import React, { useState } from 'react';
import ReactiveButton from 'reactive-button';
import Expand from "react-expand-animated";

function App() {
  const [status, setStatus] = useState('idle');
  const [buttonText, setButtonText] = useState('בדוק');
  const resultsOptions = ['חיובי', 'שלילי'];
  const resultsColors = ['red', 'green']
  const [resultsIndex, setResultsIndex] = useState();
  const [color, setColor] = useState('teal');

   const onClickHandler = () => {
    setStatus('loading');
    setColor('teal')
      setTimeout(() => {
        const index = Math.floor(Math.random() * 2);
        setResultsIndex(index)
        setButtonText(resultsOptions[index])
        setStatus('success');
        setColor(resultsColors[index])
    }, 3000);
   }

   return (
    <div style={{height: '100%', weight: '100%', padding: '10%'}}>
      <div className={buttonText === "בדוק" ? 'container' : 'container expand'}>
        <br />
        <h1>
          בדיקת אנטיגן אונליין
        </h1>
        <h2>
        מהיר! ללא עלות! 50% יעילות!
        </h2>
        <br />
        <ReactiveButton
          buttonState={status}
          onClick={onClickHandler}
          color={color}
          idleText={buttonText}
          loadingText={'מבצע בדיקה'}
          successText={resultsOptions[resultsIndex]}
          errorText={'Error'}
          type={'button'}
          className={'class1 class2'}
          style={{fontWeight: 'bold', fontSize: 20, borderRadius: '5px' }}
          shadow={false}
          rounded
          size={'large'}
          block={false}
          messageDuration={3000}
          disabled={false}
          buttonRef={null}
          width={'80%'}
          height={50}
          animation={true}
        />
        <br />
        <Expand open={buttonText !== "בדוק"} duration={500}>
          <iframe className="star" src="https://ghbtns.com/github-btn.html?user=ELK4N4&repo=antigen-online&type=star&count=true&size=large" frameborder="0" scrolling="0" width="170" height="30" title="GitHub"></iframe>
        </Expand>
        <h4>
          האתר נבנה בהומור המציאות והנתונים שהאתר מציג אינם אמיתיים ואינם מהווים שום אישור רפואי
        </h4>
      </div>
    </div>
  );
}

export default App;
