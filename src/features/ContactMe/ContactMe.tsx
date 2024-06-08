import React from 'react';
import { Button, Form, Input, Tooltip } from 'antd';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const ContactMe: React.FC = () => (
  <Form className='grid gap-4' {...formItemLayout} variant="filled">
    <div className='flex justify-between mr-10 ml-10'>
      <div className='flex text-justify'>
        <img className='w-36' src="https://minzu-dem.vercel.app/logo.svg" alt="MINZU logo" />
        <h1 className='pt-11 text-20'>MINZU</h1>
      </div>
      <div className='mt-11'>
        <a href="">PAINTINGS</a>
        <a className='ml-3 mr-3' href="">BIO</a>
        <a href="">CONTACT ME</a>
      </div>
      <div className='mt-9'>
        <a href=""><img className='w-6' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx8U0binObZ-QCRs4vRGi1WTWFyqCXWweyvw&s" alt="External link icon" /></a>
      </div>
    </div>

    <div className='ml-40 mr-40'>
      <p className='block my-4'>You're welcome to contact us with any inquiry. For questions regarding your order, please include your order number.</p>

      <div className='mt-10 grid grid-cols-2 gap-4 '>
        <Input
          className='w-90 h-11'
          placeholder="Name*"
          suffix={<Tooltip title="Extra information" />}
        />

        <Input
          className='w-90 h-11'
          placeholder="Email*"
          type="email"
          suffix={<Tooltip title="Extra information" />}
        />
      </div>

      <Input
        className='mt-6 h-11 w-90'
        placeholder="Phone number*"
        type="number"
        suffix={<Tooltip title="Extra information" />}
      />

      <Form.Item className='mt-6 w-700px' rules={[{ required: true, message: 'Please input!' }]}>
        <Input.TextArea placeholder="Message*" />
      </Form.Item>

      <Form.Item className='flex justify-start -ml-4' wrapperCol={{ offset: 6, span: 16 }}>
        <Button className='color bg-gray-700' type="primary" htmlType="submit">Send</Button>
      </Form.Item>

      <div className='mt-20'>
        <div className='h-px bg-black my-4'></div>
        <div className=' flex justify-between w-10 absolute left-1/2 transform -translate-x-1/2  '>
          <img className='w-6' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx8U0binObZ-QCRs4vRGi1WTWFyqCXWweyvw&s" alt="External link icon" />
          <img className='w-5 ml-1' src="https://www.svgrepo.com/show/14478/email.svg" alt="Email icon" />
        </div>

        <div className='flex justify-between mt-20 mb-10'>
          <div className='flex text-justify'>
            <a href="https://minzu-dem.vercel.app/pages/return-and-refund-policy">
              <h1>Return & Refund Policy</h1>
            </a>
            <a className='ml-2' href="https://minzu-dem.vercel.app/pages/return-and-refund-policy">
              <h1>Terms of Service</h1>
            </a>
          </div>
          <h1>© 2024, Minzu Dem Developed by qameious</h1>
        </div>
      </div>
    </div>
  </Form>
);

export default ContactMe;
