document.addEventListener('DOMContentLoaded', () => {
    // Function to update total price
    const updateTotalPrice = () => {
      let total = 0;
      document.querySelectorAll('.card').forEach(card => {
        const unitPrice = parseFloat(card.querySelector('.unit-price').innerText.replace('$', ''));
        const quantity = parseInt(card.querySelector('.quantity').innerText);
        total += unitPrice * quantity;
      });
      document.querySelector('.total').innerText = `${total} $`;
    };
  
    // Event listener for quantity adjustment
    document.querySelectorAll('.fa-plus-circle').forEach(button => {
      button.addEventListener('click', () => {
        const quantitySpan = button.nextElementSibling;
        let quantity = parseInt(quantitySpan.innerText);
        quantitySpan.innerText = quantity + 1;
        updateTotalPrice();
      });
    });
  
    document.querySelectorAll('.fa-minus-circle').forEach(button => {
      button.addEventListener('click', () => {
        const quantitySpan = button.previousElementSibling;
        let quantity = parseInt(quantitySpan.innerText);
        if (quantity > 0) {
          quantitySpan.innerText = quantity - 1;
          updateTotalPrice();
        }
      });
    });
  
    // Event listener for removing items
    document.querySelectorAll('.fa-trash-alt').forEach(button => {
      button.addEventListener('click', () => {
        button.closest('.card-body').parentElement.remove();
        updateTotalPrice();
      });
    });
  
    // Event listener for liking items
    document.querySelectorAll('.fa-heart').forEach(button => {
      button.addEventListener('click', () => {
        button.classList.toggle('liked');
        if (button.classList.contains('liked')) {
          button.style.color = 'red';
        } else {
          button.style.color = '';
        }
      });
    });
  });
  