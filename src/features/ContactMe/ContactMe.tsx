import React from 'react';
import {
  Button,
  Form,
  Input,
  Tooltip
} from 'antd';

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

  
  
    <Form className='grid gap-4' {...formItemLayout} variant="filled" >
      <div className='flex justify-between mr-10 ml-10'>
        <div className='flex text-justify'>
        <img className='w-36' src="https://minzu-dem.vercel.app/logo.svg" alt="" />
        <h1 className='pt-11 text-20'  >MINZU</h1>
        </div>
        <div className='mt-11'>
          <a href="">PAINTINGS</a>
          <a className='ml-3 mr-3' href="">BIO</a>
          <a href="">CONTACT ME</a>
        </div>
        <div className=' mt-9'>
          <a  href=""><img className='w-10' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8AAADz8/MZGRni4uLq6ur8/Pz09PQJCQnW1taTk5P4+PhJSUn6+vooKCjm5uY4ODirq6vKyspVVVWampp5eXlpaWljY2MvLy9cXFzQ0NDd3d0SEhLDw8NAQECDg4MhISGlpaW6urqLi4t1dXWgoKAcHBxPT08sLCyGhoYvZgQVAAAH9ElEQVR4nO2daYOqOgyGHRccxA0XdNwQdObM/P8/eI/jlnSBVknL9eT5qEB5obRpkraNBsMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMP8EwSDKOp2m2V0u1E0CHzfrClBO9xmvXR+TBbT/m68HO73rTvvdzb3X/f74XK8608XSTJPe9k2bNdVbnN76A/fqmDYP2ybvuWIhL19JeLu7Huhb1F32r1lxfKuItu+pf2y+iCRd+Zj5VteYz0l1HdiuvaqbzAn1ndiPvAncFJN21nGfuJLYM+JvhM9PwIpWxiRDw/6or5DgW9v/e6LC/QgUS9wvEh7s1kW5/l2sgrXYbhunxl1EO0r63A12eZx9jnrpYuxXqJbgcpvcDPNJtHTl44m2XSjurzTb1HRirbmFai7Ek3mLbkIhy3qRCp8GVc9GGjGsrHrrF8cSOOImKScWCxm78q6EU21D6pmrit+7nOiggTWQrEzwrJmQlluzHBhNEFTQ6/kuLApaWEXVrjMnLg4QaKL8SL+Niir6BlcURfk5TXauJGhL1B4pPSODdzZE7Sig/wnSWH32kUl0nf7aNBbfSsTHC6XPt4fHuoXh5UXKRDC0paVX765u0u510dk3VA7GVElrf4V7sDV97e3iF4idTWFBlurcsc0bjeP15+b0AwnrqZNeAeV21DBG+b2BOfKX0nYwqIqN/XFMUus/GNbdbGIAyhpU9148MKnoDC9/hHBIfGh6mIR0HlRvY14EBQmt3+gLUzqzghgb5hZnz7odEajUaeje/mZoPBH+c+QMr6ITDa7zzCMj9PxubK9L6fHOFTcp/gd5up/Rs/KKLpNWJDFZ5gvZLfLZiEPS4RD7kP6CP5M2eejptT0pLU+fDMXRrTYbwGbFPg7ZWOagXLGZqeEC62+E0KAEI4jdrAeQz8q5Zgb2mxGI7VOsb4TSQccH90l7lDPDq9DabeloJy0/HCpg1PzCU+5VlRhaG1b8qPAL6r8SXb+GAn828PB19iYZIfPidjSwtpD6XE7gnJK/Rey31hPaeMBbfJj2cFPkFgolPy5hZS1HlBhUnLsM8DvvcSkMfsEjR8YvBylNwqah8VPXXTlPisR1ghKpyk0vAsdpXZV1OCRQbcpoekdQCdDUeOgbGS+D/k6CoIgCvODMomjyNCFCnd0pvdgbHY/HfnulzNsL49mikyxjuZ6DWwvjulCUBG8qwL/uhQCXyqqdJBLEe2C6gdrxbLyofeNCFYuvYWfiXc+U1erQGpvP5XHnYDRkiGdwi70tGkDXWId/dY74tvfwrHaegrHbXu6tAykUHvfCb7pj8J2QYiBajtzVwq/DBSuDO/5gvA8dHUfhmV9K8TjpfLgFH6LOnsFKvzyqxDHwL/Lu64Af4uaz9uRQuRd1yjELguTaB+OSGqGRjVSiG5X3/pDsA2rPgYqrD5ecgMpVPv0UNh9bGZeBci8Udu78EX7VZiU36wMeizqtqY2CgN4hHEAFb3ElvLFu1IIAyRKhchlbJ6ngb5EZZcIFW58KkTjQnPv+wiephwnwiNcKVSakNBV9W1xZWgOKh1NtVEI3Rw2cT4YV1M6KeqiEA2RbfLBYGuqHODCAYtPhZ13cIBNHiFsoTbKKztSCAWU3YdN9A3nPZVd+d2jQtQm2viLUBaGqg1mhRXBCh//DlEU2+d3WNaWogNswu21aUvLFCKHqk1/CK292vSHSqvzUZvmB5yntGlqoxDapTZJhNAuVfoxaqMQjS0KwhAC9RxbuB0fulJY6okK4DNYmvaIeIyvPAQqdOXFUPvaqPw09VGIbtbwJWJfmzryWh+F2F9q9iWa+EtdeaKgV18z/EvR7Zr4vHEcQOPzhgpdxS0MAgxmvhoc09c8kxopFGJP5ZkheLKfLvZUJ4WoS6wsfggVuooBa90wVjFgYbqm9nm4ipBChdrBkUUcfy3m1WgNPUcKUS6GPttESrHQ5WJIqWH6XDlY9wlzMdDwryBjSMorVefTSDlDf/SXhNkBhPk0yOFbkPWF3KaXu3oyJwpmDBHmRKG8tiKjU5nXtj/kYfc3ry3+Ua59VjSLGWZ9Eea1vX5uokV+qW0CbVnM31V+qb8c4QwcSpkj/Pp53la5+iu5RdXxXjpLzJVCJ/MtlLiab2E7cyUzEmgykdHVnBn7eU+JKEciMXI6upr3BN+J6dy1Yo0Lw+gGtKbsJ6+a89j8w/RNhzj/UA88i3L+4aNzSLeJPIe0pZhDqgVFwSnnkD47D/isczM+zQO2OhsZupQLuDw7l7t5nsttPzbIQLmkc7mJ5+PrcTYfn3hNBS0O11SgXRdDi8N1MWjXNtHicG0T4vVpNLhcn4Z6jSE1TtcYIl4nSo3TdaKo1/pS4XatL/r12iRQ6+ZgvbbXX3Pv9ddNFGffUX+KHta+dLt+qeCxc2ML+1yD1tGWHuKaQVMq26bpaR3hxkBaL+DV1oL2tp63wy1Z/KzJTt8zAV5+XX2jvRF+t0a47YCAN0YYXbdFCMPz1gh5nM1qtTfCP7C/hfM9Stw5he6UL8VWHT72mWk8slLSo3jaK+gf2O/J0Z5dqcc9u/6ypt71aep//7wVZYuz8L933onRi+9/+EvYq7rRGdZpD8szL74P6YVgFG5jtJfs8Eu5l+z9x6/hbS/Z4zztxdtwVNe9ZCXO+wGXbQjc/X/tB8wwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwz/Efhn90iW+epbkAAAAASUVORK5CYII=" alt="" /></a>
        </div>
      </div>

