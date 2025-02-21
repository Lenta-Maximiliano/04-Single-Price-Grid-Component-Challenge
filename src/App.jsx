import Footer from './components/Footer/Footer'
import SubscriptionSection from './components/SubscriptionSection/SubscriptionSection'
import CommunitySection from './components/CommunitySection/CommunitySection'
import WhyUsSection from './components/WhyUsSection/WhyUsSection'
import './App.css'

function App() {

  return (
    <div className='app-container'>
      <main className='main-container'>
        <CommunitySection />
        <SubscriptionSection />
        <WhyUsSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
