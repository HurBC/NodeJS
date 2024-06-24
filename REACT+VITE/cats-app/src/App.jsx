import { useEffect, useState } from "react";
import { Images } from "./service/Images";
import { Dialogs } from "./service/Dialogs";

export function App() {
  const [image, setImage] = useState('')
  const [dialog, setDialog] = useState('')

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * Images.length)
    const randomImage = Images[randomNumber]
    setImage(randomImage)

    const randomDialog = Dialogs.dialog[Math.floor(Math.random() * Dialogs.dialog.length)]
    console.log(randomDialog)
    setDialog(randomDialog)
  }, [])

  return (
    <main style={Styles.mainStyle}>
      <img src={image} width='250px' alt="" />
      <h1>{Dialogs.title}</h1>
      <h2>{dialog}</h2>
    </main>
  );
}

const Styles = {
  mainStyle: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
}
