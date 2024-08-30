import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function RandomGame(){
        const firstPlayer = Math.floor(Math.random() * 6) + 1;
        const secondPlayer = Math.floor(Math.random() * 6) + 1;

        if(firstPlayer === secondPlayer){
        return(
        <div>
              <DotLottieReact
                        src="https://lottie.host/1b19cec3-ad21-434b-966a-8511bf0f71ec/7IBNcKRIpk.json"
                        style={{ width: '300px', height: '300px' }}
                        autoplay
                        loop
                    />
             <h3>🎮FirstPlayer: {firstPlayer}</h3>
             <h3>👾SecondPlayer: {secondPlayer}</h3>
            <h2>You win!! <DotLottieReact
                src="https://lottie.host/93cf7b49-cbea-4fd6-81f8-af98f022a714/znAJ0RnvhX.json"
                style={{ width: '300px', height: '300px' }}
                autoplay
                loop
            /></h2>
        </div>
            )
        }
    return(
        <div>
            <DotLottieReact
                        src="https://lottie.host/1b19cec3-ad21-434b-966a-8511bf0f71ec/7IBNcKRIpk.json"
                        style={{ width: '300px', height: '300px' }}
                        autoplay
                        loop
                    />
            <h1>Random Game</h1>
            <h3>🎮FirstPlayer: {firstPlayer}</h3>
            <h3>👾SecondPlayer: {secondPlayer}</h3>
            <h2>You lose!!</h2>
        </div>
    );
}