import React, { Component } from 'react';
import s from './Tiket.module.css'
import magicwand from './img/magic-wand.png'

const nineteen = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];


class App extends Component {
	constructor(props) {
    super(props);
    this.onSelectNumberFieldOne = this.onSelectNumberFieldOne.bind(this);

    this.state = {selectnumber: [],
                  selectnumb: 0,
                  status: true,
                  selectclass: s.selectlot,
                  how: 0,
                  valid: s.s 
                  }
  }

 
onSelectNumberFieldOne = (event) => {
  var target = event.target || event.srcElement;
  
  if (this.state.selectnumber.length<8 && document.getElementById(target.id).className == s.lot)  {
  document.getElementById(target.id).className = s.selectlot;
  this.setState(() => {
    this.state.selectnumber.push(+target.id); 
   
    
})

  } else if (document.getElementById(target.id).className == s.selectlot) {
    document.getElementById(target.id).className = s.lot;
   
    this.setState(() => {
      this.state.selectnumber.splice(this.state.selectnumber.indexOf(+target.id),1);
 
    });

  }

}

onSelectNumberFieldTwo = (event) => {
  var target = event.target || event.srcElement;
  
  if (target.id==20) {
  this.setState({selectnumb: +target.id-19})
  document.getElementById(+target.id).className=s.selectlot;
  document.getElementById(+target.id+1).className=s.lot;
  } else {
    this.setState({selectnumb: +target.id-19})
  document.getElementById(target.id).className=s.selectlot;
  document.getElementById(+target.id-1).className=s.lot;
  }
  

}

onResault = () => {
    
    if (this.state.selectnumb>0 && this.state.selectnumber.length==8) {
    
    let array = this.randomarray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]);

    var rand = 1 - 0.5 + Math.random() * (2 - 1 + 1)
    rand = Math.round(rand);

   
    
    console.log('random array ', array);
    console.log('select array ', this.state.selectnumber);
    console.log('random value ', rand);
    console.log('select value ', this.state.selectnumb);
    
    var coincidence = this.state.selectnumber.filter(function(obj) { return array.indexOf(obj) == -1; });
    console.log(coincidence);
    if (coincidence.length<2) alert('!!!');
    if ((coincidence.length==1 && this.state.selectnumber==rand) || coincidence.length==0) {alert('Pobeda'); console.log('pobeda!');};
    } 
}  
   
  onMagicWand = () =>{
    let array = this.randomarray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]);
    
    nineteen.map(i  =>  document.getElementById(i).className = s.lot);
    document.getElementById(20).className = s.lot;
    document.getElementById(21).className = s.lot
    this.setState({
      selectnumber: array
    },()=>
      this.state.selectnumber.map(i  =>  document.getElementById(i).className = this.state.selectclass));

      var rand = 1 - 0.5 + Math.random() * (2 - 1 + 1)
      rand = Math.round(rand);
      this.setState({selectnumb: rand},()=>document.getElementById(rand+19).className = this.state.selectclass);
      //if (this.state.selectnumber.length=8) {this.setState({status: true})}
    }
   
   randomarray = (array) => {
    var i = array.length,
        j = 0,
        temp;

    while (i--) {

        j = Math.floor(Math.random() * (i+1));

        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
         
    }
    array.splice(1, 11);
    return array;
}
   

  render() {
    

     let fieldone = [];
     let fieldtwo = [];
     for (var i = 1; i <= 19; i++) {
      fieldone.push(<div onClick={this.onSelectNumberFieldOne} id={i} key={i} className={s.lot}>{i}</div>);
      if (i<3) { fieldtwo.push(<div onClick={this.onSelectNumberFieldTwo} id={19+i} key={i} className={s.lot}>{i}</div>)}
    }
    

    let but;
    if (this.state.status) { but = <button className={s.buttonresualt} onClick={this.onResault}>Показать результат</button> } 
      else {but = <button className={s.buttonfalse} onClick={this.onResault} >Показать результат</button>};
    
    
  
    return (
      <div className={s.ticket}>
        <div className={s.tab_content}>
          <div className={s.numbertiket}><div>Билет 1</div><div onClick={this.onMagicWand}><img src={magicwand} alt="magic" /></div></div>
          <div className={s.info}><span сlassName={s.fieldone}>Поле 1 </span><span сlassName={s.description}>Отметье 8 чисел</span></div>
          <div className={s.numberlist}><span>{fieldone}</span></div>
          <div className={s.info}><span сlassName={s.fieldtwo}>Поле 2 </span><span сlassName={s.description}>Отметье 1 чисело</span></div>
          {fieldtwo}
          {but}
        </div>
         
      </div>
    );
  }
}

export default App;
