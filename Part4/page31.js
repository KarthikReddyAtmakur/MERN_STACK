function placeOrder() {
  console.log("Order has been placed");
}
function makePayment() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    //   resolve("Payment has been processed");
      reject("Payment Failed")
    }, 3000);
  });
}

function sendConfirmation() {
  console.log("Confirmation has been sent");
}

//Order has been placed
//Payment has been processed
//Confirmatio has been sent

async function main() {
  try {
    placeOrder();
    const result = await makePayment();
    console.log(result)
    sendConfirmation();
  } catch (err) {
    console.log(err);
  }
}
main();