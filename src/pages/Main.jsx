import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';




const Main = () => {
    const router = useNavigate()
    const [t, i18n] = useTranslation('global')


    return (
  <div className='main_page'>
      <h1>{t("main.h1")}</h1>
      <div className="image">
          <img src=''/>
      </div>
      <p>
      {t("main.h2")}
      </p>
      <button onClick={() => router(`/about`, {replace: true})}>{t("main.button")}</button>
  </div>
    );
};

export default Main;