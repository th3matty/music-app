import React, {useEffect}  from "react";
// import SimpleBar from "simplebar-react";

function Search_Modal(props) {

    useEffect(() => {
		console.log("Search_Modal rendert")
	})


  return (
    <div>
      <h3 className="text-xl text-colorPallete_MintGreen mb-2">
        {" "}
        Your Results for{" "}
        <span className="text-2xl text-colorPallete_Blue mb-2 ml-1 hover:font-bold ">
          {props.searchValue}
        </span>{" "}
      </h3>
      <div className="flex flex-wrap justify-around">
        <div className="flex">{/* Search Content comes here */}

            <button id="modalButton" onClick={(e)=>{props.search(e)}}> Clickme</button>
        
        </div>
      </div>
    </div>
  );
}

export default Search_Modal;
