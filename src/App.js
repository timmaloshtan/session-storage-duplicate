import React from 'react';
import logo from './logo.svg';
import './App.css';

const increment = () => {
  console.log('increment');
  sessionStorage.setItem('AIRSLATE_tabsOpened', Number(sessionStorage.getItem('AIRSLATE_tabsOpened')) + 1);
};

function decrement(){
  console.log('decrement');
  sessionStorage.setItem('AIRSLATE_tabsOpened', Number(sessionStorage.getItem('AIRSLATE_tabsOpened')) - 1);
  window.removeEventListener('pagehide', decrement);
}

function App() {
  React.useEffect(() => {
    console.log('hello');
    window.addEventListener('pagehide', decrement);
    const tabsOpened = Number(sessionStorage.getItem('AIRSLATE_tabsOpened'));
    if (tabsOpened === 'NaN' || tabsOpened === null || tabsOpened === 'undefined' || tabsOpened < 0){
      sessionStorage.setItem('AIRSLATE_tabsOpened', 0);
     }

     increment();
     
     if (sessionStorage.getItem('AIRSLATE_tabsOpened') >= 2){
       alert("this tab is duplicated!!!");
     }


     return () => {
       console.log('unmount')
       decrement();
     };
  }, []);
  return null;
}

export default App;
