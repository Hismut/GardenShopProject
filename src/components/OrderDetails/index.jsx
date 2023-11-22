import React from "react";
import s from "./style.module.css";
import useCart from "../../hooks/useCart";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputMask from "react-input-mask";
import { useDispatch } from "react-redux";
import { clear } from "../../store/slice/cartSlice";
export default function OrderDetails() {
  const cartData = useCart();
  const list = cartData;

  const totalPrice = list.reduce((total, item) => {
    const price = item.discont_price ? item.discont_price : item.price;
    return total + price * item.count;
  }, 0);
  const dispatch = useDispatch();

  function clearCart() {
    dispatch(clear());
  }

  const notify = () =>
    toast.success("Thank you for your order!", {
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
    const resp = await fetch("http://localhost:3333/order/send", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const result = await resp.json();

    if (result.status === "OK") {
      clearCart();
    }
    console.log(result);
  }
  const submit = (event) => {
    event.preventDefault();
    const { number } = event.target;
    const data = {
      number: number.value,
    };
    fetchAdd(data);
    notify();
    event.target.reset();
    console.log(data);
  };

  return (
    <div className={s.orderBlock}>
      <div className={s.header}>Order details</div>
      <div className={s.totalBlock}>
        <div className={s.total}>Total</div>
        <div className={s.totalPrice}>{totalPrice}$</div>
      </div>
      <div className={s.input}>
        <form onSubmit={submit} className={s.form}>
          <div>
            <InputMask
              mask="+49 BAA AAA-AA-AA"
              maskChar={null}
              alwaysShowMask={true}
              formatChars={{ A: "[0-9]", B: "[0-9]" }}
            >
              {(inputProps) => (
                <input {...inputProps} name="number" className={s.phoneInput} />
              )}
            </InputMask>
          </div>
          <div>
            <button type="submit" className={s.orderButton}>
              Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
