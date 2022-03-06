import React from "react";
import LastUser from './LastUser';
import LastProduct from './LastProduct';

function ContentRowCenter() {
  return (
    <div className="row">
			 <LastProduct></LastProduct>
			 <LastUser></LastUser>
		</div>			
  )
}

export default ContentRowCenter;