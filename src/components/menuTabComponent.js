

export default MenuTabComponent= function({active,tabName}){
var stylebak={
	backgroundColor:active==true?'#ff9b03':'#fbf8f3',
	borderRadius: "16.25px",
	flexDirection: "column",
	alignItems: "flex-start",
	gap: '9.03px',
	padding:' 8.12px 12.64px',
	display: 'inline-flex',
    position:'relative',
	top: 0,
	left: 0
}

var groupStyle = {
	//width: '112.67px',
	height: '17px',
	position: 'relative'
}

 return(
  <div style={stylebak}>
        <div style={groupStyle}>
        <div className="frame-2">
            <div className="text-wrapper-50" style={{color:active==true?'#ffffff':'#222222'}}>{tabName}</div>
        </div>
        </div>
    </div>
    
 );
}
