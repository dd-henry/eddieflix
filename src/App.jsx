import './App.css';
import './styles/global-styles.css'

import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { MoviePoster } from './components/MoviePoster'
import { ScreenName } from './components/ScreenName'
import { ChatBot } from './components/ChatBot';

import DonnieDarko from './imgs/eddie/donnie_darko.jpg'
import Matrix from './imgs/eddie/matrix.jpg'
import Persona from './imgs/eddie/persona.jpg'
import SeteSamurais from './imgs/eddie/sete_samurais.jpg'
import ToyStory from './imgs/eddie/toy_story.jpg'
import Vertigo from './imgs/eddie/vertigo.jpg'

import HarryPotter1 from './imgs/henry/harry_potter_1.jpg'
import HarryPotter2 from './imgs/henry/harry_potter_2.jpg'
import HarryPotter3 from './imgs/henry/harry_potter_3.jpg'
import HarryPotter4 from './imgs/henry/harry_potter_4.jpg'
import HarryPotter5 from './imgs/henry/harry_potter_5.jpg'
import HarryPotter6 from './imgs/henry/harry_potter_6.jpg'

import AsBranquelas from './imgs/le/as_branquelas.jpg'
import ContinenciaAoAmor from './imgs/le/continencia_ao_amor.jpg'
import DiarioDaPrincesa from './imgs/le/diario_da_princesa.jpg'
import Donzela from './imgs/le/donzela.jpg'
import SextaFeiraMuitoLouca from './imgs/le/sexta_feira_muito_louca.jpg'
import Viagem2 from './imgs/le/viagem_2.jpg'

import AsCronicasDeNarnia from './imgs/dan_dan/as_cronicas_de_narnia.jpg'
import AteOUltimoHomem from './imgs/dan_dan/ate_o_ultimo_homem.jpg'
import OResgateDoSoldadoRyan from './imgs/dan_dan/o_resgate_do_soldado_ryan.jpg'
import Resgate2 from './imgs/dan_dan/resgate_2.jpg'
import SenhorDosAneis from './imgs/dan_dan/senhor_dos_aneis.jpg'
import VingadoresUltimato from './imgs/dan_dan/vingadores_ultimato.jpg'

import AFera from './imgs/thai/a_fera.jpg'
import Boruto from './imgs/thai/boruto.jpg'
import BuscaImplacavel from './imgs/thai/busca_implacavel.jpg'
import Elementos from './imgs/thai/elementos.jpg'
import EuSouONumero4 from './imgs/thai/eu_sou_o_numero_4.jpg'
import InstrumentosMortais from './imgs/thai/instrumentos_mortais.jpg'


function App() {
  return (
    <body>
      <Header />
      <main>
          <div className='movies-container'>
            <ScreenName name='Sala Eddie'/>
            <div className='movies'>
              <MoviePoster imgUrl={DonnieDarko}/>
              <MoviePoster imgUrl={Matrix}/>
              <MoviePoster imgUrl={Persona}/>
              <MoviePoster imgUrl={SeteSamurais}/>
              <MoviePoster imgUrl={ToyStory}/>
              <MoviePoster imgUrl={Vertigo}/>
            </div>
          </div>
          <div className='movies-container'>
            <ScreenName name='Sala Henry'/>
            <div className='movies'>
              <MoviePoster imgUrl={HarryPotter1}/>
              <MoviePoster imgUrl={HarryPotter2}/>
              <MoviePoster imgUrl={HarryPotter3}/>
              <MoviePoster imgUrl={HarryPotter4}/>
              <MoviePoster imgUrl={HarryPotter5}/>
              <MoviePoster imgUrl={HarryPotter6}/>
            </div>
          </div>
          <div className='movies-container'>
            <ScreenName name='Sala Leh'/>
            <div className='movies'>
              <MoviePoster imgUrl={AsBranquelas}/>
              <MoviePoster imgUrl={ContinenciaAoAmor}/>
              <MoviePoster imgUrl={DiarioDaPrincesa}/>
              <MoviePoster imgUrl={Donzela}/>
              <MoviePoster imgUrl={SextaFeiraMuitoLouca}/>
              <MoviePoster imgUrl={Viagem2}/>
            </div>
          </div>
          <div className='movies-container'>
            <ScreenName name='Sala Dan Dan'/>
            <div className='movies'>
              <MoviePoster imgUrl={AsCronicasDeNarnia}/>
              <MoviePoster imgUrl={AteOUltimoHomem}/>
              <MoviePoster imgUrl={OResgateDoSoldadoRyan}/>
              <MoviePoster imgUrl={Resgate2}/>
              <MoviePoster imgUrl={SenhorDosAneis}/>
              <MoviePoster imgUrl={VingadoresUltimato}/>
            </div>
          </div>
          <div className='movies-container'>
            <ScreenName name='Sala Thai'/>
            <div className='movies'>
              <MoviePoster imgUrl={AFera}/>
              <MoviePoster imgUrl={Boruto}/>
              <MoviePoster imgUrl={BuscaImplacavel}/>
              <MoviePoster imgUrl={Elementos}/>
              <MoviePoster imgUrl={EuSouONumero4}/>
              <MoviePoster imgUrl={InstrumentosMortais}/>
            </div>
          </div>
      </main>
      <ChatBot />
      <Footer />
    </body>
  );
}

export default App;
