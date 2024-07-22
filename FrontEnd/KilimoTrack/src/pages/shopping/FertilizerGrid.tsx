import { SimpleGrid } from "@chakra-ui/react"
import FertilizerCard from "../../components/FertilizerCard"

const FertilizerGrid = () => {
  return (
    <SimpleGrid spacing={[4, 3]} templateColumns={["repeat(1, 1fr)",  "repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(3, 1fr)"]}>
      <FertilizerCard />
      <FertilizerCard />
      <FertilizerCard />
      <FertilizerCard />
      <FertilizerCard />
      <FertilizerCard />
    </SimpleGrid>
  )
}

export default FertilizerGrid

// columns={{base: 1, sm: 2, md: 3}}