Diayr Gazinurov, [29.05.2024 10:28]
<div className='ml-40 mr-40'>
      <p className='block my-4' >You're welcome to contact us with any inquiry. For questions regarding your order, please include your order number.</p>

<div className='mt-10 grid grid-cols-2 gap-4 '>
      <Input  
        className='w-90 h-11'
        placeholder="Name*"
        suffix={
          <Tooltip title="Extra information">
          </Tooltip>
        }
      />

      <Input className='w-90 h-11'  
        placeholder="Email*"
        type="email" 
        suffix={
          <Tooltip title="Extra information">
          </Tooltip>
        }
      />
</div>
      <Input className='mt-6 h-11 w-90'  
        placeholder="Phone number*"
        type="number" 
        suffix={
          <Tooltip title="Extra information">
          </Tooltip>
        }
      />

  
      <Form.Item className='mt-6 w-700px'
        rules={[{ required: true, message: 'Please input!' }]}
      >
        <Input.TextArea placeholder="Message*" />
      </Form.Item>


      <Form.Item className='flex justify-start -ml-4 ' wrapperCol={{ offset: 6, span: 16 }}>
        <Button className='color bg-gray-700' type="primary" htmlType="submit">
          Send
        </Button>
      </Form.Item>

    <div className='mt-20'>
      <div className='h-px bg-black my-4'></div>
    <div className=' flex justify-between w-10 absolute left-1/2 transform -translate-x-1/2 '>
        <img className='w-10' src="data:image/png;base64,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

Diayr Gazinurov, [29.05.2024 10:28]
qeCxc2ML+1yD1tGWHuKaQVMq26bpaR3hxkBaL+DV1oL2tp63wy1Z/KzJTt8zAV5+XX2jvRF+t0a47YCAN0YYXbdFCMPz1gh5nM1qtTfCP7C/hfM9Stw5he6UL8VWHT72mWk8slLSo3jaK+gf2O/J0Z5dqcc9u/6ypt71aep//7wVZYuz8L933onRi+9/+EvYq7rRGdZpD8szL74P6YVgFG5jtJfs8Eu5l+z9x6/hbS/Z4zztxdtwVNe9ZCXO+wGXbQjc/X/tB8wwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwDMMwz/Efhn90iW+epbkAAAAASUVORK5CYII=" alt="" />
       
        <img className='w-5' src="https://www.svgrepo.com/show/14478/email.svg" alt="" />
        </div>
         
        <div className='flex justify-between mt-20 mb-10'>
          <div className='flex text-justify'>          <a href="https://minzu-dem.vercel.app/pages/return-and-refund-policy">
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