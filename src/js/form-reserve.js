import * as $ from 'jquery';
window['jQuery'] = window['$'] = $;

const promoReserveNode = document.querySelector('.promo__reserve');

const modalReserveNode = document.querySelector('.modal-reserve');
const modalReserveCloseNode = modalReserveNode.querySelector('.modal-reserve__close');

modalReserveCloseNode.addEventListener('click', () => {
  modalReserveNode.classList.add('modal-reserve--close');
});

promoReserveNode.addEventListener('click', () => {
  modalReserveNode.classList.remove('modal-reserve--close');
});

$(document).ready(function () {
  $("modal-reserve__form").submit(function (event) {
    const formData = {
      name: $("#reserve-form-name").val(),
      surname: $("#reserve-form-surname").val(),
      date: $("#reserve-form-date").val(),
      phone: $("#reserve-form-phone").val(),
      wishes: $("#reserve-form-wishes").val(),
    };

    $.ajax({
      type: "POST",
      url: "reserve.php",
      data: formData,
      dataType: "json",
      encode: true,
    }).done(function (data) {
      console.log(data);
    });

    event.preventDefault();
  });
});
