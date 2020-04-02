import React, {Component} from 'react';
import {
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    CardActions,
    Avatar,
    Typography,
    Button,
    withStyles,
  } from '@material-ui/core';
  
import { XMasonry, XBlock } from "react-xmasonry";

import './my.css'

const Xmasonry = () => {

    return <XMasonry>
    <XBlock>
        <div className="card">
            <h1>Simple Card</h1>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, 
                there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, 
                a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. 
                It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no 
                control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem
                 Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas,
                  wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, 
                  put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains,
                   she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, 
                   the Line Lane. Pityful a rethoric question ran over her cheek, then </p>
        </div>
    </XBlock>
    <XBlock width={ 2 }>
        <div className="card">
            <h1>Wider card</h1>
            <p>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents.</p>

<p>I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by the trickling stream; and, as I lie close to the earth, a thousand unknown plants are noticed by me: when I hear the buzz of the little world among the stalks, and grow familiar with the countless indescribable forms of the insects and flies, then I feel the presence of the Almighty, who formed us in his own image, and the breath</p>
        </div>
    </XBlock>
</XMasonry>



}


export default Xmasonry;