import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import AudioPlayer from 'material-ui-audio-player';

const muiTheme = createMuiTheme({});

function MyAudioPlayer(props){
  return(
    <ThemeProvider theme={muiTheme}>
  <AudioPlayer src={props.music} />
</ThemeProvider>
  )
}
export default MyAudioPlayer