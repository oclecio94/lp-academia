import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";

export default function Home() {
  return (
    <div>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
              href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
            >
              Acadepix
            </a>
          </div>
        </div>
      </nav>

      <main>
        <div
          className="relative pt-16 pb-32 flex content-center items-center justify-center"
          style={{ minHeight: "95vh" }}
        >
          <div
            className="absolute top-0 w-full h-full bg-top bg-cover"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80")',
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            />
          </div>
          <div className="container relative mx-auto" data-aos="fade-in">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div>
                  <h1 className="text-white font-semibold text-5xl">
                    Sinta o <span className="text-orange-500">Poder</span>
                  </h1>
                  <p className="mt-4 text-lg text-gray-300">
                    Bem-vindo à Sala de Energia. Somos uma academia de fitness e
                    treinamento que se concentra em levá-lo ao seu limite
                    absoluto. Baixe nosso folheto completo para começar hoje
                    mesmo!
                  </p>
                  <a
                    href="#"
                    className="bg-transparent hover:bg-orange-500 text-orange-500 font-semibold hover:text-white p-4 border border-orange-500 hover:border-transparent rounded inline-block mt-5 cursor-pointer"
                  >
                    Baixar Folheto
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px", transform: "translateZ(0px)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x={0}
              y={0}
            >
              <polygon points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </div>

        <section id="about" className="relative py-20 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div
                className="w-full md:w-4/12 ml-auto mr-auto px-4"
                data-aos="fade-right"
              >
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1550345332-09e3ac987658?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                />
              </div>
              <div
                className="w-full md:w-5/12 ml-auto mr-auto px-4"
                data-aos="fade-left"
              >
                <div className="md:pr-12">
                  <small className="text-orange-500">
                    Sobre nossa academia
                  </small>
                  <h3 className="text-4xl uppercase font-bold">
                    Musculação Segura
                  </h3>
                  <p className="mt-4 text-lg leading-relaxed">
                    A extensão vem com três páginas pré-construídas para
                    ajudá-lo a começar mais rápido.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="font-semibold inline-block py-3 mr-3 text-orange-500">
                            <i className="fas fa-dumbbell fa-2x" />
                          </span>
                        </div>
                        <div>
                          <h4 className="text-xl">
                            Os mais recentes e melhores equipamentos de
                            ginástica.
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="font-semibold inline-block py-3 mr-3 text-orange-500">
                            <i className="fas fa-hard-hat fa-2x" />
                          </span>
                        </div>
                        <div>
                          <h4 className="text-xl">
                            Estofamento de piso de espuma de qualidade de 5
                            polegadas.
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="font-semibold inline-block py-3 mr-3 text-orange-500">
                            <i className="fas fa-users fa-2x" />
                          </span>
                        </div>
                        <div>
                          <h4 className="text-xl">
                            3 treinadores profissionais.
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold uppercase">
                  Conheça nossos treinadores
                </h2>
                <p className="text-lg leading-relaxed m-4">
                  Nossos treinadores estão aqui para dedicar o tempo e o esforço
                  que você precisa entrar na melhor forma da sua vida.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap">
              <div
                className="w-full md:w-4/12 lg:mb-0 mb-12 px-4"
                data-aos="flip-right"
              >
                <div className="px-6">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1597347343908-2937e7dcc560?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                    className="shadow-lg rounded max-w-full mx-auto"
                    style={{ maxWidth: "250px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Mr Rogers</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Treinador
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="w-full md:w-4/12 lg:mb-0 mb-12 px-4"
                data-aos="flip-right"
              >
                <div className="px-6">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    className="shadow-lg rounded max-w-full mx-auto"
                    style={{ maxWidth: "250px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Ms Sabrina</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Ginasta
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="w-full md:w-4/12 lg:mb-0 mb-12 px-4"
                data-aos="flip-right"
              >
                <div className="px-6">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                    className="shadow-lg rounded max-w-full mx-auto"
                    style={{ maxWidth: "250px" }}
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Ronald</h5>
                    <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                      Lutador
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 relative block bg-black text-white">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px", transform: "translateZ(0px)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x={0}
              y={0}
            >
              <polygon points="2560 0 2560 100 0 100" />
            </svg>
          </div>
          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64 pb-20 pt-20">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white uppercase">
                  Contate-nos
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4">
                  Entre em contato conosco para tirar qualquer dúvida, adquirir
                  uma adesão, falar com nossos treinadores ou qualquer outra
                  coisa.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative block py-24 lg:pt-0 bg-black">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div
                  className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300"
                  data-aos="fade-up-right"
                >
                  <div className="flex-auto p-5 lg:p-10 bg-orange-500 text-white">
                    <h4 className="text-2xl font-semibold">
                      Quer trabalhar conosco?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4">
                      Preencha este formulário e entraremos em contato com você
                      em até 24 horas.
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Nome completo
                      </label>
                      <input
                        type="text"
                        className="px-3 py-3 placeholder-gray-400 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Nome completo..."
                        style={{ transition: "all 0.15s ease 0s" }}
                      />
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="Email..."
                        className="px-3 py-3 placeholder-gray-400 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Email"
                        style={{ transition: "all 0.15s ease 0s" }}
                      />
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Mensagem
                      </label>
                      <textarea
                        rows={4}
                        cols={80}
                        className="px-3 py-3 placeholder-gray-400 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="..."
                        defaultValue={""}
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        style={{ transition: "all 0.15s ease 0s" }}
                      >
                        Enviar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative bg-gray-300 pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: "80px", transform: "translateZ(0px)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x={0}
            y={0}
          >
            <polygon
              className="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            />
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">
                Siga-nos nas redes sociais
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-gray-700">
                Encontre-nos em qualquer uma dessas plataformas, respondemos em
                menos de um dia.
              </h5>
              <div className="mt-6">
                <button
                  className="bg-white text-black shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                  <AiFillInstagram />
                </button>
                <button
                  className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                  <AiFillLinkedin />
                </button>
                <button
                  className="bg-white text-green-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                  <AiOutlineWhatsApp />
                </button>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-400" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-600 font-semibold py-1">
                Copyright © Acadepix
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
