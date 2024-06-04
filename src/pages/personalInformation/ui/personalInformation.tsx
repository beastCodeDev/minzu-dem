import { Button, Input, Checkbox } from 'antd';
import { useTranslation } from 'react-i18next';

const PersonalInfo = () => {
  const { t } = useTranslation();

  return (
    <div className="">
      <nav className="text-gray-500 font-bold">
        <b>{t('main.personalInfo')}</b>
      </nav>
      <br />
      <main className="flex flex-col items-center">
        <div className="bg-gray-300 shadow-2xl rounded-lg p-10">
          <label className="text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4">
            {t('main.email')}
          </label>
          <br />
          <Input className="shadow-2xl bg-white text-center w-48 border-2 border-gray-400" />
          <br />
          <br />
          <div>
            <label className="text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              {t('main.nickname')}
            </label>
            <br />
            <Input className="shadow-2xl bg-white text-center w-48 border-2 border-gray-400" />
          </div>
          <br />
          <br />
          <div>
            <label className="text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
              {t('main.push notification')}
            </label>
            <Checkbox />
          </div>
        </div>
      </main>
      <br />
      <br />
      <br />
      <div>
        <Button className="w-60 h-10 border-2 border-gray-400 text-gray-600 font-bold">
          {t('main.save')}
        </Button>
      </div>
    </div>
  );
};
export default PersonalInfo;
