import React from 'react';


const TopUrlContainer = (props) =>{
  
  if (Object.keys(props.top).length === 0) {
    return(
      <div></div>
    )
  }else {
    const topUrls = Object.values(props.top).sort().map((url,idx)=>{
      return (
            <li key={idx}>
              <span>{url.url}</span>
              <span>{url.title}</span>
              <span className="count">{url.count}</span>
            </li>

      );
    });
return(
      <div className="top">
        <h3>Top Urls</h3>
        <ol>
          <li className="headers">
            <span>URL</span>
            <span>Title</span>
            <span className="count">Count</span>
          </li>
          {topUrls}
        </ol>
      </div>
    );

  }

};


export default TopUrlContainer;
