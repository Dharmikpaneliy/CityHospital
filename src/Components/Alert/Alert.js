import React, { useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { useDispatch, useSelector } from 'react-redux';
import { resetalert } from '../../redux/Action/alert.action';

function Alert(props) {

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    console.log("alert");

    const alert = useSelector(state => state.alert)

    const dispatch = useDispatch()

    useEffect(() => {
        if (alert.text !== '') {
            enqueueSnackbar(alert.text, {
                variant: alert.color,
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right'
                }
            });
            setTimeout(dispatch(resetalert()), 2000);
        }
    }, [alert.text])

    return (
        <div>

        </div>
    );
}

export default Alert;