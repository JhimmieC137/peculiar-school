import { Link } from 'react-router-dom';

const heroImg = 'https://images.unsplash.com/photo-1473649085228-583485e6e4d7?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0';
const buildingImg = 'https://images.pexels.com/photos/34162714/pexels-photo-34162714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
const libraryImg = 'https://images.pexels.com/photos/6936134/pexels-photo-6936134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

const staff = [
  {
    img: 'https://images.pexels.com/photos/5905751/pexels-photo-5905751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Mrs. Evelyn Okolie',
    role: 'Principal & Founder',
  },
  {
    img: 'https://images.pexels.com/photos/19379640/pexels-photo-19379640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Mr. Samuel Adebayo',
    role: 'Head of Academics',
  },
  {
    img: 'https://images.pexels.com/photos/5905956/pexels-photo-5905956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Ms. Grace Chima',
    role: 'Nursery Coordinator',
  },
  {
    img: 'https://images.pexels.com/photos/8423062/pexels-photo-8423062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    name: 'Mrs. Joy Ifeoma',
    role: 'Administrative Head',
  },
];

export default function AboutUs() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary-container py-xl overflow-hidden">
        <div className="max-w-container-max mx-auto px-lg relative z-10 grid grid-cols-1 md:grid-cols-2 gap-lg items-center">
          <div className="space-y-md">
            <div className="inline-flex items-center gap-xs bg-secondary-container text-on-secondary-container px-sm py-xs rounded-full font-label-bold">
              <span className="material-symbols-outlined text-[18px]">workspace_premium</span>
              EXCELLENCE AND GREATNESS
            </div>
            <h1 className="font-display-lg text-display-lg text-white">Nurturing the Leaders of Tomorrow</h1>
            <p className="text-on-primary-container text-body-lg max-w-lg">
              Discover why we are more than just a school. At Peculiar Children School, we provide a foundation built on love, excellence, and motherly care.
            </p>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden border-4 border-secondary-container shadow-xl rotate-2">
              <img alt="Peculiar Children School Classroom" className="w-full h-[400px] object-cover" src={heroImg} />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-sm rounded-xl border border-primary/10 shadow-lg -rotate-3 hidden md:block">
              <span className="text-primary font-display-lg text-headline-md block">15+ Years</span>
              <span className="text-on-surface-variant font-label-bold uppercase">of Community Excellence</span>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary opacity-10 skew-x-12 translate-x-1/2"></div>
      </section>

      {/* Philosophy */}
      <section className="py-xl max-w-container-max mx-auto px-lg">
        <div className="text-center mb-xl">
          <h2 className="font-display-lg text-headline-lg text-primary mb-sm">Our Philosophy</h2>
          <div className="h-1 w-24 bg-secondary mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-md">
          {/* Main Philosophy Card */}
          <div className="md:col-span-8 bg-white border border-primary/10 rounded-xl p-lg shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-secondary"></div>
            <div className="flex flex-col h-full justify-between">
              <div>
                <span className="material-symbols-outlined text-secondary text-5xl mb-md block">home</span>
                <h3 className="font-display-lg text-headline-lg text-primary mb-md">A School Like Home</h3>
                <p className="text-body-lg text-on-surface-variant">
                  We believe that a child learns best when they feel safe, loved, and heard. Our environment is meticulously designed to mirror the warmth of a home, ensuring every student feels a sense of belonging from the moment they step into our campus in Jakande Estate.
                </p>
              </div>
              <div className="mt-lg flex gap-md">
                <div className="bg-tertiary-fixed p-md rounded-lg flex-1">
                  <h4 className="font-label-bold text-on-tertiary-fixed mb-xs">Comfort</h4>
                  <p className="text-sm">Soft spaces and ergonomic designs.</p>
                </div>
                <div className="bg-secondary-fixed p-md rounded-lg flex-1">
                  <h4 className="font-label-bold text-on-secondary-fixed mb-xs">Growth</h4>
                  <p className="text-sm">Nurturing curiosity daily.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Maternal Care */}
          <div className="md:col-span-4 bg-primary text-on-primary rounded-xl p-lg flex flex-col justify-center items-center text-center">
            <span className="material-symbols-outlined text-secondary-container text-[64px] mb-md">favorite</span>
            <h3 className="font-display-lg text-headline-md mb-sm">We Care Like Mother</h3>
            <p className="text-on-primary/80">Every child is treated with the tenderness, patience, and individual attention a mother provides, ensuring emotional and academic flourishing.</p>
          </div>

          {/* Mission */}
          <div className="md:col-span-6 bg-surface-container-low border border-primary/10 rounded-xl p-lg hover:shadow-md transition-shadow">
            <h4 className="font-label-bold text-secondary mb-xs">OUR MISSION</h4>
            <h3 className="font-display-lg text-headline-md text-primary mb-md">Excellence in Action</h3>
            <p className="text-body-md text-on-surface-variant">To cultivate an atmosphere of excellence where every child is empowered to achieve greatness through personalized instruction, moral guidance, and creative play.</p>
          </div>

          {/* Vision */}
          <div className="md:col-span-6 bg-surface-container-low border border-primary/10 rounded-xl p-lg hover:shadow-md transition-shadow">
            <h4 className="font-label-bold text-secondary mb-xs">OUR VISION</h4>
            <h3 className="font-display-lg text-headline-md text-primary mb-md">Future Greatness</h3>
            <p className="text-body-md text-on-surface-variant">To be the leading nursery and primary school in Lagos, recognized for producing well-rounded, confident, and high-achieving global citizens.</p>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="bg-tertiary-container text-white py-xl">
        <div className="max-w-container-max mx-auto px-lg flex flex-col md:flex-row gap-xl items-center">
          <div className="md:w-1/2">
            <h2 className="font-display-lg text-headline-lg mb-md text-secondary-fixed">Our Roots in Lagos</h2>
            <p className="text-body-lg text-on-tertiary-container mb-md">
              Established in the heart of Jakande Estate, Mile 2, Peculiar Children School has been a cornerstone of quality education for the local community. What started as a vision to provide maternal-style care has grown into a prestigious institution of learning.
            </p>
            <div className="flex items-center gap-md">
              <div className="bg-white/10 p-md rounded-lg flex items-center gap-sm">
                <span className="material-symbols-outlined text-secondary-fixed">location_on</span>
                <span className="text-label-bold">Zone F Block 152, Jakande Estate</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-sm">
            <div className="rounded-xl overflow-hidden h-48">
              <img alt="School Building" className="w-full h-full object-cover" src={buildingImg} />
            </div>
            <div className="rounded-xl overflow-hidden h-48 mt-sm">
              <img alt="School Library" className="w-full h-full object-cover" src={libraryImg} />
            </div>
          </div>
        </div>
      </section>

      {/* Staff */}
      {/* <section className="py-xl max-w-container-max mx-auto px-lg">
        <div className="text-center mb-xl">
          <h2 className="font-display-lg text-headline-lg text-primary mb-sm">Our Dedicated Staff</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">Led by passionate educators who treat every student with the love and attention of a mother.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg">
          {staff.map(({ img, name, role }) => (
            <div key={name} className="group">
              <div className="relative mb-md overflow-hidden rounded-3xl border-2 border-primary/5">
                <img alt={name} className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-300" src={img} />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-md">
                  <span className="text-white font-label-bold">{role}</span>
                </div>
              </div>
              <h3 className="font-headline-md text-primary">{name}</h3>
              <p className="text-on-surface-variant font-label-bold">{role}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-xl max-w-container-max mx-auto px-lg">
        <div className="bg-secondary-container rounded-3xl p-lg md:p-xl flex flex-col md:flex-row items-center gap-lg relative overflow-hidden">
          <div className="relative z-10 text-center md:text-left flex-1">
            <h2 className="font-display-lg text-display-lg text-primary mb-md">Ready to join our family?</h2>
            <p className="text-on-secondary-container text-body-lg mb-lg">
              Enrollment for the new academic session is now open. Give your child the gift of excellence and greatness.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-md">
              <Link to="/admissions">
                <button className="bg-primary text-on-primary px-lg py-md rounded-lg font-label-bold hover:scale-105 transition-transform shadow-lg">
                  Start Admission Process
                </button>
              </Link>
              <Link to="/admissions">
                <button className="border-2 border-primary text-primary px-lg py-md rounded-lg font-label-bold hover:bg-primary/5 transition-colors">
                  Book a School Tour
                </button>
              </Link>
            </div>
          </div>
          <div className="relative z-10 w-full md:w-1/3">
            <div className="bg-white p-lg rounded-xl shadow-xl border border-primary/5">
              <p className="italic text-primary mb-md">"The best decision we made for our daughter. The care here is truly motherly."</p>
              <div className="flex items-center gap-sm">
                <div className="w-10 h-10 rounded-full bg-tertiary-fixed"></div>
                <span className="font-label-bold text-on-surface">— Happy Parent</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
