import React from 'react';
import { connect } from 'react-redux';
import { fetchTopUrls } from '../actions/top_actions';
import { createUrl } from '../actions/url_actions';
import TopUrlContainer from './top_url_container'

class Url extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      url: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);

  }

  componentDidMount(){
    this.props.fetchTopUrls();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createUrl(this.state.url)
    this.setState({url: ""});
  }

  handleInput(e){
    e.preventDefault()
    this.setState({url: e.currentTarget.value});
    }

  render(){

    return(
      <div>
        <form>
          <label>URL</label>
          <input
            value={this.state.url}
            placeholder="https://www.your-url-here.com/"
            onChange={this.handleInput}
            />
          <button onClick={this.handleSubmit}>Get MiniUrl</button>
        </form>
        <TopUrlContainer top={this.props.top}/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return{
    top: state.entities.top
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    fetchTopUrls: () => dispatch(fetchTopUrls()),
    createUrl: (url) => dispatch(createUrl(url))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Url);
