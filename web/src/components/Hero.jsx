function Hero(prop) {
  return (
    <section className="hero">
      <h2 className="title">4Code</h2>
      <p className="hero__text">
        Escaparate en línea para recoger ideas a través de la tecnología
      </p>
      {prop.children}
    </section>
  );
}

export default Hero;
