import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userData:{},
        }
    }
    async componentDidMount(){
        const userDetail = await fetch(`https://api.github.com/users/${this.props.userId}`);
        const userDetaulJSON = await userDetail.json();
        this.setState({
            userData:userDetaulJSON,
        })
    }
    
    render(){
        const {name, login,avatar_url} = this.state.userData;
        return (
            <div className="user-card">
            <img className='user-logo' src={avatar_url} alt='user_url'></img>
            <h2>Name: {name}</h2>
            <h3>login: {login}</h3>
            <h3>Contact: netheadab@gmail.com</h3>
        </div>
        );
    }
}
export default UserClass;