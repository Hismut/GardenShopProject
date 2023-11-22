import React from "react";
import s from "./style.module.css";
import Container from "../../UI/Container";

export default function Footer() {
  return (
    <Container>
      <footer className={s.footer}>
        <div className={s.info}>
          <div className={s.contact}>
            <h1>Contact</h1>
            <p className={s.phoneNumber}>+49 999 999 99 99</p>
            <div className={s.social}>
              <a href="https://www.instagram.com">
                <img src="/media/icon-instagram.png" alt="Instagram" />
              </a>
              <a href="https://www.whatsapp.com">
                <img src="/media/icon-whatsapp.png" alt="WhatsApp" />
              </a>
            </div>
          </div>

          <div className={s.address}>
            <h1>Address</h1>
            <a href="https://www.google.com/search?q=telranDE">
              Linkstraße 2, 8 OG, 10785, Berlin, Deutschland
            </a>
            <div className={s.worknhours_block}>
              <p className={s.wrknhours}>Working Hours:</p>
              <p className={s.wrknhours_text}>24 hours a day</p>
            </div>
          </div>
        </div>

        <div className={s.map}>
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.4097370172085!2d13.372520477241363!3d52.50792357205802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851cbdeaf3909%3A0xff2aef2e44148447!2sLinkstra%C3%9Fe%202%2C%2010785%20Berlin!5e0!3m2!1sru!2sde!4v1697455397825!5m2!1sru!2sde"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </footer>
    </Container>
  );
}
