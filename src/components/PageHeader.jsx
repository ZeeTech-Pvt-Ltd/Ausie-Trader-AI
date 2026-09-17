export default function PageHeader({ eyebrow, title, sub, dark = false, center = false }) {
  return (
    <section className={`page-head${dark ? ' page-head--dark' : ''}${center ? ' page-head--center' : ''}`}>
      <div className="container">
        <p className={`eyebrow${dark ? ' eyebrow--light' : ' eyebrow--dark'}`} data-reveal>
          <span className="eyebrow__dot" aria-hidden="true" />
          {eyebrow}
        </p>
        <h1 className="page-head__title" data-reveal>{title}</h1>
        {sub && <p className="page-head__sub" data-reveal>{sub}</p>}
      </div>
    </section>
  );
}
