
import { Button, Form, Input, Tooltip } from 'antd';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

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

const changeLanguage = (language: string) => {
  i18next.changeLanguage(language);
};

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className="flex justify-end items-center space-x-4 mr-10 mt-3">
      <span
        className={`cursor-pointer ${i18n.language === 'en' ? 'text-blue-500' : 'text-gray-500'}`}
        onClick={() => changeLanguage('en')}
      >
        English
      </span>
      <span
        className={`cursor-pointer ${i18n.language === 'ru' ? 'text-blue-500' : 'text-gray-500'}`}
        onClick={() => changeLanguage('ru')}
      >
        Русский
      </span>      
    </div>
  );
};

const ContactForm = () => {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [number, setNumber] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceId = 'service_aewipmj';
    const templateId = 'template_bwef55b';
    const publicKey = '7OTl34pNBHT0rVHL9';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Minzu-dem',
      message: message,
      number: number
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully', response);
        setName('');
        setEmail('');
        setMessage('');
        setNumber('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <Form onSubmitCapture={handleSubmit} className='grid gap-4' {...formItemLayout} variant="filled">
      <LanguageSwitcher />

      <div className='mx-4 md:mx-[15%] text-[16px] md:text-[17px]'>
        
        <p className=' my-4 md:w-[80%] lg:w[80%]'>{t('contact_us_message')}</p>
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <label className="block mb-1 mt-5 md:shrink-3" htmlFor="name">{t('name')}</label>
            <Input
              className='w-full h-11 border border-black bg-white rounded-none p-2'
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              suffix={<Tooltip title="Extra information" />}
            />
          </div>
          <div>
            <label className="block mb-1 mt-5" htmlFor="email">{t('email')}</label>
            <Input
              className='w-full h-11 border-black bg-white rounded-none'
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              suffix={<Tooltip title="Extra information" />}
            />
          </div>
        </div>
<div>
          <label className="block mb-1 mt-5" htmlFor="number">{t('phone_number')}</label>
          <Input
            className='w-full h-11 border-black bg-white rounded-none'
            type="number"
            value={number}

            id='number'
            suffix={<Tooltip title="Extra information" />}
          />
        </div>
        <div className='mt-6 min-h-13'>
          <label className="block mb-1 text-[16px] md:text-[17px]" htmlFor="message">{t('message')}</label>
          <Input.TextArea
            className='border-black bg-white rounded-none w-full outline-none py-[100px] px-[18px]  border-1 '
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <Form.Item className='flex justify-center md:justify-start mt-6' wrapperCol={{ offset: 0, span: 16 }}>
          <Button className='bg-[#3a3a3a] h-11 text-lg font-bold rounded-none' type="primary" htmlType="submit">{t('send')}</Button>
        </Form.Item>
      </div>

    
    </Form>
  );
};

export default ContactForm;