import React from 'react';

import Header from './Header';
import Center from './Center';
import Card from './components/card';
import Button from './components/Button';
import Footer from './Footer';

import './css/Header.css';
import './css/project.css';
function App() {

  return (
    <>
      <Header/>
      <Center/>
      <div className='cardList'>
        <Card name='Khaing1' age={18} email='minthetkhaing@gmai.com' isEmployed={true} imageName='2'/>
        <Card name='Khaing2' age={19} email='minthetkhaing@gmai.com' isEmployed={true} imageName='3'/>
        <Card name='Khaing3' age={20} email='minthetkhaing@gmai.com' isEmployed={false} imageName='4'/>
        <Card name='Khaing4' age={21} email='minthetkhaing@gmai.com' isEmployed={true} imageName='5'/>
        <Card name='Khaing5' age={22} email='minthetkhaing@gmai.com' isEmployed={false} imageName='6'/>
        <Card name='Khaing6' age={23} email='minthetkhaing@gmai.com' isEmployed={false} imageName='7'/>
        <Card name='Khaing7' age={24} email='minthetkhaing@gmai.com' isEmployed={true} imageName='8'/>
        <Card name='Khaing8' age={25} email='minthetkhaing@gmai.com' isEmployed={false} imageName='9'/>
        <Card name='Khaing2' age={19} email='minthetkhaing@gmai.com' isEmployed={true} imageName='10'/>
        <Card name='Khaing3' age={20} email='minthetkhaing@gmai.com' isEmployed={false} imageName='11'/>
        <Card name='Khaing4' age={21} email='minthetkhaing@gmai.com' isEmployed={true} imageName='13'/>
        <Card name='Khaing5' age={22} email='minthetkhaing@gmai.com' isEmployed={false} imageName='14'/>
        <Card name='Khaing6' age={23} email='minthetkhaing@gmai.com' isEmployed={false} imageName='18'/>
        <Card name='Khaing7' age={24} email='minthetkhaing@gmai.com' isEmployed={true} imageName='22'/>
        <Card name='Khaing8' age={25} email='minthetkhaing@gmai.com' isEmployed={false} imageName='25'/>
        <Card name='Khaing6' age={23} email='minthetkhaing@gmai.com' isEmployed={false} imageName='26'/>
        <Card name='Khaing7' age={24} email='minthetkhaing@gmai.com' isEmployed={true} imageName='29'/>
      </div>
      <div className="projects">
        <Button/>
        <Button/>
        <Button/>
        <Button/>
        <Button/>
        <Button/>
        <Button/>
        <Button/>
      </div>
      <Footer/>
    </>
  )
}

export default App
