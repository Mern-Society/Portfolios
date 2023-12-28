import React, { useEffect, useState } from 'react';
// import "./App.css";

import Header from '../components/header/Header';
import Home from '../components/home/Home';
import About from '../components/about/About';
import Skills from '../components/skills/Skills';
import Services from '../components/services/Services';
import Qualification from '../components/qualification/Qualification';
import Testimonials from '../components/testimonials/Testimonials';
import Contact from '../components/contact/Contact';
import Work from '../components/work/Work';
import Footer from '../components/footer/Footer';
import ScrollUp from '../components/scrollup/ScrollUp';

//Components

import { useDispatch, useSelector } from 'react-redux';
import { PROFILES } from '../commonData';
import { getContent } from '../Redux/Actions/dataAction';


const App = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector(a => a.auth);
  const { content } = useSelector(a => a.data);

  const [values, setValues] = useState({})
  const handleGetContent = (val) => {
        dispatch(getContent(val));
  }

  useEffect(() => {
    const pathname = window.location.pathname;
    let myPath = 'stevenAlba';
    var ret = pathname.replace('/profile','');
  
    if(ret){
      ret = ret.split('/')[1].split('#')[0];
    }
    
    let localPath = localStorage.getItem('profile');

    if(ret){
      myPath = ret;
      localStorage.setItem('profile', myPath);
    } else {
      if(localPath){
        myPath = localPath;
      }
    }

    let profile = PROFILES.find(a => a.username === myPath);
    let socials = profile.contents.find(a => a.type === 'socials');
    let services = profile.contents.find(a => a.type === 'services');
    let skills = profile.contents.find(a => a.type === 'skills');
    let about = profile.contents.find(a => a.type === 'about');

    let contact = profile.contents.find(a => a.type === 'contact');


    let qualification = profile.contents.find(a => a.type === 'qualification');

    let works = profile.contents.find(a => a.type === 'works');
    console.log(services)
    setValues({...values, ...profile, socials, services, skills, about, contact, qualification, works })
    dispatch({type: 'SET_CONTENT', payload: profile});
    
    // handleGetContent(myPath);
  }, [])
  

  // useEffect(() => {
  //   if(content.username){
  //     setValues(content)
  //   }
  // },[content])



  let { about, socials, skills, services, qualification, testimonial, works, contact, profile } = values
  return (
    <>
    <Header data={values} />
    <main className="main">
      <Home socials={socials}
        profile={profile}
      />
      <About data={about ? about : {}}/>
    {skills && skills.contents.length !== 0 &&  <Skills data={skills ? skills : {}}/>}
    {services && services.contents.length !== 0 &&  <Services data={services ? services : {}}/> }
    {qualification && qualification.contents.length !== 0 &&   <Qualification data={qualification ? qualification : {}}/> }
    {works && works.contents.length !== 0 &&  <Work data={works ? works : {}}/> }
    {testimonial && testimonial.contents.length !== 0 &&  <Testimonials data={testimonial? testimonial: {}}/> }
    {contact && contact.contents.length !== 0 &&  <Contact data={contact ? contact : {}} /> }
    </main>
    <Footer socials={socials}/>
      <ScrollUp />
    </>
  )
}

export default App