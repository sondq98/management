import React from 'react';
import Button from '@material-ui/core/Button';

export default function Btn40(props) {
    const backgroundColor = props.backgroundColor;
    return (
        <div>
            <Button
                variant="contained"
                size="medium"
                sx={{ 
                    color: 'white', 
                    backgroundColor: {backgroundColor},
                    textTransform: 'capitalize', 
                    padding: '8px 20px', 
                    width: '134px' 
                }}
            >
                {props.content}
            </Button>
        </div>
    )
}