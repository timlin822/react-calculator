import {useState,useEffect} from 'react';
import {FaArrowLeft} from 'react-icons/fa';

import './Calculator.css';

const Calculator=()=>{
    const [expression,setExpression]=useState("");
    const [result,setResult]=useState("");

    useEffect(()=>{
        setExpression("");
        setResult("");
    },[]);

    const clearHandler=()=>{
        setExpression("");
        setResult("");
    };

    const clickHandler=(e)=>{
        setExpression(expression+e.target.innerText);
    };
    
    const backHandler=()=>{
        if(expression.trim().length<=0) return;

        setExpression(expression.substring(0,expression.length-1));
    };

    const equalHandler=()=>{
        if(expression.trim().length<=0) return;

        try{
            const res=eval(expression.replace("x","*"));
            setResult(res.toString());
        }
        catch(err){
            setResult("Error");
        }
    };

    return (
        <div className="calculator">
            <div className="screen">
                <div className="input express">{expression}</div>
                <div className="input result">{result}</div>
            </div>
            <div className="board">
                <div className="btn gray" onClick={clearHandler}>C</div>
                <div className="btn gray" onClick={clickHandler}>(</div>
                <div className="btn gray" onClick={clickHandler}>)</div>
                <div className="btn orange" onClick={clickHandler}>/</div>
                <div className="btn" onClick={clickHandler}>7</div>
                <div className="btn" onClick={clickHandler}>8</div>
                <div className="btn" onClick={clickHandler}>9</div>
                <div className="btn orange" onClick={clickHandler}>x</div>
                <div className="btn" onClick={clickHandler}>4</div>
                <div className="btn" onClick={clickHandler}>5</div>
                <div className="btn" onClick={clickHandler}>6</div>
                <div className="btn orange" onClick={clickHandler}>+</div>
                <div className="btn" onClick={clickHandler}>1</div>
                <div className="btn" onClick={clickHandler}>2</div>
                <div className="btn" onClick={clickHandler}>3</div>
                <div className="btn orange" onClick={clickHandler}>-</div>
                <div className="btn" onClick={backHandler}><FaArrowLeft /></div>
                <div className="btn" onClick={clickHandler}>0</div>
                <div className="btn" onClick={clickHandler}>.</div>
                <div className="btn" onClick={equalHandler}>=</div>
            </div>
        </div>
    );
}

export default Calculator;