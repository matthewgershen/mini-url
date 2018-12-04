import React from 'react';


const MiniUrlContainer = (props) =>{

  if (Object.values(props.url).length === 0) {
    return(
      <div className="placeholder"></div>
    )
  }else {

    return(
          <div className="mini">{props.url.mini_url}</div>
    );

  }

};


export default MiniUrlContainer;
