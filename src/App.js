import './App.css';
import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Typography } from '@mui/material';

function App() {
    return (
        <div className="App">
            <Tooltip
                title={
                    <React.Fragment>
                        <Typography color="inherit">Tooltip with HTML</Typography>
                        <em>{"And here's"}</em> <b>{'some'}</b> <u>{'amazing content'}</u>.{' '}
                        {"It's very engaging. Right?"}
                    </React.Fragment>
                }
            >
                <IconButton>
                    <DeleteIcon />
                </IconButton>
            </Tooltip>
        </div>
    );
}

export default App;
