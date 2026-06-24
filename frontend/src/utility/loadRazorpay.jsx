// frontend/src/utility/loadRazorpay.js
let razorpayScriptPromise;

export function loadRazorpay() {
  if (window.Razorpay) return Promise.resolve(window.Razorpay);

  razorpayScriptPromise ||= new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => resolve(window.Razorpay);
    script.onerror = reject;
    document.body.appendChild(script);
  });

  return razorpayScriptPromise;
}