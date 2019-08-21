import React, {
    Component
} from 'react';
import Button from './components/Button';
import "./css/style.css";

class Application extends Component {
    constructor(props) {
        super(props);

        this.state = {
            present: '0',
            initial: [],
            nextIsReset: false
        }
    }

    reset = () => {
        this.setState({
            present: '0',
            initial: [],
            nextIsReset: false
        });
    }

    show = (symbol) => {
        console.log("symbol");

        if (["/", "-", "+", "*"].indexOf(symbol) > -1) {
            let {
                initial
            } = this.state;
            initial.push(this.state.present + symbol);
            this.setState({
                initial,
                nextIsReset: true
            });
        } else {
            if ((this.state.present === "0" && symbol !== ".") || this.state.nextIsReset) {
                this.setState({
                    present: symbol,
                    nextIsReset: false
                });
            } else {
                this.setState({
                    present: this.state.present + symbol
                });
            }
        }
    }
    calculate = (symbol) => {
        let {
            present,
            initial,
            nextIsReset
        } = this.state;
        if (initial.length > 0) {
            present = eval(String(initial[initial.length - 1] + present));
            this.setState({
                present,
                initial: [],
                nextIsReset: true
            });

        }
    }



    render() {

        const buttons = [{
                symbol: 'C',
                cols: 3,
                action: this.reset
            },
            {
                symbol: '/',
                cols: 1,
                action: this.show
            },
            {
                symbol: '7',
                cols: 1,
                action: this.show
            },
            {
                symbol: '8',
                cols: 1,
                action: this.show
            },
            {
                symbol: '9',
                cols: 1,
                action: this.show
            },
            {
                symbol: '*',
                cols: 1,
                action: this.show
            },
            {
                symbol: '4',
                cols: 1,
                action: this.show
            },
            {
                symbol: '5',
                cols: 1,
                action: this.show
            },
            {
                symbol: '6',
                cols: 1,
                action: this.show
            },
            {
                symbol: '-',
                cols: 1,
                action: this.show
            },
            {
                symbol: '1',
                cols: 1,
                action: this.show
            },
            {
                symbol: '2',
                cols: 1,
                action: this.show
            },
            {
                symbol: '3',
                cols: 1,
                action: this.show
            },
            {
                symbol: '+',
                cols: 1,
                action: this.show
            },
            {
                symbol: '0',
                cols: 2,
                action: this.show
            },
            {
                symbol: '.',
                cols: 1,
                action: this.show
            },
            {
                symbol: '=',
                cols: 1,
                action: this.calculate
            },

        ];

        return (



            <
            div className = "Application" >
            <
            h1 > Calculator < /h1>

            <
            input className = "result"
            type = "text"
            value = {
                this.state.present
            }
            />

            {
                buttons.map((btn, i) => {
                    return <Button key = {
                        i
                    }
                    symbol = {
                        btn.symbol
                    }
                    cols = {
                        btn.cols
                    }
                    action = {
                        (symbol) => btn.action(symbol)
                    }
                    />
                })
            } <
            /div>

        );


    };
}


export default Application;