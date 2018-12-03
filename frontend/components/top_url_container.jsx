import React from 'react';


const TopUrlContainer = (props) =>{

  if (Object.keys(props.top).length === 0) {
    return(
      <div></div>
    )
  }else {
    const topUrls = Object.values(props.top).map((url,idx)=>{

      return (
            <li key={idx}>
              <span>{url.url}</span>
              <span>{url.title}</span>
              <span>{url.count}</span>
            </li>

      );
    });
return(
      <div>
        <h3>Top Urls</h3>
        <ul>
          {topUrls}
        </ul>
      </div>
    );

  }

};


export default TopUrlContainer;
