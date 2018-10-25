import React from 'react';
import {Button} from 'reactstrap';
import './Square.css';
export default function Square(props) {
     return (
        <Button 
          className="square" 
          onClick={props.onClick}>
            {props.value}           
        </Button>
      );
    }
 