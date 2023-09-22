// the below two line will working same
//function ProfileCard(props) {
function ProfileCard({title , handle}){
 
 
    // this is called destructuring 
    // const title = props.title;
    // const handle = props.handle;

    // the above and this are same working
    //    const {title , handle} = props;
    return (
        <div>
            <div>Title is {title}</div>
            <div>Handle is {handle}</div>
        </div>
    )
}



export default ProfileCard;