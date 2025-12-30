const About = () => {
  return (
    <section className="min-h-screen pt-32 pb-12 px-6 bg-[#dad4f6]">
      <div className="max-w-7xl mx-auto space-y-12 mb-12">
        <div className="text-center space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900">About Us</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg font-light">
            Welcome to Gangs Sengy Guest House  a cozy and comfortable stay with friendly service where every guest is treated like family.
          </p>
          <div className="h-1 w-24 bg-accent mx-auto rounded-full" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h4 className="font-bold text-slate-900 text-lg mb-2">Comfort</h4>
          <p className="text-sm text-slate-600">Relax in fully furnished rooms with modern amenities.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h4 className="font-bold text-slate-900 text-lg mb-2">Service</h4>
          <p className="text-sm text-slate-600">Our team is available to help plan your stay.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h4 className="font-bold text-slate-900 text-lg mb-2">Location</h4>
          <p className="text-sm text-slate-600">Close to transport, dining, and local sites.</p>
        </div>
      </div>
    </section>
  );
};

export default About;