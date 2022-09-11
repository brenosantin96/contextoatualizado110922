import React from 'react'
import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import { ShowData } from './pages/ShowData'
import { SignUp } from './pages/SignUp'
import { Contexto, ContextoProvider } from './contexts/Context'

function App() {
  return (
    <>
      <ContextoProvider>
        <Container>
          <h1 className='mb-2'>Aprendendo ContextAPI 11/09/2022</h1>
          <hr />
          <Routes>
            <Route path='/' element={<SignUp />}></Route>
            <Route path='/exibir' element={<ShowData />}></Route>
          </Routes>
        </Container>
      </ContextoProvider>
    </>
  )
}

export default App