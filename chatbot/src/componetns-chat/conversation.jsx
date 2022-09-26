import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { ChatBubble } from '@mui/icons-material';

import dictinary from './ dictionary';
import '../styles/chatbot.css'



class Output extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user_message: '',
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { user_message } = steps;

    this.setState({ user_message });
  }
  

  render() {
    const { user_message } = this.state;
    const reqAnswere=(input)=>dictinary[input]?dictinary[input]:"No entiendo lo que dices";
    return (
      <div style={{ width: '100%' }}>
				{reqAnswere(user_message.value)}
      </div>
    );
  }
}

Output.propTypes = {
  steps: PropTypes.object,
};

Output.defaultProps = {
  steps: undefined,
};

class Chat extends React.Component{
    constructor(props){
        super(props);

        this.state={
            showing:true,
						
        };
    };

    render(){
      const {showing}=this.state
      const theme={
        background: '#f5f8fb',
        fontFamily: 'Poppins',
        headerBgColor: '#3254a8',
        headerFontColor: '#fff',
        headerFontSize: '15px',
        botBubbleColor: '#3254a8',
        botFontColor: '#fff',
        userBubbleColor: '#fff',
        userFontColor: '#4a4a4a',
        Cache: '#fff',
      }
      return(
        <div>
          <button className="boton" onClick={() => {this.setState({ showing: !showing })}}><ChatBubble/></button>
          <div className="ventana"  style={{ display: (showing ? 'block' : 'none') }}>
            <ThemeProvider theme={theme}>
            <ChatBot
              steps={[
									{
										id:'1',
										component:<div>Como te puedo ayudar?</div>,
										asMessage:true,
										trigger: 'user_message'
									},
									{
										id:'user_message',
										user:true,
										trigger:'API'
									},
									{
										id: 'API',
										component: <Output/>,
										asMessage: true,
										trigger: 'user_message',
									},		
              ]}/>
              </ThemeProvider>
          </div>
        </div>
          
      );
  }
}


export default Chat;