import { useState } from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Banner from './components/Banner/Banner'
import Cards from './components/Cards/Cards'
import Navbar from './components/Navbar/Navbar'
import Table from './components/Table/Table'
import Text from './components/Text/Text'

function App() {

  const [tabledata, setTabledata] = useState([])
  const [preparingData, setPreparingData] = useState([])

  const handleData = (recipe) => {
    const isExist = tabledata.find((data) => data.recipe_id == recipe.recipe_id);
    
    console.log(tabledata);
    if (!isExist) {
      const newTabledata = [...tabledata, recipe]
      setTabledata(newTabledata)
    }
    else {
      toast('Already exist')
    }

  }

  const handlePrepare = (id) =>{
    const newPrepare = tabledata.filter(item => item.recipe_id != id)
    setTabledata(newPrepare);
    const newPreparingData = tabledata.filter(item => item.recipe_id == id);
    const storePreparingData = [...preparingData, newPreparingData]
    setPreparingData(storePreparingData);
  }

  

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Text></Text>
      <div className='flex justify-between'>
        <Cards handleData={handleData}></Cards>
        <Table tabledata={tabledata} handlePrepare={handlePrepare} preparingData={preparingData}></Table>
      </div>
      <ToastContainer></ToastContainer>

    </>
  )
}

export default App
