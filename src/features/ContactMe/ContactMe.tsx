import { Button, Form, Input, Tooltip } from 'antd';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

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
    <div className="flex justify-end items-center space-x-4 mr-4 md:mr-20 mt-4 md:mt-10">
      <span
        className={cursor-pointer ${i18n.language === 'en' ? 'text-blue-500' : 'text-gray-500'}}
        onClick={() => changeLanguage('en')}
      >
        English
      </span>
      <span
        className={cursor-pointer ${i18n.language === 'ru' ? 'text-blue-500' : 'text-gray-500'}}
        onClick={() => changeLanguage('ru')}
      >
        Русский
      </span>
    </div>
  );
};

const ContactForm = () => {
  const { t } = useTranslation();

  return (
    <Form className='grid gap-4' {...formItemLayout} variant="filled">
      <LanguageSwitcher />
      <div className='flex flex-col md:flex-row justify-between mr-4 md:mr-10 ml-4 md:ml-10 text-xl'>
        <div className='flex text-justify mb-4 md:mb-0'>
          <img className='w-24 md:w-36' src="https://minzu-dem.vercel.app/logo.svg" alt="MINZU logo" />
          <h1 className='pt-4 md:pt-11 text-lg md:text-2xl'>MINZU</h1>
        </div>
        <div className='mt-4 md:mt-11 flex justify-center md:justify-start'>
          <a className='mr-2 md:mr-3' href="">{t('paintings')}</a>
          <a className='mx-2 md:mx-3' href="">{t('bio')}</a>
          <a className='ml-2 md:ml-3' href="">{t('contact_me')}</a>
        </div>
        <div className='mt-4 md:mt-9'>
          <a href=""><img className='w-6' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx8U0binObZ-QCRs4vRGi1WTWFyqCXWweyvw&s" alt="External link icon" /></a>
        </div>
      </div>

      <div className='mx-4 md:mx-[15%] text-[16px] md:text-[17px]'>
        <p className='block my-4'>{t('contact_us_message')}</p>

        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <label className="block mb-1" htmlFor="name">{t('name')}</label>
            <Input
              className='w-full h-11 border border-black bg-white rounded-none p-2'
              id="name"
              suffix={<Tooltip title="Extra information" />}
            />
          </div>
          <div>
            <label className="block mb-1" htmlFor="email">{t('email')}</label>
            <Input
              className='w-full h-11 border-black bg-white rounded-none'
              id="email"
              type="email"
              suffix={<Tooltip title="Extra information" />}
            />
          </div>
        </div>

        <div>
          <label className="block mb-1" htmlFor="number">{t('phone_number')}</label>
          <Input
            className='w-full h-11 border-black bg-white rounded-none'
            type="number"
            id='number'
            suffix={<Tooltip title="Extra information" />}
          />
        </div>
        <Form.Item className='mt-6' rules={[{ required: true, message: 'Please input!' }]}>
          <label className="block mb-1 text-[16px] md:text-[17px]" htmlFor="message">{t('message')}</label>
          <Input.TextArea className='border-black bg-white rounded-none' id="message" />
        </Form.Item>

        <Form.Item className='flex justify-center md:justify-start mt-6' wrapperCol={{ offset: 0, span: 16 }}>
          <Button className='bg-[#3a3a3a] h-11 text-lg font-bold rounded-none' type="primary" htmlType="submit">{t('send')}</Button>
        </Form.Item>
      </div>

<div className='mt-20 md:mt-40'>
        <div className='h-px w-[98%] bg-black my-4 ml-[1%]'></div>
        <div className='flex justify-between w-10 absolute left-1/2 transform -translate-x-1/2'>
          <img className='w-6' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx8U0binObZ-QCRs4vRGi1WTWFyqCXWweyvw&s" alt="External link icon" />
          <img className='w-5 ml-1' src="https://www.svgrepo.com/show/14478/email.svg" alt="Email icon" />
        </div>

        <div className='flex flex-col md:flex-row justify-between mt-10 md:mt-20 mb-10 ml-4 md:ml-16 text-[16px] md:text-[17px]'>
          <div className='flex flex-col md:flex-row'>
            <a href="https://minzu-dem.vercel.app/pages/return-and-refund-policy" className='mb-2 md:mb-0'>
              <h1>{t('return_policy')}</h1>
            </a>
            <a href="https://minzu-dem.vercel.app/pages/return-and-refund-policy" className='mt-2 md:mt-0 md:ml-4'>
              <h1>{t('terms_of_service')}</h1>
            </a>
          </div>
          <h1 className='mt-4 md:mt-0 mr-4 md:mr-16 text-[13px]'>{t('developed_by')}</h1>
        </div>
      </div>
    </Form>
  );
};

export default ContactForm;