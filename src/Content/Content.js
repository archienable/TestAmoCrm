import React from 'react';
import style from './Content.module.css'
import CustomCompMobile from "./CustomCompMobile/CustomCompMobile";
import CustomLineForMobile from "./CustomLineForMobile";

const Content = () => {
  return (
    <div className={style.contentContainer}>
      <div>
        <div className={style.earnMore}>
          Зарабатывайте больше
        </div>
        <div className={style.withWelbex}>
          с WELBEX
        </div>
        <div className={style.developSales}>
          Развиваем и контролируем продажи за вас
        </div>
      </div>
      <div className={style.blockRightContainer}>
        <div className={style.freeConsultation}>
          Вместе с <span className={style.freeConsultationGradient}>бесплатной консультацией </span>
          мы дарим:
        </div>
        <div className={style.blockRightContent}>
          <div className={style.giftBlockRow}>
            <CustomLineForMobile className={style.giftBlockLine}/>
            <CustomCompMobile className={style.giftBlock + ' ' +style.forMobileScreens}>
              30 виджетов
            </CustomCompMobile>
            <div className={style.giftBlock}>
              <div className={style.giftTitle}>
                Виджеты
              </div>
              <div className={style.giftText}>
                30 готовых решений
              </div>
            </div>
          </div>
          <div className={style.giftBlockRow}>
            <CustomLineForMobile className={style.giftBlockLine}/>
            <div className={style.giftBlock}>
              <div className={style.giftTitle}>
                Dashboard
              </div>
              <div className={style.giftText}>
                с показателями
                вашего бизнеса
              </div>
            </div>
          </div>
          <div className={style.giftBlockRow}>
            <CustomLineForMobile className={style.giftBlockLine}/>
            <div className={style.giftBlock}>
              <div className={style.giftTitle}>
                Skype Аудит
              </div>
              <div className={style.giftText}>
                отдела продаж и CRM системы
              </div>
            </div>
          </div>
          <div className={style.giftBlockRow}>
            <CustomLineForMobile className={style.giftBlockLine}/>
            <CustomCompMobile className={style.giftBlock + ' ' +style.forMobileScreens}>
              Месяц аmoCRM
            </CustomCompMobile>
            <div className={style.giftBlock}>
              <div className={style.giftTitle}>
                35 дней
              </div>
              <div className={style.giftText}>
                использования CRM
              </div>
            </div>
            </div>
        </div>
        <div className={style.btnContainer}>
          <div className={style.btnText}>
            Получить консультацию
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;