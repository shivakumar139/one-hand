import { useNavigate } from "react-router-dom"
import bannerImg from "../utils/img/home-banner.jpeg"
import { Button } from "@chakra-ui/react"
export const HeroSection = () => {
  const navigate = useNavigate()
  return (
    <div className="container-fluid w-100 p-0">
      <div className="position-relative">
      <img src={bannerImg} className="img-fluid" alt="banner" style={{

        filter: "brightness(50%)"
}}/>
  
        <div className="position-absolute top-50 start-50 translate-middle mx-auto">

        <h1 className="h1 text-center fw-bold text-warning">GIVE A HAND</h1>
        <h1 className="h1 fw-bold py-3 text-center text-white">
          Helping each other can make world better
        </h1>

        <p className="text-center text-white">We Seek out world changers and difference makers around the
        globe,and equip them to fulfill their unique purpose.</p>
        
        <div className="text-center mt-4">
        <Button colorScheme="green" color="white" size="lg" onClick={()=> navigate("/donar")}>
                        Become a Donar
        </Button>
        </div>
        </div>
        
        
    </div>
    </div>
  )
}

