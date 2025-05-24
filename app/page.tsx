import MechaBackground from "../components/MechaBackground"
import Hero from "../components/Hero"
import SubscriberCount from "../components/SubscriberCount"
import GoldChart from "../components/GoldChart"
import Features from "../components/Features"
import TradingBenefits from "../components/TradingBenefits"
import AccountManagement from "../components/AccountManagement"
import Testimonials from "../components/Testimonials"
import PricingPlans from "../components/PricingPlans"
import FAQ from "../components/FAQ"
import CTASection from "../components/CTASection"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <MechaBackground />
      <main className="relative z-10">
        <Hero />

        <section className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <SubscriberCount />
            <div className="h-[400px] bg-gray-800 rounded-lg border border-red-500 p-4 shadow-lg shadow-red-500/20">
              <GoldChart />
            </div>
          </div>
        </section>

        <Features />
        <TradingBenefits />
        <Testimonials />
        <AccountManagement />
        <PricingPlans />
        <FAQ />
        <CTASection />
      </main>
    </div>
  )
}
