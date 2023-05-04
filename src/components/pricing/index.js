import MyButton from "../button/button";
import { Zoom } from "react-awesome-reveal";

const Pricing=()=>{

    const priceState={
        price:[100,150,350],
        position:['Ecthelion',' Merethrond','Othram'],
        desc:[
            'Access to the concert in the grand courtyard of the White City.',
            'Priority seating and a complimentary drink in addition to access to the concert.',
            'Meet-and-greet with Gandalf and his band, a special souvenir, access to a private lounge area, and all benefits of the Merethrond tier.'
        ],
        linkto:['http://sales.b','http://sales/m','http://sales.s'],
        delay:[500,0,500]
    }
    const showBoxes=()=>(
        priceState.price.map((box,i)=>(
            <Zoom key={i} className="pricing_item" delay={priceState.delay[i]}>
                <div className="pricing_inner_wrapper">
                    <div className="pricing_title">
                        <span>${priceState.price[i]}</span>
                        <span>{priceState.position[i]}</span>

                    </div>
                    <div className="pricing_description">
                        {priceState.desc[i]}
                    </div>
                    <div className="pricing_buttons">
                        <MyButton
                            text="Purchase"
                            style={{
                                background:'#ffa800',
                                color:'#ffffff'
                            }}
                            link={priceState.linkto[i]}
                        />
                    </div>

                </div>
            </Zoom>

        ))
    )
    return(
        <div className="bck_black">
            <div className="center_wrapper pricing_section">
                <h2>Pricing</h2>
                <div className="pricing_wrapper">
                    {showBoxes()}
                </div>
            </div>
        </div>
    )
}

export default Pricing;