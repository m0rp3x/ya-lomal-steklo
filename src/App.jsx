import React from "react";
import Logo from "./assets/logo.svg";

import Card from "./components/Card";

const data = [ "Как бы там ни было, я знаю, что русская революция должна быть такой, какая она есть. МЫ это делаем... ПРОДАВАТЬ РАЗНЫЕ ИДЕИ О ПРАВДЕ И ЛОЖНОСТИ, Физкультуру для лошадей и т . д. Мы были бы очень счастливы продать вам сегодня что-нибудь еще, но наши чемоданы полны денег и мы жрем очень много лапши . Кстати, слово лапша - очень древнее и сейчас неупотребимое, но это и не главное" ]

export default () => {
    return <>
        <h1>
            я псих
            <img src={Logo} alt="React"/>
        </h1>
        <div className="container">
            {data.map(function (el,i){
               return <Card text={el} cnt={i + 1}/>
            })}
        </div>
    </>
}
