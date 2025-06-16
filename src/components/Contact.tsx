import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import '../assets/styles/Contact.scss';

function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [fields, setFields] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: false, email: false, message: false });

  const handleChange = (field: keyof typeof fields) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setFields({ ...fields, [field]: e.target.value });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = {
      name: fields.name.trim() === '',
      email: fields.email.trim() === '',
      message: fields.message.trim() === '',
    };
    setErrors(newErrors);
    if (Object.values(newErrors).some(Boolean)) return;

    if (!form.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        setFields({ name: '', email: '', message: '' });
        setErrors({ name: false, email: false, message: false });
      })
      .catch((error) => console.error('EmailJS error:', error));
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Have a question or opportunity to discuss? I’d love to hear from you.</p>
          <Box
            component="form"
            ref={form}
            onSubmit={handleSubmit}
            noValidate
            autoComplete="off"
            className="contact-form"
          >
            <div className="form-flex">
              <TextField
                required
                name="name"
                label="Your Name"
                placeholder="What's your name?"
                value={fields.name}
                onChange={handleChange('name')}
                error={errors.name}
                helperText={errors.name ? 'Please enter your name' : ''}
              />
              <TextField
                required
                name="email"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={fields.email}
                onChange={handleChange('email')}
                error={errors.email}
                helperText={errors.email ? 'Please enter your email or phone number' : ''}
              />
            </div>
            <TextField
              required
              name="message"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={5}
              className="body-form"
              value={fields.message}
              onChange={handleChange('message')}
              error={errors.message}
              helperText={errors.message ? 'Please enter the message' : ''}
            />
            <Button variant="contained" endIcon={<SendIcon />} type="submit">
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;