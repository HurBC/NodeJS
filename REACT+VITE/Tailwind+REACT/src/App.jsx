import { ButtonS } from './components/Buttons'
import { Nav } from './components/Nav'
import { buttonsStyles, iconsStyles } from './const/Styles'
import './index.css'

export default function App() {

  return (
    <>
      <header className="p-2 z-10 w-full h-17 fixed flex justify-center items-center bg-gradient-to-r from-stone-950 to-stone-800 border-b-2">
        <aside className="w-1/2 flex justify-items-start items-center gap-6">
          <img src="/public/logo.png" alt="logo" className="w-14" />
          <h1 className="text-3xl font-bold text-stone-300">
            Cremates
          </h1>
        </aside>
        <Nav />
      </header>
      <section id="main" style={{background: 'url("/public/hammer-dark.png")'}} className="h-screen text-stone-300 bg-stone-950 pt-16 grid grid-cols-3">
        <article className="flex flex-col justify-center items-center gap-10 bg-stone-800/45 col-span-1 h-full">
          <ButtonS content="Iniciar Sesion" S={buttonsStyles.SectionMain} />
          <ButtonS content="Registrarse" S={buttonsStyles.SectionMain} />
        </article>
        <aside className="col-span-2 flex flex-col gap-3 justify-center items-center">
          <div className="text-left translate-y-8">
            <h1 className="text-5xl">Central Remates</h1>
            <p className="text-xl">Te acercamos los mejores remates</p>
          </div>
        </aside>
      </section>
      <section id="remates" className="bg-orange-100 text-stone-600 h-72 flex flex-col justify-start items-center">
        <article className="flex flex-col justify-center items-center translate-y-6 gap-8">
          <h1 className="font-bold text-3xl tracking-widest">REMATES</h1>
          <div className="text-center flex flex-col gap-10">
            <p>No se encontraron remates</p>
            <button className={buttonsStyles.RematesFooter}>
              Ver todos los remates
            </button>
          </div>
        </article>
      </section>
      <section id="como_participar" className="h-96 bg-stone-800 flex flex-col gap-16 justify-center items-center">
        <h1 className="font-bold text-3xl text-stone-300 tracking-widest">¿Como participar?</h1>
        <ul className="flex text-center text-stone-200 w-2/6 justify-around">
          <li>
            <ion-icon style={iconsStyles.participateIcons} name="person-add"></ion-icon>
            <h1>Registrate</h1>
          </li>
          <li>
            <ion-icon style={iconsStyles.participateIcons} name="mail"></ion-icon>
            <h1>Inscribite</h1>
          </li>
          <li>
            <ion-icon style={iconsStyles.participateIcons} name="cash"></ion-icon>
            <h1>Paga la garantia</h1>
          </li>
          <li>
            <ion-icon style={iconsStyles.participateIcons} name="checkmark-circle"></ion-icon>
            <h1>Participa</h1>
          </li>
        </ul>
      </section>
    </>
  )
}
 
