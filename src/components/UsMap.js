import NumberFormat from "react-number-format";
import { Container } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../util/AuthContext";
import USMapSmall from "../graphics/USMapSmall"
// import GetAllUsers from "./GetAllUsers";

export default function UsMap() {

  const { currentUser } = useAuth()


  const [selectedState, setSelectedState] = useState("United States")
  const [numKids, setNumKids] = useState('410308')
  const [pdfLink, setPdfLink] = useState('')

function setUS() {
  setSelectedState('United States')
  setNumKids('410308')
  setPdfLink('')
}


  function setAL() {
    setSelectedState('Alabama')
    setNumKids('5682')
    setPdfLink('https://caseyfamilypro-wpengine.netdna-ssl.com/media/alabama-fact-sheet-2021.pdf')
  }
  function setAK() {
    setSelectedState('Alaska')
    setNumKids('2876')
    setPdfLink('https://caseyfamilypro-wpengine.netdna-ssl.com/media/alaska-fact-sheet-2021.pdf')
  }
  function setAZ() {
    setSelectedState('Arizona')
    setNumKids('13329')
    setPdfLink('https://caseyfamilypro-wpengine.netdna-ssl.com/media/arizona-fact-sheet-2021.pdf')
  }
  function setAR() {
    setSelectedState('Arkansas')
    setNumKids('4123')
    setPdfLink('https://caseyfamilypro-wpengine.netdna-ssl.com/media/arkansas-fact-sheet-2021.pdf')
  }
  function setCA() {
    setSelectedState('California')
    setNumKids('47360')
    setPdfLink('https://caseyfamilypro-wpengine.netdna-ssl.com/media/california-fact-sheet-2021.pdf')
  }
  function setCO() {
    setSelectedState('Colorado')
    setNumKids('4824')
    setPdfLink('https://caseyfamilypro-wpengine.netdna-ssl.com/media/colorado-fact-sheet-2021.pdf')
  }
  function setCT() {
    setSelectedState('Connecticut')
    setNumKids('3882')
    setPdfLink('https://caseyfamilypro-wpengine.netdna-ssl.com/media/connecticut-fact-sheet-2021.pdf')
  }

  function setDE() {
    setSelectedState('Delaware')
    setNumKids('557')
    setPdfLink('https://caseyfamilypro-wpengine.netdna-ssl.com/media/delaware-fact-sheet-2021.pdf')
  }
  // function setDC() {
  //   setSelectedState('Delaware')
  //   setNumKids('357')
  //   setPdfLink('https://caseyfamilypro-wpengine.netdna-ssl.com/media/district-of-columbia-fact-sheet-2021.pdf')
  // }
  function setFL() {
    setSelectedState('Florida')
    setNumKids('23667')
    setPdfLink('https://caseyfamilypro-wpengine.netdna-ssl.com/media/florida-fact-sheet-2021.pdf')
  }
  function setGA() {
    setSelectedState('Georgia')
    setNumKids('12888')
    setPdfLink('https://caseyfamilypro-wpengine.netdna-ssl.com/media/georgia-fact-sheet-2021.pdf')
  }
  function setHI() {
    setSelectedState('Hawaii')
    setNumKids('1604')
    setPdfLink('https://caseyfamilypro-wpengine.netdna-ssl.com/media/hawaii-fact-sheet-2021.pdf')
  }
  function setID() {
    setSelectedState('Idaho')
    setNumKids('1740')
    setPdfLink('https://caseyfamilypro-wpengine.netdna-ssl.com/media/idaho-fact-sheet-2021.pdf')
  }
  function setIL() {
    setSelectedState('Illinois')
    setNumKids('16565')
    setPdfLink('https://caseyfamilypro-wpengine.netdna-ssl.com/media/illinois-fact-sheet-2021.pdf')
  }
  function setIN() {
    setSelectedState('Indiana')
    setNumKids('16023')
    setPdfLink('https://caseyfamilypro-wpengine.netdna-ssl.com/media/indiana-fact-sheet-2021.pdf')
  }
  function setIA() {
    setSelectedState('Iowa')
    setNumKids('5943')
    setPdfLink('https://caseyfamilypro-wpengine.netdna-ssl.com/media/iowa-fact-sheet-2021.pdf')
  }
  function setKS() {
    setSelectedState('Kansas')
    setNumKids('8001')
    setPdfLink('https://caseyfamilypro-wpengine.netdna-ssl.com/media/kansas-fact-sheet-2021.pdf')
  }
  function setKY() {
    setSelectedState('Kentucky')
    setNumKids('9113')
    setPdfLink('https://caseyfamilypro-wpengine.netdna-ssl.com/media/kentucky-fact-sheet-2021.pdf')
  }
  function setLA() {
    setSelectedState('Louisiana')
    setNumKids('3929')
    setPdfLink('https://caseyfamilypro-wpengine.netdna-ssl.com/media/louisiana-fact-sheet-2021.pdf')
  }
  function setME() {
    setSelectedState('Maine')
    setNumKids('2083')
    setPdfLink('https://caseyfamilypro-wpengine.netdna-ssl.com/media/maine-fact-sheet-2021.pdf')
  }
  function setMD() {
    setSelectedState('Maryland')
    setNumKids('3689')
    setPdfLink('https://caseyfamilypro-wpengine.netdna-ssl.com/media/maryland-fact-sheet-2021.pdf')
  }
  function setMA() {
    setSelectedState('Massachusetts')
    setNumKids('9831')
    setPdfLink('https://caseyfamilypro-wpengine.netdna-ssl.com/media/massachusettsfact-sheet-2021.pdf')
  }
  function setMI() {
    setSelectedState('Michigan')
    setNumKids('11438')
    setPdfLink('https://caseyfamilypro-wpengine.netdna-ssl.com/media/michigan-fact-sheet-2021.pdf')
  }
  function setMN() {
    setSelectedState('Minnesota')
    setNumKids('8261')
    setPdfLink('https://caseyfamilypro-wpengine.netdna-ssl.com/media/minnesota-fact-sheet-2021.pdf')
  }
  function setMS() {
    setSelectedState('Mississippi')
    setNumKids('4011')
    setPdfLink('https://caseyfamilypro-wpengine.netdna-ssl.com/media/mississippi-fact-sheet-2021.pdf')
  }
  function setMO() {
    setSelectedState('Missouri')
    setNumKids('12654')
    setPdfLink('https://caseyfamilypro-wpengine.netdna-ssl.com/media/missouri-fact-sheet-2021.pdf')
  }
  function setMT() {
    setSelectedState('Montana')
    setNumKids('3700')
    setPdfLink('https://caseyfamilypro-wpengine.netdna-ssl.com/media/montana-fact-sheet-2021.pdf')
  }
  function setNE() {
    setSelectedState('Nebraska')
    setNumKids('3238')
    setPdfLink('https://caseyfamilypro-wpengine.netdna-ssl.com/media/nebraska-fact-sheet-2021.pdf')
  }
  function setNV() {
    setSelectedState('Nevada')
    setNumKids('4515')
    setPdfLink('https://caseyfamilypro-wpengine.netdna-ssl.com/media/nevada-fact-sheet-2021.pdf')
  }
  function setNH() {
    setSelectedState('New Hampshire')
    setNumKids('1211')
    setPdfLink('https://caseyfamilypro-wpengine.netdna-ssl.com/media/new-hampshire-fact-sheet-2021.pdf')
  }
  function setNJ() {
    setSelectedState('New Jersey')
    setNumKids('4431')
    setPdfLink('https://caseyfamilypro-wpengine.netdna-ssl.com/media/new-jersey-fact-sheet-2021.pdf')
  }
  function setNM() {
    setSelectedState('New Mexico')
    setNumKids('2324')
    setPdfLink('https://caseyfamilypro-wpengine.netdna-ssl.com/media/new-mexico-fact-sheet-2021.pdf')
  }
  function setNY() {
    setSelectedState('New York')
    setNumKids('15606')
    setPdfLink('https://caseyfamilypro-wpengine.netdna-ssl.com/media/new-york-fact-sheet-2021.pdf')
  }
  function setNC() {
    setSelectedState('North Carolina')
    setNumKids('11025')
    setPdfLink('https://caseyfamilypro-wpengine.netdna-ssl.com/media/north-carolina-sheet-2021.pdf')
  }
  function setND() {
    setSelectedState('North Dakota')
    setNumKids('1468')
    setPdfLink('https://caseyfamilypro-wpengine.netdna-ssl.com/media/north-dakota-fact-sheet-2021.pdf')
  }
  function setOH() {
    setSelectedState('Ohio')
    setNumKids('15710')
    setPdfLink('https://caseyfamilypro-wpengine.netdna-ssl.com/media/ohio-fact-sheet-2021.pdf')
  }
  function setOK() {
    setSelectedState('Oklahoma')
    setNumKids('8301')
    setPdfLink('https://caseyfamilypro-wpengine.netdna-ssl.com/media/oklahoma-fact-sheet-2021.pdf')
  }
  function setOR() {
    setSelectedState('Oregon')
    setNumKids('6922')
    setPdfLink('https://caseyfamilypro-wpengine.netdna-ssl.com/media/oregon-fact-sheet-2021.pdf')
  }
  function setPA() {
    setSelectedState('Pennsylvania')
    setNumKids('14912')
    setPdfLink('https://caseyfamilypro-wpengine.netdna-ssl.com/media/pennsylvania-fact-sheet-2021.pdf')
  }
  function setRI() {
    setSelectedState('Rhode Island')
    setNumKids('2196')
    setPdfLink('https://caseyfamilypro-wpengine.netdna-ssl.com/media/rhode-island-fact-sheet-2021-1.pdf')
  }
  function setSC() {
    setSelectedState('South Carolina')
    setNumKids('4497')
    setPdfLink('https://caseyfamilypro-wpengine.netdna-ssl.com/media/south-carolina-fact-sheet-2021-1.pdf')
  }
  function setSD() {
    setSelectedState('South Dakota')
    setNumKids('1703')
    setPdfLink('https://caseyfamilypro-wpengine.netdna-ssl.com/media/south-dakota-fact-sheet-2021.pdf')
  }
  function setTN() {
    setSelectedState('Tennessee')
    setNumKids('8893')
    setPdfLink('https://caseyfamilypro-wpengine.netdna-ssl.com/media/tennessee-fact-sheet-2021.pdf')
  }
  function setTX() {
    setSelectedState('Texas')
    setNumKids('31283')
    setPdfLink('https://caseyfamilypro-wpengine.netdna-ssl.com/media/texas-fact-sheet-2021.pdf')
  }
  function setUT() {
    setSelectedState('Utah')
    setNumKids('2335')
    setPdfLink('https://caseyfamilypro-wpengine.netdna-ssl.com/media/utah-fact-sheet-2021.pdf')
  }
  function setVT() {
    setSelectedState('Vermont')
    setNumKids('1226')
    setPdfLink('https://caseyfamilypro-wpengine.netdna-ssl.com/media/vermont-fact-sheet-2021.pdf')
  }
  function setVA() {
    setSelectedState('Virginia')
    setNumKids('4747')
    setPdfLink('https://caseyfamilypro-wpengine.netdna-ssl.com/media/virginia-fact-sheet-2021.pdf')
  }
  function setWA() {
    setSelectedState('Washington')
    setNumKids('10151')
    setPdfLink('https://caseyfamilypro-wpengine.netdna-ssl.com/media/washington-fact-sheet-2021.pdf')
  }
  function setWV() {
    setSelectedState('West Virginia')
    setNumKids('7211')
    setPdfLink('https://caseyfamilypro-wpengine.netdna-ssl.com/media/west-virginia-fact-sheet-2021.pdf')
  }
  function setWI() {
    setSelectedState('Wisconsin')
    setNumKids('7626')
    setPdfLink('https://caseyfamilypro-wpengine.netdna-ssl.com/media/wisconsin-fact-sheet-2021.pdf')
  }
  function setWY() {
    setSelectedState('Wyoming')
    setNumKids('984')
    setPdfLink('https://caseyfamilypro-wpengine.netdna-ssl.com/media/wyoming-fact-sheet-2021.pdf')
  }







  return (
    <>
     


     <Container className="col-lg-8 p-lg-5">

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 961.8 582.6" 
    height="100%"
    width="100%"
      >

  <path
  id="HI"
  onClick={() => setHI()}
  className="mapState"
  d="M212.2 483.9l3-5.5 3.5-.5.5 1.2-3.2 4.8zM228 478l9.5 4 3.3-.5 2.5-6-1-5.2-6.5-.8-6.3 2.8-1.5 5.8zm47.5 15.5l5.8 8.5 3.7-.5 1.8-.7 2.2 2 5.8-.3 1.5-2.2-4.5-2.8-3-5.7-3.3-5.5-9 4.5-1 2.8zm31.3 13.8l2-3 7.3 1.5 1-.7 9.5 1-.5 2-4 2.2-6.8-.5zm8.3 8l3 6 4.7-1.7.5-2.6-2.5-3.2-5.8-.5v2zm10.7-1.7l3.5-4.5 7.3 3.7 6.7 1.8 6.8 4.2v3l-5.5 2.8-7.5 1.5-3.8-2.3-7.5-10.3zm25.8 24l2.5-2 5.2 2.5 11.8 5.5 5.3 3.2 2.5 3.8 3 6.7 6.2 4-.5 2-6 5-6.5 2.3-2.3-1-4.7 2.7-3.8 5-3.5 4.5-2.7-.2-5.5-4-.5-7 1-3.8-2.5-8.7-3.3-2.8-.2-4 3.5-1.5 3.2-4.8.8-1.5-2.5-2.7-.5-3.3z"/>

  <path
  onClick={() => setFL()}
  className="mapState"
  id="FL"
  d="M754 432.2l2.3 7.4 3.8 9.7 5.3 9.4 3.7 6.3 4.9 5.5 4 3.7 1.6 2.9-1.2 1.3-.8 1.3 3 7.4 2.9 2.9 2.6 5.3 3.6 5.8 4.5 8.3 1.3 7.6.4 12 .7 1.8-.3 3.4-2.5 1.2.4 2-.7 2 .3 2.4.5 1.9-2.7 3.2-3 1.5-4 .2-1.4 1.6-2.5 1-1.2-.5-1.2-1-.3-3-.8-3.3-3.4-5.2-3.5-2.2-4-.3-.7 1.3-3.1-4.4-.7-3.6-2.5-4-1.8-1-1.6 2-1.8-.3-2.1-5-3-3.9-2.8-5.3-2.6-3-3.6-4 2.1-2.3 3.2-5.5-.1-1.7-4.6-1-1.6.7.4.6 2.5 1-1.4 4.6-.8.4-1.8-4-1.3-4.8-.3-2.8 1.4-4.6v-9.6l-3-3.7-1.3-3-5.2-1.4-2-.6-1.6-2.6-3.4-1.6-1-3.4-2.8-1-2.4-3.7-4.2-1.5-3-1.4h-2.5l-4 .8-.2 2 .8 1-.4 1-3.1-.1-3.7 3.5-3.7 2h-3.9L684 463l-.3-2.8-1.6-1.8-3-1.2-1.5-1.4-8.1-4-7.6-1.7-4.4.7-6 .4-6 2.1-3.4.7-.2-8-2.7-2-1.7-1.8.3-3 10.2-1.3 25.5-3 6.8-.6 5.4.3 2.6 3.9 1.5 1.4 8 .5 10.9-.6 21.5-1.3 5.5-.7 5 .2.5 3 2.2.7.3-4.6-1.6-4.2 1.3-1.4 5.6.4 5.1.3zm12.6 132.4l2.4-.6 1.3-.2 1.5-2.4 2.3-1.6 1.3.5 1.7.3.4 1-3.5 1.2-4.2 1.5-2.3 1.2-1-.9zm13.5-5l1.2 1 2.8-2 5.3-4.3 3.7-3.8 2.5-6.7 1-1.7.2-3.4-.7.5-1 2.8-1.5 4.7-3.2 5.3-4.4 4.2-3.4 2-2.5 1.5z"/>


  <path
  id="AK"
  onClick={() => setAK()}
  className="mapState"
  d="M153.3 434.8L153 520l1.6 1 3 .2 1.6-1.1h2.5l.2 2.9 7 6.8.5 2.5 3.4-1.9.6-.2.3-3 1.5-1.7 1.1-.1 2-1.5 3 2.1.7 3 2 1 1 2.5 4 1.8 3.3 6 2.8 3.9 2.2 2.7 1.4 3.7 5 1.8 5.2 2.1 1 4.4.5 3-1 3.4-1.8 2.3-1.6-.8-1.4-3-2.8-1.5-1.8-1.2-.8.8 1.5 2.8.1 3.7-1 .5-2-2-2.1-1.3.5 1.6 1.3 1.8-.8.8a3.5 3.5 0 01-1.3-1 69 69 0 01-2.1-3.4l-1-2.3s-.4 1.3-1 1a4.4 4.4 0 01-1.3-1.4l1.7-2-1.4-1.4v-5h-.8l-.8 3.4-1.2.5-1-3.7-.6-3.8-.8-.4.3 5.6v1.1l-1.4-1.3-3.6-6-2.1-.4-.7-3.8-1.6-2.9-1.6-1v-2.4l2.1-1.3-.5-.3-2.6.7-3.3-2.4-2.6-3-4.8-2.5-4-2.6 1.3-3.2V523l-1.8 1.6-2.9 1.1-3.7-1-5.7-2.5h-5.5l-.6.5-6.5-4-2-.2-2.8-5.8-3.6.3-3.5 1.4.4 4.6 1.2-3 1 .4-1.5 4.3 3.2-2.7.7 1.6-4 4.4-1.2-.3-.5-2-1.3-.8-1.3 1.2-2.8-1.8-3 2-1.8 2.2-3.4 2h-4.7l-.5-2.2 3.7-.6v-1.3l-2.2-.7 1-2.4 2.2-3.9v-1.7l.2-.9 4.4-2.2 1 1.3h2.7l-1.3-2.6-3.7-.3-5 2.7-2.4 3.4-1.8 2.6-1.2 2.3-4.2 1.5-3 2.5-.4 1.6 2.3 1 .8 2.1-2.8 3.2-6.4 4.3-7.8 4.1-2.1 1.2-5.3 1.1-5.4 2.3 1.8 1.3-1.5 1.4-.4 1.1-2.8-1-3.2.2-.8 2.3h-1l.3-2.5L54 549l-2.9 1-3.4-1.3-2.9 2h-3.2l-2 1.3-1.7.8-2.1-.3-2.6-1.1-2.2.6-1 1-1.6-1.1v-2l3-1.3 6.4.7 4.3-1.6 2.1-2.1 3-.7 1.7-.8 2.8.2 1.6 1.3 1-.4 2.2-2.7 3.1-1 3.4-.7 1.3-.3.7.5h.8l1.2-3.7 4-1.5 2-3.7 2.3-4.5 1.6-1.5.3-2.6-1.6 1.3-3.4.7-.7-2.5-1.3-.3-1 1-.1 2.9-1.5-.2-1.4-5.8-1.3 1.3-1.1-.5-.4-2-4 .2-2 1.2-2.6-.4 1.4-1.4.4-2.6-.6-2 1.4-1h1.3l-.6-1.9v-4.3l-1-1-.8 1.4h-6.1l-1.5-1.3-.6-3.9L46 499v-1l2.1-.8.2-2.1 1.1-1.1-.8-.5-1.3.5-1.1-2.8 1-5 4.5-3.2 2.6-1.6 2-3.8 2.7-1.3 2.5 1.2.4 2.4 2.4-.3 3.2-2.5 1.7.7 1 .6h1.6l2.2-1.3.8-4.3s.4-3 1-3.4a4.3 4.3 0 001-1l-1-2-2.7.9-3.2.8-2-.5-3.5-1.8-5-.2-3.6-3.7.5-3.9.7-2.4-2.1-1.8-2-3.7.5-.8 6.8-.5h2.1l1 1h.7l-.2-1.6 3.9-.6 2.6.3 1.2 1.1-1.4 2.1-.5 1.5 2.7 1.6 5 1.8 1.8-1-2.3-4.4-1-3.2 1-.9-3.4-1.9-.4-1.1.5-1.6-.8-3.9-3-4.7-2.4-4.2 3-2h3.2l1.7.7 4.2-.1 3.8-3.6 1.1-3.1 3.7-2.4 1.6 1 2.8-.6 3.7-2.1 1.1-.2 1 .8 4.5-.2 2.8-3h1.1l3.6 2.4 2 2-.6 1.2.7 1.2 1.6-1.7 3.9.4.3 3.7 2 1.4 7 .7 6.3 4.2 1.5-1 5.2 2.6 2-.7 2-.8 4.9 2 4.3 2.9zm-115 29l2 5.2-.1 1-3-.3-1.7-4-1.8-1.5h-2.4l-.2-2.6 1.8-2.4 1.1 2.4 1.5 1.5zm-2.7 33.4l3.8.8 3.7 1 .8 1-1.6 3.7-3.1-.2-3.4-3.5zm-20.7-14l1.2 2.5 1.1 1.6-1.1.8-2.1-3v-2zm-13.7 73l3.4-2.3 3.4-1 2.6.3.5 1.6 1.9.5 2-1.9-.4-1.6 2.8-.7 2.9 2.6-1.2 1.8-4.3 1.1-2.8-.4-3.7-1.2-4.3 1.5-1.6.3-1.2-.6zm49-4.6l1.6 2L54 552l-1.5-1.3zm3 3.1l1-2.2 2.1.3-.8 2zm23.5-2l1.5 1.9 1-1.2-.8-2zm8.7-12.4l1.2 5.8 2.9.9 5-3 4.4-2.5-1.7-2.5.5-2.4-2 1.3-3-.8 1.6-1.1 2 .8 3.8-1.8.5-1.4-2.4-.8.8-2-2.8 2-4.6 3.5-4.9 2.9-1.3 1.1zm42.4-19.9l2.4-1.4-1-1.8-1.8 1z"/>

<g
  id="MI"
  onClick={() => setMI()}
  className="mapState"
>
        <path
        d="M692.1 170.3l-3.2-8.2-2.3-9-2.4-3.3-2.6-1.8-1.6 1.2-3.9 1.7-2 5-2.7 3.8-1.1.6-1.5-.6s-2.6-1.5-2.4-2.1c.2-.7.5-5 .5-5l3.4-1.3.8-3.4.6-2.6 2.5-1.6-.4-10-1.6-2.3-1.3-.8-.8-2.1.8-.8 1.6.3.2-1.6-2.4-2.3-1.3-2.6h-2.6l-4.5-1.4-5.5-3.4h-2.8l-.6.6-1-.5-3-2.2-3 1.7-2.9 2.3.4 3.6 1 .3 2 .5.5.8-2.6.8-2.6.3-1.4 1.8-.3 2 .3 1.7.3 5.5-3.6 2.1-.6-.2v-4.2l1.3-2.4.6-2.4-.8-.8-2 .8-.9 4.2-2.7 1.1-1.8 2-.2 1 .7.7-.7 2.6-2.2.5v1.1l.8 2.5-1.2 6.1-1.6 4 .7 4.7.5 1.2-.8 2.4-.4.8-.3 2.8 3.6 6 2.9 6.4 1.4 4.8-.8 4.7-1 6-2.4 5.2-.3 2.7-3.3 3.1 4.5-.1 21.4-2.3 7.2-1 .1 1.7 6.9-1.2L676 201l3.8-.5.2-.6.1-1.4 2.1-3.8 2-1.7-.2-5 1.6-1.6 1.1-.4.2-3.5 1.6-3 1 .5.2.7.8.1 2-1-.4-9.5z"
        />

        <path
          
          d="M575.9 75.2l1.8-2.1 2.2-.8 5.3-3.9 2.3-.6.5.5-5.2 5.1-3.3 2-2 .9-1.6-1.1zm86.1 32l.7 2.6 3.2.1 1.3-1.2s0-1.4-.4-1.6c-.3-.1-1.6-1.8-1.6-1.8l-2.2.2-1.6.2-.3 1.1 1 .5zm-100.3-2.9l.8-.6 2.7-.8 3.6-2.2v-1l.6-.7 6-1 2.4-1.9 4.4-2 .1-1.4 2-2.9 1.8-.8 1.3-1.8 2.2-2.2 4.4-2.5 4.7-.4 1.1 1.1-.3 1-3.7 1-1.5 3-2.3.8-.4 2.4-2.5 3.3-.3 2.6.8.4 1-1 3.5-3 1.3 1.3h2.3l3.2 1 1.5 1.1 1.4 3 2.8 2.8 3.9-.1 1.4-1 1.6 1.3 1.7.5 1.3-.8h1l1.7-1 4-3.6 3.4-1.1 6.7-.3 4.5-2 2.6-1.3 1.4.2v5.7l.5.3 3 .8 1.9-.5 6.1-1.6 1.1-1.1 1.5.4v7l3.2 3 1.3.7 1.3 1-1.3.3-.8-.3-3.7-.5-2.1.6-2.3-.1-3.2 1.4h-1.8l-5.8-1.3-5.2.2-2 2.6-6.9.6-2.4.8-1.1 3.1-1.3 1.2-.5-.2-1.5-1.6-4.5 2.4h-.6l-1.2-1.6-.8.1-2 4.4-.9 4-3.2 7-1.1-1-1.4-1-2-10.3-3.5-1.4-2-2.3-12.2-2.7-2.8-1-8.2-2.2-8-1.1-3.7-5.2z"
          />
          </g>

          <path
          onClick={() => setME()}
        className="mapState"

          id="ME" d="M917.09,71.92,919,74l2.26,3.71v1.94l-2.1,4.69-1.94.65-3.39,3.07L909,93.59h-1.3c-.64,0-1-2.1-1-2.1l-1.77.16-1,1.45-2.43,1.46-1,1.45,1.62,1.46-.49.64-.48,2.75-1.94-.16V99.08L899,97.79l-1.45.32-1.78-3.23-2.1,1.29,1.29,1.46.33,1.13-.81,1.29.32,3.07.16,1.62-1.61,2.59-2.91.48-.33,2.91-5.33,3.07-1.3.49-1.61-1.46-3.07,3.56,1,3.23-1.46,1.3-.16,4.36L877,131.53l-2.47-1.15-.48-3.08-3.88-1.13-.32-2.75L862.58,100l-4.7-14.64,1.42-.11,1.52.41V83.05l1.31-4.5,2.58-4.69,1.46-4-1.94-2.42v-6l.8-1,.81-2.75-.16-1.46-.16-4.85,1.78-4.85,2.91-8.89,2.1-4.2h1.29l1.3.16v1.13L876.19,37l2.75.64.81-.81v-1l4-2.91,1.78-1.77,1.45.16,6,2.42,1.94,1L904,64.65h6l.8,1.94.17,4.85,2.91,2.26h.8l.17-.48-.49-1.13,2.75-.17Zm-20.93,30.15,1.53-1.53,1.38,1,.56,2.42-1.69.89Zm6.71-5.9L904.65,98s1.29.08,1.29-.24.24-2,.24-2l.89-.81-.81-1.78-2,.73Z" />



        <path
        id="NY"
  onClick={() => setNY()}

        className="mapState"
        d="M824.63,181.84l-1.13-1-2.59-.16-2.26-1.94L817,172.64l-3.46.09L811.12,170l-19.39,4.38-43,8.73-7.53,1.23-.74-6.47,1.43-1.12,1.29-1.13,1-1.62,1.78-1.13,1.94-1.78.48-1.62,2.11-2.75,1.13-1-.16-1-1.3-3.07-1.78-.16-1.94-6.14,2.91-1.78,4.37-1.46,4-1.29,3.23-.48,6.31-.17,1.94,1.3,1.62.16,2.1-1.29,2.58-1.14,5.18-.48,2.1-1.78,1.78-3.23,1.61-1.94h2.1l1.94-1.13.17-2.27-1.46-2.1-.32-1.45,1.13-2.1v-1.46H788l-1.78-.81-.8-1.13-.17-2.59,5.82-5.49.65-.81,1.45-2.91,2.91-4.53,2.75-3.72,2.1-2.42,2.42-1.83,3.08-1.24,5.5-1.3,3.23.17,4.53-1.46,7.56-2.07.52,5,2.43,6.47.81,5.17-1,3.88,2.58,4.53.81,2.1-.81,2.91,2.91,1.29.65.32,3.07,11-.54,5.06-.48,10.83.81,5.49.81,3.56,1.45,7.28v8.08l-1.13,2.26,1.84,2,.79,1.68-1.94,1.78.33,1.29,1.29-.32,1.46-1.29,2.26-2.59,1.13-.65,1.62.65,2.26.16,7.92-3.88,2.91-2.75,1.3-1.45,4.2,1.62-3.4,3.55-3.88,2.91-7.11,5.34-2.59,1-5.82,1.94-4,1.13-1.17-.53-.25-3.69.49-2.75-.16-2.1-2.82-1.7-4.52-1-3.88-1.13-3.72-1.78Z"
        />

 <path 
className="mapState"
 id="PA"
 onClick={() => setPA()}
 
 d="M819.4 217.8l1.3-.3 2.3-1.2 1.2-2.5 1.6-2.3 3.3-3v-.9l-2.5-1.6-3.5-2.4-1-2.6-2.8-.3-.1-1.2-.8-2.7 2.2-1.2.2-2.4-1.3-1.3.2-1.6 2-3v-3.1l2.6-2.7-1-.7-2.4-.1-2.3-2-1.6-6.1-3.5.1-2.4-2.7-18.1 4.2-43 8.8-8.9 1.4-.6-6.5-5.4 5.1-1.3.5-4.2 3 3 19.1 2.4 9.8 3.6 19.2 3.3-.6 11.9-1.5 38-7.7 14.8-2.8 8.3-1.6.3-.3 2-1.6 2.2-.7z" />
        
        <path
        id="VA"
        className="mapState"
        onClick={() => setVA()}
        d="M825.9 259.2l-.2-2 6.5-2.5-.8 3.2-2.9 3.8-.4 4.5.5 3.4-1.9 5-2.1 2-1.5-4.7.4-5.4 1.6-4.2.8-3.1zm3.3 28.3L771 300l-37.4 5.3-6.7-.4-2.5 2-7.4.2-8.4 1-10.9 1.6 10.5-5.6V302l1.5-2.2 10.6-11.5 4 4.5 3.7 1 2.5-1.1 2.3-1.3 2.5 1.3 4-1.4 1.8-4.6 2.6.6 2.9-2.2 1.8.5 2.8-3.7.3-2-1-1.3 1-1.9 5.3-12.3.6-5.7 1.3-.5 2.1 2.4 4-.3 2-7.5 2.7-.6 1-2.7 2.6-2.4 2.8-5.7v-5l10 3.8c.6.3.7-5 .7-5l3.7 1.6v2.9l5.9 1.3 2 1.2 1.7 2-.6 3.6-2 2.6.1 2 .6 2 5 1.2h4.5l3 1 2 .3.7 3.1 3.2.4.9 1.2-.5 4.7 1.4 1-.5 2 1.3.8-.3 1.4-2.7-.1.1 1.6 2.3 1.6.1 1.4 1.8 1.8.5 2.5-2.5 1.4 1.5 1.5 5.8-1.7 3.6 6z" />


        <path
        id="WV"
        onClick={() => setWV()}
          className="mapState"
          d="M755.4 232l1.1 5 1.1 6 2.2-2.5 2.2-3.1 2.6-.6 1.4-1.5 1.8-2.6 1.4.7 3-.3 2.5-2.2 2-1.4 1.9-.5 1.3 1 3.6 1.8 2 1.8 1.4 1.3-.8 5.6-5.8-2.6-4.3-1.6v5.2l-2.8 5.5-2.6 2.5-1.2 2.7-2.6.5-.9 3.6-1 4-4 .3-2.3-2.4-1.1.5-.6 5.5-1.4 3.5-5 11 1 1.1-.3 2-2.8 3.8-1.8-.5-3 2.1-2.5-.5-2 4.5s-3.2 1.5-4 1.4l-2.4-1.3-2.3 1.4-2.4 1-3.8-.8-1-1.2-2.3-3-3.1-2-1.7-3.6-4.3-3.5-.7-2.3-2.6-1.4-.8-1.6-.2-5.3h2.2l2-.9v-2.7l1.7-1.5.2-5 1-3.9 1.2-.6 1.3 1.1.5 1.8 1.8-1 .5-1.6-1.2-1.8v-2.4l1-1.3 2.3-3.4 1.3-1.4 2 .5 2.3-1.7 3-3.4 2.4-3.8.3-5.7.5-5v-4.7l-1.2-3 1-1.5 1.3-1.3 3.5 19.8 4.6-.7 12.4-1.8z"
        />
        <path
        id="OH"
        onClick={() => setOH()}
          className="mapState"
          d="M729.6 186.4l-6.1 4-3.9 2.3-3.4 3.8-4 3.8-3.3.8-2.9.5-5.5 2.6-2 .2-3.5-3-5.1.6-2.6-1.5-2.4-1.4-4.9.8-10.2 1.6-11.2 2.2 1.3 14.6 1.8 13.7 2.6 23.5.5 4.8 4.2-.1 2.4-.8 3.3 1.5 2.1 4.3h5.1l2 2.1h1.7l2.5-1.4 2.5.4 5.5.5 1.7-2.2 2.3-1.3 2.1-.6.7 2.7 1.7 1 3.5 2.3h2.2l1.3-.5.2-2.8 1.6-1.5v-4.8l1.1-4 1.3-.7 1.3 1.2.6 1.7 1.7-1 .4-1.5-1-2v-2.2l.7-1.1 2.2-3.3 1-1.6 2.1.5 2.3-1.6 3-3.4 2.8-4 .4-5.1.4-5-.1-5.3-1-3 .4-1.1 1.8-1.8-2.3-9-3-19.4z"
        />
        
        <path
        onClick={() => setIN()}
        id="IN"
          className="mapState"
          d="M613.8 293v-2.8l.6-4.5 2.2-3 1.8-3.8 2.6-4.2-.5-5.8-1.8-2.8-.3-3.2.8-5.5-.5-7-1.3-16-1.3-15.3-1-11.7 3.1.8 1.5 1 1.1-.3 2.1-2 2.9-1.6 5-.1 22-2.3 5.6-.5 1.5 16 4.3 36.8.6 5.7-.4 2.3 1.2 1.8.1 1.4-2.5 1.6-3.5 1.5-3.2.6-.6 4.8-4.6 3.4-2.8 4 .3 2.3-.6 1.6H645l-1.6-1.6-2.5 1.2-2.7 1.5.2 3-1.2.3-.5-1-2.1-1.5-3.3 1.4-1.5 3-1.5-.8-1.4-1.6-4.5.4-5.6 1-2.9 1.6z"
        />

<path
        onClick={() => setWI()}
id="WI"
className="mapState"
d="M609.3 190.5v-3.2l-1.2-4.5-.7-6.2-1.1-2.4 1-3 .8-3 1.5-2.6-.7-3.3-.6-3.6.5-1.8 1.9-2.4.2-2.8-.9-1.2.7-2.6-.5-4.2 2.8-5.7 3-6.8V129l-.3-1-.8.5-4.2 6.3-2.8 4-1.9 1.8-.8 2.3-2 .8-1.1 2-1.5-.4-.2-1.8 1.3-2.4 2.1-4.7 1.8-1.6 1-2.4-2.6-1.9-2-10.3-3.5-1.4-2-2.3-12.1-2.7-2.9-1-8.2-2.2-8-1.1-3.7-5.2-.7.6-1.2-.2-.7-1.1-1.3.3-1.2.2-1.7 1-1-.7.6-2 2-3 1-1.1-1.9-1.5-2 .8-3 2-7.4 3.2-3 .6-2.8-.4-1-1-2.1 3-.3 2.7v8.4l-1.1 1.6-5.3 3.9-2.3 6 .5.2 2.5 2 .7 3.3-1.8 3.2v3.9l.4 6.6 3 3h3.5l1.8 3.2 3.4.4 3.9 5.8 7 4 2.2 2.8.9 7.5.7 3.3 2.2 1.6.3 1.3-2.1 3.5.2 3.2 2.6 3.9 2.5 1.1 3 .5 1.3 1.3 45.3-2.6z"/>

<path
onClick={() => setIL()}
id="IL"
className="mapState"
d="M613.8 293.4v-3.2l.6-4.6 2.3-3 1.9-4 2.2-4-.4-5.3-2-3.5v-3.4l.6-5.2-.8-7.2-1-15.8-1.4-15-.9-11.6-.3-1-.8-2.5-1.3-3.8-1.5-1.8-1.5-2.5-.2-5.5-45.8 2.6.2 2.4 2.3.7.9 1.1.5 1.8 3.8 3.5.7 2.2-.7 3.5-1.8 3.6-.7 2.6-2.3 1.8-1.8.7-5.3 1.3-.6 1.9-.7 2 .7 1.4 1.8 1.6-.2 4.1-1.9 1.6-.7 1.6v2.8l-1.8.4-1.6 1.2-.2 1.3.2 2-1.7 1.4-1 2.8.4 3.6 2.3 7.3 7.3 7.6 5.5 3.6-.2 4.4.9 1.3 6.4.5 2.7 1.4-.7 3.6-2.2 6-.7 3.2 2.3 3.9 6.4 5.2 4.6.7 2 5 2 3.2-.8 3 1.6 4.1 1.8 2 1.4-.8 1-2 2.1-1.8 2.2-.6 2.6 1.1 3.6 1.4 1.2-.3.2-2.3-1.3-2.4.3-2.3 1.8-1.4 3-.8 1.3-.5-.6-1.3-.8-2.4 1.4-1 1.2-3.2z"/>

<path 
onClick={() => setNC()}
id="NC"
className="mapState"
d="M829.2 287.4l2.1 5 3.6 6.4 2.4 2.4.6 2.3-2.4.1.8.7-.3 4.2-2.6 1.3-.6 2-1.3 3-3.7 1.6-2.5-.3-1.4-.2-1.6-1.3.3 1.3v1h2l.7 1.3-1.9 6.3h4.2l.6 1.6 2.3-2.2 1.3-.5-2 3.6-3 4.8h-1.3l-1.1-.5-2.8.7-5.2 2.4-6.4 5.3-3.4 4.7-2 6.5-.4 2.4-4.7.5-5.5 1.3-10-8.2-12.6-7.6-2.9-.8-12.6 1.4-4.3.8-1.6-3.2-3-2.2-16.5.5-7.2.8-9 4.6-6.2 2.5-21.2 2.6.5-4 1.8-1.5 2.8-.6.6-3.7 4.2-2.8 3.9-1.4 4.2-3.6 4.4-2.1.6-3 3.9-4 .6-.1s0 1.1.9 1.1a9 9 0 011.9.3l2.3-3.5 2-.7 2.3.4 1.6-3.6 3-2.6.4-2 .2-3.7h4.3l7.2-.9 15.7-2.3 15.2-2 21.6-4.8 20-4.2 11.2-2.4 5-1.2zm4.3 33.2l2.6-2.5 3.1-2.6 1.6-.6.1-2-.6-6.2-1.5-2.3-.6-1.9.7-.2 2.8 5.5.4 4.4-.2 3.4-3.4 1.6-2.8 2.4-1.2 1.2-1-.2z"/>
  
        <path
        onClick={() => setTN()}
 id="TN"
 className="mapState"
          d="M691 311.3l-52 5-15.7 1.8-4.6.6h-4l-.1 4-8.2.3-7 .6h-8l-1.5 7-1.7 5.5-3.3 2.7-1.3 4.4-.3 2.6-4 2.2 1.4 3.6-1 4.4-1 .8L687 346.3l.4-4 1.8-1.4 2.8-.7.7-3.8 4.1-2.7 4-1.5 4.1-3.5 4.5-2 .5-3.1 4-4 .6-.1s0 1.1.9 1.1c.8 0 1.9.4 1.9.4l2.3-3.6 2-.7 2.3.3 1.6-3.5 3-2.7.4-1.9.3-3.7-2.2-.2-2.6 2h-7l-18.3 2.4-8 2z"
        />

        <path
        onClick={() => setAR()}
        id="AR"
          className="mapState"
          d="M588 336.1l-4 .8-5-.7.4-1.6 3-2.5 1-3.7-1.9-3-78.4 2.5 1.6 7v8.1l1.4 11 .2 37.8 2.3 2 3-1.4 2.7 1.2.7 6.5 55.6-1.1 1.1-2.1-.3-3.5-1.8-3 1.6-1.5-1.6-2.5.7-2.5 1.4-5.6 2.5-2-.7-2.4 3.7-5.3 2.7-1.4-.1-1.5-.4-1.8 2.9-5.6 2.4-1.3.4-3.4 1.8-1.3-3.2-.4-1.3-4 2.8-2.4.5-2 1.3-4.1 1-3.3z"
        />

<path
onClick={() => setMO()}
className="mapState"
id="MO"
d="M552.7 241.2l-2.5-3-1.2-2.4-64.4 2.4-2.3.2 1.3 2.5-.2 2.3 2.5 3.8 3 4.1 3.2 2.8 2.1.2 1.5 1v3l-1.8 1.5-.5 2.3 2.1 3.5 2.5 3 2.5 1.8 1.4 11.7.3 36 .2 4.7.5 5.4 22.4-.9 23.2-.7 20.8-.8 11.7-.2 2.2 3.4-.7 3.3-3.1 2.4-.6 1.9 5.4.4 3.9-.7 1.7-5.4.7-5.9 2-2.6 2.7-1.4v-3l1-2-1.7-2.6-1.4 1-2-2.2-1.1-4.8.8-2.5-2-3.5-1.8-4.6-4.8-.8-7-5.6-1.7-4 .8-3.3 2-6 .5-2.9-2-1-6.8-.8-1-1.7-.1-4.2-5.5-3.5-7-7.7-2.3-7.4-.2-4.2.8-2.3z" />

<path
onClick={() => setGA()}
className="mapState"
id="GA"
d="M666.5 348.6v2.2l.2 2.1.6 3.4 3.4 8 2.5 9.8 1.4 6.1 1.6 4.9 1.5 7 2.1 6.3 2.6 3.4.5 3.3 2 .8v2.2l-1.7 4.8-.5 3.2-.2 2 1.7 4.3.3 5.4-.8 2.4.6.8 1.5.8.2 3.2 2.2 3.4 2.3 2.1 8 .2 10.7-.7 21.5-1.3 5.5-.6h4.6l.1 2.9 2.6.8.3-4.4-1.6-4.4 1.1-1.6 5.9.8 5 .3-.8-6.3 2.2-10 1.5-4.2-.5-2.6 3.3-6.2-.5-1.4-1.9.7-2.6-1.3-.6-2-1.3-3.7-2.3-2-2.6-.7-1.6-4.9-2.9-6.3-4.2-2-2.1-2-1.3-2.5-2.1-2-2.3-1.2-2.3-2.9-3-2.3-4.5-1.7-.5-1.5-2.4-2.9-.5-1.5-3.4-5-3.5.1-3.8-2.3-1.4-1.3-.3-1.8.9-2 2.2-1-.6-2.1-42 5z" />
            
<path
onClick={() => setKY()}
className="mapState"
id="KY"
d="M720.2 288.4l-2.2 2.4-3.6 4-4.9 5.4-1.2 1.7v2.2l-4.5 2.1-5.6 3.4-7.2 1.8-52 4.9-15.8 1.8-4.6.5h-3.9l-.2 4.2-8.2.2-7 .6h-8l1.3-1.4 2.5-1.5.2-3.2.9-1.9-1.6-2.5.8-1.9 2.3-1.8 2-.6 2.8 1.3 3.6 1.3 1-.3.3-2.3-1.3-2.4.3-2.3 2-1.5 2.6-.6 1.6-.6-.8-1.8-.6-2 1.5-1 1.2-3.6 3-1.5 5.4-1 4.5-.5 1.4 1.6 1.5 1 1.6-3.2 3.2-1.3 2.2 1.5.4 1 1.2-.3-.2-3 3.1-1.7 2.2-1 1.5 1.6h3.3l.6-1.6-.3-2.2 2.6-4 4.7-3.5.7-4.8 3-.5 3.8-1.6 2.4-1.7-.2-1.6-1.1-1.4.5-3 4.2-.2 2.3-.7 3.4 1.4 2 4.4h5l2 2.2 1.7-.2 2.6-1.2 5.2.5 2.6.3 1.7-2.1 2.6-1.4 1.9-.7.7 2.8 2 1 2.6 2.1.1 5.7.8 1.6 2.6 1.5.8 2.3 4.1 3.5 1.8 3.6 2.5 1.7z" />

<path
onClick={() => setLA()}
className="mapState"
id="LA"
d="M602.2 452.3L599 449l1-5.5-.6-.9-9.3 1-25 .5-.7-2.4 1-8.5 3.3-6 5-8.6-.6-2.4 1.2-.7.5-2-2.3-2-.1-2-1.8-4.3-.2-6.3-55.4.9v9.6l.6 9.3.7 4 2.5 4 1 5 4.3 5.5.2 3.2.7.7-.7 8.5-3 5 1.6 2-.7 2.6-.6 7.3-1.4 3.2.1 3.6 4.7-1.5 12.1.2 10.3 3.5 6.5 1.2 3.7-1.5 3.3 1.1 3.2 1 .8-2-3.2-1.2-2.6.5-2.8-1.6s.2-1.3.8-1.5l3.1-1 1.8 1.5 1.8-1 3.2.6 1.5 2.4.3 2.3 4.5.3 1.8 1.8-.8 1.6-1.2.9 1.6 1.6 8.4 3.6 3.6-1.3 1-2.4 2.6-.7 1.7-1.5 1.3 1 .8 3-2.2.8.6.6 3.4-1.3 2.2-3.4.8-.5-2-.3.7-1.6-.1-1.5 2-.5 1.2-1.3.6.8s-.1 3.1.7 3.1 4.2.7 4.2.7l4 2 1 1.4h2.9l1.1 1 2.3-3.1v-1.5H616l-3.4-2.7-5.8-.8-3.2-2.3 1-2.7 2.4.3.1-.7-1.8-1v-.4h3.3l1.7-3.1-1.2-2-.4-2.7-1.4.2-2 2-.6 2.7-3-.7-1-1.8 1.7-2 1.9-3.4-1-2.4-1.2-4z" />

<path
onClick={() => setAL()}
className="mapState"
id="AL"
d="M625.6 453.5l-1.5-14.3-2.8-18.8.2-14 .8-31-.2-16.7.2-6.4 44.5-3.6-.2 2.2.2 2 .6 3.5 3.4 7.9 2.5 9.8 1.4 6.2 1.6 4.8 1.5 7 2 6.3 2.7 3.4.5 3.4 1.9.8.2 2-1.8 5-.5 3.2-.2 2 1.6 4.3.4 5.3-.8 2.4.6.9 1.5.8.3 2.9-5.6-.4-6.8.6-25.5 3-10.4 1.4-.3 2.8 1.8 1.8 2.6 2 .6 7.9-5.6 2.5-2.7-.3 2.7-2v-1l-3-6-2.3-.6-1.5 4.4-1.2 2.8-.7-.2z" />

<path 
onClick={() => setSC()}
id="SC"
className="mapState"
d="M759.2 401.3l-1.8 1-2.6-1.3-.6-2.1-1.3-3.6-2.3-2-2.6-.7-1.6-4.9-2.7-6-4.2-2-2.1-1.9-1.3-2.6-2.1-1.9-2.3-1.3-2.3-3-3-2.2-4.5-1.8-.5-1.4-2.5-3-.4-1.4-3.4-5.1-3.4.1-4-2.4-1.3-1.3-.3-1.8.8-2 2.2-1-.5-2.2 5.8-2.3 9.1-4.6 7.8-.8 16-.5 2.7 2 1.7 3.3 4.3-.6 12.6-1.5 3 .9L784 347l10.1 8-5.4 5.5-2.6 6.2-.5 6.3-1.6.8-1.1 2.7-2.4.7-2.1 3.5-2.8 2.8-2.2 3.4-1.7.8-3.5 3.4-3 .1 1 3.3-5 5.5-2 1.3z" />
      
      <path
      onClick={() => setMN()}
      id="MN"
      className="mapState"
      d="M469.5 122l-.5-8.5-1.8-7.4-1.8-13.4-.5-9.9-1.8-3.4-1.6-5V64l.7-4-1.8-5.4h30l.4-8.2.7-.2 2.2.5 2 .8.8 5.5 1.4 6.2 1.6 1.6h4.9l.3 1.4 6.3.4v2h4.9l.3-1.2 1.1-1.2 2.3-.6 1.3 1h2.9l3.9 2.6 5.3 2.4 2.4.5.5-1 1.5-.5.5 3 2.5 1.2.5-.5 1.3.2v2l2.6 1h3l1.7-.7 3.2-3.3 2.6-.4.8 1.7.5 1.3h1l1-.8 8.9-.3 1.8 3h.6l.7-1 4.5-.4-.7 2.3-4 1.8-9.2 4.1-4.8 2-3 2.6-2.5 3.6-2.2 3.8-1.8.8-4.5 5-1.3.2-4.3 2.7-2.5 3.3-.2 3.1v8l-1.3 1.7-5.1 3.8-2.2 6 2.8 2.2.7 3.3-1.9 3.2.2 3.8.4 6.7 3 3h3.3l2 3.1 3.3.5 3.9 5.7 7 4.1 2.2 2.9.7 6.4-81.3 1.2-.3-35.7-.5-3-4-3.4-1.1-1.8V128l2-1.6 1.4-1.4.2-3.2z" />

<path
onClick={() => setIA()}
      className="mapState"
      id="IA"
      d="M563.4 192.7l.3 2.8 2.2.5 1 1.3.5 1.8 3.8 3.4.7 2.4-.7 3.4-1.5 3.2-.8 2.8-2.2 1.6-1.7.5-5.6 2-1.4 3.8.7 1.3 1.9 1.7-.3 4-1.8 1.6-.7 1.6v2.8l-1.8.4-1.6 1.1-.3 1.4.3 2.1-1.6 1.1-2.5-3.1-1.3-2.4-65.7 2.5-1 .1-2-4.5-.2-6.6-1.6-4.1-.7-5.3-2.3-3.6-1-4.8-2.7-7.6-1.1-5.4-1.4-2.1-1.6-2.8 2-4.8 1.3-5.7-2.7-2-.5-2.8 1-2.5h1.7l82.6-1.3.9 4.2 2.2 1.6.3 1.4-2 3.4.2 3.2 2.5 3.8 2.5 1.3 3 .5.7.8z" />

<path
onClick={() => setOK()}
className="mapState"
id="OK"
d="M374.6 314l-16.7-1.4-.9 11 20.5 1.1 32 1.4-2.3 24.4-.5 17.8.3 1.6 4.3 3.7 2 1.1.7-.2.7-2 1.4 1.7h2V373l2.8 1.3-.4 4 4 .2 2.6 1.1 4 .7 2.6 1.8 2.3-2 3.4.7 2.5 3.4h1v2.3l2.2.7 2.3-2.3 1.9.7h2.5l.9 2.5 6.3 2.1 1.4-.7 1.8-4.1h1.1l1.2 2 4 .7 3.7 1.4 3 1 1.9-1 .7-2.5h4.3l2 1 2.8-2.1h1.1l.7 1.5h4.1l1.6-2 1.9.5 2 2.5 3.2 1.8 3.2 1 2 1-.4-37.2-1.4-11-.1-8.9-1.5-6.5-.8-7.2v-3.8l-12.2.3-46.4-.4-45-2-24.3-1.4z" />

<path
onClick={() => setMS()}
className="mapState"
id="MS"
d="M625.8 452.4l-.3 1.3h-5.1l-1.5-.8-2-.3-6.9 1.9-1.8-.8-2.6 4.2-1 .8-1.2-2.5-1.1-3.9-3.5-3.2 1.2-5.5-.7-1-1.8.3-8 .8-24.5.4-.8-2.2.9-8.4 3.1-5.7 5.2-9.1-.4-2.4 1.2-.7.5-2-2.3-2-.2-2.1-1.8-4.2-.1-6 1.3-2.4-.2-3.4-1.8-3.1 1.6-1.5-1.6-2.5.4-1.7 1.6-6.5 2.5-2-.6-2.4 3.6-5.3 2.9-1.3-.3-1.7-.3-1.7 3-5.5 2.3-1.3.2-.9 37.3-3.9.2 6.3.2 16.7-.9 31-.1 14 2.7 18.8 1.5 13.4z" />

        <path
        onClick={() => setTX()}
        id="TX"
          className="mapState"
          d="M355.7 323.7l22.7 1 31.1 1.2-2.3 23.5-.3 18.1v2l4.4 4 2 1.4 1.1-.6.4-1.8 1.2 1.8h2V373l1.7 1 1.2.4-.4 4h4.1l3 1.2 3.9.5 2.4 2.1 2-2 3.8.6 2.2 3.2 1.1.3-.1 2 2.2.8 2.3-2.1 2.1.6h2.3l.9 2.5 6.3 2.1 1.6-.8 1.5-4.1h1.3l1.2 2.1 4 .7 3.2 1.1 3.5 1.2 1.8-1 .7-2.5h4.5l1.8 1 2.8-2.1h1l1 1.6h4l1.5-2 1.9.4 2 2.4 3.5 2 2.8.9 1.5.8 2.5 2 3-1.4 2.7 1.2.6 6v9.8l.6 9.5.7 3.6 2.7 4.4.9 5 4.2 5.5.2 3.2.7.8-.7 8.3-2.9 5 1.6 2.2-.7 2.3-.6 7.4-1.5 3.4.3 3.5-5.7 1.6-9.9 4.5-1 2-2.5 1.9-2.1 1.4-1.3.8-5.7 5.4-2.7 2-5.3 3.3-5.7 2.4-6.3 3.4-1.8 1.5-5.8 3.5-3.4.7-3.9 5.5-4 .3-1 2 2.3 1.9-1.5 5.5-1.3 4.5-1.1 3.9-.8 4.5.8 2.4 1.8 7 1 6.1 1.7 2.8-1 1.4-3 2-5.7-4-5.5-1-1.3.4-3.2-.6-4.2-3-5.2-1.2-7.6-3.4-2-3.9-1.4-6.5-3.2-1.9-.7-2.3.7-.6.3-3.4-1.3-.6-.6-1 1.3-4.4-1.7-2.2-3.2-1.3-3.4-4.4-3.5-6.6-4.2-2.6.1-2-5.3-12.2-.8-4.2-1.8-2-.2-1.4-6-5.4-2.5-3v-1.2l-2.6-2-6.8-1.2-7.4-.7-3.1-2.2-4.5 1.8-3.6 1.4-2.3 3.2-1 3.8-4.3 6.1-2.4 2.4-2.6-1-1.8-1-2-.7-3.8-2.3v-.6l-1.8-2-5.2-2-7.4-7.8-2.3-4.7v-8.1l-3.2-6.5-.5-2.7-1.6-1-1.1-2-5-2.2-1.3-1.6-7.1-8-1.3-3.2-4.7-2.2-1.5-4.4-2.6-2.9-1.9-.5-.7-4.7 8 .7 29 2.8 29.1 1.6 2.3-19.5 3.8-55.5 1.6-18.8h1.4m99 229.7l-.5-7.1-2.8-7.2-.5-7 1.5-8.3 3.3-6.9 3.5-5.4 3.1-3.5.7.2-4.8 6.6-4.3 6.6-2 6.6-.4 5.2.9 6.1 2.6 7.2.5 5.2.1 1.5-.9.2z"
        />

<path
onClick={() => setKS()}
id="KS"
className="mapState"
d="M502.1 317.5l-12.6.2-46-.5-44.6-2-24.7-1.3 4-64.6 22 .7 40.3.8 44.3 1h5.1l2.2 2.2h2l1.6 1v3l-1.9 1.7-.3 2.3 1.8 3.4 3 3.1 2.3 1.7 1.3 11.2.2 36z" />


<path
onClick={() => setNM()}
id="NM"
className="mapState"
 d="M282.4 417.1l-.8-4.7 8.7.5 30.1 3 27.3 1.6 2.2-18.7 3.9-55.9 1.7-19.3h1.6l.8-11-104-10.7-17.5 120.4 15.5 2 1.3-10 29.2 2.8z" />


        <path
        onClick={() => setNE()}
        id="NE"
          className="mapState"
          d="M480.3 233.8l3.3 7-.2 2.3 3.5 5.5 2.7 3.2h-5l-43.5-1-40.8-.9-22.2-.7 1-21.4-32.3-2.9 4.4-44 15.5 1 20.1 1.2 17.9 1.1 23.7 1.2 10.8-.5 2 2.3 4.8 3 1.2.9 4.3-1.4 4-.5 2.7-.2 1.8 1.4 4 1.6 3 1.6.5 1.6.9 2h2.6l.9 4.8 3 8.4.5 3.8 2.5 3.8.6 5 1.6 4.3.2 6.5z"
        />
        <path
        onClick={() => setSD()}
        id="SD"
          className="mapState"
          d="M470.7 197.1v-.6l-3-4.8 2-4.7 1.4-6-2.8-2-.4-2.7.8-2.6h3.2l-.1-5-.3-30.1-.7-3.8-4-3.3-1-1.7v-1.6l2-1.6 1.5-1.6.2-2.7-58.2-1.6-54.8-3.4L351 181l14.6.9 20 1.2 17.7.9 23.8 1.3 12-.4 2 2.2 5.2 3.3.7.7 4.6-1.5 6.5-.6 1.7 1.4 4.2 1.6 3 1.6.3 1.5 1 2.2 2.3-.2z"
        />

<path
onClick={() => setND()}
id="ND"
className="mapState"
d="M469.6 122l-.7-8.4-1.6-6.9-2-13-.4-11-1.7-3-1.8-5.2V64l.6-3.8-1.8-5.5-28.6-.5-18.6-.7-26.5-1.3-23-2-7 67 55 3.4 58 1.4z" />

<path 
onClick={() => setWY()}
className="mapState"
id="WY"
d="M354.6 136.4L248 122.9l-14.1 88.5L347.1 225z" />

<path
onClick={() => setMT()}
id="MT"
className="mapState"
d="M363.5 50l-30.7-2.7-29.3-3.6-29.2-4-32.4-5.3-18.4-3.5-32.7-6.9-4.5 21.3 3.4 7.6-1.3 4.6 1.8 4.5 3.2 1.4 4.6 10.8 2.7 3.1.5 1.2 3.4 1.1.4 2-7 17.7v2.5l2.5 3.2h1l4.7-3 .7-1.1 1.6.6-.2 5.3 2.7 12.6 3 2.5 1 .7 1.7 2.3-.4 3.4.7 3.5 1.1.9 2.3-2.3h2.7l3.2 1.6 2.6-1h4l3.7 1.7 2.8-.5.4-3 3-.7 1.4 1.4.5 3.2 1.3.9 1.9-11 106.7 13.4 8.8-86.3z" />

<path
onClick={() => setCO()}
id="CO"
className="mapState"
 d="M374.3 314l4.9-86.3-113.4-12.6-12.2 87.9z" />


        <path
        onClick={() => setID()}
        id="ID"
          className="mapState"
          d="M142.7 169.6l8.8-35.2 1.4-4.3 2.5-6-1.3-2.2-2.5.1-.8-1 .5-1.2.3-3 4.5-5.5 1.8-.5 1.1-1.1.6-3.2 1-.7 3.8-5.9 3.9-4.3.2-3.8-3.4-2.6-1.5-4.4 13.6-63.3 13.5 2.5-4.4 21.4 3.6 7.5-1.6 4.6 2 4.7 3 1.2 4 9.6 3.4 4.4.5 1.2 3.4 1.1.4 2-7 17.5-.2 2.5 2.6 3.4h1l4.9-3.1.6-1.1 1.6.6-.3 5.4 2.8 12.6 3.9 3.2 1.7 2.1-.8 4.1 1.1 2.8 1 1.1 2.6-2.3h2.8l3 1.3 2.7-.6 3.8-.2 4 1.6 2.7-.3.5-3 3-.8 1.2 1.5.4 3 1.5 1.2-8.4 53.6s-88-16.7-95-18.2z"
        />

        <path
        onClick={() => setUT()}
          id="UT"
          className="mapState"
          d="M253.7 303.2L170 291.3l20.6-112.5 46.8 8.7-1.5 10.7-2.3 13.1 7.8 1 16.4 1.8 8.2.8-12.3 88.3z"
        />

        <path
        onClick={() => setAZ()}
        id="AZ"
          className="mapState"
          d="M139.2 375.7l-2.7 2.2-.3 1.4.5 1 19 10.7 12 7.6 14.7 8.5 16.9 10 12.2 2.5 25 2.7 17.3-119.1-83.8-12-3 16.5h-1.7l-1.7 2.6-2.5-.1-1.3-2.8-2.7-.3-1-1.1h-.8l-1 .5-1.9 1-.1 7-.2 1.8-.6 12.5-1.5 2.2-.6 3.3 2.8 5 1.2 5.8.8 1 1 .6v2.2l-1.7 1.4-3.4 1.7-2 2-1.4 3.6-.6 5-2.8 2.7-2.1.7.1.8-.4 1.7.4.8 3.7.6-.6 2.7-1.5 2.2-3.7 1z"
        />

        <path
        onClick={() => setNV()}
          id="NV"
          className="mapState"
          d="M190.6 178.7L167 307.5l-1.8.3-1.6 2.4h-2.4l-1.4-2.7-2.7-.4-.7-1-1-.1-2.9 1.6-.3 6.8-.3 5.8-.4 8.6-1.4 2-2.5-1-69-104.2 19-67.6 93 20.7z"
        />

        <path
        onClick={() => setOR()}
          id="OR"
          className="mapState"
          d="M143 168.6l8.8-34.8 1-4.2 2.4-5.6-.6-1.2h-2.5l-1.3-1.7.5-1.5.5-3.2 4.4-5.5 1.9-1.1 1.1-1.1 1.5-3.6 4-5.7 3.6-3.8.2-3.5-3.2-2.5-1.8-4.6-12.7-3.6-15-3.6-15.5.1-.5-1.3-5.4 2-4.5-.5-2.4-1.6-1.3.6-4.7-.2-1.7-1.4-5.2-2-.8.1-4.4-1.5-2 1.8-6-.3-6-4.1.7-.8.2-7.8L74 57l-4.1-.5-.7-2.6-2.4-.4-5.8 2-2.2 6.5-3.3 10-3.2 6.5-5 14-6.5 13.6-8 12.6-2 3-.8 8.5.4 12.1L143 168.6z"
        />

<path
onClick={() => setWA()}
id="WA"
className="mapState"
d="M96.3.7l4.4 1.5 9.7 2.7 8.6 2 20 5.6 23 5.7 15.2 3.2L163.6 85 151 81.4 135.6 78h-15.2l-.5-1.4-5.6 2.2-4.6-.7-2.1-1.6-1.3.7-4.8-.2-1.7-1.3-5.2-2.1-.8.1-4.4-1.5-1.9 1.8-6.2-.3-6-4.1.8-1 .2-7.6L74 57l-4.1-.6-.7-2.5-2.3-.5-3.5 1.3-2.3-3.3.3-2.9 2.8-.3 1.6-4-2.6-1.1.2-3.8 4.3-.6L65 36l-1.4-7.1.6-3V18l-1.8-3.2 2.3-9.4 2 .5 2.5 2.9 2.7 2.6 3.3 2 4.5 2 3 .7 3 1.4 3.4 1 2.2-.1v-2.5l1.3-1.1 2.1-1.3.3 1.1.3 1.8-2.2.5-.3 2.1 1.7 1.5 1.2 2.4.6 2 1.5-.2.1-1.3L97 22l-.5-3.2.8-1.8-.6-1.4v-2.3l1.7-3.5-1.1-2.6-2.4-4.9.3-.8zm-9.4 6l2-.2.4 1.4L91 6.3h2.3l.8 1.5-1.5 1.7.7.8-.8 2-1.3.4s-1 .1-1-.2a18.5 18.5 0 011.5-2.6L90 9.3l-.3 1.5-.7.6-1.6-2.2z" />

<path
onClick={() => setCA()}
id="CA"
className="mapState"
d="M139 375.3l3.9-.5 1.5-2 .5-3-3.5-.5-.5-.7.4-2-.1-.6 1.9-.6 3-2.8.6-5 1.4-3.4 1.9-2.2 3.5-1.6 1.7-1.6v-2.1l-1-.6-1-1-1.1-5.9-2.7-4.8.6-3.5-2.5-1-69-104.3 19-67.6-67.2-15.7-1.5 4.7-.1 7.4-5.2 11.8-3 2.6-.4 1.2-1.8.8L17 175l-.8 3.2 2.7 4.2 1.6 4.2 1.2 3.6-.4 6.5-1.7 3-.7 5.9-1 3.7 1.8 3.8 2.7 4.6 2.3 4.8 1.3 4-.3 3.3-.4.4v2.1l5.7 6.3-.5 2.5-.6 2.2-.7 2 .2 8.2 2 3.7 2 2.6 2.8.5 1 2.8-1.2 3.5-2 1.6h-1.2l-.8 4 .5 2.8 3.2 4.4 1.6 5.3 1.5 4.7 1.3 3 3.4 6 1.4 2.5.5 2.9 1.6 1v2.4l-.8 2-1.8 7-.4 2 2.4 2.8 4.2.5 4.5 1.8 3.9 2h2.9l3 3.1 2.5 4.9 1.1 2.2 4 2.1 4.8.9 1.4 2 .7 3.3-1.5.6.3 1 3.3.8 2.7.2 3.2-1.7L91 349l.9 2.3 2.5 4.2.4 3.2v9.4l.4 1.8 10 1.4 19.8 2.8 13.8 1.3zm-88.2-43.7l1.3 1.5-.2 1.3h-3.2l-.6-1.3-.6-1.4 3.3-.1zm2 0l1.2-.7 3.5 2.1 3 1.2-.8.7-4.5-.2-1.6-1.7-.8-1.4zm20.6 19.8l1.8 2.3.8 1 1.6.6.5-1.5-1-1.7-2.6-2-1 .1zM72 360l1.8 3.1 1.2 2-1.5.3-1.2-1.2a9 9 0 01-.8-2v-2l.5-.2z" />


       
        <text className="mapStateCode">
          <tspan x={746.2} y={485.5}>
            {"FL"}
          </tspan>
        </text>
        <text className="mapStateCode">
          <tspan x={419.2} y={452.6}>
            {"TX"}
          </tspan>
        </text>
        <text className="mapStateCode">
          <tspan x={284} y={368.4}>
            {"NM"}
          </tspan>
        </text>
        <text className="mapStateCode">
          <tspan x={184} y={357.8}>
            {"AZ"}
          </tspan>
        </text>
        <text className="mapStateCode">
          <tspan x={97.8} y={480.2}>
            {"AK"}
          </tspan>
        </text>
        <text className="mapStateCode">
          <tspan x={56.3} y={284.2}>
            {"CA"}
          </tspan>
        </text>
        <text className="mapStateCode">
          <tspan x={119.6} y={235.4}>
            {"NV"}
          </tspan>
        </text>
        <text className="mapStateCode">
          <tspan x={201} y={257.6}>
            {"UT"}
          </tspan>
        </text>
        <text className="mapStateCode">
          <tspan x={303.2} y={272.5}>
            {"CO"}
          </tspan>
        </text>
        <text className="mapStateCode">
          <tspan x={83.7} y={124.1}>
            {"OR"}
          </tspan>
        </text>
        <text className="mapStateCode">
          <tspan x={108.4} y={52.1}>
            {"WA"}
          </tspan>
        </text>
        <text className="mapStateCode">
          <tspan x={180.2} y={152.1}>
            {"ID"}
          </tspan>
        </text>
        <text
          className="mapStateCode">
          <tspan x={355.1} y={565.7}>
            {"HI"}
          </tspan>
        </text>
        <text className="mapStateCode">
          <tspan x={444.6} y={357.6}>
            {"OK"}
          </tspan>
        </text>
        <text className="mapStateCode">
          <tspan x={264} y={86.6}>
            {"MT"}
          </tspan>
        </text>
        <text className="mapStateCode">
          <tspan x={283.3} y={180.2}>
            {"WY"}
          </tspan>
        </text>
        <text className="mapStateCode">
          <tspan x={401.1} y={93.1}>
            {"ND"}
          </tspan>
        </text>
        <text className="mapStateCode">
          <tspan x={401.1} y={160.5}>
            {"SD"}
          </tspan>
        </text>
        <text className="mapStateCode">
          <tspan x={409.2} y={227}>
            {"NE"}
          </tspan>
        </text>
        <text className="mapStateCode">
          <tspan x={426.9} y={291.5}>
            {"KS"}
          </tspan>
        </text>
        <text className="mapStateCode">
          <tspan x={483.3} y={127}>
            {"MN"}
          </tspan>
        </text>
        <text className="mapStateCode">
          <tspan x={504.3} y={212.5}>
            {"IA"}
          </tspan>
        </text>
        <text className="mapStateCode">
          <tspan x={520.6} y={294.2}>
            {"MO"}
          </tspan>
        </text>
        <text className="mapStateCode">
          <tspan x={530.1} y={370.5}>
            {"AR"}
          </tspan>
        </text>
        <text className="mapStateCode">
          <tspan x={531.7} y={446.3}>
            {"LA"}
          </tspan>
        </text>
        <text className="mapStateCode">
          <tspan x={583.7} y={407.6}>
            {"MS"}
          </tspan>
        </text>
        <text className="mapStateCode">
          <tspan x={638.2} y={402.8}>
            {"AL"}
          </tspan>
        </text>
        <text className="mapStateCode">
          <tspan x={696.3} y={397.9}>
            {"GA"}
          </tspan>
        </text>
        <text className="mapStateCode">
          <tspan x={743} y={370.5}>
            {"SC"}
          </tspan>
        </text>
        <text className="mapStateCode">
          <tspan x={582.4} y={252.5}>
            {"IL"}
          </tspan>
        </text>
        <text className="mapStateCode">
          <tspan x={560.9} y={157.3}>
            {"WI"}
          </tspan>
        </text>
        <text className="mapStateCode">
          <tspan x={642.6} y={182.6}>
            {"MI"}
          </tspan>
        </text>
        <text className="mapStateCode">
          <tspan x={631} y={248.5}>
            {"IN"}
          </tspan>
        </text>
        <text className="mapStateCode">
          <tspan x={680.4} y={236}>
            {"OH"}
          </tspan>
        </text>
        <text className="mapStateCode">
          <tspan x={637.3} y={341.4}>
            {"TN"}
          </tspan>
        </text>
        <text className="mapStateCode">
          <tspan x={662.9} y={299.6}>
            {"KY"}
          </tspan>
        </text>
        <text className="mapStateCode">
          <tspan x={771.2} y={326.9}>
            {"NC"}
          </tspan>
        </text>
        <text className="mapStateCode">
          <tspan x={719} y={275.7}>
            {"WV"}
          </tspan>
        </text>
        <text className="mapStateCode">
          <tspan x={769} y={282.6}>
            {"VA"}
          </tspan>
        </text>
        <text className="mapStateCode">
          <tspan x={765.3} y={209.9}>
            {"PA"}
          </tspan>
        </text>
        <text className="mapStateCode">
          <tspan x={802} y={157.3}>
            {"NY"}
          </tspan>
        </text>
        <text className="mapStateCode">
          <tspan x={871.6} y={82.6}>
            {"ME"}
          </tspan>
        </text>

        <g
        onClick={() => setNH()}
        id="NH"
        className="mapState">
          <path d="M875 135.5l1-1 1-3.3-2.5-1-.5-3-3.9-1.2-.3-2.7-7.3-23.5-4.6-14.5h-.9l-.6 1.6-.7-.5-1-1-1.4 2v5l.2 5.7 2 2.7v4l-3.7 5.2-2.6 1v1.2l1.1 1.8v8.6l-.8 9.2-.2 4.8 1 1.3-.1 4.5-.5 1.8 1 .7 16.7-4.4 2.2-.6 1.8-2.8 3.6-1.6z" />
          <rect rx={5.2} ry={5} y={39.2} x={788.2} height={30} width={55} />
        </g>

        <g
        onClick={() => setVT()}
        id="VT"
        className="mapState">
          <path d="M838.7 147.2l.4-5.4-3-10.8-.6-.3-2.9-1.3.8-2.9-.8-2.1-2.7-4.6 1-4-.8-5.1-2.5-6.5-.8-4.9 26.5-6.7.3 5.5 1.9 2.7v4l-3.7 5.1-2.6 1.2v1.1l1.3 1.5-.3 8.1-.6 9.3-.3 5.5 1 1.3-.2 4.6-.4 1.7 1 .7-7.5 1.5-4.5.8z" />
          <rect rx={5.2} ry={5} y={39.2} x={722.8} height={30} width={55} />
        </g>

        <g
        onClick={() => setRI()}
        id="RI"
         className="mapState">
          <path d="M868.3 172l-3.7-15 6.3-1.8 2.2 2 3.3 4.2 2.7 4.4-3 1.7-1.3-.2-1.1 1.8-2.5 2-2.9.9z" />
          <rect rx={5.2} ry={5} y={161.1} x={906.2} height={30} width={55} />
        </g>

        <g
        onClick={() => setCT()}
        id="CT"
        className="mapState">
          <path d="M868.3 172l-3.7-15-4.7 1-21.2 4.7 1 3.3 1.4 7.2.2 9-1.2 2.2 2 2 4.2-4 3.6-3.2 1.9-2.1.8.6 2.8-1.4 5.1-1.2 7.8-3.1z" />
          <rect rx={5.2} ry={5} y={198.1} x={906.2} height={30} width={55} />
        </g>

        <g
        onClick={() => setNJ()}
        id="NJ" className="mapState">
          <path d="M824 181.6l-2.4 2.7v3l-2 3.1v1.6l1.2 1.3-.2 2.5-2.2 1.1.8 2.7.1 1.2 2.8.3 1 2.6 3.5 2.4 2.4 1.6v.8l-3 2.7-1.6 2.3-1.4 2.7-2.3 1.3-.4 1.6-.3 1.3-.6 2.6 1.1 2.2 3.2 3 4.9 2.2 4 .6.2 1.5-.8 1 .3 2.7h.8l2.1-2.4.8-4.9 2.8-4 3-6.5 1.2-5.5-.7-1.1-.1-9.4-1.7-3.4-1 .8-2.8.3-.5-.4 1.1-1 2.1-2v-1l-.3-3.5.6-2.7-.1-2-2.9-1.7-5-1.2-4.2-1.4-3.6-1.6z" />
          <rect rx={5.2} ry={5} y={235.1} x={906.2} height={30} width={55} />
        </g>

        <g 
        onClick={() => setDE()}
        id="DE" className="mapState">
          <path d="M819.9 221.4l.3-2.2.4-1.7-1.6.4-1.6.5-2.2 1.8 1.7 5 2.3 5.7 2 9.7 1.7 6.3 5-.2 6.1-1.2-2.2-7.4-1 .5-3.6-2.4-1.7-4.7-2-3.5-3.1-3-.9-2 .4-1.6z" />
          <rect rx={5.2} ry={5} y={272.1} x={906.2} height={30} width={55} />
        </g>

        <g
        onClick={() => setMD()}
        id="MD"
        className="mapState">
          <path d="M834 245.5l-6 1.2-5.1.1-1.9-6.9-1.9-9.2-2.6-6.2-1.2-4.3-7.5 1.6-15 2.8-37.4 7.5 1.2 5 1 5.7.3-.3 2-2.4 2.3-2.6 2.4-.7 1.5-1.4 1.8-2.6 1.3.6 2.9-.3 2.6-2 2-1.5 1.8-.5 1.7 1.1 2.9 1.5 2 1.7 1.1 1.6 4.1 1.7v2.9l5.5 1.3 1.2.5 1.4-2 2.9 2-1.3 2.4-.8 4-1.7 2.6v2.1l.6 1.8 5 1.4 4.4-.1 3 1 2.2.3 1-2.1-1.5-2.1v-1.8l-2.5-2.1-2-5.5 1.2-5.3-.1-2.1-1.3-1.3s1.4-1.6 1.4-2.3c0-.6.5-2 .5-2l2-1.4 1.9-1.6.5 1-1.5 1.6-1.3 3.7.4 1.1 1.7.4.5 5.5-2 1 .2 3.5.5-.2 1.2-2 1.6 1.9-1.6 1.3-.4 3.3 2.6 3.4 3.9.5 1.6-.8 3.3 4.2 1.3.5 6.7-2.8 2-4-.5-4.9zm-16 9l1.2 2.5.2 1.8 1.1 1.9s.9-1 .9-1.2l-.7-3.1-.8-2.3-1.8.4z" />
          <rect rx={5.2} ry={5} y={309.1} x={906.2} height={30} width={55} />
        </g>

        {/* <g 
        id="DC" className="mapState">
          <path d="M800 244l-1.8-1.9-1.2-.7 1.4-2 3 2-1.3 2.5z" />
          <rect rx={5.2} ry={5} y={346.1} x={906.2} height={30} width={55} />
        </g> */}

        <text className="mapStateCode">
          <tspan x={738} y={60}>
            {"VT"}
          </tspan>
        </text>
        <text className="mapStateCode">
          <tspan x={802.1} y={60}>
            {"NH"}
          </tspan>
        </text>
        <text className="mapStateCode">
          <tspan x={924.8} y={182}>
            {"RI"}
          </tspan>
        </text>
        <text className="mapStateCode">
          <tspan x={921} y={219}>
            {"CT"}
          </tspan>
        </text>
        <text className="mapStateCode">
          <tspan x={922} y={256}>
            {"NJ"}
          </tspan>
        </text>
        <text className="mapStateCode">
          <tspan x={921.3} y={293}>
            {"DE"}
          </tspan>
        </text>
        <text className="mapStateCode">
          <tspan x={920.1} y={330}>
            {"MD"}
          </tspan>
        </text>

        <g 
        onClick={() => setMA()}

        id="MA"
        className="mapState">
          <path d="M893.9 166.3l2.1-.6.5-1.8 1 .2 1 2.2-1.2.5-3.9.1.5-.6zm-9.4.8l2.3-2.6h1.6l1.8 1.5-2.4 1-2.2 1-1.1-.9zm-34.8-22l17.6-4.6 2.3-.6 2-2.8 3.7-1.7 2.9 4.4-2.5 5.2-.3 1.5 2 2.5 1-.8h1.9l2.2 2.6 3.9 6 3.6.5 2.2-1 1.8-1.8-.8-2.7-2.1-1.6-1.5.8-1-1.3.5-.5 2.1-.2 1.8.8 2 2.5 1 2.9.3 2.4-4.2 1.5-4 1.9-3.8 4.5-2 1.5v-1l2.5-1.4.5-1.8-.8-3-3 1.4-.8 1.4.5 2.3-2 1-2.8-4.5-3.4-4.4-2-1.8-6.6 1.9-5 1-20.8 4.6-.6-4.8.6-10.6 4.3-.8 6.8-1.3z" />
          <rect rx={5.2} ry={5} y={124.1} x={906.2} height={30} width={55} />
        </g>
        <text className="mapStateCode">
          <tspan x={920} y={145}>
            {"MA"}
          </tspan>
        </text>

        {/* <text className="mapStateCode">
          <tspan x={920.6} y={367}>
            {"DC"}
          </tspan>
        </text> */}

        <g className="mapLines">
          {/* <path d="M855.5 87V54.1h-12.3m63 121.9h-33v-7.4m33 192.4h-69.8l-36.2-118" /> */}
          <path d="M855.5,86.92V54.2H843.22"/>
          <path d="M906.22,176.09h-33v-7.51"/>
          <path d="M906.2 324h-58.6v-73.9h-14.2" />
          <path d="M906.2 287h-48.7v-48H831m75.2-26h-48.7v-37.8" />
          <path d="M906.2 250h-38.9v-26h-29m67.9-85h-23v13.6m-44.8-55.7V81.3h-88.1V69.2" />
        </g>
      </svg>




{/* US MAP BUTTON */}
{selectedState !== "United States" &&
<div style={{position:"relative"}}>

<div onClick={setUS} className="rounded p-1" style={{width:"60px", position:"absolute", right:-11, bottom:"5px", backgroundColor:"var(--color1)", cursor:"pointer" }}>
  {/* <small>
  Click for US stats
</small> */}
<USMapSmall color="#fff" />
</div>
</div>
}

</Container>











        <h1 style={{
          lineHeight:"1.5rem", 
          color:"var(--color4)",
          fontSize:"2.5rem",
          textAlign:"center",
          paddingTop:"1rem",
          textTransform:"uppercase",
          }}>
          <strong>
{selectedState}
          </strong>
        </h1>

      <Container fluid className="p-4 text-white text-center d-flex flex-column justify-content-center" style={{backgroundColor:"var(--color4"}}>

        <h5>
          Children and Youth in Foster Care:{" "}
          <NumberFormat 
  value={numKids}
  displayType="text"
  thousandSeparator={true}
/>
</h5>

        <h1>Network 5% Target:{" "}
          <strong>
            <NumberFormat 
            value={Math.ceil(numKids * .05)}
            displayType="text"
            thousandSeparator={true}
            />
         
            </strong>
          </h1>
          
{!pdfLink && <p>
  Click on states for specific info
  </p>}



{pdfLink && <div>
 <small>
  <a 
  className="btn btn-light"
  role="button"
  target="_blank" 
  rel="noopener noreferrer"
  href={pdfLink}>
{selectedState} Casey Foundation Fact Sheet PDF
  </a>
      </small>
  </div>}
          



    </Container>

{/* {currentUser && <Container className="mt-5">
<GetAllUsers />
  </Container>} */}







{!currentUser && 
 <Container className="p-4 text-center">

 <h5>
 <Link to="/signup">Sign up to join the network if you are an AG Foster Care resource or Foster Care parent.</Link>
 </h5>
 
 </Container>
 }
     


    </>
  );
}


// https://www.casey.org/state-data/