import './Weekly.css'
const Weekly = () =>{
    return(
        <div className='weekly'>
            <h2 style={{
                color :"#1262AE"
            }}>SUBSCRIBE TO OUR NEWSLETTER</h2>
            <h1>Get weekly updates</h1>
            <form className='weekly-form'>
                <p>Fill in your details to join the party!</p>
                <input type='text' placeholder='Your name' className='input-box-weekly'/>
                <input type='email' placeholder='Email address' className='input-box-weekly'/>
                <button>Submit</button>
            </form>
        </div>
    )
}
export default Weekly