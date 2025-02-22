import './SubscriptionSection.css'

export default function SubscriptionSection() {
  return (
    <section className="subscription">
      <h2 className="subscription__title">Monthly Subscription</h2>
      <span className="subscription__amount">$29</span> <span className="subscription__period">per month</span>
      <p className="subscription__description">Full access for less than $1 a day</p>
      <button className="subscription__button">Sign Up</button>
  </section>
  );
}
  