if (window.SimpleSlide) {
  new SimpleSlide({
    slide: "quote", // nome do atributo data-slide="principal"
    time: 5000, // tempo de transição dos slides
  });

  new SimpleSlide({
    slide: "portfolio",
    time: 5000,
    nav: true,
  });
}

if (window.SimpleAnime) {
  new SimpleAnime();
}

if (window.SimpleAnime) {
  new SimpleForm({
    form: ".formphp", // seletor do formulário
    button: "#enviar", // seletor do botão
    erro:
      "<div id='form-erro'><h2>Oops! Algo não funcionou bem.</h2><p>Tente enviar para o email contato@bikcraft.com.</p></div>", // mensagem de erro
    sucesso:
      "<div id='form-sucesso'><h2>Mensagem enviada com sucesso</h2><p>Em breve eu entro em contato com você.</p></div>", // mensagem de sucesso
  });
}
