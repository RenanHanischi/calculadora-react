import React from "react";
import { useState } from "react";
import Botoes from "../Botoes/Botoes";
import "./Calculadora.css";

export default function Calculadora() {


    const [resultado, setResultado] = React.useState(0);

    function inputToResultado(e) {
        var input = e.target.value;

        if ((resultado.length < 0))
        {
            setResultado(resultado + input);

        }
        if(resultado==0){
            setResultado(input);
        }
        else{
            setResultado(resultado + input);
        }

    }  
    //não está tirando de valores que foram calculados :(
    function back() {
        //tentativa4
        //string = back.toString();
        //back=resultado.toString()
        //tentativa2
        var back = resultado+'';//Forma que funcionou! sem o +'' não funciona quando calcula. Funcionava normalmente sem calcular.
        back=back.substring(0,back.length-1);
        setResultado(back);
     

        //tentativa3
        //var back = resultado.substring(0,resultado.length-1);
        //setResultado(resultado.substring(0,resultado.length-1));
        //setResultado(back);
    }

    function clean() {
        setResultado(0);
    }

    function calcular() {
        //alerta para erro de sintaxe no eval
        var validCode = 1;
        try {
            eval(resultado);
            console.log(eval(resultado))
        }
        catch (e) {
            if (e instanceof SyntaxError) {
                validCode = 0;
                console.warn(e.message);
                alert(e.message);
            }
        }
        //finnaly que está o eval
        finally {
            if (validCode) {
                    const calcular=eval(resultado)
                    setResultado(calcular);     

            }
        }
    }

    return (
        <div className="Container">
            <div className="Resultado">{resultado}</div>
            <Botoes tipo="botaoLaranja" value={'C'} event={clean} />
            <Botoes tipo="botaoLaranja" value={'<'} event={back} />
            <Botoes tipo="botaoLaranja" value={'+'} event={inputToResultado} />
            <Botoes tipo="botaoLaranja" value={'-'} event={inputToResultado} />
            <Botoes tipo="botaoLaranja" value={'*'} event={inputToResultado} />
            <Botoes tipo="botaoLaranja" value={'/'} event={inputToResultado} />
            <Botoes tipo="botaoVerde" value={'1'} event={inputToResultado} />
            <Botoes tipo="botaoVerde" value={'2'} event={inputToResultado} />
            <Botoes tipo="botaoVerde" value={'3'} event={inputToResultado} />
            <Botoes tipo="botaoVerde" value={'4'} event={inputToResultado} />
            <Botoes tipo="botaoVerde" value={'5'} event={inputToResultado} />
            <Botoes tipo="botaoVerde" value={'6'} event={inputToResultado} />
            <Botoes tipo="botaoVerde" value={'7'} event={inputToResultado} />
            <Botoes tipo="botaoVerde" value={'8'} event={inputToResultado} />
            <Botoes tipo="botaoVerde" value={'9'} event={inputToResultado} />
            <Botoes tipo="botaoVerde" value={'0'} event={inputToResultado} />
            <Botoes tipo="botaoVerde" value={'.'} event={inputToResultado} />
            <Botoes tipo="botaoVerde" value={'='} event={calcular} />

        </div>
    )
}