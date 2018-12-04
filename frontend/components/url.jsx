import React from 'react';
import { connect } from 'react-redux';
import { fetchTopUrls } from '../actions/top_actions';
import { createUrl, clearErrors } from '../actions/url_actions';
import TopUrlContainer from './top_url_container'
import MiniUrlContainer from './mini_url_container'

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
    this.props.createUrl(this.state.url).then(action => this.props.fetchTopUrls())
    this.setState({url: ""});
    this.props.clearErrors();
  }

  handleInput(e){
    e.preventDefault()
    this.setState({url: e.currentTarget.value});
    }

  render(){
    return(
      <div>
        <h1>Mini Url</h1>
        <form>
          <input
            value={this.state.url}
            placeholder="https://www.your-url-here.com/"
            onChange={this.handleInput}
            />
          <button onClick={this.handleSubmit}>Get MiniUrl</button>
        </form>
        {this.props.errors &&
          <p className="errors">{this.props.errors}</p>
        }
        <MiniUrlContainer url={this.props.url}/>
        <TopUrlContainer top={this.props.top}/>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return{
    top: state.entities.top,
    url: state.entities.url,
    errors: state.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return{
    fetchTopUrls: () => dispatch(fetchTopUrls()),
    createUrl: (url) => dispatch(createUrl(url)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Url);
