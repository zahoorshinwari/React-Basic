// the below two line will working same
//function ProfileCard(props) {
function ProfileCard({title , handle, image, description}){
 
 
    // this is called destructuring 
    // const title = props.title;
    // const handle = props.handle;

    // the above and this are same working
    //    const {title , handle} = props;
    return (

        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={image} alt="app logo"/>
                </figure>
            </div>

            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4"> {title}</p>
                    <p className="subtitle is-6"> {handle}</p>  
                    <div className="content box">
                        {description}
                    </div>    
                </div>
            </div>
        </div>        
    );
}



export default ProfileCard;