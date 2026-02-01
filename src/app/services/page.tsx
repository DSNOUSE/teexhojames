import { Navigation } from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function Services() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        {/* Content will be added here */}
        <div className="container py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Solutions</h1>
            <p className="text-xl text-gray-600">Page content coming soon...</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
