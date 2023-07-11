import UserClass from "./UserClass";
const About = () =>{
    return (
        <>
            <h1>About Us</h1>
            <h2>Namaste Food web app developed by Ab</h2>
            {/* <User name = {'Abhishek Rai (FC)'}/> */}
            <UserClass userId={'ab-rai'}/>
        </>
    );
}
export default About;