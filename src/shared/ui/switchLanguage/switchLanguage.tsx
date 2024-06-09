import { useTranslation } from 'react-i18next';

export default function SwitchLanguage() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <>
      <button onClick={() => changeLanguage('ru')}>Русский</button>
      <button onClick={() => changeLanguage('en')}>English</button>
    </>
  );
}
