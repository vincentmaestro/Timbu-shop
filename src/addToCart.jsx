function AddToCart(e) {
  e.preventDefault();
  
  const product = {
    name: e.target.parentElement.childNodes[1].textContent,
    image: e.target.parentElement.firstChild.querySelector('a') ? e.target.parentElement.firstChild.querySelector('a').firstChild.src : e.target.parentElement.firstChild.firstChild.src,
    design: e.target.parentElement.querySelector('small').textContent,
    unitPrice: e.target.previousElementSibling.textContent.slice(4),
    quantity: e.target.querySelector('.amount').querySelector('input').value
  };
  
  fetch('https://timbu-cloud-murex.vercel.app/api/cart', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(product)
  });
}
 
export default AddToCart;