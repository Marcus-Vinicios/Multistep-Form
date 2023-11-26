import { GrFormNext, GrFormPrevious } from "react-icons/gr"

import Thanks from "./components/Thanks/Thanks"
import Review from "./components/ReviewForm/Review"
import UserForm from "./components/UserForm/UserForm"

// Hooks
import { useForm } from "./hooks/useForm"

import './App.css'

function App() {
  const components = [<UserForm />, <Review />, <Thanks />];
  const { currentStep, currentComponent } = useForm(components);

  return (
    <div>
      <div>
        <h2>Deixe sua avaliação</h2>
        <p>Ficamos felizes com a sua compra, utilize o formulário abaixo para avaliar o produto</p>
      </div>
      <div className="form-container">
        etapas
        <form>
          <div className="inputs-container">
            {currentComponent}
          </div>
          <div className="actions">
            <button type='button'>
              <GrFormPrevious />
              <span>Voltar</span>
            </button>
            <button type='submit'>
              <span>Avançar</span>
              <GrFormNext />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
