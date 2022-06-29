
import React, { useEffect, useReducer, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Field, reduxForm,formValueSelector ,getFormValues} from 'redux-form';
import { AddContactFormData } from './reducers/PhoneBookReducer';

let AddContacts=(props) =>{
    const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { handleSubmit,change,dataLength, pristine, reset, submitting,onSubmit,name,email,phone,website } = props;

 
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    reset();
    setOpen(false);
  };
  const handleSave = () => {
    
    console.log(name+' '+email+' '+phone+' '+website)
    let data={id:dataLength+1,name:name,email:email,phone:phone,website:website}
    dispatch(AddContactFormData(data))
    handleClose();
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Contacts
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Contact Form</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add more contacts. Please fill the required details.
          </DialogContentText>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Contact Name</label>
                <div>
                <Field
                    className='input-text'
                    name="name"
                    component="input"
                    type="text"
                    placeholder="Contact Name"
                />
                </div>
            </div>
            <div>
                <label>Contact Email</label>
                <div>
                <Field
                className='input-text'
                    name="email"
                    component="input"
                    type="email"
                    placeholder="Email"
                />
                </div>
            </div>
            <div>
                <label>Contact Phone</label>
                <div>
                <Field
                className='input-text'
                    name="phone"
                    component="input"
                    type="phone"
                    placeholder="Phone"
                />
                </div>
            </div>
            <div>
                <label>Website</label>
                <div>
                <Field
                className='input-text'
                    name="website"
                    component="input"
                    type="text"
                    placeholder="Website"
                />
                </div>
            </div>
          </form>
         
        </DialogContent>
        <DialogActions>
          <Button  disabled={pristine || submitting} onClick={handleClose}>Cancel</Button>
          <Button   disabled={pristine || submitting} onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
AddContacts= reduxForm({
    form: 'AddContacts' // a unique identifier for this form
  })(AddContacts)
  const selector=formValueSelector('AddContacts')
  AddContacts=connect(state=>{
      const {name,email,phone,website}=selector(state,'name','email','phone','website')
      return {name,email,phone,website}
  })(AddContacts)
  export default AddContacts