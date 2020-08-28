import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '75%',
      },
    },
  },
}));
