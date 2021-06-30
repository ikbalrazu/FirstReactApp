
const name=['iqbal','raju'];
const [iqbal,raju] = name; // array destructuring

function Card3(props){
    //console.log(props)
    const {nametext, proftext}=props; //destructuring this is object destructuring
    return <div className="card2">
        <h1 className="card2name">{nametext}</h1>
        <p className="card2profession">{proftext}</p>
        <p className="card2status">Senior developer at iqbalbuzzbangla</p>
    </div>
}

export default Card3;