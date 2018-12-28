import React from 'react';
import Button from '@material-ui/core/Button';
import NavigationBar from '../component/NavigationBar';
import Grid from '@material-ui/core/Grid';
import Wapi from '../services/Wapi';


import RaritySelect, {WithStylesSelector} from '../component/Selectors';

export default class InventoryScreen extends React.Component {

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
                <div style={{padding: 30}}>


                    <Button size="small" variant="outlined" color="primary" fullWidth>
                        稀有度
                    </Button>
                    <Button size="small" variant="outlined" color="secondary">
                        稀有度
                    </Button>

                    <RaritySelect></RaritySelect>

                    <hr/>

                    <Grid container spacing={24}>
                        {[0, 1, 2, 3, 4, 5].map(x =>
                            <Grid item xs={3}>
                                <WithStylesSelector key={x}/>
                            </Grid>
                        )}
                    </Grid>


                </div>
            </div>
        );
    }

}