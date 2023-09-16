import { Link } from "react-router-dom";

export default function TabSwitch({classname,type}){
//  var styled={
//    tab:{
//   padding:' 0px 15px',
//   color:'#000000',
//   fontFamily:'"Space Grotesk", Helvetica',
//   fontSize:'14.4px',
//   fontWeight: '400',
//   letterSpacing: '-0.29px',
//   lineHeight:' 21.7px',
//   textAlign:'center',
//   whiteSpace:' nowrap',
//   width:'120px',
//   transition: 'all 0.6s ease'
//  },
//   tabActive:{
//   padding:'0px 15px',
//   color:' #999999',
//   fontFamily:'"Space Grotesk", Helvetica',
//   fontSize:'14.4px',
//   fontWeight:' 400',
//   letterSpacing:'-0.29px',
//   lineHeight: '21.7px',
//   textAlign:'center',
//   whiteSpace: 'nowrap',
//   width:'120px',
//   borderBottom: '1.5px solid #EF9614'
//  }
 
// }
var active=false;
 function  selectTab(ev) {
  //setTimeout(function(){;console.log('done!!')},500)
  var ch = ev.target.parentElement.children
  for (const child of ch) {
    child.className="tab"
   }
  ev.target.className="tabActive"
 
 }

return(
    <div className={classname??"overlap-3"}>
    <div className="" style={{display:"flex",flexDirection:'row'}}> 
   <a href='/market'> <div className= {type=='market'?"tabActive":"tab"} onClick={selectTab} >Market</div></a>
   <a href='/vendors'> <div className= {type=='vendor'?"tabActive":"tab"} onClick={selectTab}>Vendors</div></a>
    </div>
    </div>
)

}
