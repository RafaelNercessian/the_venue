import React, {Component} from 'react';
import MyButton from "../utils/MyButton";
import Zoom from 'react-reveal/Zoom'

class Pricing extends Component {

    constructor() {
        super();
        this.state = {
            prices: [100, 150, 250],
            positions: ['Balcony', 'Medium', 'Star'],
            desc: [
                'Desc 1',
                'Desc 2',
                'Desc 3'
            ],
            linkTo: [
                'http://sales/b',
                'http://sales/c',
                'http://sales/d'
            ],
            delay: [500, 0, 500]
        }
    }

    showBoxes = () => {
        return (
            this.state.prices.map((box, i) => (
                <Zoom
                    key={i}
                    delay={this.state.delay[i]}>
                    <div className={"pricing_item"}>
                        <div className={"pricing_inner_wrapper"}>
                            <div className={"pricing_title"}>
                                <span>${this.state.prices[i]}</span>
                                <span>{this.state.positions[i]}</span>
                            </div>
                            <div className={"pricing_description"}>
                                <span>{this.state.desc[i]}</span>
                            </div>
                            <div className={"pricing_buttons"}>
                                <MyButton
                                    text="Purchase"
                                    bck="#FFA800"
                                    color="#FFF"
                                    link={this.state.linkTo[i]}
                                />
                            </div>
                        </div>
                    </div>
                </Zoom>
            ))
        )
    };

    render() {
        return (
            <div className={"bck_black"}>
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>
                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Pricing;