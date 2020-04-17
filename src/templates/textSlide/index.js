import React from 'react';


import './style-slide.css';



export default function SlideText() {
    return (
    <>   

        <div class="container-text">
        
            <div class="inner">
                <div id="one" class="item first">
                    <h3>Title 1</h3>
                    This is your last chance. After this, there is no turning back.
                </div>
                
                <div id="two" class="item second">
                    <h3>Title 2</h3>
                    You take the blue pill - the story ends, you wake up in your bed 
                    and believe whatever you want to believe.
                </div>
                
                <div id="three" class="item third">
                    <h3>Title 3</h3>
                    You took the blue pill ?- the story ends, you wake up in your 
                    bed and believe whatever you want to believe.
                </div>
                
                <div id="four" class="item fourth">
                    <h3>Title 4</h3>
                    You take the red pill - you stay in Wonderland and I show you 
                    how deep the rabbit-hole goes.
                </div>
            
            </div>
        </div>

    </>
  );
}