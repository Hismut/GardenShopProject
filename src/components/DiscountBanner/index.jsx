import React from "react";
import s from "./style.module.css";
import InputMask from "react-input-mask";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Container from "../../UI/Container";

export default function DiscountBanner() {
  const notify = () =>
    toast.success("Congrats! You got a discount!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "colored",
    });

  async function fetchAdd(data) {
    const resp = await fetch("http://localhost:3333/sale/send", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const discount = await resp.json();
    if (discount.status === "OK") {
      notify();
    }
    console.log(discount);
  }
  const submit = (event) => {
    event.preventDefault();
    const { number } = event.target;
    const phoneNumberRegex = /^\+49 \d{3} \d{3}-\d{2}-\d{2}$/;
    if (!phoneNumberRegex.test(number.value)) {
      toast.error("Please, enter a valid phone number!!!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
      return;
    }
    const data = {
      number: number.value,
    };
    fetchAdd(data);
    console.log(data);
    event.target.reset();
  };

  return (
    <Container>
      <div className={s.discountBanner}>
        <div className={s.leftBlock}>
          <img src="/media/gnom.png" alt="" />
        </div>
        <div className={s.rightBlock}>
          <div className={s.text}>
            <h2>
              5% off
              <br /> on the first order
            </h2>
          </div>
          <div>
            <form onSubmit={submit} className={s.input}>
              <InputMask
                mask="+49 BAA AAA-AA-AA"
                maskChar={null}
                formatChars={{ A: "[0-9]", B: "[0-9]" }}
                placeholder="PHONE NUMBER"
              >
                {(inputProps) => (
                  <input
                    {...inputProps}
                    name="number"
                    className={s.phoneInput}
                  />
                )}
              </InputMask>
              <button type="submit">Get a discount</button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
}
