import ChatBot from 'react-simple-chatbot';
import React,{Component} from 'react';
import PropTypes from 'prop-types';

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
    return (
      <div style={{ width: '100%' }}>
				{user_message.value}
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

      return(
          <div>
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
          </div>
      );
  }
}


export default Chat;