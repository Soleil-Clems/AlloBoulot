import StatisticItem from "./StatisticItem"
import { IoBriefcase } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaBuilding } from "react-icons/fa6";

const StatisticContainer = () => {
  return (
    <ul className=" w-full max-w-2xl flex justify-around">
      <StatisticItem image={<IoBriefcase/>} value={2500} title={"Offres"}/>
      <StatisticItem image={<FaPeopleGroup/>} value={1500} title={"Candidates"}/>
      <StatisticItem image={<FaBuilding/>} value={100} title={"Compagnies"}/>
    </ul>
  )
}

export default StatisticContainer
