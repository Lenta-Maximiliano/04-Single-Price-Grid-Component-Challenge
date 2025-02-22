import Footer from './components/Footer/Footer'
import SubscriptionSection from './components/SubscriptionSection/SubscriptionSection'
import CommunitySection from './components/CommunitySection/CommunitySection'
import WhyUsSection from './components/WhyUsSection/WhyUsSection'
import './App.css'

function App() {

  return (
    <div className='app'>
      <main className='app__main'>
        <CommunitySection />
        <SubscriptionSection />
        <WhyUsSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
