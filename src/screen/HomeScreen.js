import React from 'react';
import Button from '@material-ui/core/Button';
import '../App.css';
import NavigationBar from '../component/NavigationBar';

import Wapi from '../services/Wapi';

export default class HomeScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            files: [],
            result: {items: []}
        };

    }

    render() {

        return (
            <div>
                <NavigationBar></NavigationBar>
                <div>
                    <div>{this.state.files.length} : {this.state.result.items.length}</div>

                    <input type="file" multiple class="aaa" ref={x => this.input = x}
                           onChange={e => this.onChangef(e.target.files)}>
                    </input>

                    <Button onClick={() => this.input.click()} variant="contained" color="primary">
                        aaa

                    </Button>

                    <Button onClick={this.onSynchronize.bind(this)} variant="contained" color="primary">
                        CCC

                    </Button>
                </div>
            </div>
        );
    }

    onChangef(fs) {
        let files = [];
        let result = {items: [], goods_infos: {}};
        console.log(fs);
        if (fs.length) {
            for (let i = 0; i < fs.length; i++) {
                let reader = new FileReader();
                reader.readAsText(fs[i]);
                reader.onload = e => {
                    let {data: {goods_infos, items}} = JSON.parse(e.target.result);
                    result.items.push(...items);
                    result.goods_infos = {...result.goods_infos, ...goods_infos};
                    console.log(result);
                    this.setState({result});
                };
                files.push(fs[i]);
            }
        }
        this.setState({files});
    }

    onSynchronize() {
        console.log(this.state.result.items);
        Wapi.Inventory.Sync(this.state.result.items).then(data => console.log(data));
    }
}