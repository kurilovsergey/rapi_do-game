import React, { Component } from 'react';
import Tiket from './Component/Tiket'
import Resault from './Component/Resault.js'
import s from './Component/Tiket.module.css'
import './App.css';

const nineteen = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];


class App extends Component {
	constructor(props) {
    super(props);
    this.onSelectNumberFieldOne = this.onSelectNumberFieldOne.bind(this);

    this.state = {selectnumber: [],
                  selectnumb: 0,
                  status: true,
                  resault: null
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
    
    var coincidence = this.state.selectnumber.filter(function(obj) { return array.indexOf(obj) == -1; });
    
    console.log('Сгенерированный массив: ', array);
    console.log('Выбранный массив: ', this.state.selectnumber);
    console.log('Сгенерированное число: ', rand);
    console.log('Выбранное число: ', this.state.selectnumb);
    console.log(coincidence.length,' чисел не совпало');
    
    if ((coincidence.length==1 && this.state.selectnumber==rand) || coincidence.length==0) {this.setState({resault: true}) 
      } else {this.setState({resault: false}); } 
  
} else {this.setState({resault: null});}
} 
   
  onMagicWand = () =>{
    let array = this.randomarray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]);
    
    nineteen.map(i  =>  document.getElementById(i).className = s.lot);
    document.getElementById(20).className = s.lot;
    document.getElementById(21).className = s.lot
    this.setState({
      selectnumber: array
    },()=>
      this.state.selectnumber.map(i  =>  document.getElementById(i).className = s.selectlot));

      var rand = 1 - 0.5 + Math.random() * (2 - 1 + 1)
      rand = Math.round(rand);
      this.setState({selectnumb: rand},()=>document.getElementById(rand+19).className = s.selectlot);
      
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
      <div className="App">
         <Tiket onSelectNumberFieldOne={this.onSelectNumberFieldOne}
          onSelectNumberFieldTwo={this.onSelectNumberFieldTwo}
           onMagicWand={this.onMagicWand}
           status={this.state.status}
           onResault={this.onResault}/>
         <Resault pobeda={this.state.resault} />
      </div>
    );
  }
}

export default App;
