import { Link } from 'react-router-dom';

const heroImages = {
  main: 'https://images.pexels.com/photos/31773583/pexels-photo-31773583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  teacher: 'https://images.pexels.com/photos/8617967/pexels-photo-8617967.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  playground: 'https://images.unsplash.com/photo-1649486116210-69085e3f164a?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0',
};

const aboutImages = {
  uniforms: 'https://images.pexels.com/photos/19348206/pexels-photo-19348206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  sweaters: 'https://images.pexels.com/photos/11025018/pexels-photo-11025018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  recess: 'https://images.pexels.com/photos/36667254/pexels-photo-36667254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  book: 'https://images.pexels.com/photos/33986944/pexels-photo-33986944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
};

export default function Home() {
  return (
    <>
      {/* Motto Bar */}
      <div className="bg-primary-container py-2 text-center">
        <p className="text-secondary-fixed font-bold tracking-widest text-sm font-label-bold">
          MOTTO: EXCELLENCE AND GREATNESS
        </p>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-surface py-xl">
        <div className="max-w-container-max mx-auto px-lg flex flex-col md:flex-row items-center gap-lg">
          <div className="w-full md:w-1/2 space-y-md">
            <span className="inline-block px-4 py-1 bg-tertiary-fixed text-on-tertiary-fixed rounded-full text-sm font-label-bold">
              ESTABLISHED IN LAGOS
            </span>
            <h1 className="font-display-lg text-display-lg text-primary leading-tight">
              Nurturing Excellence <br />&amp; Shaping <span className="text-secondary">Greatness</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
              At Peculiar Children School, we provide a vibrant and welcoming environment where every child is treated with maternal care and academic rigor.
            </p>
            <div className="flex flex-wrap gap-md pt-sm">
              <Link to="/admissions">
                <button className="px-lg py-md bg-primary text-on-primary font-bold rounded-lg shadow-lg hover:bg-primary-container transition-all">
                  Enroll Now
                </button>
              </Link>
              <Link to="/about">
                <button className="px-lg py-md border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary-fixed transition-all flex items-center gap-2">
                  <span className="material-symbols-outlined">play_circle</span>
                  Learn More
                </button>
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                className="rounded-xl shadow-lg w-full aspect-square object-cover"
                src={heroImages.main}
                alt="Happy school children in a bright classroom"
              />
              <div className="space-y-4">
                <img
                  className="rounded-xl shadow-lg w-full aspect-[4/3] object-cover"
                  src={heroImages.teacher}
                  alt="Teacher interacting with children"
                />
                <img
                  className="rounded-xl shadow-lg w-full aspect-[4/3] object-cover"
                  src={heroImages.playground}
                  alt="Children holding hands on playground"
                />
              </div>
            </div>
            <div className="absolute -z-10 -bottom-8 -right-8 w-64 h-64 bg-secondary-container rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-surface-container-low py-xl overflow-hidden">
        <div className="max-w-container-max mx-auto px-lg">
          <div className="text-center mb-lg">
            <h2 className="font-display-lg text-headline-lg text-primary">Our Foundation</h2>
            <div className="h-1 w-24 bg-secondary mx-auto mt-2 rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-md">
            {[
              { icon: 'home', accent: 'bg-secondary-container', title: 'A School Like Home', body: 'We provide a cozy, secure, and familiar environment where every child feels they belong and can flourish comfortably.' },
              { icon: 'favorite', accent: 'bg-primary-container', title: 'We Care Like Mother', body: 'Our dedicated staff approach every child with the empathy, patience, and tenderness of maternal guidance.' },
              { icon: 'groups', accent: 'bg-tertiary-container', title: 'Grow Together', body: 'We learn together, play together, and we grow together. A community committed to collective excellence.' },
            ].map(({ icon, accent, title, body }) => (
              <div key={title} className="bg-surface border border-outline/10 p-lg rounded-xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                <div className={`absolute top-0 left-0 w-2 h-full ${accent} group-hover:w-full transition-all duration-300 opacity-20`}></div>
                <span className="material-symbols-outlined text-primary text-4xl mb-sm block">{icon}</span>
                <h3 className="font-headline-md text-headline-md text-primary mb-sm">{title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About & Visuals */}
      <section className="py-xl bg-surface">
        <div className="max-w-container-max mx-auto px-lg">
          <div className="flex flex-col lg:flex-row gap-lg items-center">
            <div className="w-full lg:w-2/5 space-y-md">
              <h2 className="font-display-lg text-headline-lg text-primary">Education is the Key to Success</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Located in the heart of Lagos, Peculiar Children School is more than just an educational institution; it is a cradle for future leaders. Our mission is to provide holistic education that balances intellectual rigor with character development.
              </p>
              <p className="text-sm font-label-bold text-on-surface-variant">Joined by 500+ happy families in Jakande Estate</p>
              <Link to="/about" className="text-primary font-bold flex items-center gap-2 hover:translate-x-2 transition-transform w-fit">
                Learn More About Our Philosophy <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>

            <div className="w-full lg:w-3/5 grid grid-cols-2 gap-4">
              <div className="bg-secondary-container/10 p-2 rounded-2xl border-2 border-secondary/20">
                <img className="rounded-xl w-full h-48 object-cover" src={aboutImages.uniforms} alt="School children in uniforms" />
              </div>
              <div className="bg-primary-container/10 p-2 rounded-2xl border-2 border-primary/20 mt-8">
                <img className="rounded-xl w-full h-48 object-cover" src={aboutImages.sweaters} alt="Students in classroom" />
              </div>
              <div className="bg-tertiary-container/10 p-2 rounded-2xl border-2 border-tertiary/20 -mt-8">
                <img className="rounded-xl w-full h-48 object-cover" src={aboutImages.recess} alt="Children playing during recess" />
              </div>
              <div className="bg-surface-container-high p-2 rounded-2xl border-2 border-outline/20">
                <img className="rounded-xl w-full h-48 object-cover" src={aboutImages.book} alt="Book and key symbolizing education" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Banner */}
      <section className="bg-primary py-lg">
        <div className="max-w-container-max mx-auto px-lg flex flex-col md:flex-row justify-between items-center gap-lg">
          <div className="flex items-center gap-md text-on-primary">
            <div className="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">mail</span>
            </div>
            <div>
              <p className="text-sm font-label-bold opacity-80 uppercase tracking-wide">Email us</p>
              <p className="text-headline-md font-bold">info@peculiarchildrenschool.com</p>
            </div>
          </div>
          <div className="flex items-center gap-md text-on-primary">
            <div className="w-12 h-12 bg-secondary-container rounded-full flex items-center justify-center text-primary">
              <span className="material-symbols-outlined">location_on</span>
            </div>
            <div>
              <p className="text-sm font-label-bold opacity-80 uppercase tracking-wide">Visit us at</p>
              <p className="font-body-md">Zone F Block 152, Flat 2, Jakande Estate Mile 2 Lagos</p>
            </div>
          </div>
          <Link to="/admissions">
            <button className="px-lg py-sm bg-secondary-container text-primary font-bold rounded-lg hover:scale-105 transition-transform">
              Apply Now
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
