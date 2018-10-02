import React from 'react'
import './contact.css'

class Contact extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
           fullName: '',
           phoneNumber: '',
           address: '',
           email: '',
           preferredTime: 'morning',
           message: '',
           loading: false
       }
       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange = e => {
       e.preventDefault();
       this.setState({
           [e.target.name]: e.target.value
       })
   }

   handleSubmit = e => {
       e.preventDefault();
       this.props.addInquiry(this.state);
       this.setState({
           fullName: '',
           phoneNumber: '',
           address: '',
           email: '',
           preferredTime: 'morning',
           message: '',
           loading: false
       })
   }

   render() {
       return (
           this.props.loading ?
           <div class='loading'>
               {/* <div class="roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div> */}
           </div>
           :
           <div className='contact'>
               <div className="map-wrapper">
                   {/* <MapContainer /> */}
                   <div className='contactHeader'>
                       <h3 className='contactHeading'>Grievances </h3>
                   </div>
               </div>

               <div className='body'>
                   <div className='formWrapper'>
                       <form className='form' onSubmit={this.handleSubmit}>
                           <input onChange={this.handleChange}
                               value={this.state.fullName}
                               type='text'
                               name='fullName'
                               placeholder='Full Name'
                               autocomplete='off'
                               required />
                           <input onChange={this.handleChange}
                               value={this.state.phoneNumber}
                               type='number'
                               name='phoneNumber'
                               placeholder='Phone Number' />
                           <input onChange={this.handleChange}
                               value={this.state.address}
                               name='address'
                               autocomplete='off'
                               placeholder='Address' />
                           <input onChange={this.handleChange}
                               value={this.state.email}
                               type='email'
                               name='email'
                               placeholder='E-mail Address'
                               autocomplete='off'
                               required />
                           <select name='preferredTime' onChange={this.handleChange} value={this.state.preferredTime}>
                                   <option value='morning'>Morning</option>
                                   <option value='afternoon'>Afternoon</option>
                                   <option value='night'>Night</option>
                           </select>
                           <textarea onChange={this.handleChange}
                               value={this.state.message}
                               name='message'
                               placeholder='Message'
                               className='msg'
                               autocomplete='off'
                               required>
                           </textarea>
                           <button className='formBtn' type='submit'>SEND</button>
                       </form>
                   </div>
               </div>
           </div>
       )
   }
}

// export default connect(state => state, { addInquiry })(Contact)
export default Contact