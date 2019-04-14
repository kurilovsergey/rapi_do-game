import React, { Component } from 'react';
import s from './Tiket.module.css'
import magicwand from './img/magic-wand.png'

const nineteen = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];


class Tiket extends Component {


  render() {
    

     let fieldone = [];
     let fieldtwo = [];
     for (var i = 1; i <= 19; i++) {
      fieldone.push(<div onClick={this.props.onSelectNumberFieldOne} id={i} key={i} className={s.lot}>{i}</div>);
      if (i<3) { fieldtwo.push(<div onClick={this.props.onSelectNumberFieldTwo} id={19+i} key={i} className={s.lot}>{i}</div>)}
    }
    

    let but;
     if (this.props.status) { but = <button className={s.buttonresualt} onClick={this.props.onResault}>Показать результат</button> } 
      else {but = <button className={s.buttonfalse} onClick={this.props.onResault} >Показать результат</button>};
    
    
  
    return (
      <div className={s.ticket}>
        <div className={s.tab_content}>
        <div className={s.magicwand} onClick={this.props.onMagicWand}><img src={magicwand} alt="magic" /></div>
          <div className={s.numbertiket}><div><b>Билет 1</b></div></div>
          <div className={s.info}><span сlassName={s.fieldone}><b>Поле 1 </b></span><span сlassName={s.description}>Отметьте 8 чисел</span></div>
          <div className={s.numberlist}><span>{fieldone}</span></div>
          <div className={s.info}><span сlassName={s.fieldone}><b>Поле 2 </b></span><span сlassName={s.description}>Отметьте 2 чисела</span></div>
          <div className={s.numberlisttwo}>{fieldtwo}</div>
          {but}
        </div>
         
      </div>
    );
  }
}

export default Tiket;
