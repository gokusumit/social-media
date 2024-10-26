

const WelcomeMessage = ({onGetPostsClick}) => {
  return (
    <div>
        <center className="welcome-message"> 
        <h1>There is no posts</h1>
        {/* <button type="button"  onClick={onGetPostsClick} className="btn btn-primary">Get all Posts from Server</button> */}
        </center>
     
    </div>
  )
}

export default WelcomeMessage
