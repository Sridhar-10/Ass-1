var style1={
    background:'skyblue',
    borderRadius:'50px',
    marginRight:'50px',
    marginBottom:'10px'
}
var style2={
    background:'grey',
    borderRadius:'50px',
    marginRight:'50px',
    marginBottom:'10px'
}
var style3={
    background:'orange',
    borderRadius:'50px',
    marginRight:'50px',
    marginBottom:'10px'
}
var style4={
    background:'red',
    borderRadius:'50px',
    marginRight:'50px',
    marginBottom:'10px'
}
var style5={
    background:'green',
    borderRadius:'50px',
    marginRight:'50px',
    marginBottom:'10px',
}
var style6={
    background:'blue',
    borderRadius:'50px',
    marginRight:'50px',
    marginBottom:'10px'
}
var style7={
    background:'pink',
    borderRadius:'50px',
    marginRight:'50px',
    marginBottom:'10px'
}
var style8={
    background:'brown',
    borderRadius:'50px',
    marginRight:'50px',
    marginBottom:'10px'
}


function Button(){
    return(
    <>
    <div className="First">
    <button style={style1}>JOIN US</button>
    <button style={style2}>SETTINGS</button>
    </div>
    <div className="Second">
    <button style={style3}>LOGIN</button>
    <button style={style4}>CONTACT US</button>
    </div>
    <div className="Third">
    <button style={style5}>SEARCH</button>
    <button style={style6}>HELP</button>
    </div>
    <div className="Fourth">
    <button style={style7}>HOME</button>
    <button style={style8}>DOWNLOAD</button>
    </div>
    </> 
    );
}
export default Button