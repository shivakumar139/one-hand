import React from 'react'
import { Text, Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import bloodTest from "../utils/img/support.svg"

const WhatDoing = () => {
    const navigate = useNavigate()
  return (

    <div className='container-fluid w-100 p-4'>
        <h3 className="h5 text-center fw-bold p-2 text-warning">What We Are Doing</h3>
        <h3 className="text-center fw-bold pb-4" style={{color:"#082366", fontSize:"3rem"}}>We Are In a Mission To<br/> Help The Helpless</h3>

        <div className="row">
            <div className="col p-4">
            <img src={bloodTest} className="img-fluid" alt="banner"/>
            </div>
            <div className="col py-4 my-auto" style={{paddingLeft: "2rem"}}>
                <div className="h1 fw-bold" style={{color:"#082366", fontSize:"2.6rem"}}>Your Support is Really
Powerful.​</div>
                <Text py={4}>The secret to happiness lies in helping others. Never
underestimate the difference YOU can make in the
lives of the poor, the abused and the helpless.</Text>
                <div className="mt-4">
        <Button colorScheme="green" color="white" size="lg" onClick={()=> navigate("/receiver")}>
        Support Helpless People
        </Button>
        </div>
        </div>
            
        </div>

        <hr/>
    </div>
  )
}

export default WhatDoing