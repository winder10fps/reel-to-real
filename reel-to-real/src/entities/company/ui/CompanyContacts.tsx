import './CompanyContacts.css'

export const CompanyContacts = () => {
  return (
    <div className="company-contacts">
      <div className="company-contacts__column">
        <div className="contact">
          <span className="contact-heading">обработка заказов:</span>
          <span className="contact-content">09:00-18:00 пн-пт</span>
        </div>
        <div className="contact">
          <span className="contact-heading">телефон:</span>
          <span className="contact-content">+7 800 111 22 33</span>
        </div>
        <div className="contact">
          <span className="contact-heading">email:</span>
          <span className="contact-content">info@reeltoreal.ru</span>
        </div>
        <div className="contact">
          <span className="contact-heading">гарантия и сервис:</span>
          <span className="contact-content">help@reeltoreal.ru</span>
        </div>
      </div>
      <div className="company-contacts__column">
        <div className="contact">
          <span className="contact-heading">pr и маркетинг:</span>
          <span className="contact-content">pr@reeltoreal.ru</span>
        </div>
        <div className="contact">
          <span className="contact-heading">реквизиты:</span>
          <span className="contact-content">
            ООО «РилТуРил»<br />
            ИНН: 9709249251<br />
            КПП: 770400000<br />
            ОГРН: 119524223352
          </span>
        </div>
        <div className="contact">
          <span className="contact-heading">юридический адрес:</span>
          <span className="contact-content">
            122320, г. Санкт-Петербург, ул. Богословская улица, 4 к1
          </span>
        </div>
      </div>
    </div>
  )
}