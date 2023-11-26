import React from "react";
import style from "./Questions.module.scss";
import { Link } from "react-router-dom";

export default function Question() {
  const questions = [
    {
      name: "Какую страну считают родиной розы?",
      description:
        "Первые упоминания об этом красивом цветке, можно найти в индийских сказаниях. Тем не менее, родиной розы считается Персия (современный Иран). По преданию, самая красивая женщина мира Лакшми, появилась из раскрывшегося бутона розы.",
    },
    {
      name: "Какой цветок называют божественным цветком, «цветком Зевса»?",
      description:
        "Ро́за — собирательное название видов и сортов представителей рода Шиповник (лат. Rósa), выращиваемых человеком. Большая часть сортов роз получена в результате длительной селекции путём многократных повторных скрещиваний и отбора.",
    },
    {
      name: "Какое символическое значение розы?",
      description:
        "Роза — один из самых противоречивых символов. Ей приписывались значения чистоты, девственности, жизни, спокойствия, но одновременно и страсти, желания, даже горя и траура. Давайте рассмотрим ее символику более подробно.",
    },
    {
      name: "Актуальны ли цены и наличие на вашем сайте?",
      description:
        "Да, все цены и наличие товаров на нашем сайте всегда актуальны и обновляются в режиме реального времени. Мы прилагаем все усилия, чтобы обеспечить точность информации о ценах и наличии товаров, чтобы наши клиенты могли совершать покупки с уверенностью и комфортом. Если возникнут какие-либо изменения или временные отсутствия товаров, мы обязательно будем информировать клиентов об этом на нашем сайте.",
    },
    {
      name: "Вы отправляете товары наложенным платежом?",
      description:
        "Мы предлагаем различные способы оплаты, включая наложенный платеж. Опция наложенного платежа доступна при выборе курьерской доставки или отправки почтой.",
    },
    /* {
      name: "Где гарантия того, что вы не мошенники, и если я внесу предоплату, то затем получу оплаченный товар?",
      description:
        "Мы понимаем ваши опасения и готовы предоставить вам гарантию надежной сделки. Вот несколько мер, которые мы принимаем, чтобы обеспечить вашу безопасность: Наш сайт является официально зарегистрированным и лицензированным бизнесом. Мы предоставляем свои официальные реквизиты, которые можно проверить и сверить с государственными базами данных. У нас есть политика возврата и гарантия качества. Если вы не довольны полученными цветами или они прибыли в плохом состоянии, мы готовы вернуть вам деньги или заменить товар. Помимо предоплаты, мы предоставляем различные варианты оплаты, включая оплату при получении или использование платежных систем со страховкой покупателя, таких как PayPal. Мы имеем положительные отзывы и рекомендации от предыдущих клиентов. Вы можете прочитать отзывы о нашем магазине на независимых рейтинговых платформах или обратиться к нашим клиентам с вопросами о качестве услуг. Наша команда ценит доверие клиентов и готова предоставить всю необходимую информацию, чтобы убедить вас в своей надежности. Мы готовы ответить на любые дополнительные вопросы и обеспечить вас безопасной покупкой.",
    }, */
    {
      name: "Я оплатил заказ переводом денег на банковскую карту, что дальше?",
      description:
        "После оплаты заказа переводом на банковскую карту, процесс обработки заказа начинается. Ваш платеж должен быть получен и подтвержден продавцом. Обычно это происходит в течение нескольких рабочих дней.",
    },
    {
      name: "Вы работаете с оптовыми покупателями? Какие условия/скидки?",
      description:
        "Конечно, мы работаем с оптовыми покупателями и предлагаем специальные условия и скидки для оптовых заказов. Для получения подробной информации о наших условиях и доступных скидках, пожалуйста, свяжитесь с нами через нашу контактную форму или по указанному на сайте телефону. Наш менеджер по оптовым продажам с удовольствием предоставит вам дополнительные сведения и поможет оформить ваш оптовый заказ.",
    },
  ];

  const openBlock = (el) => {
    const content = el.target.nextElementSibling;

    if (content.style.maxHeight) {
      el.target.parentElement.childNodes.forEach((element) => {
        element.style.maxHeight = null;
        element.tagName == "DIV" ? (element.style.padding = "0px 30px") : "";
      });
    } else {
      el.target.parentElement.childNodes.forEach((element) => {
        element.style.maxHeight = null;
        element.tagName == "DIV" ? (element.style.padding = "0px 30px") : "";
      });
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.padding = "20px 30px";
    }
  };

  return (
    <section className="sectionBack">
      <div className="container">
        <div className="pageName">
        <div>
            <Link to={"/"}>Главная</Link> {">"}{" "}
            <Link to={"/Questions"}>Вопрос ответ</Link>
          </div>
          <h3>Ответы на популярные вопросы</h3>
        </div>
        <section className={style.QuestionsList}>
          {questions.map((el, i) => (
            <>
              <button
                key={i}
                className={style.ask}
                onClick={(el) => openBlock(el)}
              >
                {el.name}
              </button>
              <div className={style.answer}>{el.description}</div>
            </>
          ))}
        </section>
      </div>
    </section>
  );
}
