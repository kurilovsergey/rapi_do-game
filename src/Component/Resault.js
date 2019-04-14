import React, { Component } from 'react';
import s from './Tiket.module.css'


class Resault extends Component {
  render() {
    let answer;
     if (this.props.pobeda==null) {answer='Прветсвуем вас! Заполните необходимое количество чисел!';
     } else if (this.props.pobeda) {answer='Ого, вы выиграли! Поздравляем!';
      } else if (!this.props.pobeda) {answer='К сожалению вы проиграли('
       } else if (this.props.pobeda=='z') {answer='Заполните в соответсвий с условием игры числа!' };
    console.log(this.props.pobeda);
    return (
           <div className={s.ticket}>
           <div className={s.tab_content}>
           <div className={s.numbertiket}><div><b>Билет 1</b></div></div>
           <div className={s.answer}>{answer}</div>
        </div>
         
      </div>
    );
  }
}

export default Resault;
