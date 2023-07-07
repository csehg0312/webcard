var popupWindow;
function openPopup(link) {

  // Optional: Customize the popup window further
  // popupWindow.focus();
  // popupWindow.moveTo(100, 100);
  const qrCode = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${link}`;
  const qrImage = document.getElementById('qr-place');
  console.log(qrImage.src);
  console.log(qrCode);
  qrImage.src = String(qrCode);
  console.log(qrImage.src);
}
