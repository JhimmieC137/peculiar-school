import { useState } from 'react';

const admissionsImg = 'https://images.pexels.com/photos/8617938/pexels-photo-8617938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

const steps = [
  { num: 1, title: 'Inquiry', desc: 'Complete our online inquiry form or visit the school office to learn more about our curriculum.' },
  { num: 2, title: 'School Visit', desc: 'Schedule a personalized tour to experience our "Home Away from Home" atmosphere firsthand.' },
  { num: 3, title: 'Assessment', desc: 'A friendly assessment for your child to help us understand their unique learning needs.' },
  { num: 4, title: 'Registration', desc: 'Submit required documents and secure your child\'s place in our community of excellence.' },
];

const feeRows = [
  { level: 'Toddler / Creche', tuition: 'Contact for Inquiry', registration: 'Contact for Inquiry', activities: 'Care & Play' },
  { level: 'Nursery 1 - 3', tuition: 'Contact for Inquiry', registration: 'Contact for Inquiry', activities: 'Foundation Learning' },
  { level: 'Primary 1 - 6', tuition: 'Contact for Inquiry', registration: 'Contact for Inquiry', activities: 'Excellence Curriculum' },
];

export default function Admissions() {
  const [form, setForm] = useState({ guardian: '', email: '', phone: '', age: '', grade: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="max-w-container-max mx-auto px-md py-lg">
      {/* Hero */}
      <section className="mb-xl text-center">
        <div className="inline-block bg-secondary-container text-on-secondary-container px-base py-xs rounded-full font-label-bold text-label-bold mb-md uppercase tracking-wider">
          Excellence and Greatness
        </div>
        <h1 className="font-display-lg text-display-lg text-primary mb-base">Your Child's Journey to Greatness Begins Here</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Join a nurturing environment where we care like a mother and educate for success. Discover our seamless admissions process.
        </p>
      </section>

      {/* Bento Overview */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-md mb-xl">
        {/* Enrollment Steps */}
        <div className="md:col-span-8 bg-surface-container-lowest p-lg rounded-xl border border-primary/10 shadow-sm relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-lg">Enrollment Steps</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-lg">
              {steps.map(({ num, title, desc }) => (
                <div key={num} className="flex gap-md">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center font-bold text-headline-md">
                    {num}
                  </div>
                  <div>
                    <h3 className="font-headline-md text-headline-md mb-xs">{title}</h3>
                    <p className="text-on-surface-variant">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
        </div>

        {/* Requirements */}
        <div className="md:col-span-4 space-y-md">
          <div className="bg-primary text-on-primary p-lg rounded-xl shadow-sm">
            <h3 className="font-headline-md text-headline-md mb-md flex items-center gap-base">
              <span className="material-symbols-outlined">description</span> Required Docs
            </h3>
            <ul className="space-y-sm font-label-bold text-label-bold text-on-primary/90">
              {['Birth Certificate', 'Passport Photographs (4)', 'Previous School Records', 'Immunization Records'].map((doc) => (
                <li key={doc} className="flex items-center gap-xs">
                  <span className="material-symbols-outlined text-secondary-container">check_circle</span> {doc}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-secondary-container p-lg rounded-xl shadow-sm border-2 border-secondary">
            <h3 className="font-headline-md text-headline-md text-on-secondary-container mb-xs">A School Like Home</h3>
            <p className="text-on-secondary-container/80 text-body-md">We provide a nurturing, safe environment where children grow together in harmony.</p>
          </div>
        </div>
      </div>

      {/* Fee Structure */}
      <section className="mb-xl">
        <div className="bg-surface-container-lowest p-lg rounded-xl border border-primary/10 shadow-sm overflow-hidden">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-lg text-center">Fee Structure &amp; Transparency</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-primary/5 text-primary font-label-bold border-b border-primary/10">
                  <th className="p-md rounded-tl-lg">Age Group / Level</th>
                  <th className="p-md">Tuition (Termly)</th>
                  <th className="p-md">Registration (Once)</th>
                  <th className="p-md rounded-tr-lg">Activities</th>
                </tr>
              </thead>
              <tbody className="text-on-surface-variant font-body-md">
                {feeRows.map(({ level, tuition, registration, activities }) => (
                  <tr key={level} className="border-b border-surface-container-high hover:bg-surface-container-low transition-colors">
                    <td className="p-md font-bold text-on-surface">{level}</td>
                    <td className="p-md">{tuition}</td>
                    <td className="p-md">{registration}</td>
                    <td className="p-md">{activities}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-md p-md bg-tertiary-container text-on-tertiary-container rounded-lg flex items-center justify-between gap-md">
            <p className="text-label-bold">Special sibling discounts are available. Connect with our bursar for a tailored quote.</p>
            <button className="bg-secondary-container text-on-secondary-container px-md py-xs rounded-full font-bold whitespace-nowrap">
              View Full Prospectus
            </button>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-lg items-center">
        <div className="order-2 lg:order-1">
          <div className="bg-surface-container-lowest p-lg rounded-xl border border-primary/10 shadow-sm">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-base">Inquiry Form</h2>
            <p className="text-on-surface-variant mb-lg font-body-md">Fill out the form below and our admissions officer will contact you within 24 hours.</p>

            {submitted ? (
              <div className="bg-secondary-container text-on-secondary-container p-lg rounded-xl text-center">
                <span className="material-symbols-outlined text-5xl block mb-md">check_circle</span>
                <h3 className="font-headline-md text-headline-md mb-sm">Thank You!</h3>
                <p className="text-body-md">We've received your inquiry and will be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-md">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
                  <div className="space-y-xs">
                    <label className="font-label-bold text-on-surface block">Guardian Name</label>
                    <input
                      className="w-full rounded-lg border-outline-variant focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="John Doe"
                      type="text"
                      value={form.guardian}
                      onChange={(e) => setForm({ ...form, guardian: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-xs">
                    <label className="font-label-bold text-on-surface block">Email Address</label>
                    <input
                      className="w-full rounded-lg border-outline-variant focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="john@example.com"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
                  <div className="space-y-xs">
                    <label className="font-label-bold text-on-surface block">Phone Number</label>
                    <input
                      className="w-full rounded-lg border-outline-variant focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="+234 800 000 0000"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-xs">
                    <label className="font-label-bold text-on-surface block">Child's Age</label>
                    <input
                      className="w-full rounded-lg border-outline-variant focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="4"
                      type="number"
                      min="1"
                      max="18"
                      value={form.age}
                      onChange={(e) => setForm({ ...form, age: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-xs">
                  <label className="font-label-bold text-on-surface block">Target Grade Level</label>
                  <select
                    className="w-full rounded-lg border-outline-variant focus:ring-2 focus:ring-primary focus:border-primary"
                    value={form.grade}
                    onChange={(e) => setForm({ ...form, grade: e.target.value })}
                    required
                  >
                    <option value="">Select Grade</option>
                    <option>Creche</option>
                    <option>Nursery 1</option>
                    <option>Nursery 2</option>
                    <option>Primary 1</option>
                    <option>Primary 2+</option>
                  </select>
                </div>
                <button
                  className="w-full bg-primary text-on-primary py-md rounded-lg font-bold hover:bg-primary-container transition-all active:scale-95"
                  type="submit"
                >
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="order-1 lg:order-2 space-y-md">
          <div className="relative h-[400px] rounded-3xl overflow-hidden border-4 border-secondary shadow-lg">
            <img alt="Smiling school children" className="w-full h-full object-cover" src={admissionsImg} />
            <div className="absolute bottom-0 left-0 right-0 p-lg bg-gradient-to-t from-primary/80 to-transparent">
              <p className="text-on-primary font-headline-md italic">"Education is the key to success"</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-md">
            <div className="bg-primary-fixed p-md rounded-xl text-primary flex flex-col items-center text-center">
              <span className="material-symbols-outlined text-5xl">diversity_1</span>
              <span className="font-headline-md mt-xs">Caring like a mother</span>
            </div>
            <div className="bg-secondary-fixed p-md rounded-xl text-on-secondary-fixed flex flex-col items-center text-center">
              <span className="material-symbols-outlined text-5xl">workspace_premium</span>
              <span className="font-headline-md mt-xs">Award Winning Excellence</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTAs */}
      {/* <section className="mt-xl text-center py-lg border-y border-primary/5">
        <h3 className="font-headline-lg text-headline-lg text-primary mb-md">Ready to take the first step?</h3>
        <div className="flex flex-col sm:flex-row justify-center gap-md">
          <button className="bg-secondary-container text-on-secondary-container px-lg py-md rounded-lg font-bold flex items-center justify-center gap-base hover:shadow-md transition-all active:scale-95">
            <span className="material-symbols-outlined">download</span> Download Prospectus
          </button>
          <button
            onClick={() => document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary text-on-primary px-lg py-md rounded-lg font-bold flex items-center justify-center gap-base hover:shadow-md transition-all active:scale-95"
          >
            <span className="material-symbols-outlined">app_registration</span> Start Application
          </button>
        </div>
      </section> */}
    </div>
  );
}
