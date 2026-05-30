import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const TESTIMONIALS = [
  { name: 'Saeed Al M.', location: 'Dubai', service: 'MBA Assignment Help', rating: 5, text: 'The level of analysis provided for my strategic management case study was phenomenal. Highly recommend Azone Projects for MBA students at UOWD.' },
  { name: 'Maryam Al F.', location: 'Sharjah', service: 'Dissertation Help', rating: 5, text: 'I was struggling with my methodology chapter. The academic consultant helped me structure my data analysis perfectly. Scored an A!' },
  { name: 'Rashid Al S.', location: 'Abu Dhabi', service: 'Web Development', rating: 5, text: 'Azone developed our corporate website flawlessly. Professional, secure, and exactly what our financial advisory firm needed in the UAE market.' },
  { name: 'Abdullah Al H.', location: 'Dubai', service: 'Thesis Writing', rating: 5, text: 'Exceptional support throughout my master’s thesis. The writer understood UAE-specific economic data perfectly and delivered before the deadline.' },
  { name: 'Hind Al M.', location: 'Sharjah', service: 'Essay Writing', rating: 4, text: 'Very fast turnaround for an urgent 2000-word essay. Plagiarism report was provided as promised. Great service.' },
  { name: 'Khalid Al Q.', location: 'Abu Dhabi', service: 'Capstone Project', rating: 5, text: 'They handled the coding and the documentation for my IT capstone project. The presentation slides they provided helped me ace the defense.' },
  { name: 'Fatima Al S.', location: 'Dubai', service: 'CIPD Assignment', rating: 5, text: 'If you are doing CIPD Level 5 in the UAE, this is the team to use. They used relevant UAE labour law examples in my assignment.' },
  { name: 'Majed Al N.', location: 'Sharjah', service: 'Data Visualization', rating: 5, text: 'Helped me build complex Power BI dashboards for my research data. Very patient and knowledgeable tutors.' },
  { name: 'Shaikha Al D.', location: 'Dubai', service: 'Proofreading', rating: 5, text: 'I sent them my 15,000-word dissertation for proofreading. They fixed my grammar and improved the academic tone significantly.' },
  { name: 'Omar Al M.', location: 'Abu Dhabi', service: 'Research Paper', rating: 5, text: 'The peer-reviewed sources they used were excellent. Formatting was spot-on in APA 7th edition.' },
  { name: 'Noura Al M.', location: 'Dubai', service: 'SEO & Marketing', rating: 5, text: 'They took over our boutique’s SEO and doubled our organic traffic in 4 months. Best digital team in Dubai.' },
  { name: 'Tariq Al A.', location: 'Sharjah', service: 'Coursework Help', rating: 5, text: 'I use their semester package for my engineering coursework. Consistent quality and always on time.' },
];

export default function TestimonialsPage() {
  const pageUrl = 'https://azoneprojects.com/testimonials';

  return (
    <>
      <Helmet>
        <title>Student Reviews & Testimonials – Azone Projects UAE</title>
        <meta name="description" content="Read what students in Dubai, Sharjah & Abu Dhabi say about Azone Projects. Trusted assignment help, thesis support & web development reviews." />
        <link rel="canonical" href={pageUrl} />

        {/* Task 4E: AggregateRating Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Azone Projects FZC",
            "url": "https://azoneprojects.com",
            "image": "https://azoneprojects.com/assets/img/Azok.png",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "142"
            },
            "review": TESTIMONIALS.slice(0, 5).map(t => ({
              "@type": "Review",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": t.rating,
                "bestRating": "5"
              },
              "author": {
                "@type": "Person",
                "name": t.name
              },
              "reviewBody": t.text
            }))
          })}
        </script>

        {/* Task 4D: BreadcrumbList Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://azoneprojects.com/" },
              { "@type": "ListItem", "position": 2, "name": "Testimonials", "item": pageUrl }
            ]
          })}
        </script>
      </Helmet>

      <main className="pt-2xl pb-3xl bg-background">
        <div className="section-container px-margin-mobile md:px-margin-desktop">
          
          {/* Breadcrumbs */}
          <nav className="flex text-sm text-on-surface-variant mb-xl font-label-md">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="mx-2">&gt;</span>
            <span className="text-on-surface font-medium">Testimonials</span>
          </nav>

          <div className="text-center max-w-3xl mx-auto mb-2xl">
            <span className="inline-flex items-center gap-xs text-on-surface-variant font-label-md tracking-widest uppercase mb-md">
              <span className="w-8 h-[1px] bg-outline" />
              Trusted by 300+ Clients
              <span className="w-8 h-[1px] bg-outline" />
            </span>
            <h1 className="font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-surface mb-md">
              What Our Students Say – Azone Projects Reviews
            </h1>
            <p className="text-body-lg text-on-surface-variant leading-relaxed">
            We pride ourselves on delivering world-class academic support and digital solutions. Here is what our clients across Dubai, Sharjah, and Abu Dhabi have to say about our services.
          </p>
        </div>

        <div className="flex justify-center mb-2xl">
          <div className="bg-surface border border-surface-dim p-lg rounded-full flex items-center gap-md shadow-sm">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-accent" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              ))}
            </div>
            <span className="font-headline-sm text-on-surface">4.9/5 Average Rating</span>
            <span className="text-on-surface-variant text-body-sm">(140+ Reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-xl w-full">
          {TESTIMONIALS.map((testimonial, i) => (
            <div key={i} className="flex flex-col bg-background border border-surface-dim p-xl rounded-2xl hover:border-outline hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden">
              {/* Decorative quote mark */}
              <span className="absolute -top-2 -right-4 text-[120px] text-surface-dim/40 font-serif leading-none rotate-12 group-hover:text-primary group-hover:opacity-10 transition-colors pointer-events-none">"</span>
              
              <div className="flex justify-between items-start mb-lg relative z-10">
                 <div className="flex items-center gap-md">
                    <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-headline-sm font-semibold shadow-inner shrink-0">
                       {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-headline-sm text-on-surface">{testimonial.name}</p>
                      <p className="text-label-sm text-on-surface-variant uppercase tracking-wider">{testimonial.location}</p>
                    </div>
                 </div>
                 <div className="flex items-center bg-surface-container px-2 py-1 rounded-full border border-surface-dim shadow-sm shrink-0">
                  <span className="material-symbols-outlined text-accent text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="text-label-sm text-on-surface ml-1 font-medium">{testimonial.rating}.0</span>
                 </div>
              </div>

              <p className="text-body-lg text-on-surface-variant leading-relaxed mb-lg relative z-10 italic flex-grow">
                "{testimonial.text}"
              </p>

              <div className="border-t border-surface-dim pt-md relative z-10 mt-auto">
                <span className="text-primary font-label-md text-label-md uppercase tracking-wider flex items-center gap-xs">
                   <span className="material-symbols-outlined text-[16px]">school</span>
                   {testimonial.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-surface border border-surface-dim p-2xl rounded-lg text-center max-w-4xl mx-auto">
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-md">Have You Worked With Us?</h2>
          <p className="text-body-lg text-on-surface-variant mb-xl">
            We value your feedback. Share your experience with the Azone Projects team.
          </p>
          <a 
            href="https://wa.me/971556230065?text=Hi, I would like to leave a review for Azone Projects"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-sm bg-primary text-on-primary px-2xl py-lg rounded font-label-md uppercase tracking-wider hover:bg-secondary transition-all shadow-md"
          >
            <span className="material-symbols-outlined">rate_review</span>
            Write a Review via WhatsApp
          </a>
        </div>
        </div>
      </main>
    </>
  );
}
