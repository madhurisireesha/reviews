import './reviewco.css'
const Reviewco=(props)=>{
    const{reviewdetails}=props
    const{imgUrl,username,companyName,description}=reviewdetails
    return(
        <div className='middle'>
            <h1>Reviews</h1>
            <img src={imgUrl}/>
            <h4>{username}</h4>
            <p className='pc'>{companyName}</p>
            <p className='d'>{description}</p>
        </div>
    )
}
export default Reviewco